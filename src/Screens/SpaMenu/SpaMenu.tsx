import {styles} from './style';

import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import ListServicesSpa from './components/ListServicesSpa/ListServicesSpa';

export const SpaMenu = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  return (
    <View style={styles.spaMenuContainer}>
      <View style={styles.spaMenuHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/images/third-logo.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.spaMenuBannerBox}>
        <Image
          style={styles.spaMenuImageBanner}
          source={require('../../assets/images/banner-spa-menu.png')}
        />
        <View style={styles.spaMenuBannerBoxTitle}>
          <Text style={styles.spaMenuBannerTitle}>Menu do SPA</Text>
        </View>
      </View>
      <ListServicesSpa />
      <View style={styles.appointmentInfoBox}>
        <Text style={styles.appointmentInfoText}>
          Agendamentos feitos exclusivamente por telefone ou whatsApp
        </Text>
        <Text style={styles.appointmentInfoText}>
          (00) 0000 0000 | (00) 0 0000 0000
        </Text>
      </View>
    </View>
  );
};
