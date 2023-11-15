import {styles} from './style';

import React from 'react';
import {View, Image} from 'react-native';

export const Schedules = () => {
  return (
    <View style={styles.schedulesContainer}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/third-logo.png')} />
      </View>
    </View>
  );
};
