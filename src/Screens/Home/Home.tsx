import {styles} from './style';

import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const Home = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  return (
    <View style={styles.homeContainer}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/third-logo.png')} />
      </View>
      <Image
        style={styles.bannerHome}
        source={require('../../assets/images/banner-home.png')}
      />
      <View style={styles.optionsBox}>
        <TouchableOpacity
          style={styles.buttonGreen}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.textButtons}>Menu do SPA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWhite}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.textButtons}>Consulta Nutrólogo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGreen}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.textButtons}>Consulta Dermatologista</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addressBox}>
        <Text>Rua Da Beleza. 11 | Jardim Zen</Text>
        <Text>(00) 0000 0000 | (00) 0 0000 0000</Text>
      </View>
    </View>
  );
};
