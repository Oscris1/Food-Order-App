import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import * as Notifications from 'expo-notifications';

import { clearCart } from '../store/cart-slice';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const OrderButton = () => {
  const navigation = useNavigation();
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const OrderHandler = () => {
    if (cartData.totalQuantity === 0) {
      Alert.alert(
        'Pusty koszyk',
        'Przed zamówieniem musisz dodać coś do koszyka',
        [{ text: 'OK' }]
      );
      return;
    }
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Zamówienie zostało złożone',
        body: `Przygotuj ${cartData.totalPrice} zł. Twoje zamówienie dotrze za 30-60 minut.`,
      },
      trigger: {
        seconds: 1,
      },
    });
    Alert.alert(
      'Zamówienie zostało złożone',
      `Przygotuj ${cartData.totalPrice} zł. Twoje zamówienie dotrze za 30-60 minut.`,
      [{ text: 'OK' }]
    );

    dispatch(clearCart());
    navigation.navigate('Menu');
  };
  return (
    <TouchableOpacity onPress={OrderHandler} style={styles.orderButton}>
      <Text style={styles.orderButtonText}>Zamów</Text>
    </TouchableOpacity>
  );
};

export default OrderButton;

const styles = StyleSheet.create({
  orderButton: {
    padding: 10,
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
  orderButtonText: {
    color: '#fff',
  },
});
