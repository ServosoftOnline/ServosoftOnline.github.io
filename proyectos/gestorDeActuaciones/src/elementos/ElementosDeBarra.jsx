// ELEMENTO QUE CONTIENE LOS ESTILOS DE LA BARRA DE LOS ESTADOS DE LOS TECNICOS

import styled from "styled-components";
import theme from '../objetos/theme'

const Barra = styled.div `
    // background: lightblue;
    padding: 0 1rem; /* 0 32px */      
    
`;

const ParrafoDeLaBarra = styled.p`
    font-weight: bolder;
`;

const Cabecera = styled.div `
background: lightgreen;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    padding-left: 0.5rem;
    padding-right: 1.5rem;   
    margin-top: 1rem;
    font-weight: bolder;

    // Borde
    border: 2px solid green;   

    @media(max-width: 60rem){ /* 950px */            
        font-size: 0.7rem;
    }

`;

const Tecnicos = styled.div `
// background: lightyellow;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-between; 
    padding-left: 0.5rem;
    padding-right: 1.5rem;   
    text-transform: capitalize;

    @media(max-width: 60rem){ /* 950px */            
        font-size: 0.7rem;
    }

`;

const Nombres = styled.p `

`;



export {Barra, ParrafoDeLaBarra, Cabecera, Tecnicos, Nombres};