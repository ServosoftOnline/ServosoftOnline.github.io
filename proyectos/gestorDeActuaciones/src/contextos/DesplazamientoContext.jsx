/*
    CONTEXTO PARA ALMACENAR SI EL TECNICO ESTA EN CAMINO O EN CLIENTE


    POR AHORA NO LO UTILIZO. LO DEJO PARA ENTENDER MEJOR COMO FUNCIONABA PARA APLICARLO DE OTRA FORMA. BORRARLO CUANDO ACABE
*/

import React, { useState } from "react";

// Creo el contexto = Estado global
const DesplazamientoContext = React.createContext();

// Creo componente proveedor del estado
const DesplazamientoProvider = ({children}) => {

    // Estado que contiene un objeto con la configuración inicial    
    const [estaEnCamino, asignarEstaEnCamino] = useState(false);
    const [estaEnCliente, asignarEstaEnCliente] = useState(false);
    const [idActuacionDondeMeEncuentro, asignarIdActuacionDondeMeEncuentro] = useState("");
    
       
    return (
       <DesplazamientoContext.Provider value={
                {estaEnCamino, asignarEstaEnCamino ,
                estaEnCliente, asignarEstaEnCliente,
                idActuacionDondeMeEncuentro, asignarIdActuacionDondeMeEncuentro}
            }>            
        {children}
       </DesplazamientoContext.Provider>
    );
}

// No exporto por defecto. Exporto el contexto y su proveedor por separado y entre llaves 
export {DesplazamientoContext, DesplazamientoProvider};