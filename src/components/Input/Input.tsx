import {styles} from './styles';
import {Colors} from '../../Styles/Theme/Colors/Colors';

import React, { useState } from 'react';
import {Text, View, TextInput} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IInputProps {
  placeholder: string;
  value: string;
  secureTextEntry?: boolean;
  errorMessage?: string | null;
  onChangeText: any;
  isError: boolean;
}

export const Input = ({
  placeholder,
  value,
  errorMessage,
  onChangeText,
  secureTextEntry,
  isError = false,
}: IInputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(
    !!secureTextEntry,
  );

  const handleOnPressEye = () => {
    setCurrentSecure(current => !current);
  };

  const borderColor = isError ? Colors.red : Colors.grey100;
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.textInput, {borderColor}]}
        placeholderTextColor={Colors.grey100}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={currentSecure}
      />
      {secureTextEntry && (
        <MaterialIcons
        style={styles.eyeMask}
          onPress={handleOnPressEye}
          name={currentSecure ? 'visibility' : 'visibility-off'}
          size={20}
          color={Colors.grey100}
        />
      )}
      {isError && errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};
