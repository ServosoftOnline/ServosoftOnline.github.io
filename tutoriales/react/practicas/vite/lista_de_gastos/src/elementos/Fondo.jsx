/*
    MONTAMOS EL FONDO DE LA APP

        - Archivo que contiene todos los componentes que tendrá el fondo
        - Añado los estilos en este mismo archivo
        - Los componentes serán
            - Svg. Contiene 
            - PuntosArriba. Que contiene los puntos que van arriba a la
            - PuntosAbajo
        - Les añado los estilos en este mismo archivo
    

*/

// React
import React from "react";
import styled from "styled-components";

// Importo la imagen puntos.svg como un componente
import Puntos from './../assets/puntos.svg?react';

// Estilos para las ondas
const Ondas = styled.svg`

    // Ancho y alto de la onda
    height: 50vh;
    width: 100%;

    // Coloco la onda de forma fija en la parte de abajo
    position: fixed;
    bottom: 0;
    z-index: 0;

    // Cambio del color de la onda
    path {
        fill: rgba(135,182,194, .15);
    }
`;


// Estilos para los puntos de arriba. Se aplican al componente Puntos mediante la funcion styled
const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */

    // Cuando se reduzca el tamaño de la ventana a 950px, desaparecen los puntos
    @media(max-width: 60rem){ /* 950px */
        display: none;
    }
`;

// Estilos para los puntos de PuntosAbajo. Se aplican al componente Puntos mediante la funcion styled
const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */

    // Cuando se reduzca el tamaño de la ventana a 950px, desaparecen los puntos
    @media(max-width: 60rem){ /* 950px */
        display: none;
    }

    
`;

// Creo el componente
const Fondo = () => {
    return (
        <>
            <PuntosArriba />
            <PuntosAbajo />
        </>
      );
}
 
export default Fondo;