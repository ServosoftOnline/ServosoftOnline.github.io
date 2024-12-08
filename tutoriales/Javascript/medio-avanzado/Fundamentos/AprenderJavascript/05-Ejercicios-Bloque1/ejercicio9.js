/*
    Ejercicio 9:

    - Una milla tiene 1.6 kilometros
    - ¿Cuantos kilometros tiene una autopista de 120 millas?
    - Muestra los resultados usando templates strings, interpolando variables usando ${}
    
*/

// Alamaceno los datos en variables o constantes
const kmDeUnaMilla = 1.6;
const millasDeLaAutopista = 120;

// Muestro en consola el titulo del ejercicio y el resultado
console.log('EJERCICIO 9 DEL BLOQUE DE EJERCICIOS EN JAVASCRIPT');
console.log(`Una autopista de ${millasDeLaAutopista} millas se corresponden con ${millasDeLaAutopista * kmDeUnaMilla} kilometros`);