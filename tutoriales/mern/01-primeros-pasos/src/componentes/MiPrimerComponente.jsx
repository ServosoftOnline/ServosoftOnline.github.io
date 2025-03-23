import React from 'react';

const MiPrimerComponente = () => {

    // Datos
    const nombre = "Óscar";
    const familia = {
        esposa: 'Silvia',
        hijo: 'Jesús',
        hija: 'Lucía'
    }

    // Renderiza
    return (
        <>
            <hr/>             
            <h2>
                Sean bienvenidos {nombre} y su familia {familia.esposa}, {familia.hijo} y {familia.hija}
            </h2>
            <hr/>
        </>  
    )
}

export default MiPrimerComponente;
