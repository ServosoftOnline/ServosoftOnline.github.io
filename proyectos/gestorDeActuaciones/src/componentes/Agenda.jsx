/*
  COMPONENTE QUE MUESTRA UNA LISTA CON TODAS LAS ACTUACIONES CITADAS
*/

// React y react router
import React from "react";

// Hook
import useObtenerActuacionesAgendadas from "../hooks/useObtenerActuacionesAgendadas";

// Componente
// import ListaActuacionesDeUnEstado from "./ListaActuacionesDeUnEstado";
import ListaActuacionesDeUnTecnico from "./ListaActuacionesDeUnTecnico";

// El Componente
const Agenda = () => {
  
  const [actuacionesAgendadas] = useObtenerActuacionesAgendadas();
  const arrayActuacionesAgendadas = Object.values(actuacionesAgendadas);

  return (
    <>      
      {/* <ListaActuacionesDeUnEstado array = {arrayActuacionesAgendadas}/>       */}
      <ListaActuacionesDeUnTecnico array = {arrayActuacionesAgendadas} laPideUnCoordinador={'si'}/>
    </>
  );
}
 
export default Agenda;