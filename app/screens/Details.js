//En premier lieu nous important des éléments de react et react-native
import React, {Component} from 'react';
import {View, Text} from 'react-native'; // Pour créer l'écran.

import {Header} from '../components/UserDetails';
import colors from '../config/colors';

class Details extends Component{
    render(){
        const contact=this.props.navigation.state.params;

        return(
            <View style ={{backgroundColor:colors.background}}>
                <Header {...contact} />
            </View>
        );
    }
}
export default Details;
