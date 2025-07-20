/* 
    Contexto que contendrá un estado con el nombre del usuario
    Si ya existiera alguno en local storage lo obtendría
    Cada vez que se actualize el usuario lo almacenará en localstorage
    El valor inicial del estado será el usuario almacenado en localstorage
*/

// Importo createContext que permite crear el contexto
import { createContext, useState, useEffect } from 'react';

// 1. Creamos el contexto
export const UsuarioContext = createContext(null);

// 2. Creamos el proveedor
export const UsuarioProvider = ({ children }) => {

    // Obtengo de localstorage el usuario
    const usuarioLocalStorage = JSON.parse(localStorage.getItem("usuario"));

    // Estado con el usuario por defecto obtenido desde localstorage
    const [usuario, setUsuario] = useState(usuarioLocalStorage);

    // Cada vez que cambie el usuario, actualizar localStorage
    useEffect(() => {
        localStorage.setItem("usuario", JSON.stringify(usuario));
    }, [usuario]);

    // Devuelvo el proveedor con el objeto con la informacion a compartir a todos sus hijos
    return (
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
    );

};

