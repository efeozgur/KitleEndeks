import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Main from './components/Main';
import Sonuc from './components/Sonuc';



class Root extends Component {
    render(){
        return(
            <Router>
                <Scene key = 'Root'> 
                    <Scene key = 'Main'  title="Anasayfa" initial component={Main} />
                    <Scene key = 'sonuc' rightTitle="Yeni" onRight={()=>console.log("deli")} titleStyle={{color:'black'}} title="Sonuç Gösteriliyor" tabs component={Sonuc} />
                </Scene>
            </Router>
        ); 
    }
}


export default Root; 


