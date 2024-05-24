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

    h3{
        padding-left: 0.7rem;
    }  

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.8rem;        
    }
`;


// ELEMENTOS DE LA ACTUACION
const ContenedorActuacion = styled.div`
    
    background: ${theme.lightSmoke};    
    margin-bottom: 1.5rem;    
    padding: 1rem;
    border: 2px solid ${theme.azulClaro};
    border-radius: 10px;

`;

const TecnicosAcompañantes = styled.div`
    text-transform: capitalize;
`;

const SubContenedorSoloLectura = styled.div `
// background:lightyellow;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    // margin-top: 0.5rem;
    // margin-bottom: 0.5rem;
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

    p {
        background: white;
        border: 1px solid ${theme.azulClaro};
        border-radius: 10px;
        padding: 0.5rem;
    }
`;


// ELEMENTOS PARA EL TRABAJO DEL TECNICO
const ContenedorTrabajoDelTecnico = styled.div`

    background: ${theme.lightSmoke};    
    margin-bottom: 1.5rem;    
    padding: 1rem;
    border: 2px solid ${theme.azulClaro};
    border-radius: 10px;
`;


const Momentos = styled.div `

    background: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    border: 1px solid ${theme.azulClaro};
    border-radius: 10px;
    padding: 0.5rem; 
    margin-bottom: 0.5rem;       
    
`;

const ContenedorFotografias = styled.div`

    background: white;
    border: 1px solid ${theme.azulClaro};
    // border-radius: 10px;
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

    p {
        background: white;
        border: 1px solid ${theme.azulClaro};
        border-radius: 10px;
        padding: 0.5rem;
    }    
`;

const ContenedorComentariosTecnicos = styled.div`

    display: grid;
    grid-template-columns: 1fr;           
    padding-bottom: 1rem;
`;

// ELEMENTOS PARA LA DECISION DEL SUPERVISOR

const DecisionDelSupervisor = styled.div`
   
    background: ${theme.lightSmoke};    
    margin-bottom: 1.5rem;    
    padding: 1rem;
    border: 2px solid ${theme.azulClaro};
    border-radius: 10px;

`;
const Dificultad = styled.div`        
    margin-bottom: 1rem;    
`;

const ContenedorDificultad = styled.div`
    background: white;
    border: 1px solid ${theme.azulClaro};
    border-radius: 10px;
    margin-top: 0.5rem;    
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

const ComentariosSupervision = styled.div`

    display: grid;
    grid-template-columns: 1fr;    
    padding-top: 1rem;    
    

    p {
        border: 0.1rem solid black;
        padding: 0.5rem;
        
    }    
`;

const ContenedorComentariosSupervision = styled.div`

    display: grid;
    grid-template-columns: 1fr;           
    padding-bottom: 1rem;        
    
    
    textarea {
        font-size: 1.1rem;
        width: 90rem;
        height: 7rem;        
        border: 1px solid ${theme.azulClaro};
        margin-top: 0.5rem;    
    }

    @media(max-width: 60rem){ /* 950px */     
        textarea {
            font-size: 0.9rem;
            width: 46.5rem;
            height: 5rem;
        }
    }
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

export  {ContenedorSupervisarActuacion, ContenedorActuacion, TecnicosAcompañantes, SubContenedorSoloLectura,
        ComentariosDesdeCoordinacion, ContenedorTrabajoDelTecnico, Momentos, ContenedorFotografias, Fotografias,
        ComentariosTecnicos, ContenedorComentariosTecnicos, DecisionDelSupervisor, Dificultad, ContenedorDificultad,
        DificultadYPuntos, ConsideracionNivel4, CheckBox, ComentariosSupervision, ContenedorComentariosSupervision,
        ContenedorEstadoYBoton, Estado, ContenedorBoton}