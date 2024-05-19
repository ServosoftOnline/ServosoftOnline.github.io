// ELEMENTO QUE CONTIENE LOS ESTILOS DE LA BARRA DE LOS ESTADOS DE LOS TECNICOS

import styled from "styled-components";
import theme from '../objetos/theme'

const Barra = styled.div `
    background: ${theme.lightSmoke};
    padding: 0 0.5rem; /* 0 32px */  
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 2px solid ${theme.darkerSmoke};
    border-radius: 10px;   
    
`;

const ParrafoDeLaBarra = styled.p`

    // text-decoration: underline;
    // text-underline-offset: 0.3rem;
    font-weight: bolder;

    @media(max-width: 60rem){ /* 950px */            
        font-size: 0.8rem;
    }
`;

const Cabecera = styled.div `

    background: ${theme.mediumSmoke};    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    padding-left: 0.5rem;
    padding-right: 1.5rem;   
    gap: 0.5rem;
    margin-top: 1rem;
    font-weight: bolder;

    // Borde
    border: 1px solid ${theme.darkSmoke};  
    border-radius: 10px 10px 0 0; // Aplico borde redondeado a las esquinas de arriva

    @media(max-width: 60rem){ /* 950px */            
        font-size: 0.6rem;
    }

`;

const Tecnicos = styled.div `

    background: ${theme.smoke};    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-between; 
    text-transform: capitalize;
    padding-left: 0.5rem;
    padding-right: 1.5rem;
    gap: 0.5rem;
    margin-bottom: 1rem; 

    // Borde
    border: 1px solid ${theme.darkSmoke};   
    border-radius: 0 0 10px 10px;  // Aplico borde redondeado a las esquinas de abajo

    @media(max-width: 60rem){ /* 950px */            
        font-size: 0.6rem;
    }

`;

const Nombres = styled.p `
    

`;



export {Barra, ParrafoDeLaBarra, Cabecera, Tecnicos, Nombres};