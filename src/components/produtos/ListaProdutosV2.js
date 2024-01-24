import React from 'react';
import {Text, FlatList} from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos';

export default props => {
  const produtoRender = ({item: produto}) => {
    return (
      <Text>
        {produto.id}) {produto.nome} - R$ {produto.preco}
      </Text>
    );
  };

  return (
    <>
      <Text style={Estilo.textoG}>Lista de produtos V2</Text>
      {/*
      Atributos da FlatList:
      data -> p/ ler os dados
      keyExtractor -> função que recebe o item e retorna a chave (id), o id tem que ser string
      renderItem -> função que recebe um objeto que tem o atributo item, que pode ser referenciado p/ outro nome, EX: item: produto
      */}
      <FlatList
        data={produtos}
        keyExtractor={item => `${item.id}`}
        renderItem={produtoRender}
        // renderItem={({item: produto}) => {
        //   return (
        //     <Text>
        //       {produto.id}) {produto.nome} - R$ {produto.preco}
        //     </Text>
        //   );
        // }}
      />
    </>
  );
};
