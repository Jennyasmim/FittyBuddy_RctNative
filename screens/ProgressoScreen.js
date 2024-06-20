import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProgressoScreen() {
  // Simulação de progresso (variável entre 0 e 1)
  const progressoPeso = 0.65;
  const progressoIMC = 0.5;
  const progressoMeta = 0.2;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Ionicons name="trending-up-outline" size={32} color="#0d47a1" style={styles.icon} />
          <Text style={styles.title}>Meu Progresso</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <Text style={styles.progressLabel}>Peso</Text>
            <View style={[styles.progress, { width: `${progressoPeso * 100}%` }]} />
            <Text style={styles.progressText}>{`${Math.round(progressoPeso * 100)}%`}</Text>
          </View>
          <View style={styles.progressBar}>
            <Text style={styles.progressLabel}>IMC</Text>
            <View style={[styles.progress, { width: `${progressoIMC * 100}%` }]} />
            <Text style={styles.progressText}>{`${Math.round(progressoIMC * 100)}%`}</Text>
          </View>
          <View style={styles.progressBar}>
            <Text style={styles.progressLabel}>Meta</Text>
            <View style={[styles.progress, { width: `${progressoMeta * 100}%` }]} />
            <Text style={styles.progressText}>{`${Math.round(progressoMeta * 100)}%`}</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Ionicons name="barbell-outline" size={24} color="#0d47a1" />
            <Text style={styles.statLabel}>Peso</Text>
            <Text style={styles.statValue}>70 kg</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="body-outline" size={24} color="#0d47a1" />
            <Text style={styles.statLabel}>IMC</Text>
            <Text style={styles.statValue}>24.5</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="flag-outline" size={24} color="#0d47a1" />
            <Text style={styles.statLabel}>Meta</Text>
            <Text style={styles.statValue}>80 kg</Text>
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
  contentContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0d47a1',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  progressBarContainer: {
    marginBottom: 20,
  },
  progressBar: {
    marginBottom: 10,
  },
  progressLabel: {
    fontSize: 18,
    color: '#364670',
    marginBottom: 5,
  },
  progress: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0d47a1',
  },
  progressText: {
    fontSize: 16,
    color: '#364670',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
    marginVertical: 10,
  },
  statLabel: {
    fontSize: 18,
    color: '#364670',
    marginTop: 5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d47a1',
    marginTop: 5,
  },
});
