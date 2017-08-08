import React from 'react';
import {Platform} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';
import {capitalizeFirstLetter} from '../helpers/string';
import {DrawerButton} from '../components/Header';

const LeftDrawerButton =({navigation}) =>{
    if (Platform.OS==='android'){
        return <DrawerButton onPress={() =>navigation.navigate('DrawerOpen')}/>;
    }

    return null;
}

export const ContactsStack=StackNavigator({
    Contact:{
        screen:Contacts,
        navigationOptions:(props)=> ({
            title:'Contacts',
            headerLeft:<LeftDrawerButton {...props}/>
        }),
    },

    Details:{
        screen: Details,
        /*navigationOptions:{
            title:'Details',
        },*/
        navigationOptions:({navigation})=>({
            title:`${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
        }),
    },


});

export const NewContactStack=StackNavigator({
    NewContact:{
        screen:NewContact,
        navigationOptions:(props)=> ({
            title:'New Contact',
            headerLeft:<LeftDrawerButton {...props}/>

        }),
    },
});

export const MeStack=StackNavigator({
    Me:{
        screen:Me,
        navigationOptions:(props)=> ({
            title:'Me',
            headerLeft:<LeftDrawerButton {...props}/>

        }),
    },
});

export const Drawer = DrawerNavigator({
    Contact:{
        screen:ContactsStack,
        navigationOptions:{
            drawerLabel:'Contacts',
        }
    },

    NewContact:{
        screen:NewContactStack,
        navigationOptions:{
            drawerLabel:'New Contact',
        }
    },

    Me:{
        screen:MeStack,
        navigationOptions:{
            drawerLabel:'Me',
        }
    },
});

//On est passé au DrawNavigator déroulant par la gauche.

export const Tabs = TabNavigator({
    Contact:{
        screen:ContactsStack,
        navigationOptions:{
            tabBarLabel:'Contacts',
            tabBarIcon:({tinColor})=><Icon name="md-list" size={35} color={tinColor} />
        },

    },

    NewContact:{
        screen:NewContactStack,
        navigationOptions:{
            tabBarLabel:'New Contacts',
            tabBarIcon:({tinColor})=><Icon name="md-add" size={35} color={tinColor} />
        },
    },

    Me:{
        screen:MeStack,
        navigationOptions:{
            tabBarLabel:'Me',
            tabBarIcon:({tinColor})=><Icon name="md-list" size={35} color={tinColor} />
        },
    },
});

//this.props.navigation.navigate('Details',item)
