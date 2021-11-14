import React from 'react';
// Modules
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
// Components
import {Header, HorizontalFlatlist, HomeworkCard} from '../../components';
// Helpers
import {student_homework} from '../../helpers/mockData/student_homework';
// Theme
import Fonts from '../../theme/Fonts';
// Theme
import {Colors, MetricsSizes} from '../../theme/Variables';
// Dashboard
const Dashboard = () => {
  const navigation = useNavigation();
  const processes = [
    {status: 'To Do', typeColor: Colors.primary_dark},
    {status: 'In Progress', typeColor: Colors.primary_light},
    {status: 'Done', typeColor: Colors.gray},
  ];
  return (
    <SafeAreaView style={styles.safearea}>
      <Header variant="primary" label="Dashboard" drawerButton={true} />
      <ScrollView contentContainerStyle={styles.container}>
        {processes.map(process => (
          <View key={process.status}>
            <Text style={[Fonts.textBold, styles.header]}>
              {process.status}
            </Text>
            <HorizontalFlatlist
              data={student_homework}
              ChildrenItem={({item}) => (
                <HomeworkCard
                  onPress={() =>
                    navigation.navigate('homework_detail', {
                      item,
                      status: process.status,
                    })
                  }
                  item={item}
                  typeColor={process.typeColor}
                  status={process.status}
                />
              )}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    backgroundColor: Colors.white,
    padding: MetricsSizes.screenPadding,
  },
  header: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
