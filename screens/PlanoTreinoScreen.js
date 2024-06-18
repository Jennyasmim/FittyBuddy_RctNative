import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlanoTreinoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Plano de Treino Screen</Text>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#364670',
  },
});
