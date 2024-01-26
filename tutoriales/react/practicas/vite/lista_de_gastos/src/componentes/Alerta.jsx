/*
  COMPONENTE ALERTAS
    - Mostrará mensajes desde arriba
        

*/

// React
import React from "react";

// Elementos
import {ContenedorAlerta} from '../elementos/ElementosDeAlerta';

const Alerta = ({$tipo, mensaje}) => {
    return (
        <ContenedorAlerta $tipo={$tipo}>
            <p>{mensaje}</p>
        </ContenedorAlerta>
      );
}
 
export default Alerta;



