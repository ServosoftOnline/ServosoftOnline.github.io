/*
    ELEMENTO QUE CONTIENE LOS ESTILOS PARA LOS BOTONES

        - Importo:
            - styled components
            - El componente Link permitirá que el botón al que le asigne este elemento pueda cambiar a otras paginas

        - Defino los estilos del elemento boton
            - LLamo a la funcion styled y le paso el componente Link importado desde react router
            - Los estilos son muchos. Los describo en el interior de la definicion del componente
            - Le cambiaré su color a partir de la propiedad primario que opcionalmente podré pasarle como propiedad
            - Le cambiaré su anchura si le paso la propiedad conIcono
            - Le cambiare su altura si le paso la propiedad iconoGrande, conteniendo una imagen svg

        - Lo exporto

*/

import styled from "styled-components";
import {Link} from 'react-router-dom';
import theme from "../objetos/theme";
import {resolucion} from "../objetos/resolucion";

/*  Al elemento lo llamo Boton. Le aplico la funcion styled y le paso el componente Link proporcionado por react router */
const Boton = styled(Link)`

    // Fondos para los botones. primario es negro, para administradores verde, para coordinadores y tecnicos azules
    background: ${(props) =>
        props.$primario ? theme.colorPrimario :
        props.$paraAdministrador ? theme.verdeClaro :
        props.$paraCoordinador ? theme.azulClaro :
        props.$paraTecnico ? theme.azulClaro :
        '#000'};    

    
    // Estilos especificos para iconos con la propiedad grande
    height: ${(props) => props.$grande ? '4rem' : null};
    width: ${(props) => props.$grande ? '11rem' : null};
    font-size: ${(props) => props.$grande ? '1.3rem' : null};

    // Estilos especificos para iconos con la propiedad mediano
    height: ${(props) => props.$mediano ? '2rem' : null};
    width: ${(props) => props.$mediano ? '10rem' : null};
    font-size: ${(props) => props.$mediano ? '1.3rem' : null};


    // Estilos comunes a todos los botones    
    justify-content: center;
    align-items: center;    
    cursor: pointer;
    text-decoration: none;  
    word-break: break-all;   
    display: inline-flex;        
    
    border: none;
    border-radius: 0.625rem;
    
    font-family: 'Work Sans', sans-serif;        
    color: #fff;
    font-weight: 500;

    padding: 0.4rem 0.4rem;
    margin-left: 0.4rem;
    
    @media(max-width: ${resolucion.movilHorizontal}){ 

        // Ajuste de los iconos grandes en estas media queries
        height: ${(props) => props.$grande ? '2.8rem' : null};
        width: ${(props) => props.$grande ? '8.5rem' : null};
        font-size: ${(props) => props.$grande ? '1rem' : null};

        // Ajustes de los iconos medianos en estas media queries        
        height: ${(props) => props.$mediano ? '2rem' : null};
        width: ${(props) => props.$mediano ? '4.2rem' : null};
        font-size: ${(props) => props.$mediano ? '0.61rem' : null};
    
        margin-left: 0.1rem;            
        padding: 0rem;

        // Para evitar el desborde de los botones                
        word-break: break-all; /* Permite que las palabras largas se dividan en varias líneas si es necesario */
    
    }
    
`;

export default Boton;
