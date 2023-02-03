import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';
import Login from './Login';

export default function Aula02({orientation}){
    const navigate = useNavigation()

    function Voltar(){
        navigate.navigate(Home);
    }

    function deslogar(){
        navigate.navigate(Login);
    }

    return(
        <>
            <View style = {styles.header}>
                <TouchableOpacity style = {styles.btnvoltar} onPress = {() => Voltar()}>
                    <Image
                        source={require('../../img/seta.png')}
                        style = {styles.voltar}
                    />
                </TouchableOpacity>
                <Text style = {styles.textheader}>
                    Aula 02
                </Text>
            </View>
            <View style = {styles.container}>
                <TouchableOpacity style = {styles.btnteste}>
                    <Text style = {styles.textteste}>
                        TESTE
                    </Text>
                </TouchableOpacity>
                <Button
                    title='SAIR'
                    style = {styles.btnalerta}
                    onPress={Alert.alert('Aviso', 'deseja realmente sair do app?', [
                        {text: 'não'},
                        {text: 'sim', onPress: () => deslogar()}
                    ])
                    }
                />
            </View>
            <View style={{backgroundColor: orientation === 'portrait' ? 'blue' : 'red', flex: 0.5}} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.94,
        backgroundColor: '#efeef5',
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
    btnteste: {
        textAlign: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#1b98e0',
        borderRadius: 10,
        height: 40
    },
    textteste: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 'large'
    },
    btnalerta: {
        textAlign: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: 'orange',
        borderRadius: 10,
        height: 40
    },
    textalerta: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 'large'
    }
})