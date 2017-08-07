import React from 'react';
import {Platform} from 'react-native';
//import Contacts from './screens/Contacts.js';

import {Tabs, Drawer} from './config/router.js'

const App=()=>{
    if (Platform.OS==='ios'){
        return <Tabs/>;
    }
    return <Drawer/>;
};

export default App;
