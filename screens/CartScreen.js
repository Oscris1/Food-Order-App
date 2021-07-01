import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import CartItem from '../components/CartItem';

const MenuScreen = () => {
  const cartData = useSelector((state) => state.cart);
  const items = cartData.items;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Koszyk</Text>
      </View>

      <View style={styles.totalBox}>
        <Text style={styles.totalBoxText}>
          Przedmioty w koszyku: {cartData.totalQuantity}
        </Text>
        <Text style={styles.totalBoxText}>
          Do zapłaty: {cartData.totalPrice} zł
        </Text>
      </View>

      <FlatList
        style={styles.cartList}
        data={items}
        renderItem={({ item }) => <CartItem cartData={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(0, 0%, 93%)',
  },
  header: {
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'tomato',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 2,
  },
  totalBox: {
    marginHorizontal: 10,
  },
  totalBoxText: {
    color: 'tomato',
    fontWeight: '700',
    fontSize: 15,
  },
  cartList: {},
});
