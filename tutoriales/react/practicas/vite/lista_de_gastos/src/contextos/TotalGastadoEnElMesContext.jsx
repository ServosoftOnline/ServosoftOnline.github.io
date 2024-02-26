/*
    CONTEXTO QUE CONTIENE LA SUMA DE TODOS LOS IMPORTES DEL MES ACTUAL
*/


import React, { useState } from "react";

// Creo el contexto = Estado global
const TotalGastadoEnElMes = React.createContext();

// Creo componente proveedor del estado
const ProveedorTotalGastadoEnElMes = ({children}) => {

    // Estado que contiene un objeto con la configuración inicial
    const [totalDelMes, cambiarTotalDelMes] = useState(7);
    

    // // Funcion
    // const cambiarMensaje = (mensajeNuevo, nuevaValidacion) => { 
    //     cambiarMensajeAMostrar(mensajeNuevo); 
    //     cambiarRdoValidacion(nuevaValidacion);
    // }
    
       
    return (
       <TotalGastadoEnElMes.Provider value={{totalDelMes}}>            
        {children}
       </TotalGastadoEnElMes.Provider>
    );
}

// No exporto por defecto. Exporto el contexto y su proveedor por separado y entre llaves 
export {TotalGastadoEnElMes, ProveedorTotalGastadoEnElMes};