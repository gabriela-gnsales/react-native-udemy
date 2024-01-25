import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import Estilo from '../estilo';

export default class Mega extends Component {
  state = {
    qtdNumeros: this.props.qtdNumeros,
  };

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       qtdNumeros: props.qtdNumeros + 1000,
  //     };
  //   }

  alterarQtdNumero(qtd) {
    this.setState({qtdNumeros: qtd});
  }

  render() {
    return (
      <>
        <Text style={Estilo.textoG}>
          Gerador de Mega-Sena {this.state.qtdNumeros}
        </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="Quantidade de nºs"
          value={this.state.qtdNumeros}
          //   onChangeText={qtd => this.alterarQtdNumero(qtd)}
          onChangeText={this.alterarQtdNumero}
        />
      </>
    );
  }
}
