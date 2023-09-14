import React from 'react';
import {useState} from 'react';

const ContadorApp = (props) => {

    const [contador, cambiarContador] = useState(0);            
    return (
        <div>
            <h3>Contador mediante componente funcional: {contador} </h3>
            <button onClick = {() => cambiarContador(contador + props.aumenta)}>Aumenta</button>
            <button onClick = {() => cambiarContador(contador - props.disminuye)}>Disminuye</button>            
        </div>        
      );
}
 
export default ContadorApp;