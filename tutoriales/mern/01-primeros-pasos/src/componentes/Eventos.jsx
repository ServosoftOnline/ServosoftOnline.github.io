import React from 'react'

export const Eventos = () => {

    // Funciones para el manejo de eventos
    const handleClick = (e) => {
        alert('Hize click. Mostré el evento en consola');
        console.log(e);
    }

    const handleSaludo = (nombre) => {
        alert(`Hola!!. Soy ${nombre}`);            
    }

    const handleDoubleClick = (e) => {
        alert('Hice doble click. Mostré el evento en consola sin ser necesario pasarlo en la llamada');
        console.log(e);
    }

    const handleOnMouseEnter = () => {
        console.log('Has entrado a la caja');
    }

    const handleOnMouseLeave = () => {
        console.log('Has salido de la caja');
    }

    const handleOnfocus = () => {
        console.log('Entraste en el input. Introduce tu nombre');
    }

    const handleOnBlur = () => {
        console.log('Saliste del input')
    }


    // Renderiza 
    return (
        <>
            <hr/>
            <h2>Eventos</h2>

            {/* Eventos click sin y con parámetros */}
            <div>       
                <h3>onClick</h3>         
                <button onClick={handleClick}>Haz click aquí</button>
                <button onClick={() => {handleSaludo('Oscar')}}>Saluda !!!</button>
            </div>

            {/* Evento doble click */}
            <div>
                <h3>onDoubleClick</h3>         
                <button onDoubleClick={handleDoubleClick}>Haz doble click aquí</button>
            </div>
            

            {/* Evento mouse enter on mouse y leave */}
            <h3>Mouse enter y mouse. Muestra los resultados de los efectos en consola</h3>
            <div id="caja" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                Pasa por encima
            </div>

            {/* Eventos focus y blur. Mostrarán cuando se activan en consola */}
            <h3>Focus y blur. Muestra los resultados de los efectos en consola</h3>
            <form action="" method="">
                <input
                    type="text"
                    onFocus={handleOnfocus}
                    onBlur={handleOnBlur}
                    placeholder='Introduzca nombre'
                />
                <button id="btnEnviar">Enviar</button>
            </form>
        </>
    )
}