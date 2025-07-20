// Contexto que contendrá un estado con el nombre del usuario

// Importo createContext que permite crear el contexto
import { createContext, useState } from 'react';

// 1. Creamos el contexto
export const UsuarioContext = createContext(null);

// 2. Creamos el proveedor
export const UsuarioProvider = ({ children }) => {

    // Estado con el usuario
    const [usuario, setUsuario] = useState(null);

    // Devuelvo el proveedor con el objeto con la informacion a compartir a todos sus hijos
    return (
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
    );

};

