//En premier lieu nous important des éléments de react et react-native
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native'; // Pour créer l'écran.

import {Header, Actions, Info} from '../components/UserDetails';
import colors from '../config/colors';

class Details extends Component{
    render(){
        const contact=this.props.navigation.state.params;

        return(
            <ScrollView style ={{backgroundColor:colors.background}}>
                <Header {...contact} />
                <Actions {...contact} />
                <Info {...contact}/>
            </ScrollView>
        );
    }
}
export default Details;
