/*
  COMPONENTE QUE MUESTRA LAS ACTUACIONES QUE ESTAN PENDIENTES DE COORDINAR
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
        <ListaActuacionesDeUnEstado array = {arrayActuacionesSinAsignar}/>
      </>
    );
} 

export default SinAsignar;