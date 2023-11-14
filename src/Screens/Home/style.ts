import {StyleSheet} from 'react-native';
import {Colors} from '../../Styles/Theme/Colors/Colors';

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },
  header: {
    width: '100%',
    height: 120,
    padding: 16,
    paddingTop: 0,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerHome: {
    maxWidth: '100%',
    maxHeight: 250,
    resizeMode: 'cover',
  },
  optionsBox: {
    width: '100%',
  },
  buttonGreen: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green60,
  },
  buttonWhite: {
    width: '100%',
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  textButtons: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 22,
    color: Colors.blue,
  },
  addressBox: {
    width: '100%',
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAddress: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 12,
    color: Colors.blue,
    textAlign: 'center',
  },
});
