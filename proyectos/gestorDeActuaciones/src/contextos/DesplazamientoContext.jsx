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
const DesplazamientoProvider = ({ children }) => {

    // Estados que contienen los arrays de técnicos
    const [tecnicosEnCamino, setTecnicosEnCamino] = useState([]);
    const [tecnicosEnCliente, setTecnicosEnCliente] = useState([]);

    // Funciones para añadir y eliminar técnicos
    const añadirTecnicoEnCamino = (tecnico) => {
        console.log('Añado a '+ tecnico + ' en camino');
        setTecnicosEnCamino(prevTecnicos => [...prevTecnicos, tecnico]);
    }

    const eliminarTecnicoEnCamino = (tecnico) => {
        console.log('Elimino a ' + tecnico + ' como tecnico en camino');
        setTecnicosEnCamino(prevTecnicos => prevTecnicos.filter(t => t !== tecnico));
    }

    const añadirTecnicoEnCliente = (tecnico) => {
        setTecnicosEnCliente(prevTecnicos => [...prevTecnicos, tecnico]);
    }

    const eliminarTecnicoEnCliente = (tecnico) => {
        setTecnicosEnCliente(prevTecnicos => prevTecnicos.filter(t => t !== tecnico));
    }
    
    return (
       <DesplazamientoContext.Provider 
        value={{
            tecnicosEnCamino,
            tecnicosEnCliente,
            añadirTecnicoEnCamino,
            eliminarTecnicoEnCamino,
            añadirTecnicoEnCliente,
            eliminarTecnicoEnCliente
        }}>            
        {children}
       </DesplazamientoContext.Provider>
    );
    
}

export { DesplazamientoContext, DesplazamientoProvider };
