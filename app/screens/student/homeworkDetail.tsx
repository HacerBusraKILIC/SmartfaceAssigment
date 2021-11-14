import React, {useEffect} from 'react';
// Modules
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
} from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/Ionicons';
// Components
import {Header} from '../../components';
// Theme
import {Colors, MetricsSizes} from '../../theme/Variables';
import Fonts from '../../theme/Fonts';
import {formatterDate} from '../../helpers/formatterDate';
// HomeworkDetail
const HomeworkDetail = ({route, navigation}) => {
  const {item, status} = route.params;
  // State
  const [result, setResult] = React.useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
  >([]);

  useEffect(() => {
    console.log(JSON.stringify(result, null, 2));
  }, [result]);

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  const pickDocument = async () => {
    try {
      const pickerResult = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
      });
      for (const res of pickerResult) {
        //Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        console.log('File Name : ' + res.name);
        console.log('File Size : ' + res.size);
      }
      //Setting the state to show multiple file attributes
      setResult(pickerResult);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <Header
        variant="primary"
        label={item.name}
        handleLeftIcon={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[Fonts.textRegular]}>
          <Text style={[Fonts.textBold]}>Date: </Text>
          <Text>{formatterDate(item.startDate)}</Text>
          <Text> - </Text>
          <Text>{formatterDate(item.finishDate)}</Text>
        </Text>
        <Text style={[Fonts.textRegular]}>
          <Text style={[Fonts.textBold]}>Teacher: </Text>
          <Text>{item.teacherName}</Text>
        </Text>
        <Text style={[Fonts.textRegular]}>
          <Text style={[Fonts.textBold]}>Subject: </Text>
          <Text>{item.subject}</Text>
        </Text>
        <Text style={[Fonts.textRegular]}>
          <Text style={[Fonts.textBold]}>Detail: </Text>
          <Text>{item.detail}</Text>
        </Text>
        {result.map((item, key) => (
          <View key={key}>
            <Text style={Fonts.textRegular}>
              File Name: {item.name ? item.name : ''}
              {'\n'}
              Type: {item.type ? item.type : ''}
              {'\n'}
              File Size: {item.size ? item.size : ''}
              {'\n'}
              URI: {item.uri ? item.uri : ''}
              {'\n'}
            </Text>
          </View>
        ))}
        {status !== 'Done' && (
          <Pressable style={styles.button} onPress={pickDocument}>
            <Icon
              name="document-attach-outline"
              size={17}
              color={Colors.white}
              style={{paddingRight: 5}}
            />
            <Text style={styles.buttonText}>UPLOAD FILES</Text>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeworkDetail;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    backgroundColor: Colors.white,
    padding: MetricsSizes.screenPadding,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: Colors.primary_light,
    padding: 10,
    borderRadius: 5,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    ...Fonts.textMedium,
    fontSize: 12,
    color: Colors.white,
  },
});
