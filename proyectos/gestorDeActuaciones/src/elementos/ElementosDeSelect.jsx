// DIFERENTES ELEMENTOS QUE USARÉ PARA DAR ESTILOS AL SELECT QUE USARÉ EN APP.JSX
import styled from "styled-components";
import theme from '../objetos/theme';

const Select = styled.div`

    display:flex;
    justify-content: center;
    align-items: center; 
    gap: 1rem;      
    height: 2rem; 
`;

const ContenedorSelect = styled.div`

    background: ${theme.grisClaro};    
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */

    // Hará que los elementos que muestre el select esten alineados
    position: relative;
    
    width: 89%;
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: ${theme.grisClaro2};
    }

    @media(max-width: 60rem){ /* 950px */
        // width: 55%;        
    }
`;
 
const OpcionSeleccionada = styled.div`  

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 99%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    svg {
        margin-left: 1.25rem; /* 20px */     
        justify-content: right;  
        height: 3rem; 
    }

    // Centro la opcion seleccionada
    @media(max-width: 60rem){ /* 950px */
        svg {    
            height: 2rem; 
        }        
    }
`;
 
const Opciones = styled.div`
    background: ${theme.grisClaro};

    // Ajuste de distancia con la opcion seleccionada
    position: absolute;
    top: 2.3rem; /* 90px */    
    width: 100%;    
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
`;
 
const Opcion = styled.div`

    padding-top: 0.5rem;
    padding-left: 0.5rem;
    display: flex;
    
    svg {
        width: 28px;        
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: ${theme.grisClaro2};
    }
`;

export {Select, ContenedorSelect, OpcionSeleccionada, Opciones, Opcion};