import { StatusBar } from 'expo-status-bar';
import { TextInput, Alert, Button, StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { Component, useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import estilos from '../estilos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-navigation';


export default function ListaAbastecimento() {


    const [ListaAbastecimento, setLista] = useState([
        {
            id: 0,
            nomePosto: '',
            quantidadeAbastecida: '',
            valorPago: '',
            date: ''
        }
    ]);

    useEffect(() => {
        RecuperaDadosStorage();
    }, []);


    async function RecuperaDadosStorage() {
        try {
            const lista = await AsyncStorage.getItem("ListaAbastecimento");
            if (lista !== null) 
            setLista(JSON.parse(lista));
        } catch (error) {
            
        }
    }


    return (
        <View style={estilos.fundo}>
             <Text style={{textAlign:'center'
                        ,paddingTop:15,fontSize:20}}> Lista dos últimos Abastecimentos</Text>

        <ScrollView>
                  
            <FlatList  style={{
                paddingTop:30,
                paddingLeft:15,
                paddingRight:15,
                paddingBottom:20,
                height:300
            }}    
                data={(ListaAbastecimento)}                           
                renderItem={({ item }) => (               
                    <Text style={{backgroundColor: 'gray',
                    textAlign:'center',borderRadius:12,
                    paddingBottom:10,
                    marginBottom:15}}>                       
                        {'\n'}
                        {'Abastecimento: '+item.id+'\n'+'\n'}
                        {'Nome do Posto:' + item.nomePosto + '\n'}
                        {'Quantidade Abastecida:' + item.quantidadeAbastecida +'L'+'\n'}
                        {'Valor Pago:' +'R$'+item.valorPago + '\n'} 
                        {'Data:' + item.date + '\n'+'\n'}                      
                    </Text>
                    )}
                
                keyExtractor={(item) => item.id}
            />
        
    
        </ScrollView>
        <View style={{borderRadius:20,
            backgroundColor:'gray',
            height:200,
            paddingTop:15,
            paddingLeft:15,
            paddingRight:15,
            width:'100%'}}>
                 <Text style={{textAlign:'center'
                        ,paddingTop:15,paddingBottom:15,fontSize:20}}>Informações Gerais</Text>  

                        <View style={{
                        paddingTop:20,paddingBottom:15,width:'100%',borderRadius:12,fontSize:15,backgroundColor:'white'}}>
                        <Text>
                        Quantidade de abastecimentos: {ListaAbastecimento.length+'\n'}
                        Litragem Total abastecida no mês:{litragemTotal}
                        </Text>
                        </View>     
        </View>
        </View>
    );
function litragemTotal(){
    const[total,setTotal] =useState(0);

    ListaAbastecimento.map((quantidadeAbastecida)=>{
        setTotal(total + (parseFloat(quantidadeAbastecida)));
        Console.log({total});
    });
    return(
        <Text>{total}</Text>
        
    )
}
    

}