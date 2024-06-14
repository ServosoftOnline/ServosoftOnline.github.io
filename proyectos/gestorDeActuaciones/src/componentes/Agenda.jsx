/*
  COMPONENTE QUE MUESTRA UNA LISTA CON TODAS LAS ACTUACIONES CITADAS, EN CAMINO, EN CLIENTE
    - Obtengo mediante un hook todas las actuaciones agendadas
    - Importo el componente listaActuacionesDeUnTecnico
    - Llamo al hook y transformo lo obtenido en un array

    - Al llamar al componente le paso lo siguiente:
      - El array con las actuaciones obtenidas
      - Y que la pide un coordinador.
        -  Dependiendo si la pide un coordinador el link del icono de editar apuntará a un formulario u otro

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
      <ListaActuacionesDeUnTecnico
      array = {arrayActuacionesAgendadas}
      laPideUnCoordinador={true}
      rutadevuelta = {'/coordinador/agenda'}
      /> 
      
    </>
  );
}
 
export default Agenda;