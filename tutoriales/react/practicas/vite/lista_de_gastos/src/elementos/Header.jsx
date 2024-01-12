// CONTIENE TODOS LOS ELEMENTOSS QUE USARE EN LOS DIFERENTES HEADER Y LOS EXPORTO POR SEPARADO

import styled from "styled-components";

const Header = styled.div`
    width: 100%;
    padding: 2.5rem; /* 40px */

    // Separo los componentes de forma horizontal y los alineao de forma vertical
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    // Cuando se reduzca el tamaño de la ventana a 950px, separo los componentes de forma horizontal y los pongo a la izquierda
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;
 
const Titulo = styled.h1`
    font-weight: normal;
    text-transform: uppercase;
    font-size: 2.5rem; /* 40px */
    
    // Cuando se reduzca el tamaño de la ventana a 950px, disminuyo el tamaño de la fuente del titulo
    @media(max-width: 60rem){ /* 950px */
        font-size: 2rem; /* 32px */
    }
`;
 
const ContenedorHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
 
    // Invierto el orden de los elementos, centro los elementos. Los div de dentro los pongo al final
    @media(max-width: 60rem){ /* 950px */
        display: flex;
        flex-direction: column-reverse;
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