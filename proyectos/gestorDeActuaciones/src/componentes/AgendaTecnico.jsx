/*
    COMPONENTE QUE MUESTRA LA AGENDA DE CADA TECNICO
    
        - Le paso el nombre del tecnico como propiedad
        - Las actuaciones devueltas las paso a un array
        - Paso como propiedad el array al componente ListaActuacionesDeUnEstado
*/

// React
import React from "react";

// Componentes
import ListaActuacionesDeUnTecnico from "./ListaActuacionesDeUnTecnico";

// Hooks
import useObtenerActuacionesCitadasDeUnTecnico from "../hooks/useObtenerActuacionesCitadasDeUnTecnico";

// Mi componente
const  AgendaTecnico= ({nombre}) => {

    const [actuaciones] = useObtenerActuacionesCitadasDeUnTecnico(nombre);  
    const arrayActuaciones = Object.values(actuaciones);

    return (
        <>
            <ListaActuacionesDeUnTecnico array = {arrayActuaciones} laPideUnTecnico={'si'}/>    
        </>
    );
}
 
export default AgendaTecnico;