import React from 'react';
import {View, Text} from 'react-native';

import {IService} from '../../../../@Types/databaseSpaServices.types';
import {styles} from './style';
import {Colors} from '../../../../Styles/Theme/Colors/Colors';

interface IServiceSpaCardProps {
  item: IService;
  index: number;
}

export const ServiceSpaCard = ({item, index}: IServiceSpaCardProps) => {
  const backgroundColor = index % 2 === 0 ? Colors.green60 : Colors.white;
  return (
    <View style={[styles.serviceBox, {backgroundColor}]}>
      <Text style={styles.serviceText}>{item.name}</Text>
      <View style={styles.timePriceBox}>
        <Text style={styles.serviceText}>{item.time} min</Text>
        <Text style={styles.serviceText}>R$ {item.price}</Text>
      </View>
    </View>
  );
};
