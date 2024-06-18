import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// Importe das Telas
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import AtividadesScreen from './screens/AtividadesScreen';
import PlanoTreinoScreen from './screens/PlanoTreinoScreen';
import LocaisTreinoScreen from './screens/LocaisTreinoScreen';
import ProgressoScreen from './screens/ProgressoScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Componente para o conteúdo personalizado do Menu
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="FittyBuddy"
        labelStyle={{ fontSize: 30, fontWeight: 'bold', color: '#364670', marginLeft: 40, marginBottom: 20 }}
        onPress={() => {
          props.navigation.navigate('Login'); // Navegar para a tela Login ao clicar em FittyBuddy
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Atividades" component={AtividadesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PlanoTreino" component={PlanoTreinoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LocaisTreino" component={LocaisTreinoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Progresso" component={ProgressoScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Componente principal do aplicativo
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={MainStack}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} size={size + 10} color={color} /> 
            ),
            drawerLabelStyle: { fontSize: 18, fontWeight: 'bold' }
          }}
        />
        <Drawer.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'person' : 'person-outline'} size={size + 10} color={color} /> 
            ),
            drawerLabelStyle: { fontSize: 18, fontWeight: 'bold' }
          }}
        />
        <Drawer.Screen
          name="Configurações"
          component={SettingsScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size + 10} color={color} /> 
            ),
            drawerLabelStyle: { fontSize: 18, fontWeight: 'bold' }
          }}
        />
        <Drawer.Screen
          name="Registro de Atividades"
          component={AtividadesScreen} 
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'fitness' : 'fitness-outline'} size={size + 10} color={color} /> 
            ),
            drawerLabelStyle: { fontSize: 18, fontWeight: 'bold' }
          }}
        />
        <Drawer.Screen
          name="Plano de Treino"
          component={PlanoTreinoScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'barbell' : 'barbell-outline'} size={size + 10} color={color} /> 
            ),
            drawerLabelStyle: { fontSize: 18, fontWeight: 'bold' }
          }}
        />
        <Drawer.Screen
          name="Locais de Treino"
          component={LocaisTreinoScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'location' : 'location-outline'} size={size + 10} color={color} /> 
            ),
            drawerLabelStyle: { fontSize: 18, fontWeight: 'bold' }
          }}
        />
        <Drawer.Screen
          name="Progresso"
          component={ProgressoScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'analytics' : 'analytics-outline'} size={size + 10} color={color} /> 
            ),
            drawerLabelStyle: { fontSize: 18, fontWeight: 'bold' }
          }}
        />
        <Drawer.Screen
          name="Login"
          component={AuthStack}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'log-in' : 'log-in-outline'} size={size + 10} color={color} /> 
            ),
            drawerLabelStyle: { fontSize: 18, fontWeight: 'bold' }
          }}
        />
        {/* Adicionar mais telas se for necessário */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
