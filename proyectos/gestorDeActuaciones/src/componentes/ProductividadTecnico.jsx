/*
    COMPONENTE QUE MUESTRA LA PRODUCTIVIDAD DEL TECNICO QUE INICIO LA SESION
*/

// React
import React from "react";

// Componentes
import ListaActuacionesDeUnTecnico from "./ListaActuacionesDeUnTecnico";

// Hooks
import useObtenerActuacionesSupervisadasDeUnTecnico from "../hooks/useObtenerActuacionesSupervisadasDeUnTecnico";
import useObtenerEstadoDeUnUsuario from '../hooks/useObtenerEstadoDeUnUsuario';

const  ProductividadTecnico= ({nombre}) => {
    // console.log(nombre);
    const [actuaciones] = useObtenerActuacionesSupervisadasDeUnTecnico(nombre);  
    const arrayActuaciones = Object.values(actuaciones);    
    console.log(arrayActuaciones);
    const [estadoDelTecnico] = useObtenerEstadoDeUnUsuario();  
    // console.log(estadoDelTecnico);

    return ( 
        <>            
            <ListaActuacionesDeUnTecnico
                array = {arrayActuaciones}
                laPideUnTecnico= {true}
                estadoDelTecnico={estadoDelTecnico}
                rutadevuelta = {'/tecnico/agenda-tecnico'} 
            />    
        </>
    );
}
 
export default ProductividadTecnico;