/*
    Ejercicio 4:

    - Tenemos una jirafa en el zoo que pesa 1.120 kilos
    - Le damos de comer 141 kilos de hojas frescas
    - ¿Cuanto pesa ahora la jirafa
    - Muestra los resultados usando templates strings, interpolando variables usando ${}
    
*/

// Alamaceno los datos en variables o constantes
let pesoDeLaJirafa = 1120;
let kilosDeComidaDiaria = 141;

// Muestro por consola el titulo del ejercicio, los datos y el resultado
console.log('EJERCICIO 4 DEL BLOQUE DE EJERCICIOS EN JAVASCRIPT');
console.log(`La jirafa del zoo pesa ${pesoDeLaJirafa} kilos.`);
console.log(`En un día le dan de comer ${kilosDeComidaDiaria} kilos de hojas frescas`);
console.log(`Al fin del día la jirafa pesará ${pesoDeLaJirafa + kilosDeComidaDiaria} kilos`);
