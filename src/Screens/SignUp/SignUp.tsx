import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const SignUp = () => {
    const navigation: NativeStackNavigationProp<RootStackParamList> = useNavigation()
    return (
        <View><TouchableOpacity onPress={() => navigation.navigate('SignIn')}><Text>Login</Text></TouchableOpacity></View>
    )
}