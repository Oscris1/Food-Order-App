import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import {
  setRestaurantLocation,
  setUserLocation,
} from '../store/location-slice';

import { restaurants } from '../utils/restaurants';

const MapScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [restaurantCoordinate, setRestaurantCoordinate] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const selectRestaurantHandler = () => {
    dispatch(setRestaurantLocation(restaurantCoordinate));
    dispatch(setUserLocation(location.coords));
    navigation.navigate('Main');
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        Alert.alert(
          'Wymagane uprawnienia',
          'Ta aplikacja wymaga dostępu do lokalizacji urządzenia.',
          [{ text: 'OK' }]
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Wybierz Restaurację</Text>
      </View>

      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />

          {/* Restaurants markers*/}
          {restaurants.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
              image={require('../assets/hamburger.jpg')}
              opacity={0.6}
              onPress={(e) => {
                setRestaurantCoordinate(e.nativeEvent.coordinate);
                console.log(restaurantCoordinate);
              }}
            />
          ))}
        </MapView>
      )}

      {restaurantCoordinate ? (
        <TouchableOpacity
          style={styles.orderButton}
          onPress={selectRestaurantHandler}
        >
          <Text style={styles.orderButtonText}>Wybierz</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.orderPlaceholder}>
          <Text style={styles.orderPlaceholderText}>
            Musisz wybrać restaurację
          </Text>
        </View>
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  map: {
    width: Dimensions.get('window').width - 20,
    height: '78%',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  orderButton: {
    padding: 10,
    backgroundColor: 'tomato',
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
  },
  orderPlaceholder: {
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderPlaceholderText: {
    color: '#fff',
  },
});
