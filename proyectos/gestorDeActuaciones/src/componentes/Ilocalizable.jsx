/*
  COMPONENTE QUE MUESTRA TODAS LAS INCIDENCIAS CUYO CLIENTE ESTA ILOCALIZABLE
*/

// React y react router
import React from "react";

// Hook
import useObtenerIncidenciasIlocalizables from "../hooks/useObtenerIncidenciasIlocalizables";

// Componentes
import ListaActuacionesDeUnEstado from "./ListaActuacionesDeUnEstado";

// El Componente
const Ilocalizable = () => {

  const [incidenciasIlocalizables] = useObtenerIncidenciasIlocalizables();  
  const arrayActuacionesSinLocalizar = Object.values(incidenciasIlocalizables);  

  return (
    <>
      <ListaActuacionesDeUnEstado
        array = {arrayActuacionesSinLocalizar}
        modulo = {'ilocalizables'} 
        rutadevuelta = {'/coordinador/ilocalizable'}        
      />
    </>
  );
}
 
export default Ilocalizable;