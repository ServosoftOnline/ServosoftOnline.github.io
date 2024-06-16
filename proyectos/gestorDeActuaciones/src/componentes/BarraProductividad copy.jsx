/*
    COMPONENTE DE LA BARRA DONDE SE INDICA LA PRODUCTIVIDAD DIARIA, SEMANAL Y MENSUAL
*/

// React
import React, {useState, useEffect} from "react";

// Elementos
import { ContenedorBarraProductividad } from "../elementos/ElementosBarraProductividad";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";
import useObtenerActuacionesDelMesDeUnTecnico from "../hooks/useObtenerActuacionesDelMesDeUnTecnico";
import useObtenerActuacionesDelDiaDeUnTecnico from "../hooks/useObtenerActuacionesDelDiaDeUnTecnico";

// Componente
const BarraProductividad = () => {

    // Obtengo el nombre del usuario actual
    const [nombre] = useObtenerNombreDeUnUsuario();  

    // Obtengo datos de los hooks pasandole el nombre recien obtenido
    const [actuacionesDelMesDeUnUsuario] = useObtenerActuacionesDelMesDeUnTecnico(nombre); 
    const [actuacionesDelDiaDeUnTecnico] = useObtenerActuacionesDelDiaDeUnTecnico(nombre);

    // Paso a array los datos obtenidos desde los hooks
    const arrayActuacionesDelMesDeUnUsuario = Object.values(actuacionesDelMesDeUnUsuario);
    const arrayActuacionesDelDiaDeUnTecnico = Object.values(actuacionesDelDiaDeUnTecnico);
    
    // Estados
    const [puntosDelMes, setPuntosDelMes] = useState(0);
    const [puntosDelDia, setPuntosDelDia] = useState(0);

    // Obtengo los puntos del mes y del dia
    let acumuladoDelMes = 0;
    let acumuladoDelDia = 0;

    useEffect(() => {

        arrayActuacionesDelMesDeUnUsuario.forEach((actuacion) => {            
            acumuladoDelMes = acumuladoDelMes + actuacion.puntos;
            setPuntosDelMes(acumuladoDelMes);
        });

        arrayActuacionesDelDiaDeUnTecnico.forEach((actuacion) => {            
            acumuladoDelDia = acumuladoDelDia + actuacion.puntos;
            setPuntosDelDia(acumuladoDelDia);
        });

    }, [acumuladoDelMes, acumuladoDelDia]);
    
    
    return ( 

        <ContenedorBarraProductividad>                
            <p> <b>Productividad</b> </p>
            <p>diaria: {puntosDelDia}pts</p>
            <p>semanal: 0 pts</p>
            <p>mensual:{puntosDelMes} pts</p>
        </ContenedorBarraProductividad>        
     );

}
 
export default BarraProductividad;