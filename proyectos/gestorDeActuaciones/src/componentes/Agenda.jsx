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
  
  // Obtenido desde el hook y pasado a un array
  const [actuacionesAgendadas] = useObtenerActuacionesAgendadas();
  const arrayActuacionesAgendadas = Object.values(actuacionesAgendadas);

  return (
    <>  

      {/* Llamo al componente listaActuacionesDeUnTecnico. Le paso el array con las actuaciones y que la solicita un coordinador */}
      <ListaActuacionesDeUnTecnico array = {arrayActuacionesAgendadas} laPideUnCoordinador={true}/>
      
    </>
  );
}
 
export default Agenda;