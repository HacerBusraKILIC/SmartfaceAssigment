import React from 'react';
// Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import Dashboard from './dashboard';
import HomeworkDetail from './homeworkDetail';

export type TeacherNavigatorParamList = {
  dashboard_teacher: undefined;
  teachers_homework_detail: undefined;
};

const TeacherStack = createNativeStackNavigator<TeacherNavigatorParamList>();

export const TeacherStackNavigator = () => {
  return (
    <TeacherStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TeacherStack.Screen name="dashboard_teacher" component={Dashboard} />
      <TeacherStack.Screen
        name="teachers_homework_detail"
        component={HomeworkDetail}
      />
    </TeacherStack.Navigator>
  );
};
