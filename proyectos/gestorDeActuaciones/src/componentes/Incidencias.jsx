/*
  MUESTRA TODAS LAS ACTUACIONES QUE ESTE EN ESTADO INCIDENCIA:
    - Anulada, Error de dirección', Falta permiso, No hay paso / Anulado por cliente, Obra cliente, 
    - Sin finalizar, Anulamos?, Duplicado, Sin llaves del RITI, Canalización obstruida (Calle), Canalización obstruida (Cliente)
*/

// React y react router
import React from "react";

// Componente
import ListaActuacionesDeUnEstado from "./ListaActuacionesDeUnEstado";

// Hook
import useObtenerActuacionesEnIncidencia from "../hooks/useObtenerActuacionesEnIncidencia";

// El Componente
const Incidencias = () => {

  const [actuacionesEnIncidencia] = useObtenerActuacionesEnIncidencia();
  const arrayActuacionesEnIncidencia = Object.values(actuacionesEnIncidencia);

  return (
    <>      
      <ListaActuacionesDeUnEstado
        array = {arrayActuacionesEnIncidencia}
        modulo = {'incidencias'}
        rutadevuelta = {'/coordinador/incidencias'} 
      />      
    </>
  );
}
 
export default Incidencias;