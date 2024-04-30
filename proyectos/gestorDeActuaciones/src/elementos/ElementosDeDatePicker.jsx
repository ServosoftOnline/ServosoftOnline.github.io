// CONTIENE TODOS LOS ELEMENTOS QUE USARE EN EL DATE PICKER (CALENDARIO)

import styled from "styled-components";
import theme from "./../objetos/theme";

const ContenedorInput = styled.div`
    // Permite mostrar el contenedor para despues ocultarlo
    position: relative;    
 
    input {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Work Sans', sans-serif;
        box-sizing: border-box;
        background: ${theme.grisClaro};
        border: none;
        cursor: pointer;
        border-radius: 0.625rem; /* 10px */
        height: 2rem; /* 32px */
        width: 100%;
        padding: 0 1.25rem; /* 20px */
        font-size: 1rem; /* 24px */
        text-align: center;        
        outline: none;              
    }
 
    // Reglas para react date picker (rpd)
    .rdp {
        // Fuerzo a que la posición este arriva de los inputs
        position: absolute;
    }
 
    .rdp-months {
        display: flex;
        justify-content: center;
    }
 
    .rdp-month {
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        border-radius: 10px;
    }
 
    @media (max-width: 60rem) /* 950px */ {        
        
        & > * {
            width: 100%;
        }
    }
`;

export {ContenedorInput};