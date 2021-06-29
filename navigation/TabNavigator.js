import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Menu' component={MenuScreen}></Tab.Screen>
      <Tab.Screen name='Cart' component={CartScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
