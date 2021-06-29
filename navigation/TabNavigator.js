import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Menu') {
            return (
              <Ionicons name='fast-food-outline' size={size} color={color} />
            );
          } else if (route.name === 'Cart') {
            return <AntDesign name='shoppingcart' size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Menu' component={MenuScreen}></Tab.Screen>
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{ tabBarBadge: 11 }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
