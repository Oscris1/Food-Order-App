import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const OrderModal = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [restaurantCoordinate, setRestaurantCoordinate] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(text);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Wróć</Text>
      </TouchableOpacity>
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
          <Marker
            coordinate={{
              latitude: 52.157501,
              longitude: 20.92382,
            }}
            image={require('../assets/hamburger.jpg')}
            opacity={0.6}
            onPress={(e) => setRestaurantCoordinate(e.nativeEvent.coordinate)}
            title={'Restauracja Raszyn'}
            description='Raszyn'
          />
          <Marker
            coordinate={{
              latitude: 52.11199,
              longitude: 20.879,
            }}
            image={require('../assets/hamburger.jpg')}
            opacity={0.6}
            onPress={(e) => setRestaurantCoordinate(e.nativeEvent.coordinate)}
            title={'Restauracja Sękocin'}
            description='Sękocin Nowy'
          />
        </MapView>
      )}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Twoja lokalizacja</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100,
  },
});
