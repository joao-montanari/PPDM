import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';

export default function Alerta(){
    const navigate = useNavigation()

    function Voltar(){
        navigate.navigate(Home);
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
                <TouchableOpacity>
                    <Text>
                        TESTE
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>
                        ALERTA
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
        
    }
})