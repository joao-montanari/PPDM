import { StyleSheet, Image } from 'react-native';

export default function RandomImage(){
    return(
        <Image
            source={require('../../img/snorlax.png')}
            style = {styles.image}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    }
})