/*
    METODOS PARA NÚMEROS:

     - toString(). Transforma un numero en cadena de texto
     - toFixed(). Reduce el número de decimales de un numero. Opcionalmente paso el numero de decimales
     - parseInt(). Pasa un valor a entero. Muy útil en formularios. Es muy común su uso.
     - parseFloat(). Igual que parseInt() pero para decimales. Los decimales se indican con un punto
     - Math.random(). Es un objeto por eso se escribe en mayusculas. Devuelve un número al azar de 0 o 1
     - Math.floor(). Redondea hacia el numero entero que esté mas abajo
     - Math.ceil(). Redondea hacia el número entero que esté mas arriba
     - Math.round(). Redondea hacia el número entero mas cercano

*/

 // toString(). Paso un número a texto. Muestro el dato y su tipo
const numero = 4;
const texto = numero.toString();
console.log(numero, typeof numero);
console.log(texto, typeof texto);

// toFixed(). Mostramos el numero Pi con diferentes decimales
const pi = 3.141516;
console.log(`Número PI con cuatro decimales:  ${pi.toFixed(4)}`);
console.log(`Número PI sin decimales: ${pi.toFixed()}`);

// parseInt(). Alerta  muy básica que suma dos números enteros. Los suma como texto si no lo paso antes a entero
let numero1 = prompt('Escriba el número 1'); // Introduzco 1
let numero2 = prompt('Escriba el numero 2'); // Introduzco 1
console.log(`Suma incorrecta. en realidad concatena: ${numero1 + numero2}`); // Mostrará 11

numero1 = parseInt(prompt('Escriba el numero 1 de nuevo: ')); // Introduzco 1
numero2 = parseInt(prompt('Escriba el numero 2 de nuevo: ')); // Introduzco 1
console.log('Suma correcta: ' + (numero1 + numero2)); // Mostrará 2

// parseFloat(). Igual pero con decimales
numero1 = parseFloat(prompt('Introduzca el numero 1 con decimales')); // Introduzco 1.1
numero2 = parseFloat(prompt('Introduzca el numero 2 con decimales')); // Introduzco 1.1
console.log(numero1 + numero2); // Mostrará 2.2

// Math.random(). Muestro un numero al azar entre 0 y 1
console.log(`Numero al azar entre 0 y 1: ${Math.random()}`);

// Math.floor(). Redondeo hacia abajo un numero
console.log(`Redondeo hacia abajo el numero 10.99: ${Math.floor(10.99)}`); // Muestra 10

// Math.ceil(). Redondeo hacia arriba un numero
console.log(`Redondeo hacia arriba el numero 10.1: ${Math.ceil(10.1)}`); // Muestra 11

// Math.round(). Redondeo hacia el número mas cercano
console.log(`Redondeo hacia el número mas cercano el numero 10.99: ${Math.round(10.99)}`); // Muestra 11
console.log(`Redondeo hacia número mas cercano el numero 10.1: ${Math.round(10.1)}`); // Muestra 10

// Número al azar entre 1 y 100
console.log(`Número al azar entre 0 y 100 ${Math.floor(Math.random() * 101)}`);

// Juego al azar de cara o cruz. Calculo un número entre cero y uno y redondeo hacia el entero mas cercano
if(Math.round(Math.random()) === 1) console.log('Cara'); else console.log('Cruz');