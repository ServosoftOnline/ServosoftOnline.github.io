/*
  MUESTRA LAS ORDENES QUE SE ENCUENTREN EN ESTADOMANTENIMIENTO:
    - Falta conexion DC o Sin señal en CTO / Mantenimiento
*/

// React y react router
import React from "react";

// Componente
import ListaActuacionesDeUnEstado from "./ListaActuacionesDeUnEstado";

// Hook
import useObtenerIncidenciasEnMantenimiento from "../hooks/useObtenerIncidenciasEnMantenimiento";

// El Componente
const Mantenimiento = () => {  

  const [incidenciasEnMantenimiento] = useObtenerIncidenciasEnMantenimiento();
  const arrayIncidenciasEnMantenimiento = Object.values(incidenciasEnMantenimiento);

  return (
    <>
      <ListaActuacionesDeUnEstado
        array = {arrayIncidenciasEnMantenimiento}
        modulo = {'mantenimiento'}
        rutadevuelta = {'/coordinador/mantenimiento'} 
      />      
    </>
  );
}
 
export default Mantenimiento;