import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Tareas = () => {

    // Estado que almacena las tareas
    const [tareas, setTareas] = useState([]);

    // Funcion que recibe la nueva tarea, le añado un id único y la almacena junto al resto
    const handleSubmit = (e) => {
        e.preventDefault();         
        const tareaObtenida = {
            id: uuidv4(),
            tarea: e.target.tarea.value
        }
        setTareas([...tareas, tareaObtenida]);
    }

    // Función que elimina una tarea. Solo almacenará las tareas cuyo id sea diferente al pasado como parametro
    const eliminarTarea = (id) => {
        setTareas(
            tareas.filter((tarea) => {
                if(tarea.id !== id) return tarea;
                return false;
            })            
        );
    }

    // Renderizo
    return (
        <div className='cabecera'>  
            <h2>Tareas</h2>          

            {/* Formulario que añade una nueva tarea */}
            <form onSubmit={handleSubmit}>                
                <div className='nuevaTarea'>
                    <label htmlFor="tarea">Introduzca nueva tarea</label>
                    <input
                        type='text'
                        id='tarea'
                        name='tarea'                                        
                    />
                    <input type='submit' value='+'/>
                </div>
            </form>

            {/* Muestro una lista ordenada con las tareas guardadas y un boton para eliminarla */}            
            <ol>
                {tareas.map((itemTarea, index) => {
                    return(
                        <div key={itemTarea.id}>
                            <li>
                                {itemTarea.tarea}
                                <button onClick={() => eliminarTarea(itemTarea.id)}>-</button>
                            </li>
                        </div>                        
                    )
                })}
            </ol>
            
        </div>
    )
}
