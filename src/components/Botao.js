import React from 'react';
import {Button} from 'react-native';

export default props => {

    // function executar() {
    //     console.warn('Exec #01!');
    // }

    const executar = () => console.warn('Exec #01!');

    return (
        <>
            <Button 
                title='Executar #01!' 
                onPress={executar} {/* passar a função como referência e não a execução da função proriamente dita 'executar()' */}
            />
            <Button 
                title='Executar #02!' 
                onPress={function() {
                    console.warn('Exec #02!');
                }}
            />
            <Button 
                title='Executar #03!' 
                onPress={() => console.warn('Exec #03!')}
            />
        </>
    )
}
