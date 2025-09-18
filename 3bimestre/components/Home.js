import React from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/css/stylesHome';


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
