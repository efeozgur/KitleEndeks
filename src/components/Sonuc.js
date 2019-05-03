import React from 'react';
import {View, Text} from 'react-native';

class Sonuc extends React.Component {
    constructor(props) {
        super(props);
    }

    hesapla () {
        const {boy, kilo} = this.props; 
        let sonuc = (kilo) / ((boy/100) * (boy/100));
        return sonuc;
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

