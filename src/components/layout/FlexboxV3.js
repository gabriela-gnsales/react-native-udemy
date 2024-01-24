import React from 'react';
import {View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.flexV3}>
      <Quadrado />
      <Quadrado cor="#900" lado={20} />
      <Quadrado cor="#090" lado={30} />
      <Quadrado cor="#009" lado={40} />
    </View>
  );
};

const style = StyleSheet.create({
  flexV3: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    height: 350,
    width: '100%',
    backgroundColor: '#000',
  },
});
