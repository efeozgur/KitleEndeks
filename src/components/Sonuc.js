import React from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Gosterge from './Gosterge';

class Sonuc extends React.Component {
    constructor(props) {
        super(props);
    }  


    hesapla () {        
        const {boy, kilo} = this.props; 

   
        
        let sonuc = (kilo) / ((boy/100) * (boy/100));

        if(sonuc<18.5){
            return this.textdegerler("Zayıf")
        } else if(sonuc >=18.5 && sonuc < 24.9) {
            return this.textdegerler("Normal");
        } else if(sonuc >=25 && sonuc <29.9) {
            return this.textdegerler("Fazla Kilolu");
        } else if(sonuc >=30 && sonuc <39.9) {
            return this.textdegerler("Obez");
        } else if(sonuc >= 40) {
            return this.textdegerler("Obez2");
        }
    
    }

 
    textdegerler(deger) {
        switch (deger) {
            case "Zayıf":
                return <Gosterge resim="zayif" baslik = "Zayıf" icerik="Boyunuza göre uygun ağırlıkta olmadığınızı, zayıf olduğunuzu gösterir. Zayıflık, bazı hastalıklar için risk oluşturan ve istenmeyen bir durumdur. Boyunuza uygun ağırlığa erişmeniz için yeterli ve dengeli beslenmeli, beslenme alışkanlıklarınızı geliştirmeye özen göstermelisiniz." />
            case "Normal":
                return <Gosterge resim="normal" baslik = "Normal" icerik="Boyunuza göre uygun ağırlıkta olduğunuzu gösterir. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösteriniz." />              
                
               
            case "Fazla Kilolu" :
                return <Gosterge resim="fazlakilolu" baslik = "Fazla Kilolu" icerik = "Boyunuza göre vücut ağırlığınızın fazla olduğunu gösterir. Fazla kilolu olma durumu gerekli önlemler alınmadığı takdirde pek çok hastalık için risk faktörü olan obeziteye (şişmanlık) yol açar." />
                
              
            case "Obez":
                return <Gosterge resim="obez1" baslik="Şişman (Obez) - I. Sınıf" icerik="Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz." />
         
            case "Obez2":
                return <Gosterge resim="obez2" baslik="Şişman (Obez) - II. Sınıf" icerik ="Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz."/>    
            default:
                return "Yanlış Değer";                
        }
    }


    render(){
        return(
            <View style={styles.viewStyle}>                
                {this.hesapla()}
            </View>
        ); 
    }
}


const styles = {
    viewStyle : {
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle : {
        borderWidth:1, 
        borderStyle:'dotted',
        borderColor:'gray',
        padding:20, 
        margin:10, 
        backgroundColor:'white',
        textAlign:'justify'

    }
}

export {Sonuc}; 

