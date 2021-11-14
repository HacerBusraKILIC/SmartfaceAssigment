import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
// Components
import {HorizontalFlatlist, HomeworkCard, Header} from '../../components';
// Redux
import {UserState} from '../../modules/user/reducers';
// Theme
import {Colors, MetricsSizes} from '../../theme/Variables';
import Fonts from '../../theme/Fonts';
// Helpers
import {teacher_homeworks} from '../../helpers/mockData/teacher_homework';
// Dashboard
const Dashboard = ({navigation}) => {
  // Reduz State
  const userInfo = useSelector(
    (state: {user: UserState}) => state.user.userInfo,
  );
  // State
  const [homeworks, setHomeworks] = useState<Array<object>>([]);

  const processes = [
    {status: 'To Do', typeColor: Colors.primary_dark},
    {status: 'In Progress', typeColor: Colors.primary_light},
    {status: 'Done', typeColor: Colors.gray},
  ];

  useEffect(() => {
    let _homeworks = teacher_homeworks.filter(
      homework => homework.teacherId === userInfo.id,
    );
    setHomeworks(_homeworks);
  }, []);

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
              data={homeworks}
              ChildrenItem={({item}) => (
                <HomeworkCard
                  item={item}
                  typeColor={process.typeColor}
                  status={process.status}
                  onPress={() =>
                    navigation.navigate('teachers_homework_detail', {item})
                  }
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
