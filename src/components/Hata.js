import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Hata = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.textStyle}>Boy ve Kilo değerlerini giriniz... </Text>

        </View>
    );
}

const styles = {
    textStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 50,
        borderRadius: 10,
    }
}


export { Hata }; 