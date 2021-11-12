import React from 'react';
// Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './login';

export type LoginNavigatorParamList = {
  login_app: undefined;
};

const LoginStack = createNativeStackNavigator<LoginNavigatorParamList>();

export const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LoginStack.Screen name="login_app" component={Login} />
    </LoginStack.Navigator>
  );
};
