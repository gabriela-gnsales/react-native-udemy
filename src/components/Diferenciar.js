import React from 'react';
import {Text, Platform} from 'react-native';
import Estilo from './estilo';

export default props => {
  if (Platform.OS === 'android') {
    return <Text style={Estilo.textoG}>Android</Text>;
  } else if (Platform.OS === 'ios') {
    return <Text style={Estilo.textoG}>iOS</Text>;
  } else {
    return <Text style={Estilo.textoG}>{Platform.OS}</Text>;
  }
};
