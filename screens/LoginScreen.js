import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Adicione a lógica de autenticação aqui
    navigation.navigate('Main');
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.loginTitle}>
          <Image source={{uri:'https://github.com/PhYllipepdm/FittyBuddy/blob/main/img/FITTYBUDDY.jpg?raw=true'}} style={styles.logo} />
          <Text style={styles.title}>FittyBuddy</Text>
        </View>
        <Text style={styles.subtitle}>Bem vindo ao FittyBuddy!</Text>
        <Text style={styles.texto}>Comece sua jornada de fitness conosco! Faça o login para alcançar seus objetivos</Text>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.ou}>--- ou ---</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f5fd',
  },
  container: {
    padding: 20,
    width: 350,
    height: 700,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  loginTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  subtitle: {
    fontSize: 18,
    color: '#364670',
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: -30,
    marginLeft: 40,
  },
  texto: {
    fontSize: 14,
    color: '#364670',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: -10,
    marginLeft: 20,
  },
  label: {
    fontSize: 16,
    color: '#364670',
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    width: 175,
    marginLeft: 65,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ou:{
    fontSize: 14,
    color: '#364670',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 125,
  }
});
