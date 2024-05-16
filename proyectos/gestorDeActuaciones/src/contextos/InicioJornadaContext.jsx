/* 
    CONTEXTO QUE ME PERMITE CONTROLAR EL INICIO DE JORNADA.
        - Tuve que usarlo porque los iconos de iniciar jornada y finalizar jornada no actualizaban de forma correcta
        - Previamente debo obtener su rol y si inicio o no jornada almacenada en la coleccion roles con un true o false
        - Este contexto está muy interesante porque debo controlar que las llamadas a los hooks no se realizen dentro de efectos
*/


// React
import React, { useState, useEffect } from "react";

// Hooks
import useObtenerIdRolesDeUnUsuario from "../hooks/useObtenerIdRolesDeUnUsuario";
import useObtenerInicioDeJornada from "../hooks/useObtenerInicioDeJornada";

// Creo el contexto = Estado global
const InicioJornadaContext = React.createContext();

// Creo componente proveedor del estado
const InicioJornadaProvider = ({ children }) => {

    // Uso de los hooks dentro del componente proveedor
    const [idRoles] = useObtenerIdRolesDeUnUsuario();
    const [inicioJornadaObtenido] = useObtenerInicioDeJornada(idRoles);
    
    // Estados que contiene un objeto con la configuración inicial
    const [inicioJornada, setInicioJornada] = useState(null);

    useEffect(() => {
        if (inicioJornadaObtenido !== null) {
            setInicioJornada(inicioJornadaObtenido);
        }
    }, [inicioJornadaObtenido]);

    // Funciones
    const establecerInicioDeJornada = (valor) => {        
        setInicioJornada(valor);
    };

    return (
        <InicioJornadaContext.Provider value={{ inicioJornada, establecerInicioDeJornada }}>
            {children}
        </InicioJornadaContext.Provider>
    );
};

// No exporto por defecto. Exporto el contexto y su proveedor por separado y entre llaves
export { InicioJornadaContext, InicioJornadaProvider };
