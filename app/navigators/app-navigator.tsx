/* eslint-disable react-native/no-inline-styles */
// Modules
import React, {useEffect} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
// Screens
import {LoginStackNavigator} from '../screens/login';
import {StudentStackNavigator} from '../screens/student';
import {TeacherStackNavigator} from '../screens/teacher';
import TeacherList from '../screens/student/teachetList';
// Theme
import AppStyles from '../theme/Layout';
import {Colors} from '../theme/Variables';
// Redux
import {UserState} from '../modules/user/reducers';

export type NavigatorParamList = {
  login: undefined;
  student: undefined;
  teacher: undefined;
  drawer: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();
const Drawer = createDrawerNavigator();
const AppStack = () => {
  const navigation = useNavigation();
  // Redux State
  const userInfo = useSelector(
    (state: {user: UserState}) => state.user.userInfo,
  );
  // State
  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      navigation.navigate(userInfo.role);
    }
  }, [userInfo]);

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
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen name="Dashboard" component={AppStack} />
          <Drawer.Screen name="TeacherList" component={TeacherList} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

AppNavigator.displayName = 'AppNavigator';
