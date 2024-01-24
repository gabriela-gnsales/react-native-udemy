import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Mega from './components/mega/Mega';
// import FlexboxV4 from './components/layout/FlexboxV4';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import ParImpar from './components/ParImpar';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo/';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import CompOficial, {Comp1, Comp2} from './components/Multi';
// import Primeiro from './components/Primeiro';
// import Contador from './components/Contador';

export default () => (
  <SafeAreaView style={style.app}>
    <Mega qtdNumeros={10} />
    {/* <FlexboxV4 /> */}
    {/* <FlexboxV3 /> */}
    {/* <FlexboxV2 /> */}
    {/* <FlexboxV1 /> */}
    {/* <DigiteSeuNome /> */}
    {/* <ListaProdutosV2 /> */}
    {/* <ListaProdutos /> */}
    {/* <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gui.com'}} />
    <UsuarioLogado usuario={{nome: 'Ana'}} />
    <UsuarioLogado usuario={{email: 'carlos@empresa.com'}} />
    <UsuarioLogado usuario={null} />
    <UsuarioLogado usuario={{}} /> */}
    {/* <Familia>
      <Membro nome="Gabriela" sobrenome="Sales" />
      <Membro nome="Jhonatas" sobrenome="Antonelli" />
    </Familia>
    <Familia>
      <Membro nome="Gabriela" sobrenome="Sales" />
      <Membro nome="Jhonatas" sobrenome="Antonelli" />
      <Membro nome="Maria" sobrenome="Silva" />
    </Familia> */}
    {/* <ParImpar num={3} /> */}
    {/* <Diferenciar /> */}
    {/* <ContadorV2 /> */}
    {/* <Pai /> */}
    {/* <Contador inicial={100} passo={13} /> */}
    {/* <Botao /> */}
    {/* <Titulo principal='Cadastro' secundario='Tela de Cadastro do Produto' /> */}
    {/* <Aleatorio min={1} max={10} /> */}
    {/* <MinMax min="3" max={20} /> */}
    {/* quando o componente É exportado por default o nome dele pode ser DIFERENTE, pq pode ser até uma função anônima */}
    {/* <CompOficial /> */}
    {/* quando o componente NÃO É exportado por default o nome dele tem que ser IGUAL, o nome importa */}
    {/* <Comp1 /> */}
    {/* <Comp2 /> */}
    {/* <Primeiro /> */}
  </SafeAreaView>
);

// flexGrow: 1 é igual a flex: 1, só que mais explícito -> permite que o componente ocupe toda a tela, cresça

// justifyContent -> alinhar no eixo principal

// alignItems -> alinhar no eixo cruzado

const style = StyleSheet.create({
  app: {
    flexGrow: 1,
    backgroundColor: '#A00',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
