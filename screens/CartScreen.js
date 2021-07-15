import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import * as Notifications from 'expo-notifications';

import CartItem from '../components/CartItem';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const MenuScreen = () => {
  const navigation = useNavigation();
  const cartData = useSelector((state) => state.cart);
  const items = cartData.items;

  const TriggerNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Zamówienie zostało złożone',
        body: `Przygotuj ${cartData.totalPrice} zł. Twoje zamówienie dotrze za 30-60 minut`,
      },
      trigger: {
        seconds: 1,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Koszyk</Text>
      </View>

      <View style={styles.orderInfoContainer}>
        <View style={styles.totalBox}>
          <Text style={styles.totalBoxText}>
            Przedmioty w koszyku: {cartData.totalQuantity}
          </Text>
          <Text style={styles.totalBoxText}>
            Do zapłaty: {cartData.totalPrice} zł
          </Text>
        </View>
        <TouchableOpacity
          onPress={TriggerNotificationHandler}
          style={styles.orderButton}
        >
          <Text style={styles.orderButtonText}>Zamów</Text>
        </TouchableOpacity>
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
  orderInfoContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'tomato',
  },
  totalBox: {},
  totalBoxText: {
    fontWeight: '700',
    color: 'black',
    fontSize: 15,
  },
  cartList: {},
  orderButton: {
    padding: 10,
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
  orderButtonText: {
    color: '#fff',
  },
});
