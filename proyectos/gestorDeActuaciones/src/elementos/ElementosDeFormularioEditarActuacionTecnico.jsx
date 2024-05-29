/*
    ELEMENTOS QUE USARÉ EN EL FORMULARIO PARA EDITAR ACTUACIONES
*/

import styled from "styled-components";
import theme from "../objetos/theme";

const ContenedorEditarActuacion = styled.div `

    display: grid;
    grid-template-columns: 1fr;
    padding-left: 0.5rem;
    padding-right: 0.5rem;   
    
    label {
        font-weight: bold;        
    }

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.8rem;        
    }

    @media(max-width: 48rem) {  /* 768px */        
        font-size: 1rem;        
    }
`;

const TecnicosAcompañantes = styled.div`
    text-transform: capitalize;
`;

const SubContenedorSoloLectura = styled.div `
// background:lightyellow;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    gap: 0.8rem;

    div {          
        border-bottom: 2px solid ${theme.grisClaro};
        padding-bottom: 0.5rem;
    }

    @media(max-width: 48rem) {  /* 768px */         
        grid-template-columns: 1fr;       
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;  
        
        div {

            display: grid;
            grid-template-rows: 1fr;      

        }
    }
    
`;

const LinkDorus = styled.div`

    @media(max-width: 48rem) {  /* 768px */ 

        display: flex;
        flex-direction: column;

        // Permite que el texto del enlace no se desborder
        a {
            display: block; /* Asegura que el enlace ocupe toda la línea */
            max-width: 100%;
            word-break: break-all; /* Permite que las palabras largas se dividan en varias líneas si es necesario */
            overflow: hidden;
            text-overflow: ellipsis;
            
        }
    }
`;

const LinkCoordenadas = styled.div`

    @media(max-width: 48rem) {  /* 768px */ 

        display: flex;
        flex-direction: column;

        // Permite que el texto del enlace no se desborder
        a {
            display: block; /* Asegura que el enlace ocupe toda la línea */
            max-width: 100%;
            word-break: break-all; /* Permite que las palabras largas se dividan en varias líneas si es necesario */
            overflow: hidden;
            text-overflow: ellipsis;
            
        }
    }
`;

const ComentariosDesdeCoordinacion = styled.div `

    display: grid;
    grid-template-columns: 1fr;
    padding-top: 1rem;
    padding-bottom: 1rem;

    p {
        border: 0.1rem solid black;
        padding: 0.5rem;
    }

    @media(max-width: 48rem) {  /* 768px */ 
        p {
            width: auto;           
        }
    }
`;

const Momentos = styled.div `

    background:lightgray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    border: 0.1rem solid black;
    padding: 0.5rem; 
    margin-bottom: 0.5rem;       
    

    @media(max-width: 48rem) {  /* 768px */ 
        display: flex;
        justify-content: space-between;
        width: auto;
        padding: 0.3rem;
    }
    
`;

const Dificultad = styled.div`    
    margin-top: 1.8rem;
    margin-bottom: 1rem;
`;

const ContenedorDificultad = styled.div`
    border: 0.1rem solid black;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    @media(max-width: 48rem) {  /* 768px */  
        width: auto;
    }
`;

const DificultadYPuntos = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;    
    align-items: center;
    padding: 0.5rem;     

    @media(max-width: 48rem) {  /* 768px */      
        grid-template-columns: 71% 29%;
        font-size: 0.9rem;
        padding: 0 0.5rem;
    }
`;

const ConsideracionNivel4 = styled.div `

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0.5rem;

    label {
        padding-right: 1.5rem;
    }

    @media(max-width: 48rem) {  /* 768px */     
        grid-template-columns: 71% 29%;
        font-size: 0.9rem;        
        padding: 0 0.5rem;

        label {
            padding-right: 0.1rem;
        }

        
    }
    
`;

const CheckBox = styled.div `
background:lightpink;

    display: grid;
    padding: 0.5rem;
`;

const Fotografias = styled.div `

    margin-top: 1.8rem;
    margin-bottom: 1rem;    
`;

const ContenedorFotografias = styled.div`

    border: 0.1rem solid black;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    @media(max-width: 48rem) {  /* 768px */      
        width: auto;
    }

`;

const ComentariosTecnicos = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    padding-top: 1rem;
    padding-bottom: 1rem;

    p {
        border: 0.1rem solid black;
        padding: 0.5rem;
    }    
`;

const ContenedorComentariosTecnicos = styled.div`

    display: grid;
    grid-template-columns: 1fr;           
    padding-bottom: 1rem;        
    
    textarea {
        width: auto;
        font-size: 1.1rem;        
        height: 7rem;        
    }

    @media(max-width: 60rem){ /* 950px */     
        textarea {
            font-size: 0.9rem;            
            height: 5rem;
        }
    }

    @media(max-width: 48rem) {  /* 768px */      
        
        textarea {
            font-size: 1rem;
            height: 9rem;
        }
    }
`;

const ComentariosDesdeSupervision = styled.div `

    display: grid;
    grid-template-columns: 1fr;    

    p {
        border: 0.1rem solid black;
        padding: 0.5rem;
    }
`;

const ContenedorEstadoYBoton = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;    
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 2rem;

    @media(max-width: 48rem) {  /* 768px */ 

        display: flex;  
        flex-direction: column;
        gap: 2rem;               
    }
`;

const Estado = styled.div ` 

    
`;

const ContenedorBoton = styled.div`

    display: grid;
    justify-content: center;
    
`;


export  {ContenedorEditarActuacion, TecnicosAcompañantes, SubContenedorSoloLectura, LinkDorus, LinkCoordenadas,
        ComentariosDesdeCoordinacion, Momentos, Dificultad, ContenedorDificultad, DificultadYPuntos, ConsideracionNivel4,
        CheckBox, Fotografias, ContenedorFotografias, ComentariosTecnicos, ContenedorComentariosTecnicos,
        ContenedorEstadoYBoton, Estado, ContenedorBoton, ComentariosDesdeSupervision};
