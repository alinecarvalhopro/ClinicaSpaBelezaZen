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
  Keyboard,
  ActivityIndicator,
} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import firebase from '../../Firebase/firebaseConfigs';

export const RecoverPassword = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const recoverPassword = async () => {
    setLoading(true);
    try {
      if (email) {
        await firebase.auth().sendPasswordResetEmail(email);
        Alert.alert('Enviamos um e-mail de redefinição de senha para você.');
        setEmail('');
        Keyboard.dismiss();
      } else {
        Alert.alert(
          'Forneça o e-mail cadastrado para realizar a redefinição de senha.',
        );
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Ocorreu um erro ao enviar o e-mail de redefinição de senha.',
      );
    } finally {
      setLoading(false);
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
          <Text style={styles.textRecoverPasswordButton}>
            {loading ? (
              <ActivityIndicator size={20} color={Colors.white} />
            ) : (
              'Enviar'
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.textLoginButton}>Retornar ao login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
