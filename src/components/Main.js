import React, {Component} from 'react';
import { View, Image, TextInput, Dimensions,Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Buton from './Buton';


const { width} = Dimensions.get('window');

class Main extends Component {
    
    state = {
        boy : 0, 
        kilo : 0, 
    }

    render() {
        
        const { containerStyle, subContainerStyle,textInputStyle } = styles;
        return (
            <View style={containerStyle}>
                <Text style={{color:'#F8B473', fontSize:40, marginBottom:40}}>Vücut Kitle Endeksi V1.0</Text>
                <View style={subContainerStyle}>

                    <Image source={require('../img/logo.png')} />
                </View>
                <View style={subContainerStyle}>

                <TextInput 
                    onChangeText = {boy => this.setState({boy})}
                    keyboardType='numeric' 
                    placeholderTextColor='gray' 
                    placeholder="Boyunuz (Örn. 185)"
                    style={textInputStyle} 
                />

                <TextInput 
                    onChangeText = {kilo => this.setState({kilo})}
                    keyboardType='numeric' 
                    placeholderTextColor='gray' 
                    placeholder="Kilonuz (Örn. 80)"
                    style={textInputStyle} 
                />
                
                    
                    <Buton onPress={()=> Actions.sonuc({boy:this.state.boy, kilo :this.state.kilo})}                   
                     butonText="HESAPLA"/>                    
                </View>
            </View>
        );
    }
}


styles = {
    containerStyle: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
    },

    subContainerStyle: {
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
        paddingLeft:20, 

    }

}

export default Main; 