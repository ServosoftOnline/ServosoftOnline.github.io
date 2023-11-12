/*
    CADA UNA DE LAS TAREAS

        - Obtengo la tarea desde ListaTareas.js
        - La desectructuro para poder usarla
        - Creo el estado editandoTarea con valor por defecto false
        
        - Devolverá de izquierda a derecha lo siguiente:

            - Un icono que marque si está finalizada
                - Tiene tres clases:
                    - El icono sacado de fontawesome
                    - Dos clases provenientes de App.css

            - El texto con la tarea
            
            - Un icono para editarla que permanece oculto hasta pasar con el raton
                - si editandoTarea es true llamará al componente EditaTarea
                - Si editandoTarea es false mostrará el texto que tiene la tarea
                - Cuando hagla click sobre ese icono editandoTarea pasará a tener lo contrario que tenia antes:
                    - Si antes tenia true pasará a false y si tenia false pasará a ser true
                

            - Un icono para eliminarla que permanece oculto hasta pasar con el raton


*/

import {useState}  from "react";
import EditaTarea from "./EditaTarea";

const Tarea = ({tarea}) => {

    const [editandoTarea, cambiarEditandoTarea] = useState(false);

    return (
        <li className="lista-tareas__tarea">

            <i 
                className="
                    fa-regular fa-square-check fa-lg
                    lista-tareas__icono
                    lista-tareas__icono-check
                ">                
            </i>

            <div className="lista-tareas__texto">
                {editandoTarea ? <EditaTarea tarea={tarea}/> : tarea.texto}                
            </div>

            <div className="lista-tareas__contenedor-botones">
                <i 
                    className="
                        fa-regular fa-pen-to-square fa-lg
                        lista-tareas__icono
                        lista-tareas__icono-accion
                    "
                    onClick = {()=>{cambiarEditandoTarea(!editandoTarea)}}>                
                </i>

                <i 
                    className="
                        fa-solid fa-trash fa-lg
                        lista-tareas__icono
                        lista-tareas__icono-accion
                    ">                
                </i>
            </div>
        </li>
      );
}
 
export default Tarea;