/* 
    ELEMENTO BOTON SALIR
        
        - Importo la imagen log-out.svg y la importo como un componente llamado IconoSalir
        - Importo la funcion desconectar que permite salirse de firestore
        - Creo un boton y lo llamo Btn
        - Creo un icono a partir del componente IconoSalir y le aplico estilos
        - Creo mi componente donde devuelvo el botón y cuando haga click en el llamo a la funcion para salir y volver al raiz

*/


import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// svg como componente
import IconoSalir from './../assets/log-out.svg?react';

// firebase
import { signOut } from "firebase/auth";
import { auth } from './../firebase/firebaseConfig';


// Estilos
const Btn = styled.button`
    
    display: block;
    width: 3.12rem; /* 50px */
    height: 2.8rem; /* 50px */
    line-height: 3.12rem; /* 50px */
    text-align: center;
    margin-right: 0.2rem; /* 6.4px */
    margin-left: 0.4rem;
    border: none;
    background: #000;
    color: #fff;

    // Alineado vertical y horizontal
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.625rem; /* 10px */
    cursor: pointer;
 
    // Cuando el tamaño de la ventana sea inferior a 950 hago el boton mas pequeño
    @media(max-width: 60rem){ /* 950px */
        
        line-height: 2.5rem; /* 40px */
        margin-left: 0.1rem; /* 1.6px */
    }
`;
 
const Icono = styled(IconoSalir)`
    width: 50%;
    height: auto;
    fill: #fff;
`;

// Componente
const BtnSalir = () => {
    const navigate = useNavigate(); 

    // Funcion asíncrona
    const cerrarSesion = async () => {
        try {

            await signOut(auth);
            console.log('sesion cerrada');
            navigate('/');

        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <Btn onClick={() => {cerrarSesion()}}><Icono/></Btn>
    );
}
 
export default BtnSalir;