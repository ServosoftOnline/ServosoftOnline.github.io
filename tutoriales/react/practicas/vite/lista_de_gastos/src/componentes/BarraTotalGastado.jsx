/*
    COMPONENTE DE LA BARRA DONDE SE INDICA EL TOTAL GASTADO EN EL MES
*/

// Importa react, el elemento BarraTotal, la funcion convertirAMoneda
import React from "react";
import BarraTotal from "../elementos/BarraTotal";
import convertirAMoneda from "../funciones/convertirAMoneda";

// Componente
const BarraTotalGastado = () => {
    return ( 
        <BarraTotal>
            <p>Total gastado en el mes:</p>
            <p>{convertirAMoneda(0.00)}</p>
        </BarraTotal>        
     );
}
 
export default BarraTotalGastado;