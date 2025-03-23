import React from 'react';

// Componente que exporto: nombre, apellido y ficha provienen de App.jsx. edad la añado yo
export const TercerComponente = ({nombre, apellido, ficha, edad=49}) => {

    // Valido que nombre y apellido sean strings y que ficha sea un objeto
    if (typeof nombre !== "string" || typeof apellido !== "string" ) {
        throw new Error("⚠️ Error en componente: 'nombre' o 'apellido' deben ser un string.");
    }

    if (typeof ficha !== "object" ) {
        throw new Error("⚠️ Error en componente: 'ficha' deben ser un objeto.");
    }

    // Renderizo
    return (
        <div className='tercer-componente'>
            <hr/>
            <h2>Datos del primer titular</h2>
            <ul>
                <li>Nombre: {nombre}</li>
                <li>Apellido: {apellido}</li>
                <li>Edad: {edad}</li>
                <li>Peso: {ficha.peso}</li>
                <li>Altura: {ficha.altura}</li>
                <li>Alergias conocidas: {ficha.alergias}</li>                
            </ul>
        </div>
    )
}