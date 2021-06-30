import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MenuItem = ({ menuData }) => {
  return (
    <View>
      <Text>{menuData.name}</Text>
    </View>
  );
};

export default MenuItem;
