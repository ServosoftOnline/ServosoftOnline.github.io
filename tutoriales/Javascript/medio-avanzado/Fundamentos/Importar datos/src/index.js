/*
    NAMED IMPORTS, DEFAULT IMPORTS Y EMPTY IMPORTS
    - Este archivo ppal index.js recibe las exportaciones realizadas de diferentes formas desde los archivos:
        - namedExports.js
        - defaultExports.js
        - emptyExports.js
    - Y muestra los resultados en consola

    - Si quisera importar todo un archivo y no solo sus vbles o funciones
        - import './archivo.js';

*/
// Desde namedExports.js. Uso un alias porque ya existe una constante llamada apellido
import {nombre, apellido as primerApellido, obtenerPost, direccion} from './namedExports.js'
const apellido = "Santiago";
console.log("Información importada mediante la palabra export:")
console.log(`Nombre: ${nombre} ${primerApellido} ${apellido}`);
console.log(`Vive en ${direccion}`)
console.log("Sus Post: " + obtenerPost());

// Desde defaultExports.js. datos es un objeto y alias
import * as datos from './namedExports.js';
console.log ("Información importada mediante namespace imports");
console.log(`Nombre: ${datos.nombre} ${datos.apellido} ${apellido}`);
console.log(`Vive en ${direccion}`);
console.log (`Sus post: ${datos.obtenerPost()}`)

// Desde defaultExports.js. El nombre de la funcion pongo el que quiera. en este caso usuario y sin llaves
import usuario from './defaultExports.js';
console.log("Información importada mediante default exports:")
console.log(`Nombre de usuario: ${usuario().nombre}`);
console.log(`correo electronico: ${usuario().correo}`);

// Desde emptyExports.js El codigo que no tiene vbles o funciones lo muestra al principio de la consola
// La vble sí la muestra al final
import "./emptyExports.js";
import { vbleExportada } from './emptyExports.js';
console.log(vbleExportada);