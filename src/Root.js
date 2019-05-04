import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {Main, Sonuc, Hata} from './components';

class Root extends Component {
    render(){
        return(
            <Router>
                <Scene key = 'Root'> 
                    <Scene key = 'main' initial hideNavBar title="Anasayfa"  component={Main} />
                    <Scene key = 'sonuc' hideNavBar rightTitle="Yeni"  titleStyle={{color:'black'}} title="Sonuç Gösteriliyor" component={Sonuc} />
                    <Scene key = 'hata'   titleStyle={{color:'black'}} title="Hata" component={Hata} />
                </Scene>
            </Router>
        ); 
    }
}

export default Root; 


