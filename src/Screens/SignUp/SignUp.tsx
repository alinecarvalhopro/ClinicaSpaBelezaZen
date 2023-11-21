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
  ActivityIndicator,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import firebase from '../../Firebase/firebaseConfigs';

import {verifyErroCode} from '../../Error/error';

export const SignUp = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isWhatsApp, setIsWhatsApp] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = () => {
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        firebase.database().ref('users').child(userCredential.user.uid).set({
          name: name,
          phoneNumber: phoneNumber,
          isWhatsApp: isWhatsApp,
        });
        navigation.navigate('SignIn');
      })
      .catch(error => {
        const errorCode = error.code;
        let errorMessage = verifyErroCode(errorCode);

        if (errorMessage == null) {
          errorMessage = error.message;
        }
        console.log(errorMessage);
      })
      .finally(() => setLoading(false));
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
          <Text style={styles.textRegisterButton}>
            {' '}
            {loading ? (
              <ActivityIndicator size={20} color={Colors.white} />
            ) : (
              'Enviar'
            )}
          </Text>
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
