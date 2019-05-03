import React from 'react';
import { View, Image, TextInput, Dimensions, Text } from 'react-native';
import Buton from './Buton';
import { Actions } from 'react-native-router-flux';


const { width, height } = Dimensions.get('window');

class Main extends React.Component {


    renderButton(holder) {
        const { textInputStyle } = styles;
        return (
            <TextInput keyboardType='numeric' placeholderTextColor='gray' placeholder={holder} style={textInputStyle} />
        );
    }


    render() {
        const { containerStyle, subContainerStyle, textInputStyle } = styles;
        return (
            <View style={containerStyle}>

                <View style={subContainerStyle}>

                    <Image source={require('../img/logo.png')} />
                </View>
                <View style={subContainerStyle}>
                    {this.renderButton("Boyunuz (Örn. 185)")}
                    {this.renderButton("Kilonuz (Örn. 80)")}

                    <Buton onPress={()=>Actions.sonuc()} butonText="HESAPLA"/>


                    
                </View>



            </View>

        );
    }
}


styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    subContainerStyle: {
        flex: 2,
        flexDirection: 'column',
        marginTop: 20,
        justifyContent: 'center'

    },

    textInputStyle: {
        width: width * 0.44,
        borderRadius: 5,
        marginTop: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray',

    }

}

export default Main; 