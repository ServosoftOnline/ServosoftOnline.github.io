// CONTIENE TODOS LOS ELEMENTOS QUE USARE EN LOS DIFERENTES HEADER Y LOS EXPORTO POR SEPARADO

import styled from "styled-components";
import theme from "../objetos/theme";

const Header = styled.div`
    background: ${theme.grisClaro2};
    width: 100%;    
    border-bottom: 1px solid ${theme.grisOscuro};
    margin-bottom: 1rem;  
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    align-items: center;
    
    // Separo los componentes de forma horizontal
    display: flex;
    justify-content: space-between;

    @media(max-width: 60rem){ /* 950px */
        margin-bottom: 0rem;
        padding-bottom: 0rem;
    }
`;

const ContenedorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%; 
    padding-left: 1rem;
    padding-right: 1rem;   
 
    // Coloco los elementos en forma de columna, los centro . Los div de dentro los pongo al final
    @media(max-width: 60rem){ /* 950px */

        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 0.1rem;
        padding-right: 0.1rem;   
        
 
        & > div {
            display: flex;
            margin-bottom: 0.7rem; /* 20px */                       
        }
    }
`;

const ContenedorTitulos = styled.div `

    display: flex; 
    align-items: center;       

    p{
        font-weight: bold;
        margin-left: 0.5rem;
    }

    @media (max-width: 768px) {        
                
        flex-direction: column;

        p {
            padding: 0rem;
            margin: 0rem;
        }
    
    }
    
`;

// Los párrafos son para incio y fin de jornada
const ParrafoVerde = styled.p`
    color: ${theme.verdeIcono};
`;

const ParrafoRojo = styled.p`
    color: ${theme.rojoIcono};
`;
 
const Titulo = styled.h1`

    font-weight: bold;
    text-transform: capitalize;
    font-size: 1.4rem; /* 22.4px */  
    margin-left: 1rem;      
    
    // Cuando se reduzca el tamaño de la ventana a 950px, disminuyo el tamaño de la fuente del titulo
    @media(max-width: 60rem){ /* 950px */
        font-size: 1rem; /* 16px */          
    }
`;

const ContenedorTitulo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
 
const TodosLosBotones = styled.div `
    display: flex;
    align-items: center;    
    

    @media(max-width: 60rem){ /* 950px */
        // flex-direction: column;
        // gap: 0.5rem;
    }


`;

const ContenedorBotones = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem;    
`;

const ContenedorArchivoExcel = styled.div`
 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    witdh: auto

    h3 {
    width: 30%;
    }

    input {
    font-size: 1.2rem;
    margin-left: 1.8rem;
    }

    @media(max-width: 60rem){ /* 950px */
        font-size: 1rem; /* 16px */
    }

`;

 
export {Header, ContenedorHeader, ContenedorTitulos, ParrafoVerde, ParrafoRojo, Titulo, ContenedorTitulo, TodosLosBotones, ContenedorBotones, ContenedorArchivoExcel};