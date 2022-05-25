import { TextInput, Alert, Button, StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { Component, useState, useEffect } from "react";
import estilos from '../estilos';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ListaAbastecimento() {

    const [ListaAbastecimento, setLista] = useState([
        {
            id: 0,
            nomePosto: '',
            quantidadeAbastecida: 0,
            valorPago: 0,
            date: ''
        }
    ]);


    useEffect(() => {
        RecuperaDadosStorage();
    }, []);


    var totalGasto = ListaAbastecimento.reduce(gastoMensalDinheiro, 0);
    function gastoMensalDinheiro(totalGasto, item) {
        return parseFloat(totalGasto) + parseFloat(item.valorPago);
    }

    var total = ListaAbastecimento.reduce(litragemTotal, 0);
    function litragemTotal(total, item) {
        return parseFloat(total) + parseFloat(item.quantidadeAbastecida);
    }


    async function RecuperaDadosStorage() {
        try {
            const lista = await AsyncStorage.getItem("ListaAbastecimento");
            if (lista !== null)
                setLista(JSON.parse(lista));
        } catch (error) {
            Alert.alert('');
        }
    }


    return (
        <View style={estilos.fundo}>
            <Text style={{
                textAlign: 'center'
                , paddingTop: 15, fontSize: 20
            }}> Lista dos últimos Abastecimentos</Text>

            <ScrollView>
                <FlatList style={{
                    paddingTop: 30,
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingBottom: 20,
                    height: 300
                }}
                    data={(ListaAbastecimento)}
                    renderItem={({ item }) => (
                        <Text style={{
                            backgroundColor: 'gray',
                            textAlign: 'center', borderRadius: 12,
                            paddingBottom: 10,
                            marginBottom: 15
                        }}>
                            {'\n'}
                            {'Abastecimento: ' + item.id + '\n' + '\n'}
                            {'Nome do Posto:' + item.nomePosto + '\n'}
                            {'Quantidade Abastecida:' + item.quantidadeAbastecida + 'L' + '\n'}
                            {'Valor Pago:' + 'R$' + item.valorPago + '\n'}
                            {'Data:' + item.date + '\n' + '\n'}
                        </Text>
                    )}
                    keyExtractor={(item) => item.id}
                />


            </ScrollView>
            <View style={{
                borderRadius: 20,
                backgroundColor: 'gray',
                height: 200,
                paddingTop: 15,
                paddingLeft: 15,
                paddingRight: 15,
                width: '100%'
            }}>
                <Text style={{
                    textAlign: 'center'
                    , paddingTop: 1, paddingBottom: 5, fontSize: 20
                }}>Informações Gerais</Text>

                <View style={{
                    paddingTop: 10, paddingBottom: 10, paddingLeft: 20, width: '100%', borderRadius: 12, fontSize: 15, backgroundColor: 'white'
                }}>

                    <Text>
                        Quantidade de abastecimentos: {ListaAbastecimento.length + '\n'}
                        {'\n'}
                        Litragem Total no mês: {total + '\n'}
                        {'\n'}

                        Valor gasto em abastecimento: {totalGasto}
                    </Text>
                </View>
            </View>
        </View>
    );

}

