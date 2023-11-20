import {StyleSheet} from 'react-native';
import {Colors} from '../../Styles/Theme/Colors/Colors';

export const styles = StyleSheet.create({
  recoverPasswordContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    padding: 30,
  },
  recoverPasswordBox: {
    width: '100%',
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    color: Colors.blue,
    textAlign: 'left',
    fontFamily: 'Quicksand-Regular',
    fontSize: 22,
  },
  textInput: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderColor: Colors.grey100,
    borderRadius: 4,
    paddingHorizontal: 16,
  },
  recoverPasswordButton: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: Colors.blue,
    borderColor: Colors.blue,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRecoverPasswordButton: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: Colors.white,
  },
  detailText: {
    marginTop: 20,
    color: Colors.grey100,
    textAlign: 'center',
  },
  loginButton: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: Colors.green100,
    borderColor: Colors.green100,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoginButton: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: Colors.blue,
  },

})