import { StyleSheet, Image } from 'react-native';

export default function RandomImage(props){
    return(
        <Image
            source={{uri: `https://picsum.photos/id/${props.number}/200`}}
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