// CONTIENE TODOS LOS ELEMENTOS QUE USARE EN LOS DIFERENTES HEADER Y LOS EXPORTO POR SEPARADO

import styled from "styled-components";
import theme from "../objetos/theme";

const Header = styled.div`

    background: ${theme.grisClaro2};
    display: flex;
    justify-content: space-between;
    width: auto;    
    border-bottom: 1px solid ${theme.grisOscuro};
    margin-bottom: 1rem;
    align-items: center;    
    
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

    @media(max-width: 48rem) {  /* 768px */  
        
        margin-bottom: 0rem;         
        padding-left: 0rem;
        padding-right: 0rem;   
    }
    
`;

const ContenedorTitulos = styled.div`

    display: flex; 
    align-items: center;         
    font-weight: bold;
    margin-left: 0.5rem;
    gap: 1rem;

    @media(max-width: 48rem) {  /* 768px */
        
        margin-left: 0rem;
        padding: 0.5rem;
        gap: 2.5rem; /* Asegura un espacio reducido en pantallas pequeñas */
        
        h2 {
            font-size: 1.3rem;
        }
    }
`;

const ContenedorTituloJornada = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

    @media(max-width: 48rem) {  /* 768px */

        align-self: baseline;
        gap: 0.2rem; /* Reduce el espacio entre los elementos */
        flex-direction: column;  
    }
`;

const Titulo = styled.h2`

    text-transform: capitalize;    
    margin-left: 1rem;            

    @media(max-width: 48rem) {  /* 768px */        
        font-size: 1.3rem; /* 32px */  
        margin: 0rem; 
        padding-top: 0.5rem;               
    }
`;

// Los párrafos son para inicio y fin de jornada
const ParrafoVerde = styled.p`

    color: ${theme.verdeIcono};

    @media(max-width: 60rem){ /* 950px */
        font-size: 1.5rem; /* 16px */          
    }

    @media(max-width: 48rem) {  /* 768px */        
        font-size: 1rem; 
        margin-top: 0rem; 
    }
`;

const ParrafoRojo = styled.p`
    color: ${theme.rojoIcono};

    @media(max-width: 60rem){ /* 950px */
        font-size: 1.5rem; /* 16px */          
    }

    @media(max-width: 48rem) {  /* 768px */        
        font-size: 1rem; 
        margin-top: 0.2rem;
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

    @media(max-width: 60rem){ /* 950px */
        gap: 0.3rem; 
    }

    @media(max-width: 48rem) {  /* 768px */        
        margin-top: 0.5rem;
    }
    
`;

const Links = styled.div`

    @media(max-width: 48rem) {  /* 768px */        

        background: ${theme.azulBlanco};
        display: flex;
        flex-direction: column;        
        width: 100%;
        padding: 1rem;

        svg {
            margin-left: auto; /* Esto empuja el SVG a la derecha */
            padding-right: 0.5rem;
        }

        a {
            color: ${theme.grisAzulado1};
            border-bottom: 2px solid ${theme.grisClaro};
            text-decoration: none;            
            padding: 0.5rem;

            &:hover {
                color: ${theme.azulBlanco}; 
                background: ${theme.grisAzulado1};
              }
        }  
    }
  
`;

const EnlaceIniciarJornada = styled.p`

    @media(max-width: 48rem) {  /* 768px */   

        color: ${theme.verdeIcono};
        cursor: pointer;
        margin: 0px;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
    }
`;

const EnlaceFinalizarJornada = styled.p`

    @media(max-width: 48rem) {  /* 768px */   

        color: ${theme.rojoIcono};
        cursor: pointer;
        margin: 0px;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
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

 
export  {Header, ContenedorHeader, ContenedorTitulos, ContenedorTituloJornada, ParrafoVerde, ParrafoRojo, Titulo,
        TodosLosBotones, ContenedorBotones, Links, EnlaceIniciarJornada, EnlaceFinalizarJornada, ContenedorArchivoExcel};