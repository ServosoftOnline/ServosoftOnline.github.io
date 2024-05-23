/*
  MUESTRA UNA LISTA CON LAS ACTUACIONES EN ESTADO DE SUPERVISION
  
    - El coordinador que solicita la lista de actuacionesDeUnEstado le pasa el array con las actuaciones
    - Al pasarle el valor true en estaSupervisando.
      - Hará que el componente listaActuacionesDeUnEstado cambie el link donde apunte el icono de editar
  
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
    <ListaActuacionesDeUnEstado array = {arrayActuacionesEnSupervision} estaSupervisando = {true}/>    
  );
}
 
export default Supervision;