/*
  COMPONENTE QUE MUESTRA UNA LISTA CON TODAS LAS ACTUACIONES CITADAS, EN CAMINO, EN CLIENTE
*/

// React y react router
import React from "react";

// Hook
import useObtenerActuacionesAgendadas from "../hooks/useObtenerActuacionesAgendadas";

// Componente/
import ListaActuacionesDeUnTecnico from "./ListaActuacionesDeUnTecnico";

// El Componente
const Agenda = () => {
  
  const [actuacionesAgendadas] = useObtenerActuacionesAgendadas();
  const arrayActuacionesAgendadas = Object.values(actuacionesAgendadas);

  return (
    <>
      <ListaActuacionesDeUnTecnico array = {arrayActuacionesAgendadas} laPideUnCoordinador={'si'}/>
    </>
  );
}
 
export default Agenda;