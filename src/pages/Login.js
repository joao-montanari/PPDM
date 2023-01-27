import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
      <>
        <View style={styles.header}>
          <Text style={styles.textheader}>
            Login
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.child}>
            <TextInput
              style = {styles.input}
              placeholder = 'Usuário'
              keyboardType = 'text'
              value = {username}
              onChangeText = {(text) => setUsername(text)}
            />
            <TextInput
              style = {styles.input}
              placeholder = 'Senha'
              keyboardType = 'text'
              value = {password}
              secureTextEntry = {true}
              onChangeText = {(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity style = {styles.btn}>
            <Text style = {styles.btntext}>
              ENTRAR
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    backgroundColor: '#efeef5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    width: '100%',
    alignItems: 'center'
  },
  input: {
    height: 40,
    margin: 16,
    padding: 5,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  btn: {
    width: 80,
    height: 40,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b98e0'
  },
  btntext: {
    color: 'white'
  },
  header: {
    flex: 0.05,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  textheader: {
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 'large'
  }
});