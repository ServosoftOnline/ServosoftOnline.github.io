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

    // Todas las etiquetas que van junto a los inputs van en negrita
    label {
        font-weight: bold;
    }

    input {
        font-size: 1.1rem;
    }

    textarea {
        font-size: 1.1rem;
    }

    input::placeholder {
        color: ${theme.rojoIntenso};
      }

    @media(max-width: 60rem){ /* 950px */

        input {
            font-size: 0.9rem;
        }

        textarea {
            font-size: 0.9rem;
        }

        p {
            font-size: 0.9rem;
        }

        label {
            font-size: 0.9rem;
        }
    }
`;

const ContenedorSoloLectura = styled.div `

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;

    div {
        width: auto;
    }

    @media(max-width: 60rem){ /* 950px */

        font-size: 0.8rem;
        padding-bottom: 0rem;
    }

    @media(max-width: 48rem) {  /* 768px */         

        background:${theme.smoke};
        border: 1px solid ${theme.darkerSmoke};
        border-radius: 10px;
        grid-template-columns: 1fr;
        gap: 1rem;
        margin-top: 0.5rem;
        

        div {            
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
    }
`;

const Cliente = styled.div`

    @media(max-width: 48rem) {  /* 768px */         
        display: flex;
        flex-direction: column;
    }
    
`;

const Descripcion = styled.div`

    @media(max-width: 48rem) {  /* 768px */         
        display: flex;
        flex-direction: column;
    }
    
`;

const Contenedor1 = styled.div `

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    margin-bottom: 0.5rem;

    div {
        display: flex;
        flex-direction: column;
    }

    input {
        width: auto;
    }

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.8rem;
    }

    @media(max-width: 48rem) {  /* 768px */             
        grid-template-columns: 1fr;
    
    }
`;

const Contenedor2 = styled.div `
// background:lightblue;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    margin-bottom: 0.7rem;

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.8rem;
    }

    @media(max-width: 48rem) {  /* 768px */         
        grid-template-columns: 1fr;  
        padding-top: 0rem;
        padding-bottom: 0rem;     
    }
`;

const ContenedorCoordenadas = styled.div `
    
    display: flex;
    flex-direction: column;

    input {
        width: auto;           
    }    

`;

const ContenedorTelefonos = styled.div `

    display: flex;
    flex-direction: column;

    input {
        width: auto;
    }

`;

const ContenedorSelectZona = styled.div `

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 8;

    @media(max-width: 48rem) {  /* 768px */

        h4 {
            padding-right: 2.1rem;
        }
        div {
            width: 16.5rem;;
        }
    }    
`;

const Contenedor3 = styled.div `
// background:lightgrey;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    margin-bottom: 1.5rem;

    input {
        text-align: center;
    }

    @media(max-width: 60rem){ /* 950px */

        grid-template-columns: 2fr 1fr 3fr;
        font-size: 0.8rem;
        padding-bottom: 0.5rem;

        input {
            width: 3rem;
        }
    }

    @media(max-width: 48rem) {  /* 768px */                 

        grid-template-columns: 1fr;  
        padding-top: 0rem;
        padding-bottom: 0rem;
        
        label {
            padding-right: 1.4rem;
        }

    }

`;

const ContenedorSelectDificultad = styled.div `

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 7;   
`;

const ContenedorSelectTipoDeActuacion = styled.div `

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 6;

    @media(max-width: 48rem) {  /* 768px */
    
        div {
            width: 16.5rem;;
        }
    }    
`;

const Contenedor4 = styled.div `
// background:orange;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    margin-bottom: 1.5rem;

    @media(max-width: 60rem){ /* 950px */

        grid-template-columns: 2fr 1fr 3fr;
        font-size: 0.8rem;
    }

    @media(max-width: 48rem) {  /* 768px */
        
        grid-template-columns: 1fr;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }    
`;

const ContenedorSelectTipoDeTrabajo = styled.div `

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 5;

    @media(max-width: 48rem) {  /* 768px */    
    
        h4 {
            padding-right: 1rem;
        }
        
        div {
            width: 16.5rem;;
        }
    }    
`;

const ContenedorSelectStb = styled.div `

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 4;

    @media(max-width: 48rem) {  /* 768px */        

        h4 {
            padding-right: 2.8rem;
        }
    
        div {
            width: 16.5rem;;
        }
    }    
`;

const ContenedorSelectEstado = styled.div `

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 3;

    @media(max-width: 48rem) {  /* 768px */        

        h4 {
            padding-right: 1.3rem;
        }
        div {
            width: 16.5rem;;
        }
    }    
`;

const Citacion = styled.div `

    background: ${theme.mediumSmoke};     
    border: 1px solid ${theme.darkerSmoke};
    border-radius: 10px;
    padding: 0 1rem;  
    
    @media(max-width: 48rem) {  /* 768px */        
        width: auto;
        padding: 0rem;
    }
`;

const ContenedorDatePicker = styled.div `
    display: flex;

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 2;

    @media(max-width: 48rem) {  /* 768px */        
        flex-direction: column;
        padding-left: 0.5rem;
    } 
    
`;

const Fecha = styled.div`
    display: flex;
    align-items: center;
    
    h4{
        padding-right: 0.5rem;
    }

    
`;

const Hora = styled.div`
    display: flex;
    align-items: center;
    margin-left: 2rem;

    h4{
        padding-right: 0.5rem;
    }

    @media(max-width: 48rem) {  /* 768px */        
        margin-left: 0rem;
    } 
    
`;

const ContenedorSelectTecnicos = styled.div `
    display: flex;
    gap: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    // Permite que al desplegar los select estos se pongan delante
    position: relative;
    z-index: 1;

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.9rem;
        gap: 0.5rem;     
    }

    @media(max-width: 48rem) {  /* 768px */        
        flex-direction: column;
        padding-left: 0.5rem;
    }

    
`;

const TecnicosAsignados = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

`;

const ContenedorComentarios = styled.div `

    background: ${theme.mediumSmoke}; 
    width: auto;
    padding: 1rem;

    // Borde
    border: 1px solid ${theme.darkerSmoke};
    border-radius: 10px;

    @media(max-width: 48rem) {  /* 768px */        
        margin-top: 1.5rem;
        margin-bottom: 2rem;
    }

`;

const ComentariosCoordinacion = styled.div `

    display: grid;
    grid-template-columns: 1fr;
    width: auto;
    gap: 1rem;
    margin-bottom: 1.5rem;
    

    // tamaño especial para el input de comentarios tecnicos. Lo trataré como un text area
    textarea {
        width: auto;
        height: 5rem;
        text-align: left;
        vertical-align: top;
    }

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.8rem;

        textarea {            
            height: 3rem;
        }
    }

    @media(max-width: 48rem) {  /* 768px */        
        flex-direction: column;
        padding-left: 0.5rem;        
    }
`;

const ComentariosSupervision = styled.div `
    
    p {
        background: white;
        border: 1px solid black;
        padding: 0.5rem;
        width: auto;
    }

`;

const ContenedorBoton = styled.div`
//  background: crimson;

    display: flex;
    justify-content: center;
    margin: 2rem 0;  /* 32px */

    @media(max-width: 60rem){ /* 950px */
        margin: 0.5rem 0;  /* 16px */
    }

`;

export  {ContenedorEditarActuacion, ContenedorSoloLectura, Cliente, Descripcion, Contenedor1, Contenedor2, ContenedorCoordenadas,
        ContenedorTelefonos, ContenedorSelectZona, Contenedor3, ContenedorSelectDificultad, ContenedorComentarios, ComentariosCoordinacion,
        ComentariosSupervision, ContenedorSelectTipoDeActuacion, Contenedor4, ContenedorSelectTipoDeTrabajo,
        ContenedorSelectStb, ContenedorSelectEstado, TecnicosAsignados, Citacion,
        ContenedorSelectTecnicos, ContenedorDatePicker, Fecha, Hora, ContenedorBoton};
