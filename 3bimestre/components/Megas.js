import React from 'react';
import styles from '../assets/css/styles';
import { 
StyleSheet, 
Text, 
View, 
TextInput, 
Pressable, 
Image } from 'react-native';

export default function App() {
  const [name, setName] = React.useState('');
  const [imagem, setImagem] = React.useState(require('../assets/allmegas.jpg'));

  //Trocar Imagem
  function trocarImagem(){
    if(imagem == "1"){
      setImagem(require('../assets/charx.jpg'));
    }
    if(imagem == "2"){
      setImagem(require('../assets/chary.jpg'));
    }
    if(imagem == "3"){
      setImagem(require('../assets/venus.jpg'));
    }
    if(imagem == "4"){
      setImagem(require('../assets/gard.jpg'));
    }
    if(imagem == "5"){
      setImagem(require('../assets/blaziken.png'));
    }
    if(imagem == "6"){
      setImagem(require('../assets/lucario.jpg'));
    }
    if(imagem == "7"){
      setImagem(require('../assets/mawile.jpg'));
    }
    if(imagem == "8"){
      setImagem(require('../assets/swampert.jpg'));
    }
    if(imagem == "9"){
      setImagem(require('../assets/houndoom.jpg'));
    }
    if(imagem == "10"){
      setImagem(require('../assets/hera.jpg'));
    } 
    if(imagem == "11"){
      setImagem(require('../assets/pin.jpg'));
    }
    if(imagem == "12"){
      setImagem(require('../assets/slow.jpg'));
    } 
    if(imagem == "13"){
      setImagem(require('../assets/scep.jpg'));
    }
     if(imagem == "14"){
      setImagem(require('../assets/tyra.jpg'));
    }
     if(imagem == "15"){
      setImagem(require('../assets/blast.jpg'));
    }
     if(imagem == "16"){
      setImagem(require('../assets/bee.jpg'));
    }
     if(imagem == "17"){
      setImagem(require('../assets/ampharos.jpg'));
    }
     if(imagem == "18"){
      setImagem(require('../assets/bee.jpg'));
    }
     if(imagem == "19"){
      setImagem(require('../assets/sala.jpg'));
    }
     if(imagem == "20"){
      setImagem(require('../assets/latios.jpg'));
    }
  }

  return (
    <View style={styles.layout}>
      <Text  style={styles.texto}>
      Escreva sua Mega:
      </Text>
      <TextInput style={styles.textInput} onChangeText={(value)=> setImagem(value)}/>

      <View style={styles.layout2}>
        <Pressable>
          <Text style={styles.input} onPress={() => trocarImagem()}>
            Enviar
          </Text>
        </Pressable>
      </View>
      <Image source={imagem}  style={styles.image}/>
    </View>
  );
}
