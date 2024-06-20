import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const PlanoTreinoScreen = () => {
  const planosTreino = [
    {
      nome: 'Iniciante',
      descricao: 'Programa para iniciantes começarem a se exercitar regularmente.',
      duracao: '4 semanas',
      intensidade: 'Baixa',
      icone: 'fitness-outline', // Ícone para iniciante
    },
    {
      nome: 'Avançado',
      descricao: 'Treino intenso para quem já tem experiência prévia em fitness.',
      duracao: '8 semanas',
      intensidade: 'Alta',
      icone: 'barbell-outline', // Ícone para avançado
    },
    {
      nome: 'Flexibilidade',
      descricao: 'Treino focado em melhorar a flexibilidade e mobilidade corporal.',
      duracao: '2 semanas',
      intensidade: 'Média',
      icone: 'body-outline', // Ícone para flexibilidade
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="barbell-outline" size={24} color="#0d47a1" style={styles.icon} />
        <Text style={styles.title}>Treinos Recomendados</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {planosTreino.map((plano, index) => (
          <View key={index} style={styles.planoCard}>
            <View style={styles.nomePlanoContainer}>
              <Ionicons name={plano.icone} size={24} color="#0d47a1" style={styles.planoIcon} />
              <Text style={styles.nomePlano}>{plano.nome}</Text>
            </View>
            <Text style={styles.descricao}>{plano.descricao}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Duração</Text>
                <Text style={styles.infoValue}>{plano.duracao}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Intensidade</Text>
                <Text style={styles.infoValue}>{plano.intensidade}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f5fd',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 25,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#364670',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  planoCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
  },
  nomePlanoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  planoIcon: {
    marginRight: 10,
  },
  nomePlano: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0d47a1',
  },
  descricao: {
    fontSize: 16,
    color: '#364670',
    marginBottom: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: '#6b7a8f',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#364670',
    marginTop: 5,
  },
});

export default PlanoTreinoScreen;
