import React from 'react';
// Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import Dashboard from './dashboard';
import HomeworkDetail from './homeworkDetail';

export type StudentNavigatorParamList = {
  dashboard_student: undefined;
  homework_detail: undefined;
};

const StudentStack = createNativeStackNavigator<StudentNavigatorParamList>();

export const StudentStackNavigator = () => {
  return (
    <StudentStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StudentStack.Screen name="dashboard_student" component={Dashboard} />
      <StudentStack.Screen name="homework_detail" component={HomeworkDetail} />
    </StudentStack.Navigator>
  );
};
