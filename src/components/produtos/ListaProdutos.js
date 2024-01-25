import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos';

export default props => {
  function listarProdutos() {
    // pode ser usado o id (índice) gerado pelo map, mas ele é frágil, pois não tem relação direta com o dado
    return produtos.map((produto, indice) => {
      return (
        <Text key={indice}>
          {produto.id}) {produto.nome} tem preço R$ {produto.preco}
        </Text>
      );
    });
  }

  return (
    <>
      <Text style={Estilo.textoG}>Lista de produtos</Text>
      {/* {produtos.map(p => {
        return (
          <Text key={p.id}>
            {p.id}) {p.nome} tem preço R$ {p.preco}
          </Text>
        );
      })} */}
      {listarProdutos()}
    </>
  );
};
