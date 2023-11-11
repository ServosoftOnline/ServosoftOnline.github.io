/*
    MUESTRA LAS TAREAS ALMACENADAS EN EL ESTADO TAREAS

        - Obtengo las tareas como parámetro
        - La desextructuro para poder usarla
        - Creo la lista

        - Si hay alguna tarea:

            - Recorro las tareas con map y por cada una de ella devuelvo un componente Tarea

            - El componente Tarea contendrá un elemento de la lista con la tarea en su interior
                - Debo crear un key único
                    - Para corregir el error de consola: Each child in a list should have a unique "key" prop.
                    - El id de la tarea es único gracias a que lo añadí usando el paquete uuid en FormularioTareas
                - Debo pasarle la tarea que estoy recorriendo mediante map
            

        - Si no hay:
            - Muestro un mensaje que lo indique

tareas.texto

*/
import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas}) => {
    
    return (

        <ul className="lista-tareas">
            {
                
                tareas.length > 0
                ?
                    tareas.map((tarea)=>{
                    return <Tarea
                                key={tarea.id}
                                tarea={tarea}
                            />
                    })

                :
                    <div className="lista-tareas__mensaje ">~ No hay tareas agregadas ~</div>                   

            }
        </ul>
    );
}
 
export default ListaTareas;