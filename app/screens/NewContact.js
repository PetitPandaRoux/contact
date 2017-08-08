//En premier lieu nous important des éléments de react et react-native
import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native'; // Pour créer l'écran.
import colors from '../config/colors';
import {TextInput} from '../components/TextInput';

const fields=[
    {placeholder:'First Name', stateKey: 'firstName'},
    {placeholder:'Last Name', stateKey: 'lastName'},
    {placeholder:'Email', stateKey:'email', keyboardType:"email-address"},
];


class NewContact extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    onInputChange=(text,stateKey) =>{
        const mod={};
        mod[stateKey]=text;
        this.setState(mod);
    }
    render(){
        return(
            <ScrollView
                style={{backgroundColor:colors.background}}>
                {
                    fields.map((field)=> (
                        <TextInput
                            key={field.stateKey}
                            onChange={(text)=>this.onInputChange (text,field.stateKey )}
                            {...field}
                        />
                    ))
                }
            </ScrollView>
        );
    }
}

export default NewContact;
