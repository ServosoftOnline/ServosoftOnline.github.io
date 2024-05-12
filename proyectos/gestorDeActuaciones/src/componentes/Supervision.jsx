/*
  MUESTRA UNA LISTA CON LAS ACTUACIONES EN ESTADO DE SUPERVISION
  
*/

// React y react router
import React from "react";

// Hook
import useObtenerActuacionesEnSupervision from "../hooks/useObtenerActuacionesEnSupervision";

// Componente
import ListaActuacionesDeUnEstado from "./ListaActuacionesDeUnEstado";

// El Componente
const Supervision = () => {  

  const [actuacionesEnSupervision] = useObtenerActuacionesEnSupervision();
  const arrayActuacionesEnSupervision = Object.values(actuacionesEnSupervision); 

  return (
    <ListaActuacionesDeUnEstado array = {arrayActuacionesEnSupervision}/>    
  );
}
 
export default Supervision;