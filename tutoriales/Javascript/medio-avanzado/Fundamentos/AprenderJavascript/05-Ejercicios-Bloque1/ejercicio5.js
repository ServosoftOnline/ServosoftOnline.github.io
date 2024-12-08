/*
    Ejercicio 5:

    - Tengo una tarta de queso dividida en 16 porciones
    - El pvp de cada porcion es de 3.8 euros
    - Si vendiera todas las porciones, cuando dinero tendría?
    - Muestra los resultados usando templates strings, interpolando variables usando ${}
    
*/

// Alamaceno los datos en variables o constantes
let porcionesDeTarta = 16;
let pvpDeCadaPorcion = 3.8;

// Muestro el titulo del ejercicio los datos y el resultado
console.log('EJERCICIO 5 DEL BLOQUE DE EJERCICIOS EN JAVASCRIPT');
console.log(`Dispongo de una tarta dividida ${porcionesDeTarta} porciones. Su PVP es de ${pvpDeCadaPorcion} euros cada porcion`);
console.log(`Si vendo todas las porciones tendría ${porcionesDeTarta * pvpDeCadaPorcion} euros `);