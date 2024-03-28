/*
    CONTEXTO O ESTADO GLOBAL QUE PERMITIRÁ OBTENER EL ROL DEL USUARIO
    
*/

// React
import React, { useContext} from "react";

// Importo el hook que obtiene el rol que me da error al llamarlo aqui
import useObtenerRolDeUnUsuario from './../hooks/useObtenerRolDeUnUsuario';

// Creo el contexto = Estado global
const RolContext = React.createContext();

// Proporciona el rol
const useRol = () => {
    return useContext(RolContext);
}

// Creo componente proveedor del estado 
const RolProvider = ({children}) => {

    // Obtengo el rol devuelto por el hook
    const [rol] = useObtenerRolDeUnUsuario();

    return (

        // Inyecto el rol y la funcion para reiniciarlo en el contexto
       <RolContext.Provider value={{rol:rol}}>            
            {children}
       </RolContext.Provider>
    );
}

// No exporto por defecto. Exporto el contexto y su proveedor
export {RolContext, RolProvider, useRol};