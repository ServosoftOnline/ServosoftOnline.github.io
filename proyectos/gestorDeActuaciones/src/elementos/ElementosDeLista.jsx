/*
    ARCHIVO QUE CONTIENE TODOS LOS ELEMENTOS QUE USARÉ PARA MOSTRAR LA LISTA DE GASTOS
        - La usaré para mostrar la lista de gastos y los gastos por categoría
        
*/

import styled from 'styled-components';
import theme from './../objetos/theme';

const Lista = styled.ul`
    
    list-style: none;
    padding: 0 2rem; /* 0 32px */    
    overflow-y: auto;

    @media(max-width: 60rem){   /* 950px */            
        padding: 0 0.3rem;
    }

    @media(max-width: 48rem) {  /* 768px */        
        padding: 0 0.2rem;        
    }
    
`;

const ContenedorLista = styled.div`

    
    
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

const ContenedorMostrarBarraEstadoTecnicos = styled.div`

    display: flex;
    align-items: center;
    
    h4 {
        margin-right: 1rem;
    }

    label {
        margin-right: 0.5rem;
    }

    
`;

const Fecha = styled.div`

    border-radius: 0.31rem; /* 5px */
    background: ${theme.negro};
    font-size: 1.2rem;
    text-align: center;
    color: #fff;
    padding: 0.62rem 3.12rem; /* 10px 50px */
    display: inline-block;
    margin: 1.25rem 0; /* 20px */
    
 
    @media(max-width: 60rem){ /* 950px */            
        font-size: 1rem;
        margin: 0.4rem 0; /* 20px */
        padding: 0.3rem 3.12rem; /* 3.2px 49.92px */
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    @media(max-width: 48rem) {  /* 768px */        
        font-size: 1.2rem;  
        display: block;        
    }
`;

const ElementoListaCabecera = styled.li`

    background: ${theme.grisClaro};    
    display: grid;
    grid-template-columns: 7rem 2fr 2fr 1fr 1fr 5rem; 
    font-weight: bolder;   
    gap: 0.5rem;
    padding: 1rem 0; /* 20px */        
    font-size: 1rem;

    @media(max-width: 60rem){ /* 950px */ 
        grid-template-columns: 4.5rem 1fr 1fr 1fr 5.5rem 5rem; 
        font-size: 0.7rem;      
        padding: 0.5rem 0; /* 20px */   
        
    }

    @media(max-width: 48rem) {  /* 768px */        
        grid-template-columns: 2.5rem 7rem 4.5rem 4rem 4rem; 
        font-size: 0.7rem;  
        gap: 0.1rem;      
    }
`;
 
const ElementoLista = styled.li`

    display: grid;
    grid-template-columns: 7rem 2fr 2fr 1fr 1fr 5rem;         
    align-items: center;     
    gap: 0.6rem;    
    border-bottom: 2px solid #F2F2F2;     
    font-size: 1rem;    
    
    & > div {
        width: 100%;
        display: flex;  
    }
 
    &:hover button,
    &:hover a {
        opacity: 1;
    }

    @media(max-width: 60rem){ /* 950px */ 
        grid-template-columns: 4.5rem 1fr 1fr 1fr 5.5rem 5rem; 
        font-size: 0.7rem;
        padding: 0.3rem 0; /* 16px */                
    }

    @media(max-width: 48rem) {  /* 768px */         
        grid-template-columns: 2.5rem 7rem 4.5rem 4rem 4rem;         
        font-size: 0.6rem;   
        gap: 0.1rem;     
    }
`;
 
const Incidencia = styled.div`
// background: yellow;
    justify-content: left;
`;
 
const Cliente = styled.div`
// background: lightblue;
    justify-content: left;    
    text-transform: capitalize;    
`;

const Direccion = styled.div`
// background: lightgreen;
    justify-content: left;    
    text-transform: capitalize;
`;

const Poblacion = styled.div`
    justify-content: left;
    text-transform: lowercase capitalize;    
`;


const Estado = styled.div`
// background: lightyellow;
    display: flex;
    justify-content: center; 
    align-items: center; 
    text-transform: capitalize;
    gap: 0.4rem; 

    @media(max-width: 60rem){ /* 950px */
        flex-direction: column;
    }
`;

const SpanHoraEnCamino = styled.span`
    color: ${theme.amarilloIcono};
    font-weight: bolder; 
`;

const SpanHoraDeLlegada = styled.span`
    color: ${theme.verdeIcono};
    font-weight: bolder; 
`;
 
const Gestion = styled.div`
// background: violet;
    text-align: center;       
`;

const ContenedorBotonesLista = styled.div`
// background: green;
    justify-content: center;
    padding-right: 0.2rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
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
 
    @media(max-width: 60rem){ /* 960px */

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
    ContenedorLista,
    ContenedorSubtitulo,
    Subtitulo,
    ContenedorMostrarBarraEstadoTecnicos,
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
    SpanHoraEnCamino,
    SpanHoraDeLlegada,
    Gestion,
    ContenedorBotonesLista,
    BotonAccion,
    BotonCargarMas,
    ContenedorBotonCentral    
};
