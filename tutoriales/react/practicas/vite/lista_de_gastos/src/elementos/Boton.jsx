/*
    ELEMENTO QUE CONTIENE LOS ESTILOS PARA LOS BOTONES
        - Importo:
            - styled components
            - El componente Link permitirá que el botón al que le asigne este elemento pueda cambiar a otras paginas

*/
import styled from "styled-components";
import {Link} from 'react-router-dom';

// Defino los estilos. Al elemnto lo llamo Boton. Le aplico la funcion styled y le paso el componente Link creado por react router
const Boton = styled(Link)`

    // Fondo que si tiene el la propiedad primmario su fondo será de color #5B69E2 y si no será de color negro
    background: ${(props) => props.primario ? '#5B69E2' : '#000'};

    // Si tiene la propiedad conIcono, el icono será mas ancho
    width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */

    margin-left: 1.25rem; /* 20px */
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 3.75rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;

    // Queda el texto del botón a la izda, el icono a la derecha, centrados verticalmente
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
 
    // El icono será de tipo SVG. Si tiene la propiedad iconoGrande tendrá un alto del 100% y si no de 0.75 rem
    svg {
        height: ${(props) => props.iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }
`;

export default Boton;
