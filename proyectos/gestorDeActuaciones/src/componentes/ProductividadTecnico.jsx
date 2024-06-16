/*
    COMPONENTE QUE MUESTRA LA PRODUCTIVIDAD DEL TECNICO QUE INICIO LA SESION
*/

// React
import React from "react";

// Componentes
import ListaActuacionesDeUnTecnico from "./ListaActuacionesDeUnTecnico";
import BarraProductividad from "./BarraProductividad";

// Hooks
import useObtenerActuacionesSupervisadasDeUnTecnico from "../hooks/useObtenerActuacionesSupervisadasDeUnTecnico";
import useObtenerEstadoDeUnUsuario from '../hooks/useObtenerEstadoDeUnUsuario';

const  ProductividadTecnico= ({nombre}) => {
    
    const [actuaciones] = useObtenerActuacionesSupervisadasDeUnTecnico(nombre);  
    const arrayActuaciones = Object.values(actuaciones);        
    const [estadoDelTecnico] = useObtenerEstadoDeUnUsuario();      

    return ( 
        <>            
            <ListaActuacionesDeUnTecnico
                array = {arrayActuaciones}
                laPideUnTecnico= {true}
                quiereVerSuProductividad = {true}
                estadoDelTecnico={estadoDelTecnico}
                rutadevuelta = {'/tecnico/productividad-tecnico'} 
            />    

            {/* <BarraProductividad/> */}
        </>
    );
}
 
export default ProductividadTecnico;