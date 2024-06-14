// ELEMENTO QUE CONTIENE LOS ESTILOS DE LA BARRA CON EL TOTAL GASTADO EN EL MES

import styled from "styled-components";
import theme from './../objetos/theme'
import {resolucion} from "../objetos/resolucion";

const BarraProductividad = styled.div`

    background: ${theme.verdeIcono};
    font-size: 1rem; /* 16px */
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.62rem 2.25rem; /* 10px 40px */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: ${resolucion.movilHorizontal}{ 
        font-size: 14px;
    }

    @media(max-width: ${resolucion.movilVertical}) {
        font-size: 0.6rem;        
    }
`;

export default BarraProductividad;