import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Home from '../pages/Home';

export default function Header() {
    const navigate = useNavigation()

    return (
        <View style = {styles.header}>
          <TouchableOpacity style = {styles.btnvoltar} onPress = {() => { navigate.navigate(Home) }}>
            <Image
              source={require('../../img/seta.png')}
              style = {styles.voltar}
            />
          </TouchableOpacity>
          <Text style = {styles.textheader}>
            Aula
          </Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    btnvoltar: {
        paddingLeft: 15
    },
    voltar: {
        width: 20,
        height: 20,
    },
    textheader: {
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 'large',
    },
})