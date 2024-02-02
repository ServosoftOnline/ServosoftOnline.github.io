/*
    CONTEXTO GLOBAL PARA ARREGLAR EL BUG DE CUANDO PULSO DOS VECES LA MISMA FECHA EN EL CALENDARIO
        - Almacenaré la fecha seleccionada la primera vez
        - Cuando la fecha sea undefined al pulsarla por segunda vez le asignaré la fecha del contexto

*/


import React, { useState } from "react";

// Creo el contexto = Estado global
const FechaContext = React.createContext();

// Creo componente proveedor del conexto
const FechaContextProvider = ({children}) => {

    // Estado que contiene un objeto con la configuración inicial del tema
    const [fechaDelContexto, cambiarFechaDelContexto] = useState(new Date());
      
    return (
       <FechaContext.Provider value={{fechaDelContexto, cambiarFechaDelContexto}}>            
        {children}
       </FechaContext.Provider>
    );
}

// No exporto por defecto. Exporto el contexto y su proveedor por separado y entre llaves 
export {FechaContext, FechaContextProvider};