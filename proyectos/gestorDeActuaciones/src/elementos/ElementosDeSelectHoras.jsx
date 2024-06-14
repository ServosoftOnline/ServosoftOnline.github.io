// DIFERENTES ELEMENTOS QUE USARÉ PARA DAR ESTILOS AL SELECT DE LAS HORAS

import styled from "styled-components";
import theme from '../objetos/theme';
import {resolucion} from "../objetos/resolucion";

const ContenedorSelect = styled.div`

    background: ${theme.grisClaro};                
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;    
    font-size: 1.1rem;
    cursor: pointer; 
    border: 0.1rem solid black;   
    border-radius: 0.2rem;
    margin: 0.5rem;

    @media(max-width: ${resolucion.movilHorizontal}){ 
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        font-size: 1rem;              
        margin: 0.7rem 0.3rem;;
    }

    @media(max-width: ${resolucion.movilVertical}){    

        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        font-size: 0.8rem; 
        margin: 0.6rem 0.1rem;;
    
    }
`;
 
const Opcion = styled.div`

    display: flex;      
    padding: 0.5rem;    
    text-transform: capitalize;
    border-right: 0.05rem solid black;
    border-bottom: 0.05rem solid black;
    
    &:hover {        
        color: ${theme.naranja};        
        background: ${theme.blanco};
    }

    @media(max-width: ${resolucion.movilHorizontal}){ 
        padding: 0.3rem;    
    }

    @media(max-width: ${resolucion.movilVertical}){  
        padding: 0.1rem 0.3rem;    
        
    }
    
`;

export {ContenedorSelect, Opcion};