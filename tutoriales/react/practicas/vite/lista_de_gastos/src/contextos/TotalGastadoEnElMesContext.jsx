/*
    CONTEXTO QUE CONTIENE LA SUMA DE TODOS LOS IMPORTES DEL MES ACTUAL
*/

// React
import React, { useState, useContext, useEffect } from "react";

// Hooks
import useObtenerTodosLosGastosDelMes from './../hooks/useObtenerTodosLosGastosDelMes';

// Creo el contexto = Estado global
const TotalGastadoEnElMes = React.createContext();

// Creo componente proveedor del estado
const ProveedorTotalGastadoEnElMes = ({children}) => {

    // Estado que contiene un objeto con la configuración inicial
    const [total, cambiarTotal] = useState();

    // Obtengo los gastos a partir del hook
    const [gastos] = useObtenerTodosLosGastosDelMes();
    
    // Calculo el acumulado del mes y lo añado al estado
    useEffect(() => {
        let acumulado = 0;
        gastos.forEach((gasto) => acumulado = acumulado + gasto.importe);
        cambiarTotal(acumulado);        
    },[gastos]);

    // Devuelvo el proveedor del contexto añadiendo el estado total
    return (
       <TotalGastadoEnElMes.Provider value={{total: total}}>            
        {children}
       </TotalGastadoEnElMes.Provider>
    );
}

// No exporto por defecto. Exporto el contexto y su proveedor por separado y entre llaves 
export {ProveedorTotalGastadoEnElMes, TotalGastadoEnElMes};