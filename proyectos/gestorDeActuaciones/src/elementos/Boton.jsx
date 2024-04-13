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


// Defino los estilos. Al elemento lo llamo Boton. Le aplico la funcion styled y le paso el componente Link creado por react router
const Boton = styled(Link)`

    // Colores para los botones: primario para los botones de los formularios, verde para administradores, azul para coordinador y rojo para tecnicos
    background: ${(props) =>
        props.$primario ? theme.colorPrimario :
        props.$paraAdministrador ? theme.verdeClaro :
        props.$paraCoordinador ? theme.azulClaro :
        '#000'};    

    // Si tiene la propiedad conIcono, el icono será mas ancho
    width: ${(props) => props.$conIcono ? '15.62rem' : 'auto'}; /* 250px */
    
    // // Si tiene la propiedad grande, el icono será mayor
    // font-size:  ${(props) => props.$grande ? '14rem' : 'auto'}; /* 250px */

    // Descripción y ubicación del boton
    margin-left: 0.4rem; /* 6.4px */
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 2rem; /* 32px */    
    padding: 0.4rem 0.4rem; /* 8px 8px */
    font-size: 0.8rem; /* 12.8px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
 
    // El icono será de tipo SVG. Si tiene la propiedad iconoGrande tendrá un alto del 100% y si no de 0.75 rem
    svg {
        height: ${(props) => props.$iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }

    @media(max-width: 60rem){ /* 950px */       
        font-size: 0.68rem;     /* 10.88px */
        margin-left: 0.1rem;    /* 1.6px */
    }
`;

export default Boton;
