import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';
import If from './If';

export default props => {
  const usuario = props.usuario || {};
  return (
    <>
      {/* <If teste={usuario && Object.keys(usuario).length !== 0}> */}
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text>Usuário logado:</Text>
        <Text style={Estilo.textoG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  );
};
