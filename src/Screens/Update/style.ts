import {StyleSheet} from 'react-native';
import {Colors} from '../../Styles/Theme/Colors/Colors';

export const styles = StyleSheet.create({
  updateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: Colors.white,
  },
  updateBox: {
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
  switchBox: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  switchLabel: {
    color: Colors.grey100,
    textAlign: 'left',
  },
  updateButton: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: Colors.blue,
    borderColor: Colors.blue,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUpdateButton: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: Colors.white,
  },
  detailText: {
    marginTop: 20,
    color: Colors.grey100,
    textAlign: 'center',
  },
  signOutDeleteAccountBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signOutDeleteAccountButton: {
    width: '47.5%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: Colors.grey50,
    borderColor: Colors.grey50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSignOutDeleteAccountButton: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: Colors.white,
  },
});
