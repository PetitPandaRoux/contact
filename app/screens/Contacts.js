//En premier lieu nous important des éléments de react et react-native
import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native'; // Pour créer l'écran.
import {contacts} from '../config/data.js';
import colors from '../config/colors'; // On importe la liste de contact de notre config.
import{ListItem} from '../components/ListItem';

class Contacts extends Component{
    handleRowPress=(item) =>{
        this.props.navigation.navigate('Details', item);
    };
    render(){
        return(
            <FlatList
            style={{backgroundColor:colors.background}}
            data={contacts}
            renderItem={({ item }) =>
                <ListItem contact={item} onPress={()=>this.handleRowPress(item)}/>
            }
            keyExtractor={(item) =>item.email}
            />
        );
    }
}

export default Contacts;
