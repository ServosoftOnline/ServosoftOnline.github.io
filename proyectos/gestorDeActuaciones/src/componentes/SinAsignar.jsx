/*
  COMPONENTE QUE MUESTRA LAS ACTUACIONES QUE ESTAN PENDIENTES DE COORDINAR

    - Le pasaré al componente ListaActuacionesDeUnEstado:
      - El array con las actuaciones obtenidas desde el hook
      - Le indico que lo llamo desde el modulo 'Sin coordinar" para generar un subtitulo personalizado en ListaActuacionesDeUnEstado
      - Le paso la ruta para cuando el usuario halla finalizado de coordinar la actuación seleccionada para que vuelva y empieze otra

*/

// React
import React from "react";

// Componentes
import ListaActuacionesDeUnEstado from "./ListaActuacionesDeUnEstado";

// Hooks
import useObtenerIncidenciasPtesDeAsignar from "../hooks/useObtenerIncidenciasPtesDeAsignar";

const SinAsignar = () => {

    // LLamadas al hook y paso el objeto a un array para trabajar con los resultados
    const [actuacionesSinAsignar] = useObtenerIncidenciasPtesDeAsignar();   
    const arrayActuacionesSinAsignar = Object.values(actuacionesSinAsignar);    

    return (
      <>
        <ListaActuacionesDeUnEstado
          array = {arrayActuacionesSinAsignar}
          modulo = {'sinCoordinar'} 
          rutadevuelta = {'/coordinador/sin-asignar'}
        />
      </>
    );
} 

export default SinAsignar;