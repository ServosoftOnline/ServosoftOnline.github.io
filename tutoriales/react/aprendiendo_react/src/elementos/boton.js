import styled, { css } from 'styled-components'; // O 'emotion/styled' si estás usando Emotion

const Boton = styled.button`
    background: #83d394;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 20px;
    display: inline-block;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: .3s ease all;

    &:hover {
        background: #44a559;
        color: #fff;
    }


    ${props => props.negro && css `
        background: black;
        color: white;    
    `}
`;

export default Boton;