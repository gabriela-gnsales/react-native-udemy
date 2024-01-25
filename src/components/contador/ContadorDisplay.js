import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <View style={style.display}>
      <Text style={[Estilo.textoG, style.displayText]}>{props.num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  display: {
    backgroundColor: '#000',
    padding: 20,
    width: 300,
  },
  displayText: {
    color: '#fff',
  },
});
