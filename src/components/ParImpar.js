import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default ({num = 0}) => {
  return (
    <View>
      <Text style={Estilo.textoG}>O resultado é:</Text>
      {num % 2 === 0
        ? <Text style={Estilo.textoG}>Par</Text>
        : <Text style={Estilo.textoG}>Ímpar</Text>
      }
    </View>
  );
};
