import { styles } from './style';

import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

export const SplashScreen = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} />
    </View>
  );
};
