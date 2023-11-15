import {StyleSheet} from 'react-native';
import {Colors} from '../../Styles/Theme/Colors/Colors';

export const styles = StyleSheet.create({
  schedulesContainer: {
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
  }
})