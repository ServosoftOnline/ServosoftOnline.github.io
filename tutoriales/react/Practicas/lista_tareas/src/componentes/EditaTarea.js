/*
  FORMULARIO QUE PERMITE EDITAR LAS TAREAS
    
    - Se ejecutará cuando se pulse el botón de editar en la lista de las tareas
    - El componente obtiene la tarea: 
      - Su texto será el valor por defecto del estado tareaAModificar
      - Lo mostraremos en pantalla mediante el value del formulario

    - Devuelvo el formulario
      - Que contiene:

        - Un input de tipo texto
          - El value muestra el texto de la tarea original

          - El onChange:
            - Permite escribir en el formulario
            - Ejecutar la funcion que cambiará el estado de tareaAModificar
            - Añadiendo el nuevo valor con lo escrito en el formulario a partir del evento

        - Un botón de Actualizar

*/
import { useState } from "react";

const EditaTarea = ({tarea}) => {

    const [tareaAModificar, cambiarTareaAModificar] = useState(tarea.texto);

    return (
        <form action="" className="formulario-editar-tarea">
          <input
            type ="text"
            className="formulario-editar-tarea__input"
            value={tareaAModificar}
            onChange={(e)=>{cambiarTareaAModificar(e.target.value)}}

          />
          <button
            type ="submit"
            className="formulario-editar-tarea__btn"
          >
            Actualizar
          </button>
        </form>
      );
}
 
export default EditaTarea;