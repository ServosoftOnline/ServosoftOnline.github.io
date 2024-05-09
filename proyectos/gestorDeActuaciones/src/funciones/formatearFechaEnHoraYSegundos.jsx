/*
    FUNCION QUE OBTIENE UNA FECHA EN SEGUNDOS Y LA FORMATEA
    - Formatea una fecha en hora y minutos
        
*/

import { format, fromUnixTime } from "date-fns";


const formatearFechaEnHoraYSegundos = (fechaEnSegundos) => {
    return format(fromUnixTime(fechaEnSegundos), "HH:mm");
}
 
export default formatearFechaEnHoraYSegundos;