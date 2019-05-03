import React from 'react';
import {View, Text} from 'react-native';
import { switchCase } from '@babel/types';


class Sonuc extends React.Component {
    constructor(props) {
        super(props);
    }

    hesapla () {
        const {boy, kilo} = this.props; 
        let sonuc = (kilo) / ((boy/100) * (boy/100));

        if(sonuc<18.5){
            return this.textdegerler("Zayıf")
        } else if(sonuc >=18.5 && sonuc < 20) {
            return this.textdegerler("Normal");
        }
    }


    textdegerler(deger) {
        switch (deger) {
            case "Zayıf":
                return "aşırı derecede zayıfsınız dikkat edin";
            case "Normal":
                return "bu şekilde devam iyisin iyi";
            default:
                break;
        }
    }


    render(){
        return(
            <View>
                
                <Text>{this.hesapla()}</Text>
            </View>
        ); 
    }
}

export default Sonuc; 

