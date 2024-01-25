import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import Estilo from './estilo';

// export default props => {
export default ({inicial = 0, passo = 1}) => {
  // let numero = props.inicial;
  const [numero, setNumero] = useState(inicial);

  const incremento = () => setNumero(numero + passo);
  const decremento = () => setNumero(numero - passo);

  retrun(
    <>
      <Text style={Estilo.textoG}>2</Text>
      <Button title="+" onPress={incremento} />
      <Button title="-" onPress={decremento} />
    </>,
  );
};
