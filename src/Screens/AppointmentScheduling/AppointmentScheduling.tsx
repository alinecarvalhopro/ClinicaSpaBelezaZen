import {styles} from './style';

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Linking} from 'react-native';

export const AppointmentScheduling = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  const openWhatsApp = () => {
    const phoneNumber = '5511900000000';
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
  };

  return (
    <View style={styles.appointmentSchedulingContainer}>
      <View style={styles.appointmentSchedulingHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/images/third-logo.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.appointmentSchedulingBannerBox}>
        <Image
          style={styles.appointmentSchedulingImageBanner}
          source={require('../../assets/images/banner-appointment-shedule.png')}
        />
        <View style={styles.appointmentSchedulingBannerBoxTitle}>
          <Text style={styles.appointmentSchedulingBannerTitle}>
            Agendamento de consulta
          </Text>
        </View>
      </View>
      <View style={styles.notificationBox}>
        <Text style={styles.notificationText}>
          Em breve, você poderá realizar e visualizar seus agendamentos aqui.
        </Text>
        <Text style={styles.notificationText}>
          Enquanto isso, para agendamento de consultas, entre em contato conosco
          por telefone ou WhatsApp.
        </Text>
        <Text style={styles.notificationText}>
          Estamos ansiosos para atendê-lo em breve!
        </Text>
        <TouchableOpacity onPress={openWhatsApp}>
          <Image
            style={styles.whatsAppButton}
            source={require('../../assets/images/whatsApp.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
