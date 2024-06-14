import styled from 'styled-components';
import theme from './../objetos/theme';
import {resolucion} from "../objetos/resolucion";

const Contenedor = styled.div`
    background: #fff;
    width: 99%;    

    // Usar tamaños en rem significa que si cambiar el font size de index.css se ajustaría mejor
    max-width: 120rem;  /* 1920px Resolución FULL HD */    
    height: 90vh; /* 90% del altura */
    max-height: 67.5rem;  /* 1080px */
    overflow-y: auto;   /* scroll */

    // Borde
    box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);    
    border-radius: 1rem; /* 10px */
    border: 1px solid ${theme.grisOscuro};

    margin: auto;
    display: flex;
    flex-direction: column;    
    position: relative;
    z-index: 100;
 
    @media(max-width: ${resolucion.movilHorizontal}){ 
        height: 95vh;
        max-height: none;
    }
`;

export default Contenedor;
