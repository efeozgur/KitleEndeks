import React, { Component } from 'react';
import { View, Image, TextInput, Dimensions, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Buton from './Buton';


const { width } = Dimensions.get('window');

class Main extends Component {

    state = {
        boy: 0,
        kilo: 0,
    }

    render() {

        const { containerStyle, subContainerStyle, textInputStyle } = styles;
        return ( 
            <View style={containerStyle}>
                <Text style={{backgroundColor:'lightblue',  borderRadius:10, padding:10,  color: '#fff', fontWeight:'bold', fontSize: 20, marginBottom: 40, marginTop:30, }}>Vücut Kitle Endeksi V1.0</Text>
                <View style={subContainerStyle}>

                    <TextInput
                        onChangeText={boy => this.setState({ boy })}
                        keyboardType='numeric'
                        placeholderTextColor='gray'
                        placeholder="Boyunuz (Örn. 185)"
                        style={textInputStyle}
                    />

                    <TextInput
                        onChangeText={kilo => this.setState({ kilo })}
                        keyboardType='numeric'
                        placeholderTextColor='gray'
                        placeholder="Kilonuz (Örn. 80)"
                        style={textInputStyle}
                    />
                    <Buton onPress={() => {
                        const { boy, kilo } = this.state;
                        if (boy > 0 && kilo > 0) {
                            Actions.sonuc({ boy: this.state.boy, kilo: this.state.kilo })

                        } else {
                            Actions.hata();
                        }
                    }}
                        butonText="HESAPLA" />
                    <View style={subContainerStyle}>

                        <Image source={require('../img/logo.png')} />
                    </View>



                </View>
            </View>
        );
    }
}


styles = {
    containerStyle: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    subContainerStyle: {
        marginTop: 1,
        justifyContent: 'flex-start',
        //alignItems:'stretch'
    },

    textInputStyle: {
        width: width * 0.44,
        borderRadius: 5,
        marginTop: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray',
        paddingLeft: 20,

    }

}

export { Main }; 