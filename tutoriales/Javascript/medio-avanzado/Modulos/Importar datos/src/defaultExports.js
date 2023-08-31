/*
    DEFAULT IMPORT
        - Suelen usarse cuando se trabajan con librerías y frameworks
        - Permite exportar funciones y/o vbles con un código mas ordenado.
        - Por cada archivo habrá solo una funcion a exportar
        - Importamos una sola cosa.
        
        - Dos formas de definirlas:
            - Llamar a la funcion default. No le pongo nombre, tipo de datos o signo igual
            - Definirla con nombre, tipo de datos y signo igual y al final.
              al final escribir export default nombre de la función
        
        - Debo comentar una de las formas porque como solo debe tener una funcion. me da error
*/

/*

// Forma 1
export default () => {
    return {
        nombre: 'Oscar',
        correo: 'correo@correo.com'
    }
}

*/

// Forma 2
const obtenerUsuario = () =>{
    return{
        nombre: 'Oscar',
        correo: 'correo@correo.com'
    }
}

export default obtenerUsuario;
