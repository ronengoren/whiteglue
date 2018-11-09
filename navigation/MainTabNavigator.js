import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ChangeDaytDayScreen from '../screens/ChangeDaytDayScreen';
import MessagesScreen from '../screens/MessagesScreen';
import NextDaytScreen from '../screens/NextDaytScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import MatchGameScreen from '../screens/MatchGameScreen';

const ChangeDaytDayStack = createStackNavigator({
  ChangeDaytDay: ChangeDaytDayScreen,
});

ChangeDaytDayStack.navigationOptions = {
  tabBarLabel: 'Change DAYT',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const MessagesStack = createStackNavigator({
  Messages: MessagesScreen,
});

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const NextDaytStack = createStackNavigator({
  NextDayt: NextDaytScreen,
});

NextDaytStack.navigationOptions = {
  tabBarLabel: 'Next DAYT',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const UserProfileStack = createStackNavigator({
  UserProfile: UserProfileScreen,
});

UserProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const MatchGameeStack = createStackNavigator({
  MatchGame: MatchGameScreen,
});

MatchGameeStack.navigationOptions = {
  tabBarLabel: 'Game',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  UserProfileStack,
  ChangeDaytDayStack,
  MatchGameeStack,
  MessagesStack,
  NextDaytStack,
});
