import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';


const {width} = Dimensions.get('window');

const Gosterge = ({baslik,icerik, resim}) => {           
    var res="";

    switch (resim) {
        case "zayif":
            res = require('../img/zayif.png');  
            break;            
        case "normal" :
            res = require('../img/normal.png');
            break; 
        case "fazlakilolu":
            res = require('../img/fazlakilolu.png');
            break; 
        case "obez1":
            res=require('../img/obez1.png');
            break; 
        case "obez2":
            res=require('../img/obez2.png');
            break; 
        default:
            break; 
    }

    

        return (
           
               <View style={styles.viewStyle}>                
                <Image 
                    source={res}  
                    style={{marginBottom:10,}} 
                />
                   <Text style={styles.baslikStyle}>{baslik}</Text>
                <Text style={styles.icerikStyle}>
                    {icerik}
                </Text>
                <TouchableOpacity onPress={()=>Actions.main()} style={{borderStyle:'solid', padding:10, borderWidth:1, backgroundColor:'lightblue', borderRadius:10, width:width*0.8, justifyContent:'center', alignItems:'center'}} >
                    <Text> Geri </Text>
                </TouchableOpacity>

            </View>
        );
}


const styles  = {
    viewStyle : {
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    },

    baslikStyle : {
        backgroundColor:'#fff',
        width:'80%',
        borderWidth:1, 
        borderStyle:'dotted',
        borderRadius:5,
        padding:10,
        marginBottom:5, 
        width:width*0.8,
        textAlign:'center'
    },
    icerikStyle : {
        margin:10, 
        borderWidth:1, 
        borderStyle:'dotted',
        borderRadius:5,
        padding:10,
        backgroundColor:'#fff'

    }
}


export default Gosterge; 