import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { openDatabase, createTable } from './Banco/Conf';
import { useEffect } from 'react';


export default function App() {
 const inciar=()=>{
    // Cria e conecta
    const bd = openDatabase();
    // Criar a tabela
    createTable(bd);
}

useEffect(() => {
  inciar();
}, []);


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
