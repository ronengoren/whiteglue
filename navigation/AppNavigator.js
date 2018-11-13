import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import ChangeDaytDayScreen from '../screens/ChangeDaytDayScreen';
import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const AppStack = createStackNavigator({ Home: UserProfileScreen, Other: ChangeDaytDayScreen });
const AuthStack = createStackNavigator({ SignIn: LoginScreen });

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,

  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
},
  {
    initialRouteName: 'AuthLoading'

  }

);