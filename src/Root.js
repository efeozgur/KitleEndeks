import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Main from './components/Main';
import Sonuc from './components/Sonuc';

class Root extends Component {
    render(){
        return(
            <Router>
                <Scene key = 'Root'> 
                    <Scene key = 'Main'  title="Anasayfa" initial component={Main} />
                    <Scene key = 'sonuc' rightTitle="Yeni" onRight={()=>console.log("xxx")} titleStyle={{color:'black'}} title="Sonuç Gösteriliyor" component={Sonuc} />
                </Scene>
            </Router>
        ); 
    }
}

export default Root; 


