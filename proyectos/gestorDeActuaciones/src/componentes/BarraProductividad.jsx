// React
import React, { useState, useEffect } from "react";

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

    // Efecto para obtener los puntos del mes
    useEffect(() => {

        let acumuladoDelMes = 0;
        arrayActuacionesDelMesDeUnUsuario.forEach((actuacion) => {
            acumuladoDelMes += actuacion.puntos;
        });
        
        setPuntosDelMes(acumuladoDelMes);

    }, [arrayActuacionesDelMesDeUnUsuario]);

    // Efecto para obtener los puntos del día
    useEffect(() => {

        let acumuladoDelDia = 0;
        arrayActuacionesDelDiaDeUnTecnico.forEach((actuacion) => {
            acumuladoDelDia += actuacion.puntos;
        });

        setPuntosDelDia(acumuladoDelDia);
    }, [arrayActuacionesDelDiaDeUnTecnico]);
    
    return ( 
        <ContenedorBarraProductividad>                
            <p><b>Productividad</b></p>
            <p>diaria: {puntosDelDia} puntos</p>
            <p>mensual: {puntosDelMes} puntos</p>
        </ContenedorBarraProductividad>
    );
}
 
export default BarraProductividad;
