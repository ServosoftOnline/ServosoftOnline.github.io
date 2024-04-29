/*
    ELEMENTOS QUE USARÉ EN EL FORMULARIO PARA EDITAR ACTUACIONES
*/

import styled from "styled-components";

const ContenedorEditarActuacion = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    padding-left: 0.5rem;
    padding-right: 0.5rem;   

    // Todas las etiquetas que van junto a los inputs van en negrita
    label {
        font-weight: bold;
    } 
`;

const SubContenedorSoloLectura = styled.div `
// background:lightyellow;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

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
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 5;

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

const SubContenedor3 = styled.div `
// background:grey;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 4;

    input {
        text-align: center;
    }

    @media(max-width: 60rem){ /* 950px */
        grid-template-columns: 1fr 1fr 2fr;
        font-size: 0.8rem;           
        padding-bottom: 0.5rem;
        input {
            width: 4.8rem;            
        }
    }
    
`;

const SubContenedor4 = styled.div `
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

const SubContenedor5 = styled.div `
// background:orange;

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
    grid-template-columns: 1fr 1fr 2fr;
        font-size: 0.8rem;           
    }
`;

const SubContenedor6 = styled.div `
// background: salmon;

    display: grid;
    grid-template-columns: 1fr 4fr;             
    
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.6rem;         
        grid-template-columns: none;
        grid-template-rows: 1fr 1fr; 
    }
    
`;

const ContenedorSelectTecnicos = styled.div `
// background: pink;

    display:flex;
    justify-content: space-between;
    align-items: center; 
    gap: 1rem;
    height: 2.9rem;

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

export  {ContenedorEditarActuacion, SubContenedorSoloLectura, SubContenedor1, SubContenedor2, SubContenedor3, 
        SubContenedor4, SubContenedor5, SubContenedor6, ContenedorSelectTecnicos, ContenedorBoton } ;
