/*
    MUESTRA LAS TAREAS ALMACENADAS EN EL ESTADO TAREAS

        - Obtengo las tareas y su funcion asociada a su estado como parámetro
        - Las desextructuro para poder usarlas

        - La funcion toogleCompletada:
            - Para seguir buenas prácticas el componente padre debe tener las funciones
            - Debo pasarsela cuando llame al componente hijo
            - El hijo la obtiene como propiedad y la llama cuando la necesita  

            - Hará lo siguiente:
                - Cuando se pulse el boton de tarea completada en tareas.js:
                - Recorremos todas las tareas
                    - Si los ids coinciden:
                        - A las tareas ya existentes le añado la tarea actual modificando solo el valor de completada a su contrario                        
                    - Si no coinciden devuelvo la tarea sin modificar

        - Devuelvo lo siguiente:
            - La lista
            - Si hay alguna tarea:
                - Las recorro con map y por cada una llamo al componente Tarea que creará los elementos de la lista
                - Debe tener un key único que será el id único que genera el paquete uuid en FormularioTareas.js
                - Le paso la tarea y la función toogleCompletada definida anteriormente.

            - Si no hay tareas:
                - Muestro un mensaje que lo indique

*/
import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas, cambiarTareas}) => {
    
    const mostrarTareas = () => {
        tareas.forEach((tarea) => {
            console.log(tarea);
        })
                
    }
    mostrarTareas();

    const toogleCompletada = (id) => {
        cambiarTareas(            
            tareas.map((tarea)=>{
                if(tarea.id === id){
                    return({...tareas, id: tarea.id, texto: tarea.texto, completada: !tarea.completada});
                }
                return tarea;
            })
        );
        
        mostrarTareas();
    };

    const cambiarTextoTarea = (id, nuevoTexto) => {
        cambiarTareas(            
            tareas.map((tarea)=>{
                if(tarea.id === id){
                    return({...tareas, id: tarea.id, texto: nuevoTexto, completada: tarea.completada});
                }
                return tarea;
            })
        );

        mostrarTareas();
    };
    
    return (

        <ul className="lista-tareas">
            {   
                tareas.length > 0
                ?
                    tareas.map((tarea)=>{
                    return <Tarea
                                key={tarea.id}
                                tarea={tarea}
                                toogleCompletada={toogleCompletada}
                                cambiarTextoTarea={cambiarTextoTarea}
                            />
                    })
                :
                    <div className="lista-tareas__mensaje ">~ No hay tareas agregadas ~</div>                   
            }
        </ul>
    );
}
 
export default ListaTareas;