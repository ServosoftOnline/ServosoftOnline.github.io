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

const SubContenedorSoloLectura = styled.div `
// background:lightyellow;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;

    div {
        width: 20rem;
    }

    @media(max-width: 60rem){ /* 950px */

        font-size: 0.8rem;
        padding-bottom: 0rem;

        div {
            width: 13.5rem;
        }
    }
`;

const SubContenedor1 = styled.div `
// background: lightgreen;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    margin-bottom: 0.5rem;

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 6;

    input {
        width: 29.5rem;
    }

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.8rem;

        input {
            width: 14.5rem;
        }
    }
`;

const SubContenedor2 = styled.div `
// background:lightblue;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    margin-bottom: 0.5rem;

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 5;

    input {
        width: 29.5rem;
    }

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.8rem;
        grid-template-columns: 1fr 1fr 2fr;

        input {
            width: 11rem;
        }
    }
`;

const SubContenedor3 = styled.div `
// background:grey;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    margin-bottom: 0.5rem;

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 4;

    input {
        text-align: center;
    }

    @media(max-width: 60rem){ /* 950px */
        grid-template-columns: 2fr 1fr 3fr;
        font-size: 0.8rem;
        padding-bottom: 0.5rem;
        input {
            width: 3rem;
        }
    }

`;

const SubContenedor4 = styled.div `
// background:orange;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    margin-bottom: 0.5rem;

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 3;

    @media(max-width: 60rem){ /* 950px */
        grid-template-columns: 2fr 1fr 3fr;
        font-size: 0.8rem;
    }
`;

const Citacion = styled.div `
 background: ${theme.azulBlanco};

    display: grid;    
    grid-template-columns: 1fr 1fr;    
    align-items: center;
    width: 98%;
    padding-bottom: 1rem;
    padding-right: 1rem;
    margin-bottom: 0.5rem;
    gap: 2rem;

    // Borde
    border: 1px solid ${theme.grisAzulado3};
    border-radius: 10px;


    @media(max-width: 60rem){ /* 950px */        
        grid-template-columns: none;
        grid-template-rows: 1fr 1fr;
        font-size: 0.7rem;
        gap: 0rem;
        padding-right: 0rem;
    }

`;

const ContenedorDatePicker = styled.div `
// background: pink;

    display: grid;    
    align-items: center;
    grid-template-columns: 2fr 1fr;
    gap: 0.5rem;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    z-index: 2;

    @media(max-width: 60rem){ /* 950px */
        grid-template-columns: 1fr 2fr;   
        padding-left: 0.3rem;  
        gap: 0.3rem;  
    }
    
`;

const Fecha = styled.div`
// background: lightyellow;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
`;

const Hora = styled.div`
// background: lightgreen;
    display: flex;    
    align-items: center;
    gap: 0.5rem;

    @media(max-width: 60rem){ /* 950px */
        justify-content: start;        
    }
`;

const ContenedorSelectTecnicos = styled.div `
// background: gray;
    display:flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;  
    font-size: 1rem;  
    padding-top: 0.5rem;
    padding-left: 0.45rem;
    height: 2.9rem;

    z-index: 1;

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.65rem;
        padding-left: 0.3rem; 
    }
`;

const TecnicosAsignados = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem;

`;

const ComentariosCoordinacion = styled.div `
// background:red;

    display: grid;
    grid-template-columns: 1fr;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;

    // tamaño especial para el input de comentarios tecnicos. Lo trataré como un text area
    textarea {
        width: 92rem;
        height: 5rem;
        text-align: left;
        vertical-align: top;
    }

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.8rem;

        textarea {
            width: 47rem;
            height: 3rem;
        }
    }
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

export  {ContenedorEditarActuacion, SubContenedorSoloLectura, SubContenedor1, SubContenedor2, SubContenedor3,
        ComentariosCoordinacion, SubContenedor4, TecnicosAsignados, Citacion, ContenedorSelectTecnicos, ContenedorDatePicker, Fecha, Hora, ContenedorBoton } ;
