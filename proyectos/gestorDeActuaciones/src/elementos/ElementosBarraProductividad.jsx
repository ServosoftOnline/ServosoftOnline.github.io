// ELEMENTO QUE CONTIENE LOS ESTILOS DE LA BARRA CON EL TOTAL GASTADO EN EL MES

import styled from "styled-components";
import theme from '../objetos/theme'
import {resolucion} from "../objetos/resolucion";

const ContenedorBarraProductividad = styled.div`

    background: ${theme.azulBrillante};
    display: flex;
    justify-content: space-between;
    font-size: 1rem; /* 16px */
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: capitalize;
    padding: 0.3rem 1.5rem;
    color: ${theme.blanco};
 
    // @media(max-width: ${resolucion.movilHorizontal}{ 
    //     font-size: 3rem;
    // }

    @media(max-width: ${resolucion.movilVertical}) {
        // flex-direction: column;
        font-size: 0.7rem;        
        padding: 0.1rem 1rem;
        letter-spacing: 0px;
    }
`;

export {ContenedorBarraProductividad}