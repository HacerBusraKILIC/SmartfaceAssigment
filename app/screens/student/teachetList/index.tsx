import React, {useEffect, useState} from 'react';
// Modules
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// Components
import Header from '../../../components/Header';
import TeacherItem from './teacherItem';
// Theme
import {Colors, MetricsSizes} from '../../../theme/Variables';
// Helper
import {users} from '../../../helpers/mockData/users';
// TeacherList
const TeacherList = () => {
  // State
  const [teachers, setTeachers] = useState<Array<object>>([]);

  useEffect(() => {
    let teacherList = users.filter(user => user.role === 'teacher');
    setTeachers(teacherList);
  }, []);

  return (
    <SafeAreaView style={styles.safearea}>
      <Header variant="primary" label="Teacher Listt" drawerButton={true} />
      <ScrollView contentContainerStyle={styles.container}>
        {teachers.map((user, index) => (
          <TeacherItem key={user.username} item={user} index={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TeacherList;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    backgroundColor: Colors.white,
    padding: MetricsSizes.screenPadding,
  },
});
