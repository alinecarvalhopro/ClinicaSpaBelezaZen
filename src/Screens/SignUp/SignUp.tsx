import {styles} from './style';
import {Colors} from '../../Styles/Theme/Colors/Colors';

import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Switch,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {verifyErroCode} from '../../Error/error';

export const SignUp = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isWhatsApp, setIsWhatsApp] = useState(false);
  const [password, setPassword] = useState('');

  const signUp = async () => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async userCredential => {
        navigation.navigate('SignIn');

        const {uid} = userCredential.user;
        await database().ref(`users/${uid}`).set({
          name: name,
          phoneNumber: phoneNumber,
          isWhatsApp: isWhatsApp,
        });
      })
      .catch(error => {
        const errorCode = error.code;
        let errorMessage = verifyErroCode(errorCode);

        if (errorMessage == null) {
          errorMessage = error.message;
        }
        console.log(errorMessage);
      });
  };

  return (
    <View style={styles.registerContainer}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/second-logo.png')}
      />
      <View style={styles.registerBox}>
        <Text style={styles.title}>Preencha o seu cadastro</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui o seu nome"
          placeholderTextColor={Colors.grey100}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui o seu e-mail"
          placeholderTextColor={Colors.grey100}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui o seu telefone"
          placeholderTextColor={Colors.grey100}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <View style={styles.switchBox}>
          <Text style={styles.switchLabel}>Este número é de WhatsApp?</Text>
          <Switch
            value={isWhatsApp}
            onValueChange={setIsWhatsApp}
            thumbColor={isWhatsApp ? Colors.green100 : Colors.grey50}
          />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui a sua senha"
          placeholderTextColor={Colors.grey100}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.registerButton} onPress={signUp}>
          <Text style={styles.textRegisterButton}>Enviar</Text>
        </TouchableOpacity>
        <Text style={styles.detailText}>Já possui cadastro?</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.textLoginButton}>Retornar ao Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
