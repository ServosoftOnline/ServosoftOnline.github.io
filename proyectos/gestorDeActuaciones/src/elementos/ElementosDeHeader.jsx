// CONTIENE TODOS LOS ELEMENTOS QUE USARE EN LOS DIFERENTES HEADER Y LOS EXPORTO POR SEPARADO

import styled from "styled-components";
import theme from "../objetos/theme";

const Header = styled.div`
    background: ${theme.grisClaro2};
    width: auto;    
    border-bottom: 1px solid ${theme.grisOscuro};
    margin-bottom: 1rem;
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
        
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.5rem;         
    }
    
`;

// const ContenedorTitulos = styled.div `

//     display: flex; 
//     align-items: center;       

//     p{
//         font-weight: bold;
//         margin-left: 0.5rem;
//     }    

//     @media(max-width: 48rem) {  /* 768px */        
                
//         flex-direction: column;

//         p {
//             padding: 0rem;
//             margin: 0rem;
//         }    
//     }
    
// `;

const ContenedorTitulos = styled.div`

    display: flex; 
    align-items: center;         
    font-weight: bold;
    margin-left: 0.5rem;
    gap: 1rem;

    @media(max-width: 48rem) {  /* 768px */  

        display: block;
        text-align: center;
        gap: 0rem;

        h1, p {
            margin: 0;      /* Elimina el margen por defecto */
            padding: 0;     /* Elimina el padding por defecto */
        }

        h1 {
            margin-top: 0.5rem;
        }
    }
`;


// Los párrafos son para incio y fin de jornada
const ParrafoVerde = styled.p`
    color: ${theme.verdeIcono};

    @media(max-width: 60rem){ /* 950px */
        font-size: 1.5rem; /* 16px */          
    }
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
        font-size: 1.5rem; /* 16px */          
    }

    @media(max-width: 48rem) {  /* 768px */        
        font-size: 1.7rem; /* 32px */          
    }
`;


 
const TodosLosBotones = styled.div `
    display: flex;
    align-items: center;  
    
    @media(max-width: 60rem){ /* 950px */
        flex-direction: column; 
    }

    @media(max-width: 48rem) {  /* 768px */        
        display: none;
    }

`;

const ContenedorBotones = styled.div` 

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem;  

    @media(max-width: 48rem) {  /* 768px */        
        margin-top: 0.5rem;
    }
    
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

 
export  {Header, ContenedorHeader, ContenedorTitulos, ParrafoVerde, ParrafoRojo, Titulo, TodosLosBotones,
        ContenedorBotones, ContenedorArchivoExcel};