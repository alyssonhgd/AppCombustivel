import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { TextInput,Alert, Button,StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import estilos from './estilos';
import AddAbastecimento from './Componentes/AddAbastecimento';
import ListaAbastecimentos from './Componentes/ListaAbastecimentos'

const Stack = createNativeStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="AddAbastecimento">
          <Stack.Screen name="AddAbastecimento" 
          component={AddAbastecimento} 
          options={{ title: 'Adicionar Abastecimento', 
          headerTitle:<LogoApp></LogoApp>,
          headerStyle:{backgroundColor:'#841584',fontWeight: 'bold'},
          headerTitleAlign:'center',
          headerTintColor:'white'}
        }/>

          <Stack.Screen name="ListaAbastecimento" 
          component={ListaAbastecimentos} 
          options={{ 
          title: 'Acompanhar Abastecimentos',
          headerTitle:<LogoApp/>,
          headerStyle:{backgroundColor:'#841584',fontWeight: 'bold',flex:1},
          headerTitleAlign:'center',
          headerTintColor:'white'}
          }/> 
      </Stack.Navigator>
 
 
      
     
      </NavigationContainer>
    );
    function LogoApp() {
      return (
        <Image
          style={{ width: 50, height: 50 }}
          source={{uri: './Imagens/gasolina.png'}}
          resizeMode='contain'
        />
      );
    }
}
