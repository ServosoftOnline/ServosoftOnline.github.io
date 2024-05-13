/*
    CONTEXTO PARA ALMACENAR SI EL TECNICO ESTA EN CAMINO O EN CLIENTE
        - Contendrá los tecnicos que se encuentra en cliente o en camino, ambos en un array
        - Cuando cambie uno de los estados añadiré tambien a todos sus compañeros
        - los momentos en que se inicia los estados estarán almacenados en la bbdd



    POR AHORA NO LO UTILIZO. LO DEJO PARA ENTENDER MEJOR COMO FUNCIONABA PARA APLICARLO DE OTRA FORMA. BORRARLO CUANDO ACABE
*/

import React, { useState } from "react";

// Creo el contexto = Estado global
const DesplazamientoContext = React.createContext();

// Creo componente proveedor del estado
const DesplazamientoProvider = ({children}) => {

    // Estados que contiene un objeto con la configuración inicial    
    const [tecnicosEnCamino, asignarTecnicosEnCamino] = useState([]);
    const [tecnicosEnCliente, asignarTecnicosEnCliente] = useState([]);

    // Funciones
    const añadirTecnicosEnCamino = (tecnico) => {
        console.log('Añadiendo en camino a los tecnicos: ' + tecnico);
        asignarTecnicosEnCamino(tecnico);
        

    }

    const eliminarTecnicosEnCamino = (tecnicos) => {
        asignarTecnicosEnCamino(console.log('Eliminando tecnicos del array tecnicos en camino'));
        console.log(tecnicos);
    }

    const añadirTecnicosEnCliente = (tecnicos) => {
        asignarTecnicosEnCliente(console.log('Añadiendo tecnicos al array tecnicos en cliente'));
        console.log(tecnicos);
    }

    const eliminarTecnicosEnCliente = (tecnicos) => {
        asignarTecnicosEnCliente(console.log('Eliminando tecnicos del array tecnicos en cliente'));
        console.log(tecnicos);
    }
    
       
    return (
       <DesplazamientoContext.Provider 
        value={{tecnicosEnCamino, tecnicosEnCliente,
        añadirTecnicosEnCamino, eliminarTecnicosEnCamino, añadirTecnicosEnCliente, eliminarTecnicosEnCliente }}>            
        {children}
       </DesplazamientoContext.Provider>
    );
    
}

// No exporto por defecto. Exporto el contexto y su proveedor por separado y entre llaves 
export {DesplazamientoContext, DesplazamientoProvider};