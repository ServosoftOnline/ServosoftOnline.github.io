/*
    ARCHIVO QUE CONTIENE TODOS LOS ELEMENTOS QUE USARÉ PARA MOSTRAR LA LISTA DE GASTOS
        - La usaré para mostrar la lista de gastos y los gastos por categoría
        
*/

import styled from 'styled-components';
import theme from '../objetos/theme';
import {resolucion} from "../objetos/resolucion";

const ContenedorSubtitulo = styled.div`

    display: flex;
    justify-content: center;    

`;
 
const Subtitulo = styled.h3`

    color: ${theme.OroViejo1};
    font-weight: 400;
    font-size: 3rem;

    @media(max-width: ${resolucion.movilHorizontal}){            
        font-size: 2.1rem;
    }

    @media(max-width: ${resolucion.movilVertical}){       
        margin-top: 2rem;
        font-size: 1.2rem;
    }
    
    
`;

 
export { ContenedorSubtitulo,Subtitulo };
