/*
    ARCHIVO QUE CONTIENE TODOS LOS ELEMENTOS QUE USARÉ PARA MOSTRAR LA LISTA DE GASTOS
        - La usaré para mostrar la lista de gastos y los gastos por categoría
        
*/

import styled from 'styled-components';
import theme from './../objetos/theme';

const Lista = styled.ul`
    
    list-style: none;
    padding: 0 2rem; /* 0 32px */
    height: 100%;
    overflow-y: auto;
    
`;

const ContenedorSubtitulo = styled.div`

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
 
const Subtitulo = styled.h3`

    color: ${theme.grisClaro2};
    font-weight: 400;
    font-size: 40px;
    padding: 2.5rem 0; /* 40px */
`;

const Fecha = styled.div`

    border-radius: 0.31rem; /* 5px */
    background: ${theme.negro};
    text-align: center;
    color: #fff;
    padding: 0.62rem 3.12rem; /* 10px 50px */
    display: inline-block;
    margin: 1.25rem 0; /* 20px */
 
    @media(max-width: 60rem){ /* 950px */    
        width: 86%;
        font-size: 1rem;
        padding: 0.2rem 3.12rem; /* 3.2px 49.92px */
    }
`;

const ElementoListaCabecera = styled.li`

    background: ${theme.grisClaro};
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 2fr 4fr 1fr 2fr 1fr; 
    font-weight: bolder;   
    padding: 1.25rem 0; /* 20px */
    border-bottom: 2px solid #F2F2F2;    
    gap: 0.5rem; /* 5px */ 
    font-size: 1.2rem;      
    
    & > div {
        width: 100%;
        display: flex;  
             
    }

    @media(max-width: 60rem){ /* 950px */ 
        grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1fr; 
        font-size: 0.8rem;
        & > div {
            
        }
    }
`;
 
const ElementoLista = styled.li`

    list-style: none;
    display: grid;
    grid-template-columns: 1fr 2fr 4fr 1fr 2fr 1fr;    
    padding: 1.25rem 0; /* 20px */
    border-bottom: 2px solid #F2F2F2;    
    gap: 0.7rem; /* 5px */   
    font-size: 1rem;  
    align-items: center;     
    
    & > div {
        width: 100%;
        display: flex;  
    }
 
    &:hover button,
    &:hover a {
        opacity: 1;
    }

    @media(max-width: 60rem){ /* 950px */ 
        grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1fr; 
        font-size: 0.8rem;
        padding: 0.8rem 0; /* 16px */
        & > div {
            
        }
    }
`;
 
const Incidencia = styled.div`

    justify-content: left;    
    text-transform: capitalize;
    @media(max-width: 60rem){ /* 950px */
        // justify-content: end;
    }
`;
 
const Cliente = styled.div`

    justify-content: left;    
    text-transform: capitalize;
    @media(max-width: 60rem){ /* 950px */
        // justify-content: end;
    }
    
`;

const Direccion = styled.div`
    
    justify-content: left;    
    text-transform: capitalize;
    @media(max-width: 60rem){ /* 950px */    
        // justify-content: center;
    }
    
`;

const Poblacion = styled.div`

    justify-content: left;    
    text-transform: capitalize;
    @media(max-width: 60rem){ /* 950px */
        // justify-content: end;
    }
    
`;

const Estado = styled.div`

    justify-content: center;    
    text-transform: capitalize;
    @media(max-width: 60rem){ /* 950px */
        // justify-content: end;
    }
    
`;
 
const Gestion = styled.div`

    justify-content: center;    
    text-transform: capitalize;
    @media(max-width: 60rem){ /* 950px */
        // justify-content: end;
    }
    
`;

const ContenedorBotonesLista = styled.div`

    justify-content: center;
    @media(max-width: 60rem){ /* 950px */
        justify-content: end;
    }
`;

const BotonAccion = styled.button`

    outline: none;
    background: ${theme.grisClaro};
    border: none;
    width: 2.5rem; /* 40px */
    display: inline-block;
    height: 2.5rem; /* 40px */
    line-height: 2.5rem; /* 40px */
    font-size: 16px;
    cursor: pointer;
    border-radius: 0.31rem; /* 5px */
    margin-left: 0.625rem; /* 10px */
    transition: .3s ease all;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
 
    &:hover {
        background: ${theme.grisClaro2};
    }
 
    svg {
        width: 1.125rem; /* 18px */
    }
 
    @media(max-width: 60rem){ /* 950px */
        opacity: 1;
        width: 2rem;    /* 32px */
        height: 2rem;   /* 32px */

        svg {
            width: 1rem; /* 18px */
        }
    }
`;




// POR AHORA SIN UTILIZAR
const ListaDeCategorias = styled.ul`

    list-style: none;
    padding: 0 2.5rem; /* 40px */
    height: 100%;
    overflow-y: auto;
`;
 
const ElementoListaCategorias = styled.li`
    padding: 1.25rem 0; /* 20px */
    border-bottom: 2px solid #F2F2F2;
    display: flex;
    justify-content: space-between;    
`;

const ContenedorBotonCentral = styled.div`
    display: flex;
    justify-content: center;
    margin: 2.5rem; /* 40px */
`;
 
const BotonCargarMas = styled.button`
    background: ${theme.grisClaro};
    border: none;
    border-radius: 7px;
    color: #000;
    font-family: 'Work Sans', sans-serif;
    padding: 1rem 1.87rem; /* 20px 30px */
    
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    transition: .3s ease all;
 
    &:hover {
        background: ${theme.grisClaro2};
    }
`;
 
export {
    Lista,
    ContenedorSubtitulo,
    Subtitulo,
    Fecha,
    ElementoListaCabecera,
    ElementoLista,
    ListaDeCategorias,
    ElementoListaCategorias,
    Incidencia,
    Cliente,
    Direccion,
    Poblacion,
    Estado,
    Gestion,
    ContenedorBotonesLista,
    BotonAccion,
    BotonCargarMas,
    ContenedorBotonCentral    
};
