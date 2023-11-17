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

import AsyncStorage from '@react-native-async-storage/async-storage';

export const Update = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isWhatsApp, setIsWhatsApp] = useState(false);
  const [password, setPassword] = useState('');

  const logout = async () => {
    try {
      await auth().signOut();

      await AsyncStorage.removeItem('@CLINICASPABELEZAZEN:USERID');

      navigation.navigate('SignIn');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.updateContainer}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/second-logo.png')}
      />
      <View style={styles.updateBox}>
        <Text style={styles.title}>Atualize seus dados</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui o seu nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui o seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui o seu telefone"
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
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.textUpdateButton}>Enviar</Text>
        </TouchableOpacity>
        <View style={styles.signOutDeleteAccountBox}>
          <TouchableOpacity
            style={styles.signOutDeleteAccountButton}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.textSignOutDeleteAccountButton}>
              Excluir conta
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signOutDeleteAccountButton}
            onPress={logout}>
            <Text style={styles.textSignOutDeleteAccountButton}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
