import React from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>   Mega Evoluções</Text>
      <Image source={require('../assets/stone.png')}  style={styles.image}/>
      <View style={styles.botaoContainer}>
        <Button
          title="Ver Megas"
          onPress={() => navigation.navigate('Megas')}
          color="#eb7515"
        />
      </View>

      <View style={styles.botaoContainer}>
        <Button
          title="Mega Pedras"
          onPress={() => navigation.navigate('Pedras')}
          color="#eb7515"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#351b6e',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 50,
},
titulo: {
  fontSize: 45,
  fontWeight: 'bold',
  marginBottom: 20,
  marginStart: 15,
  color: '#eb7515',
},
botaoContainer: {
    width: '80%',
    marginVertical: 10,
},
image: {
  width: '200px',
  height: '200px'
}

});
