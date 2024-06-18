// screens/MainScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
    <Text style={styles.title}>FittyBuddy</Text>
    <View style={styles.container}>
      <View style={styles.containers}>
        <Ionicons name="heart" size={40} color="#0d47a1" />
        <Text style={styles.subtitle}>BPM</Text>
      </View>
      <View style={styles.containers}>
        <Ionicons name="moon-outline" size={40} color="#0d47a1" />
        <Text style={styles.subtitle}>SLEEP TIME</Text>
      </View>
    </View>
    <Text style={styles.title2}>Atividades</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f5fd',
  },
  container: {
    flexDirection: 'row',
    padding: 20,
    width: 400,
    height: 300,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
  },
  containers: {
    padding: 25,
    width: 170,
    height: 140,
    margin: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 30,
    margin: 20,
    color: '#364670',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 30,
    margin: 20,
    color: '#364670',
    marginTop: -30,
  },
  subtitle: {
    fontSize: 18,
    color: '#364670',
    fontWeight: 'bold',
    margin: 10,
  },
  texto: {
    fontSize: 14,
    color: '#364670',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: -10,
    marginLeft: 20,
  },
});
