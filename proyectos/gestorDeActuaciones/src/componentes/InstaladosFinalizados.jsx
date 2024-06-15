/*
  MUESTRA UNA LISTA CON LAS ACTUACIONES FINALIZADAS.
    - Ya han sido supervisadas

*/

// React y react router
import React from "react";

// Hooks
// import useObtenerActuacionesSupervisadas from "../hooks/useObtenerActuacionesFinalizadas";
import useObtenerActuacionesFinalizadas from './../hooks/useObtenerActuacionesFinalizadas';

// Componentes
import ListaActuacionesDeUnEstado from "./ListaActuacionesDeUnEstado";

// El Componente
const InstaladosFinalizados = () => {

  // Obtengo desde el hook
  // const [actuacionesSupervisadas] = useObtenerActuacionesSupervisadas();
  const [actuacionesSupervisadas] = useObtenerActuacionesFinalizadas();
  const arrayActuacionesSupervisadas = Object.values(actuacionesSupervisadas); 
  
  return (
    <ListaActuacionesDeUnEstado
      array = {arrayActuacionesSupervisadas}
      actuacionSupervisada = {true}
      modulo = {'finalizados'}
      rutadevuelta = {'/coordinador/instalados-finalizados'}
    />    
  );
}
 
export default InstaladosFinalizados;