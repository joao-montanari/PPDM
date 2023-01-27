import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Login from './Login';
import RandomImage from '../components/RandomImage';

export default function Home() {
  const navigate = useNavigation()
  const [estado, setEstado] = useState(false)
  const [randomID, setRamdomID] = useState(0)

  function Voltar() {
    navigate.navigate(Login);
  }

  return (
      <>
        <View style = {styles.header}>
          <TouchableOpacity style = {styles.btnvoltar} onPress = {() => Voltar()}>
            <Image
              source={require('../../img/seta.png')}
              style = {styles.voltar}
            />
          </TouchableOpacity>
          <Text style = {styles.textheader}>
            Área Interna
          </Text>
        </View>
        <View style={styles.container}>
          {
            estado? <RandomImage number = {randomID} /> : null
          }
          <TouchableOpacity onPress={() => {setEstado(!estado), setRamdomID(Math.floor(Math.random() * (200 - 1) + 1)) }}>
            <Image
              source={require('../../img/imageicon.png')}
              style = {styles.imageicon}
            />
          </TouchableOpacity>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.94,
    backgroundColor: '#efeef5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  textheader: {
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 'large',
  },
  btnvoltar: {
    paddingLeft: 15
  },
  voltar: {
    width: 20,
    height: 20,
  },
  imageicon: {
    width: 100,
    height: 100
  }
});