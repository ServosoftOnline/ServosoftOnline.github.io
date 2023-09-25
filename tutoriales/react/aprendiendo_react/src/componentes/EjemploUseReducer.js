import React, {useReducer} from 'react';
import Boton from '../elementos/boton';

// Estado inicial
const contadorInicial = {contador: 0};

// Funcion reducer
const reducer = (estado, accion) => {
    switch (accion.tipo) {
        case 'INCREMENTAR':
            return {contador: estado.contador + 1}
        case 'DISMINUIR':
            return {contador: estado.contador - 1}
    }
}

const EjemploUseReducer = () => {
    const [estado, dispatch] = useReducer(reducer, contadorInicial);

    return (
        <div>
            <h3>Contador: {estado.contador} </h3>
            <Boton
                negro
                marginRight
                onClick = {() => dispatch({tipo: 'INCREMENTAR'})}
            >
                Aumentar            
            </Boton>

            <Boton
                negro
                onClick = {() => dispatch({tipo: 'DISMINUIR'})}
            >
                Disminuir
            </Boton>

            <p>Componente funcional que usa el hook useReduced</p>
            <p>Botones creados mediante styled components</p>                     
        </div> 
    )

}

export default EjemploUseReducer;