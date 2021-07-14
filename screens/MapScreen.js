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

const MapScreen = () => {
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
          <Marker
            coordinate={{
              latitude: 52.157501,
              longitude: 20.92382,
            }}
            image={require('../assets/hamburger.jpg')}
            opacity={0.6}
            onPress={(e) => {
              setRestaurantCoordinate(e.nativeEvent.coordinate);
              console.log(restaurantCoordinate);
            }}
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
            onPress={(e) => {
              setRestaurantCoordinate(e.nativeEvent.coordinate);
              console.log(restaurantCoordinate);
            }}
            title={'Restauracja Sękocin'}
            description='Sękocin Nowy'
          />
        </MapView>
      )}
      {restaurantCoordinate ? (
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => navigation.navigate('Main')}
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
