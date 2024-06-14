// ELEMENTOS PARA EL COMPONENTE DIRECCION

import styled from "styled-components";
import theme from "../objetos/theme";
import {resolucion} from "../objetos/resolucion";

const ContenedorDireccion = styled.div`
    
    display: grid;
    grid-template-rows: 20% 1fr;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
`;

const ContenedorArchivoExcel = styled.div`

    display: flex;    
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;

    input {
        font-size: 1.2rem;
        margin-left: 1.5rem;
    }

    @media(max-width: ${resolucion.movilHorizontal}){ 
        font-size: 1rem; /* 16px */ 
        text-align: center;
        
        input {
            text-align: center;
        }
    }

    @media(max-width: ${resolucion.movilVertical}) {              
        
        display: grid;
        grid-template-rows: 1fr 1fr;   

        input {
            font-size: 0.8rem;
            margin-left: 0rem;            
        }
        
    }

`;

const Formulario = styled.form`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 2.5rem;   

    @media(max-width: ${resolucion.movilVertical}) {       
        padding: 0 0.5rem;   
    }
    
`;

const ResultadosImportacion = styled.div`
    
    table {
        border: 1px solid black;
    }

    .cabecera {
        background: ${theme.negro};
        border: 1px solid black;
        text-align: left;
        color: white;       
        padding-right: 1.5rem;  
    }

    td {        
        vertical-align: top;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;        
        text-align: left;
        padding-right: 1.5rem;  
        border: 1px solid black;
    }

    @media(max-width: ${resolucion.movilVertical}) {        
        font-size: 0.6rem;

        .cabecera {
            padding-right: 0rem;  
        }

        td {
            padding-right: 0rem;              
        }
    }

`;

const ContenedorBoton = styled.div`

    display: flex;
    justify-content: center;
    padding: 3rem;

    @media(max-width: ${resolucion.movilHorizontal}){ 
        padding: 2rem;
    }
    
`;

export {ContenedorDireccion, ContenedorArchivoExcel, Formulario, ResultadosImportacion, ContenedorBoton }

