import React from 'react';
// Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './dashboard';

export type StudentNavigatorParamList = {
  dashboard_student: undefined;
};

const StudentStack = createNativeStackNavigator<StudentNavigatorParamList>();

export const StudentStackNavigator = () => {
  return (
    <StudentStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StudentStack.Screen name="dashboard_student" component={Dashboard} />
    </StudentStack.Navigator>
  );
};
