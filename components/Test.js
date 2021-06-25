import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getMenu } from '../store/menu-slice';

const Test = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);

  return (
    <View>
      {menu.status === 'success' &&
        menu.list.map((element) => (
          <Text key={element.id}>{element.name}</Text>
        ))}
    </View>
  );
};

export default Test;
