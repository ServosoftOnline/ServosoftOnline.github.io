/*
    ELEMENTOS QUE USARÉ EN EL FORMULARIO PARA SUPERVISAR ORDENES
*/

import styled from "styled-components";
import theme from "../objetos/theme";

// TODO EL CONTENEDOR DEBAJO DE LA BARRA DE BOTONES
const ContenedorSupervisarActuacion = styled.div `

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
`;


// ELEMENTOS DE LA ACTUACION
const ContenedorActuacion = styled.div`
background: lightgreen;

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
`;


// ELEMENTOS PARA EL TRABAJO DEL TECNICO
const ContenedorTrabajoDelTecnico = styled.div`
background: lightgray;

`;


const Momentos = styled.div `

    background:lightgray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    border: 0.1rem solid black;
    padding: 0.5rem; 
    margin-bottom: 0.5rem;       
    
`;

const ContenedorFotografias = styled.div`
    border: 0.1rem solid black;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

`;

const Fotografias = styled.div `
    margin-top: 1.8rem;
    margin-bottom: 1rem;    
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
        font-size: 1.1rem;
        width: 92.5rem;
        height: 7rem;        
    }

    @media(max-width: 60rem){ /* 950px */     
        textarea {
            font-size: 0.9rem;
            width: 48rem;
            height: 5rem;
        }
    }
`;

// ELEMENTOS PARA LA DECISION DEL SUPERVISOR

const DecisionDelSupervisor = styled.div`
background: lightyellow;

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
    
`;

const DificultadYPuntos = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;    
    align-items: center;
    padding: 0.5rem; 
`;

const ConsideracionNivel4 = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0.5rem;

    label {
        padding-right: 1.5rem;
    }
`;

const CheckBox = styled.div `
background:lightpink;

    display: grid;
    padding: 0.5rem;
`;

const ContenedorEstadoYBoton = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;    
    align-items: center;
    margin-bottom: 2rem;
`;

const Estado = styled.div `
// background:lightblue;
`;

const ContenedorBoton = styled.div`
    display: grid;
    justify-content: center;    
`;

export  {ContenedorSupervisarActuacion, ContenedorActuacion, TecnicosAcompañantes, SubContenedorSoloLectura, ComentariosDesdeCoordinacion, Momentos, Dificultad, ContenedorDificultad,
        ContenedorTrabajoDelTecnico, DificultadYPuntos, ConsideracionNivel4, CheckBox, Fotografias, ContenedorFotografias,
        ComentariosTecnicos, ContenedorComentariosTecnicos, DecisionDelSupervisor, ContenedorEstadoYBoton, Estado, ContenedorBoton};
