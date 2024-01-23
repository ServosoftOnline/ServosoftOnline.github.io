/*
    COMPONENTE QUE PERMITE MOSTRAR MENSAJES EN PANTALLA.
        - Sustituirá a los mensajes mostrados en consola
        

*/

// React
import React, {useState} from "react";
import styled from "styled-components";


// Elementos
import {SlideDown, ContenedorAlerta} from '../elementos/ElementosDeAlerta';

const Alerta = ({$tipo, mensaje}) => {
    return (
        <ContenedorAlerta $tipo={$tipo}>
            <p>{mensaje}</p>
        </ContenedorAlerta>
      );
}
 
export default Alerta;



