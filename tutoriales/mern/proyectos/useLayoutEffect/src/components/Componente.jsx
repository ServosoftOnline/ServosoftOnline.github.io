import React, { useEffect, useLayoutEffect, useState } from 'react'

export const Componente = () => {

    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    // Primero se renderiza y despues se ejecuta este efecto. Se ejecutará despues que el useLayoutEffect
    useEffect(() => {
        console.log('Ejecuto el useEffect');
    },[mostrarMensaje]);

    // Primero se ejecuta este efecto y despues se renderiza. Se ejecutará antes que el useEffect
    useLayoutEffect(()=> {
        console.log('Ejecuto el useLayoutEffect');
    },[mostrarMensaje]);

    // Renderizo
    return (
        <div>
            <h2>Diferencias entre useEffect y useLayoutEffect</h2>
            <button onClick={() =>{setMostrarMensaje(!mostrarMensaje)}}>Dar la bienvenida</button>
            {mostrarMensaje && <p className='pBienvenida'>Bienvenido!!</p>}
        </div>
    )
}
