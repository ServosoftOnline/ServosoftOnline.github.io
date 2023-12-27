/*
    contextoTema.jsx
        - Estado global que guarda la configuración del tema
        - En otras app podría tener por ejemplo para crear un estado global para un carrito de compra
        - Creo el contexto y un componente proveedor de dicho contexto
        - No los exporto por defecto sino por separado y entre llaves porque seran importados en sitios diferentes
            - El proveedor lo importaré en el componente donde llame al componente ppal App para introducirlo en su interior 


*/

import React from "react";

// Creo el contexto = Estado global
const ContextoTema = React.createContext();

// Creo componente proveedor del estado
const ProveedorTema = ({children}) => {
    return (
        <div><h1>hola</h1></div>
        {children}
    );
}

// No exporto por defecto. Exporto el contexto y su proveedor por separado y entre llaves 
export {ContextoTema, ProveedorTema};