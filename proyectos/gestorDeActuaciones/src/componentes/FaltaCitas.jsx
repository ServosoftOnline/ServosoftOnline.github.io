/*
  MUESTRA LAS ORDENES QUE SE ENCUENTREN EN ESTADOFALTACITAS:
    - A espera de confirmar cliente o Falta cita  
*/

// React y react router
import React from "react";

// Componente
import ListaActuacionesDeUnEstado from "./ListaActuacionesDeUnEstado";

// Hook
import useObtenerIncidenciasEnFaltaCitas from "../hooks/useObtenerIncidenciasEnFaltaCitas";

// El Componente
const FaltaCitas = () => { 

  const [incidenciasEnFaltaCitas]= useObtenerIncidenciasEnFaltaCitas();
  const arrayIncidenciasEnFaltaCitas = Object.values(incidenciasEnFaltaCitas);

  return (
    <>      
      <ListaActuacionesDeUnEstado array = {arrayIncidenciasEnFaltaCitas}/>
      
    </>
  );
}
 
export default FaltaCitas;