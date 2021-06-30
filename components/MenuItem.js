import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const MenuItem = ({ menuData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.nameHeader}>{menuData.name}</Text>
        <Text style={styles.price}>{menuData.price} zł</Text>

        <TouchableOpacity style={styles.addButton}>
          <MaterialCommunityIcons name='cart-plus' size={26} color='white' />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: menuData.image }}></Image>
      </View>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    height: 160,
    borderRadius: 20,
    backgroundColor: '#fff',
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 3,
    alignItems: 'center',
  },
  nameHeader: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    marginTop: 10,
  },
  price: {
    position: 'absolute',
    bottom: 14,
    right: 15,
  },
  addButton: {
    backgroundColor: 'tomato',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 100,
    height: 50,
    borderTopEndRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
