import { StyleSheet, View } from 'react-native'
import Botao from '../components/Botao'
import Header from '../components/Header'

export default function Aula03() {
    function Login(){
        console.log('Entrando...');
    }
    function Logout(){
        console.log('Saindo...');
    }

    return (
        <>
            <Header/>
            <View style = {styles.container}>
                <Botao type='warn' icon='login' direction='direita' onPress={Login}>Login</Botao>
                <Botao icon='logout' onPress={Logout}>Logout</Botao>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#efeef5',
        // alignItems: 'center',
        // justifyContent: 'center',
    }
})