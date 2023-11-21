import {styles} from './styles';
import {Colors} from '../../Styles/Theme/Colors/Colors';

import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

interface IInputProps  {
  placeholder: string;
  value: string;
  secureTextEntry?: boolean;
  errorMessage?: string | null;
  onChangeText: any
  isError: boolean
}

export const Input = ({
    placeholder,
    value,
    errorMessage,
    onChangeText,
    isError = false,
  }: IInputProps) => {
    const borderColor = isError ? Colors.red : Colors.grey100;
  
    return (
      <View>
        <TextInput
          style={[styles.textInput, { borderColor }]}
          placeholderTextColor={Colors.grey100}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
        {isError && errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
    );
  };
  