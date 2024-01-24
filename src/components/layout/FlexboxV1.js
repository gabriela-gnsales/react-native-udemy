import React from 'react';
import {View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.flexV1}>
      <Quadrado />
      <Quadrado cor="#900" />
      <Quadrado cor="#090" />
      <Quadrado cor="#009" />
    </View>
  );
};

const style = StyleSheet.create({
  flexV1: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000',
  },
});
