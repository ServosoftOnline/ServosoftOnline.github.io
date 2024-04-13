// CONTIENE TODOS LOS ELEMENTOS QUE USARE EN LOS DIFERENTES HEADER Y LOS EXPORTO POR SEPARADO

import styled from "styled-components";
import theme from "../objetos/theme";

const Header = styled.div`
    background: ${theme.grisClaro2};
    width: 100%;    
    border-bottom: 1px solid ${theme.grisOscuro};
    margin-bottom: 1rem;  
    align-items: center; 
    
    // Separo los componentes de forma horizontal
    display: flex;
    justify-content: space-between;
`;

const ContenedorHeader = styled.div`
    background: ${theme.grisClaro2};
    width: 100%;
    display: flex;
    justify-content: space-between;
 
    // Coloco los elementos en forma de columna, los centro . Los div de dentro los pongo al final
    @media(max-width: 60rem){ /* 950px */
        display: flex;
        flex-direction: column;
        align-items: center;
 
        & > div {
            display: flex;
            margin-bottom: 0.9rem; /* 20px */
            justify-content: end;            
        }
    }
`;

 
const Titulo = styled.h1`

    font-weight: bold;
    text-transform: uppercase;
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
 
 
const ContenedorBotones = styled.div`      
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem;
    margin-right: 2rem;
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

 
export {Header, ContenedorHeader, Titulo, ContenedorTitulo, ContenedorBotones, ContenedorArchivoExcel};