// DIFERENTES ELEMENTOS QUE USARÉ PARA DAR ESTILOS AL SELECT DE LOS ROLES
import styled from "styled-components";
import theme from '../objetos/theme';

const ContenedorSelect = styled.div`
    background: ${theme.grisClaro};
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */

    // Hará que los elementos que muestre el select esten alineados
    position: relative;

    height: 4rem; /* 64px */
    width: auto;
    padding: 0px 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    // &:hover {
    //     background: ${theme.grisClaro2};
    // }

    @media(max-width: 60rem){ /* 950px */
        width: 100%;        
    }
`;

const ContenedorFiltros = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; // Centrado vertical  
    width: 100%;  
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
 
    // Cuando llegue la ventana a 950px los elementos se colocan en forma de columna y no uno al lado de otro
    @media(max-width: 60rem){ /* 950px */
        flex-direction: column;
        margin-top: 0rem;
        margin-bottom: 0rem;

        & > * {            
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`;
 
const Opcion = styled.div`
    padding: 1.25rem; /* 20px */
    display: flex;   
    
    &:hover {
        background: ${theme.grisClaro2};
    }
`;

export {ContenedorSelect,ContenedorFiltros, Opcion};

