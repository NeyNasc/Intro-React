import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Sorteio from './components/Sorteio';

export default class App extends React.Component{
  constructor (props){
    super (props);
      this.state = {
      number: []
    }
  }
  generateRandomNumber(){
    let n = [];

    for(var i = 1; i <= 6; i++){
      n.push(Math.floor(Math.random() * 60) + "," + "  ");
    }

    this.checkRepeatedNumbers(n);
  }

  checkRepeatedNumbers(array){
    for(var b = 1; b < array.length; b++){
      let exists = array.indexOf(array[b], b+1)
      if(exists != -1 || array[b] == 0){
        array[b] = Math.floor(Math.random() * 60) + "," + "  ";
      }
    }

    this.setState({
      number: array
    })
  }
  render (){
    return (
      <View style = {estilos.tela}>
      <Cabecalho titulo={"Mega-sena"}/>
      <Sorteio />
      </View>
    );
  }  
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 25,
    alignItems: 'center'
  }
});