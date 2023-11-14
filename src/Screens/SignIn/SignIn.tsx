import {styles} from './style';

import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image, TextInput} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  return (
    <View style={styles.loginContainer}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/second-logo.png')}
      />
      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui o seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui a sua senha"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.textLoginButton}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.detailText}>Ainda não tem cadastro?</Text>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.textRegisterButton}>Cadastre-se</Text>
        </TouchableOpacity>
        <Text style={styles.detailText}>Recurepar a senha</Text>
      </View>
    </View>
  );
};
