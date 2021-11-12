/* eslint-disable react-native/no-inline-styles */
// Modules
import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
// Screens
import {LoginStackNavigator} from '../screens/login';
import {StudentStackNavigator} from '../screens/student';
import {TeacherStackNavigator} from '../screens/teacher';
// Theme
import AppStyles from '../theme/Layout';
import {Colors} from '../theme/Variables';

export type NavigatorParamList = {
  login: undefined;
  student: undefined;
  teacher: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
  // State
  //   const [initialRoute, setInitialRoute] = useState(
  //     passedWelcome ? 'home' : 'welcome_app',
  //   );
  //   useEffect(() => {
  //     setInitialRoute(passedWelcome ? 'home' : 'welcome_app');
  //   }, [passedWelcome]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'login'}>
      <Stack.Screen name="login" component={LoginStackNavigator} />
      <Stack.Screen name="student" component={StudentStackNavigator} />
      <Stack.Screen name="teacher" component={TeacherStackNavigator} />
    </Stack.Navigator>
  );
};

export const AppNavigator = React.forwardRef<
  NavigationContainerRef<any>,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <SafeAreaProvider
      style={AppStyles.fill}
      initialMetrics={initialWindowMetrics}>
      <NavigationContainer {...props} ref={ref}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.border} />
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

AppNavigator.displayName = 'AppNavigator';
