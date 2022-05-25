import { StatusBar } from 'expo-status-bar';
import { TextInput, Alert, Button, StyleSheet, Text, View, Image } from "react-native";
import React, { Component, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Declaração de dois componentes, um que contem a pagina de lista de abastecimentos e outro contendo os estilos da pagina
import ListaAbastecimentos from './ListaAbastecimentos';
import estilos from '../estilos';

//Componente para adicioanr os abastecimentos, tem em seu corpo um array com a lsita de abastecimentos que recebera os dados dos inputs
export default function AddAbastecimento() {

  const navigation = useNavigation();
  const [ListaAbastecimento, setLista] = useState([
    {
      id: 0,
      nomePosto: '',
      quantidadeAbastecida: 0,
      valorPago: 0,
      date: ''
    }
  ]);

  //Declaração das constantes que conterao os dados dos inputs
  const [id, setId] = useState('');
  const [inputNomePosto, setInputNomePosto] = useState('');
  const [inputQuantidadeAbastecida, setInputQuantidadeAbastecida] = useState('');
  const [inputValorPago, setInputValorPago] = useState('');
  const [date, setDate] = useState(new Date().toDateString());


  //Função que é chamda quando se clica em salvar, essa função faz a verificação se todos os campso estão preenchidos e nao possuem campos em branco
  //se os campos não estiverem em branco os valores são adicionados ao array de abastecimento, logo depois é chamada a função para guardar no local storage.
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

  //Função assincrona que salva a array listaAbastecimento no localstorage
  async function GuardaDadosStorage() {
    try {
      await AsyncStorage.setItem("ListaAbastecimento", JSON.stringify(ListaAbastecimento));

    } catch (error) {
      Alert.alert('O abastecimento nao foi salvo!');
    }
  }

  //Função assincrona que recupera os dados do array listaAbastecimento que estão no localstorage
  async function RecuperaDadosStorage() {
    try {
      const lista = await AsyncStorage.getItem("ListaAbastecimento");
      if (lista !== null) setLista(JSON.parse(lista));
    } catch (error) { Alert.alert('') }


  }

  //Função assyncrona que reseta o localstorage, excluindo todos os dados do mesmo
  const ResetarStorage = async () => {
    try {
      await AsyncStorage.clear()
      Alert.alert('Lista de abastecimentos esvaziada!');
    }
    catch (e) {
      Alert.alert('erro ao esvaziar Lista!');
    }
  }

  //Consta que contem uma função onde são adicionados os dados na lista
  const adicionaLista = () => {
    setLista((listaAnterior) => [
      ...listaAnterior,
      {
        id: (ListaAbastecimento).length,
        nomePosto: inputNomePosto,
        quantidadeAbastecida: inputQuantidadeAbastecida,
        valorPago: inputValorPago,
        date: date
      }
    ]);
  }


  useEffect(() => {
    RecuperaDadosStorage();
  }, []);


  useEffect(() => {
    GuardaDadosStorage();
  });


  //Funcao para adicionar um icone Image no aplicativo, no expo não funcionou
  function LogoApp() {
    return (
      <Image
        source={{ uri: './Imagens/gasolina.png' }}
        resizeMode='contain'
      />
    );
  }


  //O returno do componente onde é estilizado a tela com os textinput, botões, e o componente estilos
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
      <Button style={{}} onPress={ResetarStorage} color='#841584' title="Limpar Abastecimentos"></Button>
    </View>
  );


}