import {StyleSheet} from 'react-native';
import {Colors} from '../../Styles/Theme/Colors/Colors';

export const styles = StyleSheet.create({
  inputContainer: {
position: 'relative'
  },
  textInput: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderColor: Colors.grey100,
    borderRadius: 4,
    paddingHorizontal: 16,
  },
  errorMessage: {
    marginVertical: 5,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    textAlign: 'left',
    color: Colors.red
  },
  eyeMask: {
    position: 'absolute',
    right: 16,
    top: 30
  }
});
