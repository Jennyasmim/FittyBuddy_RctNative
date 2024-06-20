import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil" size={24} color="#0d47a1" />
        </TouchableOpacity>
        <Image 
          style={styles.profileImage} 
          source={{ uri: 'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/424485990_783870686978432_7774323023815040941_n.jpg?ccb=11-4&oh=01_Q5AaIJhqk_XLps18Zz6ArPEbm59653_Au-O2mZhG9yoBicwx&oe=66818769&_nc_sid=e6ed6c&_nc_cat=105' }} 
        />
        <Text style={styles.name}>Jhon Santos</Text>
        <Text style={styles.email}>jhon.santos@example.com</Text>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Ionicons name="barbell-outline" size={32} color="#0d47a1" />
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statLabel}>Treinos</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="trophy-outline" size={32} color="#0d47a1" />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Conquistas</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="walk-outline" size={32} color="#0d47a1" />
            <Text style={styles.statValue}>102 km</Text>
            <Text style={styles.statLabel}>Distância</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f5fd',
    alignItems: 'center',
    paddingTop: 100, 
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    width: '90%',
    height: '75%',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#364670',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#6b7a8f',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 60,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#364670',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7a8f',
  },
});
