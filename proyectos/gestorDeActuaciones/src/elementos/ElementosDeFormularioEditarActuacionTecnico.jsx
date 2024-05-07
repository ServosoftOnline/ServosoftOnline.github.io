/*
    ELEMENTOS QUE USARÉ EN EL FORMULARIO PARA EDITAR ACTUACIONES
*/

import styled from "styled-components";
import theme from "../objetos/theme";

const ContenedorEditarActuacion = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    padding-left: 0.5rem;
    padding-right: 0.5rem;   

    // Todas las etiquetas que van junto a los inputs van en negrita
    label {
        font-weight: bold;
    }
    
    input {
        font-size: 1.1rem;
    }

    textarea {
        font-size: 1.1rem;
    }

    input::placeholder {
        color: ${theme.rojoIntenso};
      }

    @media(max-width: 60rem){ /* 950px */
            
        input {
            font-size: 0.9rem;
        }

        textarea {
            font-size: 0.9rem;
        }
    }
`;

const Formulario = styled.form `

`;
const SubContenedorSoloLectura = styled.div `
background:lightyellow;
    
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    gap: 0.8rem;
    
`;

const SubContenedor1 = styled.div `
background: lightgreen;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;        
    padding-top: 1rem;
    padding-bottom: 1rem;    

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 6;
    
`;

const SubContenedor2 = styled.div `
background:lightblue;

    display: grid;
    grid-template-columns: 1fr; 
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 5;

`;

const SubContenedor3 = styled.div `
background:lightgray;

    display: grid;
    grid-template-columns: 1fr 1fr;    
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 4;
    
`;

const SubContenedor4 = styled.div `
background:lavender;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    label {
        padding-right: 1.5rem;
    }
`;

const SubContenedor5 = styled.div `
// background:lightpink;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 3;    

    @media(max-width: 60rem){ /* 950px */
        grid-template-columns: 2fr 1fr 3fr;
        font-size: 0.8rem;           
    }
`;

const SubContenedor6 = styled.div `
// background: blue;

    display: grid;
    grid-template-columns: 1fr 4fr;   
    align-items: center;                  
    padding-bottom: 1rem;
    padding-right: 1rem;
    gap: 2rem;
    

    @media(max-width: 60rem){ /* 950px */

        grid-template-columns: none;
        grid-template-rows: 1fr 1fr; 
        font-size: 0.7rem;         
        gap: 0rem;        
    }
    
`;

const ContenedorSelectTecnicos = styled.div `
// background: pink;

    display:flex;
    justify-content: start;
    align-items: center; 
    gap: 1rem;
    height: 2.9rem;

    z-index: 1;
`;

const ContenedorDatePicker = styled.div `
    z-index: 2;
`;

const ContenedorBoton = styled.div`
//  background: crimson;

    display: flex;
    justify-content: center;
    margin: 2rem 0;  /* 32px */

    @media(max-width: 60rem){ /* 950px */
        margin: 0.5rem 0;  /* 16px */
    }
    
`;

export  {ContenedorEditarActuacion, Formulario, SubContenedorSoloLectura, SubContenedor1, SubContenedor2, SubContenedor3, 
        SubContenedor4, SubContenedor5, SubContenedor6, ContenedorSelectTecnicos, ContenedorDatePicker, ContenedorBoton } ;
