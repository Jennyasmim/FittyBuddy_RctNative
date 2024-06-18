import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import { mockPlaces } from '../screens/MockAcademias/MockPlaces';

export default function LocaisTreinoScreen() {
  const [region, setRegion] = useState(null);
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão de localização negada');
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      fetchNearbyPlaces(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      Alert.alert('Erro ao obter localização', error.message);
    }
  };

  const fetchNearbyPlaces = async (latitude, longitude) => {
    setTimeout(() => {
      setPlaces(mockPlaces);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        onRegionChangeComplete={setRegion}
      >
        {location && (
          <Marker
            coordinate={location}
            title="Você está aqui"
          />
        )}
        {places.map((place, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: place.position.lat,
              longitude: place.position.lng,
            }}
            title={place.title}
            description={place.address.label}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f5fd',
  },
  map: {
    flex: 1,
    width: '100%',
  },
});
