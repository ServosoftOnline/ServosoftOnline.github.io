/*
    CONTEXTO PARA ALMACENAR EL ESTADO QUE ALMACENA SI EL COORDINADOR QUIERE O NO MOSTRAR LA BARRA DE ESTADO DE TECNICOS
*/


import React, { useState } from "react";

// Creo el contexto = Estado global
const muestraEstadosTecnicosContext = React.createContext();

// Creo componente proveedor del estado
const ProveedorMuestraEstadosTecnicosProvider = ({children}) => {

    // Estado que contiene la configuración inicial
    const [mostrarBarraTecnicos, setMostrarBarraTecnicos] = useState("true");    
       
    return (
       <muestraEstadosTecnicosContext.Provider value={{mostrarBarraTecnicos, setMostrarBarraTecnicos}}>            
        {children}
       </muestraEstadosTecnicosContext.Provider>
    );
}

// No exporto por defecto. Exporto el contexto y su proveedor por separado y entre llaves 
export {muestraEstadosTecnicosContext, ProveedorMuestraEstadosTecnicosProvider};