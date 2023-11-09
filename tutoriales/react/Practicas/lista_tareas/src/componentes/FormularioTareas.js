/*
    FORMULARIO PARA AÑADIR TAREAS
        - Recibe como parámetro el estado tarea y la funcion que cambia su estado.
            - Los destructuro para poder usarlos y modificarlos

        - El formulario cuando se envie ejecutará una funcion llamada handleSubmit
        - La funcion handleSubmit recibe el evento
            - El evento contiene los parámetros que recibi en FormularioTareas y puedo trabajar con ellos
            - Evito que se refresque el formulario
            - Ejecuto la funcion cambiarTareas cambiando el estado y renderizando de nuevo
                - Se pueden ver los cambios de estado en el navegador en componentes del inspector
                - La funcion añadirá al arreglo un nuevo objeto con la nueva tarea

        - Lo que escribio el usuario en el input se almacena en value
            - El value lo obtengo del estado inputTarea

        - El onChange ejecutara la funcion handleInput cada vez que se modifique el formulario






*/

import React, {useState} from 'react';
const FormularioTareas = ({tareas, cambiarTareas}) => {

    const [inputTarea, cambiarinputTarea] = useState('');
    
    const handleInput = (e)=>{
        cambiarinputTarea(e.tarjet.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cambiarTareas(
            [
                ...tareas,
                {
                    id: 3,
                    texto: "Nueva tarea",
                    completada: false
                }
            ]

        );
    };

    
    
    
    return ( 
        <form action ="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input 
                type ="text" 
                className="formulario-tareas__input"
                placeholder="Escribe una tarea"
                value={inputTarea}
                onChange={() =>{ 
                    handleInput(e);
                }}
            />
            <button 
                type = "submit"
                className="formulario-tareas__btn"
            >
                Añadir
                {/* Sustituire Añadir por el boton  */}
            </button>                
        </form>        
     );
}
 
export default FormularioTareas;