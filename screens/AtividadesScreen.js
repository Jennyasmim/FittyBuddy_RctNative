import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RegistroAtividadesScreen = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = () => {
    console.log('Date:', date);
    console.log('Activity Type:', activityType);
    console.log('Duration:', duration);  
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image 
          source={{ uri: 'https://github.com/PhYllipepdm/FittyBuddy/blob/main/img/FITTYBUDDY.jpg?raw=true' }} 
          style={styles.logo} 
        />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>Registro de Atividades</Text>

        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Data (DD/MM/AAAA)"
            value={date}
            onChangeText={setDate}
          />

          <TextInput
            style={styles.input}
            placeholder="Tipo de Atividade"
            value={activityType}
            onChangeText={setActivityType}
          />

          <TextInput
            style={styles.input}
            placeholder="Duração (minutos)"
            keyboardType="numeric"
            value={duration}
            onChangeText={setDuration}
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Registrar Atividade</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f5fd',
    paddingHorizontal: 20,
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: { 
    width: 120,
    height: 120,
    marginBottom: 20,
    alignSelf: 'center', 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#364670',
    fontWeight: 'bold',
  },
  content: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 40,
    backgroundColor: '#fff',
  },
  submitButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d47a1',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegistroAtividadesScreen;
