// DIFERENTES ELEMENTOS QUE USARÉ PARA DAR ESTILOS AL SELECT DE LOS ROLES

import styled from "styled-components";
import theme from '../objetos/theme';

const ContenedorRoles = styled.div`

    background: ${theme.lightSmoke};
    display: flex;
    justify-content: space-between;        
    align-items: center;  
    width: 100%;  

    border: 2px solid ${theme.mediumSmoke};
    border-radius: 10px 10px 0 0;            

    @media(max-width: 48rem) {  /* 768px */                 
        flex-direction: column;
    }
    
`;

const Titulo = styled.h2 `

    padding-left: 15rem;
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-top: 1.9rem;
    margin-right: 1.5rem;
    color: ${theme.naranja};

    @media(max-width: 60rem){ /* 950px */
        padding-left: 2rem;
        font-size: 0.9rem;
        margin-top: 1rem;
    }

    @media(max-width: 48rem) {  /* 768px */         
        margin-right: 0rem;
        padding-left: 0rem;

    }
}

`;

const ContenedorSelect = styled.div`

    background: ${theme.grisClaro};    
    display: flex;    
    cursor: pointer;
    align-items: center;            
    border-radius: 0.5rem; /* 10px */
    height: 4rem; /* 64px */    
    font-size: 1.3rem; /* 24px */
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: 16rem;

    @media(max-width: 60rem){ /* 950px */

        font-size: 1.1rem;                  
        margin-top: 0.8rem;
        margin-right: 1rem;        
        height: 3.5rem;    
    }

    @media(max-width: 48rem) {  /* 768px */         
        
        font-size: 0.9rem;
        margin-top: 0rem;
        margin-bottom: 1rem;
        margin-right: 0rem;
    }
    
`;
 
const Opcion = styled.div`

    padding: 1.25rem; /* 20px */
    padding-right: 5rem;
    display: flex;  
    text-transform: capitalize; 
    border-radius: 0.5rem; /* 10px */
    height: 1.4rem;
    
    &:hover {        
        color: ${theme.naranja};        
        background: white;
        height: 1.2rem; 
    }

    @media(max-width: 60rem){ /* 950px */
        padding-right: 1.5rem;
    }

    @media(max-width: 48rem) {  /* 768px */         
        padding: 0.8rem;        
    }
    
    
`;

export {ContenedorSelect,ContenedorRoles, Titulo, Opcion};