/*
    Reglas para definir vbles:
    1.- Deben empezar por una letra o los simbolos $ y _
    2.- Ser únicas
    3.- No usar nombres reservados para Javascript
    4.- Tipos de datos

    Formas de definirlas:
    1.- De forma global. var edad=48; Alcanzan todo el programa. Hay que tener en cuenta su alcance
    2.- De forma local. let para vbles y const para constantes.

*/

// vble numerica definida y mostrada por consola
var edad=48;
console.log(edad);

// vble que existe pero está sin definir. En consola mostrará undefined
var sinDefinir;
console.log(sinDefinir);

// Pueden usarse comillas dobles o simples
let apodo = 'Baranda';
const correo = "oscarfernandezsantiago@gmail.com";

// Pueden definirse varias vbles al mismo tiempo ahorrando codigo
let telefono, pais, id;

// Operaciones matemáticas
const resultado = 4 + 4;

// Concatenar texto
let nombre = 'Oscar';
let apellido = 'Fernandez';
let nombreCompleto = nombre + apellido;

// Puedo cambiar el tipo de dato de una vble
let miVble = 'texto';
miVble = 9;
miVble = true;


