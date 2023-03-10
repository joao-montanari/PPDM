import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';
import Aula01 from './Aula01';
import Aula02 from './Aula02';
import Aula03 from './Aula03';

export default function Home(){
    const navigate = useNavigation()

    return(
        <>
            <View style = {styles.header}>
                <TouchableOpacity style = {styles.btnvoltar} onPress = {() => { navigate.navigate(Login) }}>
                    <Image
                        source={require('../../img/seta.png')}
                        style = {styles.voltar}
                    />
                </TouchableOpacity>
                <Text style = {styles.textheader}>
                    Home
                </Text>
            </View>
            <View style = {styles.container}>
                <TouchableOpacity style = {styles.btn} onPress = {() => { navigate.navigate(Aula01) }}>
                    <Text style = {styles.btntext}>
                        AULA 01
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn} onPress = {() => { navigate.navigate(Aula02) }}>
                    <Text style = {styles.btntext}>
                        AULA 02
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn} onPress = {() => { navigate.navigate(Aula03) }}>
                    <Text style = {styles.btntext}>
                        AULA 03
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
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
    btn: {
        textAlign: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#1b98e0',
        borderRadius: 3,
        height: 40,
        width: 350,
    },
    btntext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 'large'
    },
})