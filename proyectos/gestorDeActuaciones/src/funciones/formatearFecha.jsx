/*
    FUNCION QUE OBTIENE UNA FECHA EN SEGUNDOS Y LA FORMATEA
    - Formatea una fecha en segundos en día de mes de año en español
        
*/

import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";

const formatearFecha = (fechaEnSegundos) => {
    return format(fromUnixTime(fechaEnSegundos), "dd 'de' MMMM 'de' yyyy", {locale: es});
}

const formatearHora = (fechaEnSegundos) => {
    return format(fromUnixTime(fechaEnSegundos), "HH:mm:ss");
}
 
export default formatearFecha;