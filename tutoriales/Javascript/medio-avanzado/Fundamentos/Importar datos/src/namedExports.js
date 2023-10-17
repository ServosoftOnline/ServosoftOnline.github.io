/*
    NAMED EXPORTS
        - Suelen usarse cuando se trabajan con librerías y frameworks
        - Permite exportar funciones y/o vbles
        - Definimos la vble o funcion y le anteponemos la palabra export
        - Tambienpodemos poner al final la palabra export y entre llaves las vbles o funciones
        - podemos exportar mas cosas a diferencia de default exports
*/

// Exportaciones mediante la palabra export antes de cada vble o funcion que quiera exportar
export const nombre = 'Oscar';
export const obtenerPost = () => {
    return ['Post1', 'Post2', 'Post3'];
}

// Exportación mediante la palabra export usada solo al final
const apellido = "Fernández";
const direccion = "su calle"
export {apellido, direccion};
