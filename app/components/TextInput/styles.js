import {StyleSheet, Dimensions, Platform} from 'react-native';

const window=Dimensions.get('window');

import colors from '../../config/colors';

export default StyleSheet.create({
    container:{
        marginLeft:20,
        borderBottomColor:colors.border,
        borderBottomWidth: Platform.OS==='ios' ? StyleSheet.hairlineWidth:0,
        marginTop:15,

    },

    input:{
        height:40,
        width:window.width,
    },
});
