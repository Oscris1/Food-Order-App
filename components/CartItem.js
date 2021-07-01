import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CartItem = ({ cartData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.nameHeader}>{cartData.name}</Text>
        <Text style={styles.price}>za sztukę: {cartData.price} zł</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartButtonText}>+</Text>
        </TouchableOpacity>
        <View style={styles.quantityInfo}>
          <Text>ilość {cartData.quantity} </Text>
          <Text>cena: {cartData.totalPrice} zł</Text>
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartButtonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    margin: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
  },

  nameHeader: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
  leftContainer: {
    flex: 5,
  },
  rightContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartButton: {
    backgroundColor: 'tomato',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  quantityInfo: {},
  price: {},
});
