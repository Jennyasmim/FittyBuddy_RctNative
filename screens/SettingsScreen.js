import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Ionicons name="settings-outline" size={32} color="#0d47a1" style={styles.icon} />
          <Text style={styles.title}>Configurações</Text>
        </View>
        <View style={styles.settingItem}>
          <Ionicons name="notifications-outline" size={24} color="#0d47a1" style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Notificações</Text>
          <Text style={styles.settingValue}>Ativado</Text>
        </View>
        <View style={styles.settingItem}>
          <Ionicons name="language-outline" size={24} color="#0d47a1" style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Idioma</Text>
          <Text style={styles.settingValue}>Português</Text>
        </View>
        <View style={styles.settingItem}>
          <Ionicons name="moon-outline" size={24} color="#0d47a1" style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Modo Escuro</Text>
          <Text style={styles.settingValue}>Desativado</Text>
        </View>
        <View style={styles.settingItem}>
          <Ionicons name="sync-outline" size={24} color="#0d47a1" style={styles.settingIcon} />
          <Text style={styles.settingLabel}>Sincronização Automática</Text>
          <Text style={styles.settingValue}>Ativado</Text>
        </View>
        <Image
          source={{ uri: 'https://github.com/PhYllipepdm/FittyBuddy/blob/main/img/FITTYBUDDY%20LOGO.jpg?raw=true' }}
          style={styles.image}
        />
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
    height: '95%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 30,
    marginTop: -40,
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
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingIcon: {
    marginRight: 10,
  },
  settingLabel: {
    fontSize: 18,
    color: '#364670',
    flex: 1,
  },
  settingValue: {
    fontSize: 18,
    color: '#6b7a8f',
  },
  image: {
    width: '100%',
    height: 270,
    borderRadius: 10,
    marginTop: -20,
  },
});

