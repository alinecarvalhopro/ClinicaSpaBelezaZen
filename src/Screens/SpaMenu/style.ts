import {StyleSheet} from 'react-native';
import {Colors} from '../../Styles/Theme/Colors/Colors';

export const styles = StyleSheet.create({
  spaMenuContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },
  spaMenuHeader: {
    width: '100%',
    height: 120,
    padding: 16,
    paddingTop: 0,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaMenuBannerBox: {
    maxWidth: '100%',
    maxHeight: 250,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaMenuImageBanner: {
    maxWidth: '100%',
    maxHeight: 200,
    resizeMode: 'cover',
  },
  spaMenuBannerBoxTitle: {
    width: 330,
    height: 130,
    margin: 20,
    backgroundColor: Colors.green30,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaMenuBannerTitle: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 22,
    color: Colors.blue,
  },
  appointmentInfoBox: {
    width: '100%',
    minHeight: 100,
    borderTopColor: Colors.green60,
    borderTopWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appointmentInfoText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 14,
    color: Colors.grey100,
    textAlign: 'center',
  },
});
