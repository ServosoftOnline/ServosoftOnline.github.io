/*
  MUESTRA UNA LISTA CON LAS ACTUACIONES EN ESTADO DE SUPERVISION
  
    - Obtengo las actuaciones que estan instaladas
    - Importo el componente ListaActuacionesDeUnEstado
      - Es un componente al que llamo con frecuencia y debo pasarles unas propieades para que se comporte de una forma u otra
    
    - Llamo al componente ListaActuacionesDeUnEstado y le paso lo siguiente:
      - El array con las actuaciones
      - Le indico que esta supervisando
      - Que lo llamo desde el modulo supervisión que listaActuacionesDeUnEstado muestre un subtitulo personalizado
      - La ruta de vuelta 
  
*/

// React y react router
import React from "react";

// Hook
import useObtenerActuacionesEnSupervision from "../hooks/useObtenerActuacionesEnSupervision";

// Componentes
import ListaActuacionesDeUnEstado from "./ListaActuacionesDeUnEstado";

// El Componente
const Supervision = () => {  

  const [actuacionesEnSupervision] = useObtenerActuacionesEnSupervision();
  const arrayActuacionesEnSupervision = Object.values(actuacionesEnSupervision); 

  return (
    <ListaActuacionesDeUnEstado
      array = {arrayActuacionesEnSupervision}
      estaSupervisando = {true}
      modulo = {'supervison'}
      rutadevuelta = {'/coordinador/supervision'} 
    />    
  );
}
 
export default Supervision;