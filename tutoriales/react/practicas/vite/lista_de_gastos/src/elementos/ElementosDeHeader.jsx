// CONTIENE TODOS LOS ELEMENTOS QUE USARE EN LOS DIFERENTES HEADER Y LOS EXPORTO POR SEPARADO

import styled from "styled-components";

const Header = styled.div`
<<<<<<< HEAD
background: green;
    width: auto;
    padding: 2rem; /* 40px */
=======

    width: 100%;
    padding: 1.5rem; /* 40px */
>>>>>>> 65886bb7694fd88bbb1e708f6e1141632e143d93
    
    // Separo los componentes de forma horizontal y los alineo de forma vertical
    display: flex;
    justify-content: space-between;
<<<<<<< HEAD
    
    // Cuando se reduzca el tamaño de la ventana a 950px, separo los componentes de forma horizontal y los pongo a la izquierda
    @media(max-width: 60rem){ /* 950px */
        height: 9rem; /* 144 px */
        padding: 0.5rem; /* 8px */
=======
    align-items: center;
 
    // Cuando se reduzca el tamaño de la ventana a 950px, separo los componentes de forma horizontal y los pongo a la izquierda
    @media(max-width: 60rem){ /* 950px */
        padding: 0.8rem; /* 12.8px */

>>>>>>> 65886bb7694fd88bbb1e708f6e1141632e143d93
    }
`;
 
const Titulo = styled.h1`

    font-weight: normal;
    text-transform: uppercase;
    font-size: 2.0rem; /* 32px */
    
    // Cuando se reduzca el tamaño de la ventana a 950px, disminuyo el tamaño de la fuente del titulo
    @media(max-width: 60rem){ /* 950px */
        font-size: 1.7rem; /* 32px */
        margin-bottom: 10px;
    }
`;
 
const ContenedorHeader = styled.div`
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
            margin-bottom: 1.25rem; /* 20px */
            justify-content: end;
            
        }
    }
`;
 
const ContenedorBotones = styled.div`  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

 
export {Header, Titulo, ContenedorBotones, ContenedorHeader};