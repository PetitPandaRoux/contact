//En premier lieu nous important des éléments de react et react-native
import React, {Component} from 'react';
import {View, Text} from 'react-native'; // Pour créer l'écran.

class Me extends Component{
    render(){
        return(
            <View
            style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Me Screen</Text>
            </View>
        );
    }
}

export default Me;
