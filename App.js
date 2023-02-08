import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as yup from 'yup';
import styles from './styles';

export default function App() {
  
  const [email, setEmail] = useState("");
  // pode usar useState(null);
  const [passworld, setPass] = useState("");
  
  
  let schema = yup.object().shape({
    email: yup.string().email(),
    passworld: yup.string().min(4),

  })


  return (
    <View style={styles.container}>
      <TextInput style={styles.email} placeholder='Email' //keyboardType='visible-password'
      keyboardType={passworld}
      onChangeText={(value) => {
        setEmail(value);
        
      }}
      />
      <TextInput style={styles.email} placeholder='Senha'
      secureTextEntry
      onChangeText={(value) => {
        setPass(value);
        
      }}
      />
      
      <Button title='Entrar' onPress={() => {
        console.log(email);
        console.log(passworld);
        
        schema.isValid({
          email: email,
          passworld: passworld
        }).then((isValid) => {
          console.log(isValid);
        })


      }}/>

    </View>
  );
}

