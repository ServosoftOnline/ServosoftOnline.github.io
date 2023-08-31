'use strict';

/*
    NAMED EXPORTS
        - Suelen usarse cuando se trabajan con librerías y frameworks
        - Permite exportar funciones y/o vbles
        - Definimos la vble o funcion y le anteponemos la palabra export
        - Tambienpodemos poner al final la palabra export y entre llaves las vbles o funciones
        - podemos exportar mas cosas a diferencia de default exports
*/

// Exportaciones mediante la palabra export antes de cada vble o funcion que quiera exportar
const nombre = 'Oscar';
const obtenerPost = () => {
    return ['Post1', 'Post2', 'Post3'];
};

// Exportación mediante la palabra export usada solo al final
const apellido$1 = "Fernández";
const direccion = "su calle";

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
    return {
        nombre: 'Oscar',
        correo: 'correo@correo.com'
    }
};

/*
    EMPTY EXPORTS:
    - Suelen usarse cuando se trabaja con Javascript vanila. Es decir sin librerías y frameworks
    - Permite exportar estructuras diferentes a vbles o funciones. Ejemplo: sentencias if, ciclos, ...
    - Si pusiera alguna vble o función no la reconoceria su destino index.js o main.js.
    - Si quisiera exportar alguna vble o función podría exportarla mediante la palabra export
    - no debo usar la palabra export. Solo escribir el código
    - solo lo importo desde index.js o main.js
    - Si el codi

*/
console.log("Muestro en consola desde emptyExports.js");
let vbleExportada = 'Alla voy';

/*
    NAMED IMPORTS, DEFAULT IMPORTS Y EMPTY IMPORTS
    - Este archivo ppal index.js recibe las exportaciones realizadas de diferentes formas desde los archivos:
        - namedExports.js
        - defaultExports.js
        - emptyExports.js
    - Y muestra los resultados en consola
*/
// Desde namedExports.js. Uso un alias porque ya existe una constante llamada apellido
const apellido = "Santiago";
console.log("Información importada mediante la palabra export:");
console.log(`Nombre: ${nombre} ${apellido$1} ${apellido}`);
console.log(`Vive en ${direccion}`);
console.log("Sus Post: " + obtenerPost());
console.log ("Información importada mediante namespace imports");
console.log(`Nombre: ${nombre} ${apellido$1} ${apellido}`);
console.log(`Vive en ${direccion}`);
console.log (`Sus post: ${obtenerPost()}`);
console.log("Información importada mediante default exports:");
console.log(`Nombre de usuario: ${obtenerUsuario().nombre}`);
console.log(`correo electronico: ${obtenerUsuario().correo}`);
console.log(vbleExportada);
