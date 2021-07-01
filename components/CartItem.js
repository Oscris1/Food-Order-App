import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CartItem = ({ cartData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameHeader}>{cartData.name}</Text>
      <Text style={styles.price}>za sztukę: {cartData.price} zł</Text>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },

  nameHeader: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    marginTop: 10,
  },
  price: {},
});
