import { StatusBar } from 'expo-status-bar';
import { TextInput, Alert, Button, StyleSheet, Text, View, Image } from "react-native";
import React, { Component, useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaAbastecimentos from './ListaAbastecimentos';
import estilos from '../estilos';

export default function AddAbastecimento() {

    const navigation = useNavigation();
    const [ListaAbastecimento, setLista] = useState([
        {
            id: 0,
            nomePosto: '',
            quantidadeAbastecida: '',
            valorPago: '',
            date:''
        }
    ]);


    const [id,setId]=useState('');
    const [inputNomePosto, setInputNomePosto] = useState('');
    const [inputQuantidadeAbastecida, setInputQuantidadeAbastecida] = useState('');
    const [inputValorPago, setInputValorPago] = useState('');
    const [date, setDate] = useState(new Date().toDateString());


    function verificaEntrada() {

        if (inputNomePosto === '') {
            Alert.alert("Informe o nome do posto!");
            return;
        }
        else if (inputQuantidadeAbastecida === '') {
            Alert.alert("Informe a quantidade de litros abastecido.");
            return;
        }
        else if (inputValorPago === '') {
            Alert.alert("Informe o valor pago pelo abastecimento");
            return;
        }
        
        else {

            adicionaLista();

            GuardaDadosStorage();
            Alert.alert("Dados Salvos!");
            
            setId(0);
            setInputNomePosto('');
            setInputQuantidadeAbastecida('');
            setInputValorPago('');
            return;
        }
    }

    async function GuardaDadosStorage() {
        try {
            await AsyncStorage.setItem("ListaAbastecimento", JSON.stringify(ListaAbastecimento));

        } catch (error) {
            Alert.alert('O abastecimento nao foi salvo!');
        }
    }

    async function RecuperaDadosStorage() {
        try {
            const lista = await AsyncStorage.getItem("ListaAbastecimento");
            if (lista !== null) setTarefas(JSON.parse(lista));
        } catch (error) {
            
        }
    }

    const adicionaLista=()=>{
        setLista((listaAnterior) => [
            ...listaAnterior,
            {
                id:(ListaAbastecimento).length,
                nomePosto:inputNomePosto,
                quantidadeAbastecida:inputQuantidadeAbastecida,
                valorPago:inputValorPago,
                date:date
            }
        ]);
    }
    

    useEffect(() => {
        RecuperaDadosStorage();
    }, []);

    useEffect(() => {
        GuardaDadosStorage();
    }, [ListaAbastecimento]);


    function LogoApp() {
        return (
          <Image
            source={{uri: './Imagens/gasolina.png'}}
            resizeMode='contain'
          />
        );
      }


    return (

        <View style={estilos.background}>
           
            <TextInput style={estilos.input}
                placeholder="Digite o Nome do posto de combustíveis"
                value={inputNomePosto}
                onChangeText={(texto) => setInputNomePosto(texto)}

            />
            <TextInput style={estilos.input}
                placeholder="Digite a litragem abastecida"
                keyboardType="decimal-pad"
                value={inputQuantidadeAbastecida}
                onChangeText={(quantidade) => setInputQuantidadeAbastecida(quantidade)}

            />
            <TextInput style={estilos.input}
                placeholder="Digite o valor total pago"
                keyboardType="decimal-pad"
                value={inputValorPago}
                onChangeText={(valorpago) => setInputValorPago(valorpago)}

            />
           
            <Text>{'\n'}</Text>
            <Button color='#841584' onPress={verificaEntrada} title="Salvar"></Button>
            <Text>{'\n'}</Text>
            <LogoApp></LogoApp>
            <Button color='#841584' onPress={() => navigation.navigate('ListaAbastecimento')} title="Acompanhar Abastecimentos"></Button>
            <Text>{'\n'}</Text>
            <Button style={{}}  color='#841584' title="Limpar Abastecimentos"></Button>
        </View>

    );
}