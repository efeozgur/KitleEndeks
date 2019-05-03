import React from 'react';
import {TouchableOpacity, Text, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Buton =({onPress, butonText})=>{
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{justifyContent:'center', alignItems:'center', backgroundColor:'lightblue', width: width * 0.44,marginTop:10, padding:10, borderRadius:5 }}>
            <Text>{butonText}</Text>
        </TouchableOpacity>
    );
}



export default Buton; 