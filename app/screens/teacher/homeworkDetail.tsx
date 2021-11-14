import React, {useEffect, useState} from 'react';
// Modules
import {
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// Components
import {Header} from '../../components';
// Theme
import {Colors, MetricsSizes} from '../../theme/Variables';
import Fonts from '../../theme/Fonts';
import {formatterDate} from '../../helpers/formatterDate';
import Layout from '../../theme/Layout';
// HomeworkDetail
const HomeworkDetail = ({route, navigation}) => {
  const {item} = route.params;
  // State
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
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
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(true)}>
            <Icon
              name="eye-outline"
              size={17}
              color={Colors.white}
              style={{paddingRight: 5}}
            />
            <Text style={styles.buttonText}>SEE ASSIGNMENTS</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}>
              <Icon name="close" size={20} color={Colors.gray} />
            </Pressable>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={[Fonts.textRegular]}>
                Homework detail will bw shown
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
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
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    ...Fonts.textMedium,
    fontSize: 12,
    color: Colors.white,
  },
  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backdrop,
  },
  modalView: {
    maxHeight: '70%',
    width: '80%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    ...Layout.shadow,
  },
  closeButton: {padding: 5, alignItems: 'flex-end'},
});
