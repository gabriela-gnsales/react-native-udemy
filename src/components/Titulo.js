import React, {Fragment} from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default props => {
    return (
        // <>
        //     <Text style={Estilo.textoG}>{props.principal}</Text>
        //     <Text>{props.secudario}</Text>
        // </>

        // <React.Fragment key='1'>
        //     <Text style={Estilo.textoG}>{props.principal}</Text>
        //     <Text>{props.secudario}</Text>
        // </React.Fragment>

        <Fragment key='1'>
            <Text style={Estilo.textoG}>{props.principal}</Text>
            <Text>{props.secudario}</Text>
        </Fragment>
    )
}