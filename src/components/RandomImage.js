import { StyleSheet, Image } from 'react-native';

export default function RandomImage(props){
    return(
        <Image
            source={{uri: `https://picsum.photos/id/${props.number}/300/200`}}
            style = {styles.image}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200
    }
})