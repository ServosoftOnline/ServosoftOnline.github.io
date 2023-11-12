/*
    CADA UNA DE LAS TAREAS

        - Obtengo la tarea desde ListaTareas.js
        - La desectructuro para poder usarla
        - Creo el estado editandoTarea con valor por defecto false

            - Si el false no edita
            - Si es true editará mostrando el texto de la tarea y un icono de actualizar

        - Devolverá de izquierda a derecha lo siguiente:

            - Un icono que marque si está finalizada
                - Tiene tres clases:
                    - El icono sacado de fontawesome
                    - Dos clases provenientes de App.css

            - El texto con la tarea
            - Un icono para editarla
            - Un icono para eliminarla        


*/

import {useState}  from "react";
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
                {tarea.texto}
            </div>

            <div className="lista-tareas__contenedor-botones">
                <i 
                    className="
                        fa-regular fa-pen-to-square fa-lg
                        lista-tareas__icono
                        lista-tareas__icono-accion
                    ">                
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