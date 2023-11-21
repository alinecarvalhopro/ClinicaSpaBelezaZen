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
  Alert,
  ActivityIndicator,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import firebase from '../../Firebase/firebaseConfigs';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const Update = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isWhatsApp, setIsWhatsApp] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  type TUserData = {
    name?: string;
    phoneNumber?: string;
    isWhatsApp?: boolean;
  };

  const update = async () => {
    setLoadingUpdate(true);
    try {
      const user = firebase.auth().currentUser;

      if (user) {
        const userDataToUpdate: Partial<TUserData> = {};
        if (name) userDataToUpdate.name = name;
        if (phoneNumber) userDataToUpdate.phoneNumber = phoneNumber;
        if (isWhatsApp !== null) userDataToUpdate.isWhatsApp = isWhatsApp;

        if (Object.keys(userDataToUpdate).length > 0) {
          await firebase
            .database()
            .ref(`users/${user.uid}`)
            .update(userDataToUpdate);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingUpdate(false);
      setName('');
      setPhoneNumber('');
      setIsWhatsApp(false);
    }
  };

  const recoverPassword = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        await firebase.auth().sendPasswordResetEmail(user.email!);
        Alert.alert('Enviamos um e-mail de redefinição de senha para você.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    setLoadingLogout(true);
    try {
      await firebase.auth().signOut();

      await AsyncStorage.removeItem('@CLINICASPABELEZAZEN:USERID');

      navigation.navigate('SignIn');
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingLogout(false);
    }
  };

  const deleteUser = async () => {
    setLoadingDelete(true);
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        await firebase.database().ref(`users/${user.uid}`).remove();

        await user
          .delete()
          .then(
            async () =>
              await AsyncStorage.removeItem('@CLINICASPABELEZAZEN:USERID'),
          )
          .then(() => navigation.navigate('SignIn'));

        console.log('Usuário excluído com sucesso!');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingDelete(false);
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
        <TouchableOpacity style={styles.updateButton} onPress={update}>
          <Text style={styles.textUpdateButton}>
            {loadingUpdate ? (
              <ActivityIndicator size={20} color={Colors.white} />
            ) : (
              'Enviar dados atualizados'
            )}
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>Mais opções</Text>
        <TouchableOpacity
          style={styles.updatePasswordButton}
          onPress={recoverPassword}>
          <Text style={styles.textUpdatePasswordButton}>Redefinir senha</Text>
        </TouchableOpacity>
        <View style={styles.signOutDeleteAccountBox}>
          <TouchableOpacity
            style={styles.signOutDeleteAccountButton}
            onPress={deleteUser}>
            <Text style={styles.textSignOutDeleteAccountButton}>
              {loadingDelete ? (
                <ActivityIndicator size={20} color={Colors.white} />
              ) : (
                'Excluir conta'
              )}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signOutDeleteAccountButton}
            onPress={logout}>
            <Text style={styles.textSignOutDeleteAccountButton}>
              {loadingLogout ? (
                <ActivityIndicator size={20} color={Colors.white} />
              ) : (
                'Sair'
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
