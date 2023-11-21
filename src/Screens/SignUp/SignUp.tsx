import {styles} from './style';
import {Colors} from '../../Styles/Theme/Colors/Colors';

import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Switch,
  ActivityIndicator,
} from 'react-native';

import {Input} from '../../components/Input/Input';

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
  const [error, setError] = useState<string | null>(null);

  const signUp = () => {
    setLoading(true);

    if (!email || !password || !name || phoneNumber) {
      Alert.alert('Preencha todos os campos e tente novamente');
      setLoading(false);
      return;
    }

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
        Alert.alert(errorMessage!);
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
        <Input
          placeholder="Digite aqui o seu nome"
          value={name}
          onChangeText={(text: string) => {
            setName(text), setError(null);
          }}
          isError={!!error}
          errorMessage={error}
        />
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
          placeholder="Digite aqui o seu telefone"
          value={phoneNumber}
          onChangeText={(text: string) => {
            setPhoneNumber(text), setError(null);
          }}
          isError={!!error}
          errorMessage={error}
        />
        <View style={styles.switchBox}>
          <Text style={styles.switchLabel}>Este número é de WhatsApp?</Text>
          <Switch
            value={isWhatsApp}
            onValueChange={setIsWhatsApp}
            thumbColor={isWhatsApp ? Colors.green100 : Colors.grey50}
          />
        </View>
        <Input
          placeholder="Digite aqui a sua senha"
          value={password}
          onChangeText={(text: string) => {
            setPassword(text), setError(null);
          }}
          isError={!!error}
          errorMessage={error}
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
