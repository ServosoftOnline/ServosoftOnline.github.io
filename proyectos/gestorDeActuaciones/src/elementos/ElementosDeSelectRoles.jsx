// DIFERENTES ELEMENTOS QUE USARÉ PARA DAR ESTILOS AL SELECT DE LOS ROLES
import styled from "styled-components";
import theme from '../objetos/theme';

const ContenedorRoles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;  
    width: 100%;          
 
    // Cuando llegue la ventana a 950px los elementos se colocan en forma de columna y no uno al lado de otro
    @media(max-width: 60rem){ /* 950px */        
        align-items: stretch;
        margin-bottom: 0rem;
    }
`;

const Titulo = styled.h2 `
    padding-left: 15rem;
    font-size: 1.5rem;
    margin-top: 1.9rem;
    margin-right: 1.5rem;
    color: ${theme.naranja};

    @media(max-width: 60rem){ /* 950px */
        padding-left: 2rem;
        font-size: 1.1rem;
        margin-top: 1rem;
    }
}

`;

const ContenedorSelect = styled.div`
    background: ${theme.grisClaro};    
    display: flex;
    justify-content: space-between;
    padding-right: 15rem;    
    cursor: pointer;
    border-radius: 0.5rem; /* 10px */
    height: 4rem; /* 64px */
    width: 30%;    
    font-size: 1.5rem; /* 24px */
    margin-top: 0.7rem;
    margin-right: 6rem;
    margin-left: 0rem;

    @media(max-width: 60rem){ /* 950px */
        
        margin-right: 1rem;
        width: 35%; 
        height: 35%;
        font-size: 1.1rem;          
        align-items: center;            
        margin-top: 0.8rem;
    }
`;
 
const Opcion = styled.div`
    padding: 1.25rem; /* 20px */
    display: flex;   
    
    &:hover {        
        color: ${theme.naranja};
    }
    
    
`;

export {ContenedorSelect,ContenedorRoles, Titulo, Opcion};