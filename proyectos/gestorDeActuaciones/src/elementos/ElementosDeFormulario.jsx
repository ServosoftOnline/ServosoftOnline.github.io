/*
    ELEMENTOS QUE USARÉ EN LOS FORMULARIOS
        
        - Importo:
            - styled components
            - El objeto theme que contiene los colores
            - La imagen svg que pondré en la pagina de inicar sesión creada como componente
            - Igual para la página de crear una cuenta

        - Creo los siguientes elementos:
            - ContenedorFiltros. 
                - Corresponden a la lista donde se indican los tipos de gastos y la fecha en Agregar gasto (App.jsx).

            - Formulario
            - Input
            - InputGrande
            - ContenedorBoton

        - Los exporto por separado
*/


// React
import styled from "styled-components";

// Objetos
import theme from "../objetos/theme";
import { resolucion } from "../objetos/resolucion";

// svg
import imagenIniciarSesion from './../assets/registro.svg?react';
import imagenCrearCuenta from './../assets/login.svg?react';


const ContenedorFiltros = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;   
    margin-top: 1rem;  
    
`;
 
const Formulario = styled.form`
// background: lightblue;

    padding: 0 2.5rem;   
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    // Características de los inputs de dentro del formulario
    input {
        width: 100%;
        text-align: center;
        padding: 0.9rem 0; /* 24px */
        font-family: 'Work Sans', sans-serif;
        &::placeholder {
            color: rgba(0,0,0,.2);
        }
    }
 
    @media(max-width: ${resolucion.movilHorizontal}){ 
        justify-content: start;           
    }

    @media(max-width: ${resolucion.movilVertical}){ 
        padding: 0 0.5rem;   
    }

    
`;

const ContenedorInputs = styled.div`
    border: 1px solid ${theme.mediumSmoke};
    margin-bottom: 0.8rem;
    
    
`;
const Input = styled.input`

    font-size: 1.7rem; 
    text-transform: uppercase;
    border: none;
    border-bottom: 2px solid ${theme.grisClaro};     
 
    @media(max-width: ${resolucion.movilHorizontal}){ 
        font-size: 1.2rem; 
    }

    @media(max-width: ${resolucion.movilVertical}){ 
        font-size: 1.1rem;       
    }
`;
 
const InputGrande = styled(Input)`
    font-size: 3rem; /* 48px */
    font-weight: bold;
`;
 
const ContenedorBoton = styled.div`

    display: flex;
    justify-content: center;
    margin: 2rem 0;  /* 32px */
    padding-top: 2rem;

    @media(max-width: ${resolucion.movilHorizontal}){ 
        margin: 0.5rem 0;  /* 16px */
    }
    
`;

const SvgIniciarSesion = styled(imagenIniciarSesion)`

    width: auto;
    max.height: 6.25rem; /* 100px */
    margin-bottom : 2rem; /* 32px */
    margin-top : 2rem; /* 32px */

    @media(max-width: ${resolucion.movilHorizontal}){
        height: 16rem; 
    }
`;

const SvgCrearCuenta = styled(imagenCrearCuenta)`
    width: 100%;
    max.height: 6.25rem;
    margin-bottom : 1.25rem; 

    @media(max-width: ${resolucion.movilHorizontal}){ 
        height: 16rem; 
    }
`;

export  {ContenedorFiltros, Formulario, ContenedorInputs, Input, InputGrande, ContenedorBoton, SvgIniciarSesion,
        SvgCrearCuenta} ;
