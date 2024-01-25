import React from 'react';
import {Text} from 'react-native';

// export default props => {
//     const {min, max} = props;
export default ({min, max}) => {
    max += 10; {/* é possível alterar os valores das props desse jeito, mas NÃO é recomendável -> recomenda-se criar novas variáveis */}
    const delta = max - min + 1
    const numAleatorio = parseInt(Math.random() * delta) + min;
    return (
        <Text>
            Número aleatório gerado entre {max} e {min}: {numAleatorio}
        </Text>
    )
}