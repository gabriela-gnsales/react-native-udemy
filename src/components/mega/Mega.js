import React from "react";
import { Text } from "react-native";

export default class Mega extends React.Component {
  render() {
    // state = {
    //   quantidadeNumeros: this.props.quantidadeNumeros,
    // };

    constructor(props) {
        super(props);

        this.state = {
            quantidadeNumeros: props.quantidadeNumeros + 1000;
        };
    }

    return <Text>Gerador de Mega-Sena {this.state.quantidadeNumeros}</Text>;
  }
}
