//En premier lieu nous important des éléments de react et react-native
import React, {Component} from 'react';
import {View, Text, FlatList, ScrollView } from 'react-native'; // Pour créer l'écran.
import {Header, Actions, Info} from '../components/UserDetails';
import {me} from '../config/data.js';
import colors from '../config/colors';
import {PrimaryButton} from '../components/Buttons';

class Me extends Component{
    render(){

        return(
            <ScrollView style ={{backgroundColor:colors.background}}>
                <Header {...me} />
                <PrimaryButton
                    label="Edit Profile"
                    onPress={()=>null}
                />
                <Actions {...me} />
                <Info {...me}/>
            </ScrollView>
        );
    }
}

export default Me;
