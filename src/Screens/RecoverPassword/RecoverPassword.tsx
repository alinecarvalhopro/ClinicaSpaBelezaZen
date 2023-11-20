import {styles} from './style';
import {Colors} from '../../Styles/Theme/Colors/Colors';

import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import firebase from '../../Firebase/firebaseConfigs';

export const RecoverPassword = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  const [email, setEmail] = useState('');

  const recoverPassword = () => {
    try {
      if (email) {
        firebase
          .auth()
          .sendPasswordResetEmail(email)
          .then(() => {
            Alert.alert(
              'Enviamos um e-mail de redefinição de senha para você.',
            );
          })
          .then(() => setEmail(''))
          .catch(error => console.log(error));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.recoverPasswordContainer}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/second-logo.png')}
      />
      <View style={styles.recoverPasswordBox}>
        <Text style={styles.title}>Recuperar a senha </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui o seu e-mail cadastrado"
          placeholderTextColor={Colors.grey100}
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          style={styles.recoverPasswordButton}
          onPress={recoverPassword}>
          <Text style={styles.textRecoverPasswordButton}>Enviar</Text>
        </TouchableOpacity>
        <Text style={styles.detailText}>ou</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.textLoginButton}>Retornar ao login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
