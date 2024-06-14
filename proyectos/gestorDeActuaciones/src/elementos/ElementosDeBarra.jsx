// ELEMENTO QUE CONTIENE LOS ESTILOS DE LA BARRA DE LOS ESTADOS DE LOS TECNICOS

import styled from "styled-components";
import theme from '../objetos/theme';
import {resolucion} from "../objetos/resolucion";

const Barra = styled.div `

    background: ${theme.lightSmoke};
    padding: 0 0.5rem;      
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 2px solid ${theme.darkerSmoke};
    border-radius: 10px;   

    @media(max-width: ${resolucion.movilVertical}) {  
        padding: 0 0.1rem;        
    }
    
`;

const ParrafoDeLaBarra = styled.p`
    
    font-weight: bolder;
    padding-left: 0.4rem;

    @media(max-width: ${resolucion.movilHorizontal}){ 
        font-size: 0.8rem;        
    }
`;

const Cabecera = styled.div `

    background: ${theme.mediumSmoke};    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    padding-left: 0.5rem;
    padding-right: 1.5rem;       
    margin-top: 1rem;
    font-weight: bolder;

    // Borde
    border: 1px solid ${theme.darkSmoke};  
    border-radius: 10px 10px 0 0; // Aplico borde redondeado a las esquinas de arriva

    @media(max-width: ${resolucion.movilHorizontal}){ 
        font-size: 0.6rem;
    }

    @media(max-width: ${resolucion.movilVertical}) {  
        font-size: 0.55rem;
        align-items: center;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
    }

`;

const Tecnicos = styled.div `

    background: ${theme.smoke};    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-between; 
    text-transform: capitalize;
    padding-left: 0.5rem;
    padding-right: 1.5rem;    
    margin-bottom: 1rem; 

    // Borde
    border: 1px solid ${theme.darkSmoke};   
    border-radius: 0 0 10px 10px;  // Aplico borde redondeado a las esquinas de abajo

    @media(max-width: ${resolucion.movilHorizontal}){             
        font-size: 0.6rem;
    }

    @media(max-width: ${resolucion.movilVertical}) {  
        font-size: 0.55rem;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
    }

`;

const Nombres = styled.p `

`;

// DISEÑO RESPONSIVE PARA MOVILES

const ContenedorEstadosTecnicosEnMoviles = styled.div`

    background: ${theme.smoke}; 
    border: 1px solid ${theme.darkSmoke};     
    border-radius: 10px;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0.4rem;
    font-size: 0.8rem;
    

    label, p {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        text-transform: capitalize;
    }

    label {
        font-weight: bolder;
    }
    

    div{
        display:flex;
        flex-direction: column;
        padding-bottom: 1rem;        
    }
    
`

export {Barra, ParrafoDeLaBarra, Cabecera, Tecnicos, Nombres, ContenedorEstadosTecnicosEnMoviles};