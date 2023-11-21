import {styles} from './style';
import {Colors} from '../../Styles/Theme/Colors/Colors';

import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';

import {Input} from '../../components/Input/Input';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import firebase from '../../Firebase/firebaseConfigs';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  const login = async () => {
    setLoading(true);

    if (!email || !password) {
      setError('Preencha os campos e tente novamente');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const {user} = userCredential;

      await AsyncStorage.setItem('@CLINICASPABELEZAZEN:USERID', user.uid);

      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      setError('Verifique o email e/ou senha e tente novamente.');
    } finally {
      setLoading(false);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/second-logo.png')}
      />
      <View style={styles.loginBox}>
        <Input
          placeholder="Digite aqui o seu e-mail"
          value={email}
          onChangeText={(text: string) => {
            setEmail(text), setError(null);
          }}
          isError={!!error}
          errorMessage={error}
        />
        <Input
          placeholder="Digite aqui a sua senha"
          value={password}
          onChangeText={(text: string) => {
            setPassword(text), setError(null);
          }}
          secureTextEntry
          isError={!!error}
          errorMessage={error}
        />
        <TouchableOpacity style={styles.loginButton} onPress={login}>
          <Text style={styles.textLoginButton}>
            {loading ? (
              <ActivityIndicator size={20} color={Colors.white} />
            ) : (
              'Entrar'
            )}
          </Text>
        </TouchableOpacity>
        <Text style={styles.detailText}>Ainda não tem cadastro?</Text>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.textRegisterButton}>Cadastre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RecoverPassword')}>
          <Text style={styles.detailText}>Recurepar a senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
