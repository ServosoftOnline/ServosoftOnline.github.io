/*
  MUESTRA LAS ACTUACIONES EN ESTADO OYM:
    - Trabajos de cableado, Falta cable F12 / CTO, Falta cable general  
*/

// React
import React from "react";

// Hook
import useObtenerActuacionesEnOym from "../hooks/useObtenerActuacionesEnOym";

// Componente
import ListaActuacionesDeUnEstado from "./ListaActuacionesDeUnEstado";

// El Componente
const Oym = () => {  

  // Obtengo el objeto de la consulta y la paso a array
  const [actuacionesEnOym] = useObtenerActuacionesEnOym();
  const arrayActuacionesEnOym = Object.values(actuacionesEnOym);  

  return (
    <>      
      <ListaActuacionesDeUnEstado array = {arrayActuacionesEnOym} modulo = {'o&m'} />      
    </>
  );
}
 
export default Oym;