//En premier lieu nous important des éléments de react et react-native
import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native'; // Pour créer l'écran.
import {contacts} from '../config/data.js';
import colors from'../config/colors'; // On importe la liste de contact de notre config.

class Contacts extends Component{
    render(){
        return(

            <FlatList
            style={{backgroundColor:colors.background}}
            data={contacts}
            renderItem={({ item }) =>
            <View><Text>{item.login.username}</Text></View>}
            keyExtractor={(item) =>item.email}
            />
        );
    }
}

export default Contacts;
