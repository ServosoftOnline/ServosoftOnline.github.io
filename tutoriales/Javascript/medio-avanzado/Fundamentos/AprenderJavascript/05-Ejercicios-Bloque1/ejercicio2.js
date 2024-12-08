/*
    Ejercicio 2:

    - Tenemos 7 cajas con 8 cookies rellenas de chocolate cada una
    - ¿Cuantas cookies en total tenemos?
    - Muestra los resultados usando templates strings, interpolando variables usando ${}
      
*/

// Alamaceno los datos en variables o constantes
const cajas = 7;
const unidadesPorCaja = 8;

// Muestro en consola el título del ejercicio, la informacion que tengo y el resultado
console.log('EJERCICIO 2 DEL BLOQUE DE EJERCICIOS EN JAVASCRIPT');
console.log('Tengo 7 cajas de cookies con 8 unidades en cada caja.');
console.log(`En total tengo ${cajas*unidadesPorCaja} cookies`);