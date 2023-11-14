import React from 'react';
import {FlatList} from 'react-native';

import {SpaServices} from '../../../../Database/SpaServices';
import {ServiceSpaCard} from '../ServiceSpaCard/ServiceSpaCard';
import {styles} from './style';

const ListServicesSpa = () => {
  return (
    <FlatList
      style={styles.servicesList}
      data={SpaServices}
      renderItem={({item, index}) => (
        <ServiceSpaCard item={item} index={index} />
      )}
    />
  );
};

export default ListServicesSpa;
