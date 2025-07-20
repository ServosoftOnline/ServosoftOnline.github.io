// Contexto que contendrá información que compartiré en mi routing

// Importo createContext que permite crear el contexto
import { createContext } from 'react';

// 1. Creamos el contexto
export const InformacionCompartida = createContext(null);

// 2. Creamos el proveedor
export const InformacionCompartidaProvider = ({ children }) => {

    // Objeto que contiene la información a compartir
    const informacion = {
        usuario: 'Oscar Fernández',
        articulos: ['escoba', 'fregona'],
        telefono: '620890221',
        descripcion: 'Sitio web creado por servosoft'
    };

    // Devuelvo el proveedor con el objeto con la informacion a compartir a todos sus hijos
    return (
        <InformacionCompartida.Provider value={informacion}>
            {children}
        </InformacionCompartida.Provider>
    );

};
