/*
  COMPONENTE QUE MUESTRA UNA LISTA CON LAS ACTUACIONES CITADAS
*/

// React y react router
import React from "react";

// Hook
import useObtenerActuacionesAgendadas from "../hooks/useObtenerActuacionesAgendadas";

// Componente
import ListaActuacionesDeUnEstado from "./ListaActuacionesDeUnEstado";

// El Componente
const Agenda = () => {
  
  const [actuacionesAgendadas] = useObtenerActuacionesAgendadas();
  const arrayActuacionesAgendadas = Object.values(actuacionesAgendadas);

  return (
    <>      
      <ListaActuacionesDeUnEstado array = {arrayActuacionesAgendadas}/>      
    </>
  );
}
 
export default Agenda;