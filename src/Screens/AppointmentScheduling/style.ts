import {StyleSheet} from 'react-native';
import {Colors} from '../../Styles/Theme/Colors/Colors';

export const styles = StyleSheet.create({
  appointmentSchedulingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },
  appointmentSchedulingHeader: {
    width: '100%',
    height: 120,
    padding: 16,
    paddingTop: 0,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appointmentSchedulingBannerBox: {
    maxWidth: '100%',
    maxHeight: 250,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appointmentSchedulingImageBanner: {
    maxWidth: '100%',
    maxHeight: 200,
    resizeMode: 'cover',
  },
  appointmentSchedulingBannerBoxTitle: {
    width: 330,
    height: 130,
    margin: 20,
    backgroundColor: Colors.green30,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appointmentSchedulingBannerTitle: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 22,
    color: Colors.blue,
  },
  notificationBox: {
    margin: 30,
    position: 'relative'
  },
  notificationText: {
    marginTop: 20,
    fontFamily: 'Quicksand-Regular',
    fontSize: 18,
    color: Colors.grey100,
    textAlign: 'center',
  },
  whatsAppButton: {
    width: 80,
    height: 80,
    borderRadius: 20,
    position: 'absolute',
    right: 0
  }
});
