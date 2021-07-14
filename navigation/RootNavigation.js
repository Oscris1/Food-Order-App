import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import OrderModal from '../screens/OrderModal';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <RootStack.Navigator mode='modal'>
      <RootStack.Screen
        name='OrderModal'
        component={OrderModal}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Main'
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
