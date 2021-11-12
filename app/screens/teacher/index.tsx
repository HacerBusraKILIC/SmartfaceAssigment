import React from 'react';
// Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './dashboard';

export type TeacherNavigatorParamList = {
  dashboard_teacher: undefined;
};

const TeacherStack = createNativeStackNavigator<TeacherNavigatorParamList>();

export const TeacherStackNavigator = () => {
  return (
    <TeacherStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TeacherStack.Screen name="dashboard_teacher" component={Dashboard} />
    </TeacherStack.Navigator>
  );
};
