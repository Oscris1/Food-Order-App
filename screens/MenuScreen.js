import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getMenu } from '../store/menu-slice';
import MenuItem from '../components/MenuItem';

const MenuScreen = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Menu Screen</Text>
      </View>

      <FlatList
        style={styles.menuList}
        data={menu.list}
        renderItem={({ item }) => <MenuItem menuData={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    marginVertical: 40,
  },
});
