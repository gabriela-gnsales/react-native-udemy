import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

export default props => {
  //   let nome = 'Teste';
  const [nome, setNome] = useState('Teste');

  return (
    <View>
      <Text>{nome}</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={nome => setNome(nome)}
      />
    </View>
  );
};
