/*
    Ejercicio 1:

    - Calcula cuantas horas le llevaría llegar a la luna a una nave espacial almacenando el valor en una vble
    - Tener en cuenta los siguentes datos:
        - La distancia desde la tierra hasta la luna es de 384.400 kilometros
        - La velocidad de la nave es de 1225 kilometros por hora
        - Para redondear el resultado uso la funcion Math.ceil(vble)
        
    - Muestra los resultados usando templates strings, interpolando variables usando ${}
*/

// Alamaceno los datos en variables o constantes
const distancia = 384400;
const velocidad = 1225;
let horasEnLlegar = distancia / velocidad;

// Muestro en consola el titulo del ejercicio, los datos y la solucion
console.log('EJERCICIO 1 DEL BLOQUE DE EJERCICIOS EN JAVASCRIPT');
console.log(`La distancia entre la tierra y la luna es de: ${distancia} kilometros`);
console.log(`La velocidad de una nave espacial es de: ${velocidad} kilometros por hora`);
console.log(`La nave tardaría en llegar a la luna: ${Math.ceil(horasEnLlegar)} horas`);