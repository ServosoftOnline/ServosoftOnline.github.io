import React from 'react';
import {useState} from 'react';
// css
import styles from './ContadorFuncional.module.css';

const ContadorFuncional = (props) => {

    const [contador, cambiarContador] = useState(0);            
    return (
        <div>
            <h3>Contador: {contador} </h3>
            <ul>
                <li>componente funcional</li>
                <li>Estilos creados mediante modulos CSS de Create React App</li>
            </ul>
            <button className = {styles.boton} onClick = {() => cambiarContador(contador + props.aumenta)}>Incrementa</button>
            <button className = {styles.boton} onClick = {() => cambiarContador(contador - props.disminuye)}>Disminuye</button>            
        </div>        
      );
}
 
export default ContadorFuncional;