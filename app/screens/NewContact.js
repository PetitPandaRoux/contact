//En premier lieu nous important des éléments de react et react-native
import React, {Component} from 'react';
import {View, Text} from 'react-native'; // Pour créer l'écran.

class NewContact extends Component{
    render(){
        return(
            <View
            style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>NewContact Screen</Text>
            </View>
        );
    }
}

export default NewContact;
