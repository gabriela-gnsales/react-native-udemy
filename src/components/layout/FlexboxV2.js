import React from 'react';
import {View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.flexV2}>
      <Quadrado />
      <Quadrado cor="#900" />
      <Quadrado cor="#090" />
      <Quadrado cor="#009" />
    </View>
  );
};

const style = StyleSheet.create({
  flexV2: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#000',
  },
});
