import {StyleSheet} from 'react-native';
import { Colors } from '../../../../Styles/Theme/Colors/Colors';

export const styles = StyleSheet.create({
  serviceBox: {
    width: '100%',
    height: 80,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.green60,
  },
  serviceText: {
    marginRight: 8,
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
    color: Colors.blue,
  },
  timePriceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
