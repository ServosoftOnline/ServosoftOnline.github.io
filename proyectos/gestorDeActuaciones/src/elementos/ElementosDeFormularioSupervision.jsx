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

    @media(max-width: 60rem){ /* 960px */
        font-size: 0.8rem; 
        padding-left: 0.3rem;
        padding-right: 0.3rem;        
    }

    @media(max-width: 48rem) {  /* 768px */         
        padding-left: 0.2rem;
        padding-right: 0.2rem;   
    }
`;


// ELEMENTOS DE LA ACTUACION
const ContenedorActuacion = styled.div`
    
    background: ${theme.lightSmoke};    
    margin-bottom: 1.5rem;    
    padding: 1rem;
    border: 2px solid ${theme.azulClaro};
    border-radius: 10px;

    @media(max-width: 48rem) {  /* 768px */         
        padding: 0.5rem;
    }

`;

const TecnicosAcompañantes = styled.div`
    text-transform: capitalize;
`;

const SubContenedorSoloLectura = styled.div `

    
    display: grid;
    grid-template-columns: 1fr 1fr;    
    gap: 0.8rem;

    div {        
        border-bottom: 2px solid ${theme.grisClaro};
        padding-bottom: 0.5rem;
    }

    @media(max-width: 48rem) {  /* 768px */         
        grid-template-columns: 1fr;    
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

    @media(max-width: 48rem) {  /* 768px */         
        padding: 0.5rem;
    }
`;


const Momentos = styled.div `

    background: ${theme.blanco};
    display: flex;    
    justify-content: space-between;;
    border: 1px solid ${theme.azulClaro};
    border-radius: 10px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    @media(max-width: 48rem) {  /* 768px */         
        padding-top: 0.5rem;
        font-size: 0.8rem;
    }
    
`;

const EnCamino = styled.div`

    display: flex;
    align-items: center;    
    gap: 0.2rem;

`;

const EnCliente = styled.div`

    display: flex;
    align-items: center;    
    gap: 0.2rem;

`;

const FinActuacion = styled.div`

    display: flex;
    align-items: center;    
    gap: 0.2rem;

`;

const ContenedorFotografias = styled.div`

    background: ${theme.blanco};
    border: 1px solid ${theme.azulClaro};   
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
        background: ${theme.blanco};
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
// display: none;
    background: ${theme.lightSmoke};    
    margin-bottom: 1.5rem;    
    padding: 1rem;
    border: 2px solid ${theme.azulClaro};
    border-radius: 10px;

    @media(max-width: 48rem) {  /* 768px */         
        padding: 0.5rem;
    }

`;
const Dificultad = styled.div`      
    margin-bottom: 1rem; 
    
    @media(max-width: 48rem) {  /* 768px */         
        margin-bottom: 0.5rem;
    }

`;

const ContenedorDificultad = styled.div`

    background: ${theme.blanco};
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

    @media(max-width: 48rem) {  /* 768px */         
        // grid-template-columns: 1fr;    
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
        grid-template-columns: 1fr;    
    }
`;

const CheckBox = styled.div `
background:lightpink;

    display: grid;
    padding: 0.5rem;
`;

const ComentariosSupervision = styled.div`
display: none;
    display: grid;
    grid-template-columns: 1fr;    
    padding-top: 1rem;    

    p { 
        padding: 0.5rem;
    }    
`;

const ContenedorComentariosSupervision = styled.div`

    display: grid;
    grid-template-columns: 1fr;           
    padding-bottom: 1rem;        
    
    
    textarea {
        font-size: 1.1rem;
        width: 116rem;
        height: 9rem;     
        padding: 0.3rem;   
        border: 1px solid ${theme.azulClaro};
        border-radius: 10px;
        margin-top: 0.5rem;    
    }

    @media(max-width: 60rem){ /* 960px */   

        textarea {
            font-size: 0.9rem;
            width: 43.5rem;
            height: 7rem;
        }
    }

    @media(max-width: 48rem) {  /* 768px */         

        textarea {            
            width: 20rem;
            height: 14rem;
        }
    }
`;


const ContenedorEstadoYBoton = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;    
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 2rem;

    @media(max-width: 48rem) {  /* 768px */         
        grid-template-columns: 1fr; 
        gap: 2rem;   
        margin-top: 0rem;
    }
`;

const Estado = styled.div `

    // display: flex;
    // flex-direction: column;
    
`;

const ContenedorBoton = styled.div`
    display: grid;
    justify-content: center;   
         
`;

export  {ContenedorSupervisarActuacion, ContenedorActuacion, TecnicosAcompañantes, SubContenedorSoloLectura,
        ComentariosDesdeCoordinacion, ContenedorTrabajoDelTecnico, Momentos, EnCamino, EnCliente, FinActuacion,
        ContenedorFotografias, Fotografias, ComentariosTecnicos, ContenedorComentariosTecnicos, DecisionDelSupervisor,
        Dificultad, ContenedorDificultad, DificultadYPuntos, ConsideracionNivel4, CheckBox, ComentariosSupervision,
        ContenedorComentariosSupervision, ContenedorEstadoYBoton, Estado, ContenedorBoton}