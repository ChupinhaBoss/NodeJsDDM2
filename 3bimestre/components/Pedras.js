import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
  Modal,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/css/stylesPedras';

const produtos = [
  { id: '1', nome: 'Mega Charizard X', imgPedra: require('../assets/pedras/charizarditex.png'), imgMega: require('../assets/charx.jpg') },
  { id: '2', nome: 'Mega Charizard Y', imgPedra: require('../assets/pedras/charizarditey.png'), imgMega: require('../assets/chary.jpg') },
  { id: '3', nome: 'Mega Venusaur', imgPedra: require('../assets/pedras/venusaurite.png'), imgMega: require('../assets/venus.jpg') },
  { id: '4', nome: 'Mega Gardevoir', imgPedra: require('../assets/pedras/gardevoirite.png'), imgMega: require('../assets/gard.jpg') },
  { id: '5', nome: 'Mega Blaziken', imgPedra: require('../assets/pedras/blazikenite.png'), imgMega: require('../assets/blaziken.png') },
  { id: '6', nome: 'Mega Lucario', imgPedra: require('../assets/pedras/lucarionite.png'), imgMega: require('../assets/lucario.jpg') },
  { id: '7', nome: 'Mega Mawile', imgPedra: require('../assets/pedras/mawilite.png'), imgMega: require('../assets/mawile.jpg') },
  { id: '8', nome: 'Mega Swampert', imgPedra: require('../assets/pedras/swampertite.png'), imgMega: require('../assets/swampert.jpg') },
  { id: '9', nome: 'Mega Houndoom', imgPedra: require('../assets/pedras/houndoominite.png'), imgMega: require('../assets/houndoom.jpg') },
  { id: '10', nome: 'Mega Heracross', imgPedra: require('../assets/pedras/heracronite.png'), imgMega: require('../assets/hera.jpg') },
  { id: '11', nome: 'Mega Pinsir', imgPedra: require('../assets/pedras/pinsirite.png'), imgMega: require('../assets/pin.jpg') },
  { id: '12', nome: 'Mega Slowbro', imgPedra: require('../assets/pedras/slowbronite.png'), imgMega: require('../assets/slow.jpg') },
  { id: '13', nome: 'Mega Sceptile', imgPedra: require('../assets/pedras/sceptilite.png'), imgMega: require('../assets/scep.jpg') },
  { id: '14', nome: 'Mega Tyranitar', imgPedra: require('../assets/pedras/tyranitarite.png'), imgMega: require('../assets/tyra.jpg') },
  { id: '15', nome: 'Mega Blastoise', imgPedra: require('../assets/pedras/blastoisinite.png'), imgMega: require('../assets/blast.jpg') },
  { id: '16', nome: 'Mega Beedrill', imgPedra: require('../assets/pedras/beedrillite.png'), imgMega: require('../assets/bee.jpg') },
  { id: '17', nome: 'Mega Ampharos', imgPedra: require('../assets/pedras/ampharosite.png'), imgMega: require('../assets/ampharos.jpg') },
  { id: '18', nome: 'Mega Salamence', imgPedra: require('../assets/pedras/salamencite.png'), imgMega: require('../assets/sala.jpg') },
  { id: '19', nome: 'Mega Latias', imgPedra: require('../assets/pedras/latiasite.png'), imgMega: require('../assets/latias.jpg') },
  { id: '20', nome: 'Mega Latios', imgPedra: require('../assets/pedras/latiosite.png'), imgMega: require('../assets/latios.jpg') },
];

export default function Produto() {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const navigation = useNavigation();

  const abrirModal = (item) => {
    setItemSelecionado(item);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setItemSelecionado(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Mega Pedras</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imgPedra} style={styles.img} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
            </View>
            <Button
              title="Pokémon"
              onPress={() => abrirModal(item)}
              color="#eb7515"
            />
          </View>
        )}
      />
      <Button title="Voltar" 
      onPress={() => navigation.goBack()} 
      color="#eb7515"
      />

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={fecharModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            {itemSelecionado && (
              <>
                <Image source={itemSelecionado.imgPedra} style={styles.img} />
                <Text style={styles.modalTitulo2}>{itemSelecionado.nome}</Text>
                <Image source={itemSelecionado.imgMega} style={styles.imgItem} />
              </>
            )}
            <Pressable style={styles.botaoFechar} onPress={fecharModal}>
              <Text style={styles.botaoFecharTexto}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
