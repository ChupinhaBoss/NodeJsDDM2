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
      <Text style={styles.titulo}>TOP 10 MELHORES PERSONAGENS</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.img} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.ranking}>{item.ranking}</Text>
            </View>
            <Button
              title="Detalhes"
              onPress={() => abrirModal(item)}
              color="#bf0814"
            />
          </View>
        )}
      />
      <Button title="Voltar" 
      onPress={() => navigation.goBack()} 
      color="#8f000a"
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
                <Image source={itemSelecionado.img} style={styles.img} />
                <Text style={styles.modalTitulo2}>{itemSelecionado.nome}</Text>
                <Text style={styles.modalRanking}>{itemSelecionado.ranking}</Text>
                <Text style={styles.modalTitulo}>Status:</Text>
                <Image source={itemSelecionado.imgStatus} style={styles.imgStatus} />
                <Text style={styles.modalTitulo}>Item:</Text>
                <Image source={itemSelecionado.imgItem} style={styles.imgItem} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#f7f9fc',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#21355e',
    borderRadius: 12,
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  imgItem: {
    width: 165,
    height: 200,
    borderRadius: 25,
    marginVertical: 20,
  },
  imgStatus: {
    width: 300,
    height: 400,
    borderRadius: 15,
    marginVertical: 20,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#FFF',
  },
  ranking: {
    fontSize: 14,
    color: '#9FF',
  },
  // Modal
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  modalTitulo2: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  modalRanking: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
  },
  botaoFechar: {
    backgroundColor: '#bf0814',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  botaoFecharTexto: {
    color: '#fff',
    fontSize: 16,
  },
});
