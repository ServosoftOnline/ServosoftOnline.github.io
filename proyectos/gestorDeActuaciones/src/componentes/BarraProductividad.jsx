/*
    COMPONENTE DE LA BARRA DONDE SE INDICA LA PRODUCTIVIDAD DIARIA, SEMANAL Y MENSUAL
*/

// Importa react, el elemento BarraProductiviad
import React from "react";
import BarraProductividad from "../elementos/BarraProductivad";

// Contexto donde almacenaŕe las productividades
// import { useTotalDelMes } from "./../contextos/TotalGastadoEnElMes";

// Componente
const BarraTotalGastado = () => {

    // Extraigo las diferentes productivicades del hook
    // const {total} = useTotalDelMes();

    // Lo devuelvo convertido en moneda en el interior de la barra
    return ( 
        <BarraProductividad>            
            <p> <b>Productividad diaria: </b>0 pts</p>
            <p> <b>Productividad semanal: </b>0 pts</p>
            <p> <b>Productividad mensual: </b>0 pts</p>
        </BarraProductividad>        
     );
}
 
export default BarraTotalGastado;