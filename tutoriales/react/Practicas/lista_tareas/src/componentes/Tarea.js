/*
    CADA UNA DE LAS TAREAS
        - Obtengo la tarea desde ListaTareas.js
        - La desectructuro para poder usarla
        - La tarea contendrá de izquierda a derecha:
            - Un botón que marque si está finalizada
            - El texto con la tarea
            - Un icono para editarla
            - Un icono para eliminarla
         


*/



const Tarea = ({tarea}) => {
    return (
        <li className="lista-tareas__tarea">
            
            
            <div className="lista-tareas__texto ">
                {tarea.texto}
            </div>
        </li>
      );
}
 
export default Tarea;