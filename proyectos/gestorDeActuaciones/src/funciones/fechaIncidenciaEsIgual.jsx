/*
    FUNCION QUE USARÉ PARA NO MOSTRAR FECHAS DE INCIDENCIAS REPETIDAS    
        
        - Devolverá true si ambas fechas son iguales y false si son diferentes
        - Las fechas contienes segundos por lo que necesito la funcion formatearFecha para compararlas        
*/

import formatearFecha from "./formatearFecha";

const fechaIncidenciaEsIgual = (array, index, incidencia) => {
        
    // La posición 0 no tiene fecha anterior
    if(index!==0) {

        const fechaActual = formatearFecha(incidencia.fechaIncidencia);
        const fechaActuacionAnterior = formatearFecha(array[index -1].fechaIncidencia);

        if (fechaActual===fechaActuacionAnterior) return true;
        else return false;
    }
}

export default fechaIncidenciaEsIgual;