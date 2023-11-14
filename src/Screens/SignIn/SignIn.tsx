import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const SignIn = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
