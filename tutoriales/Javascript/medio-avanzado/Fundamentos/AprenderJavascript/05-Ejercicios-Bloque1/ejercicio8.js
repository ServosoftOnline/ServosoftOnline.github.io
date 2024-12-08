/*
    Ejercicio 8:

    - Tengo una heladeria. Vendo cada bola de helado a 1.8€
    - Cuanto cuestan los cucuruchos de 1, 2 y 3 bolas.
    - El barquillo donde se alojan las bolas cuesta 0.5€
    - Muestra los resultados usando templates strings, interpolando variables usando ${}
    
*/

// Alamaceno los datos en variables o constantes
const pvpBolaHelado = 1.8;
const pvpBarquillo = 0.5;

// Muestro en consola el titulo del ejercicio, los datos y el resultado
console.log(`
    EJERCICIO 8 DEL BLOQUE DE EJERCICIOS EN JAVASCRIPT
    En mi heladeria cada bola de helado cuesta ${pvpBolaHelado}€ y el barquillo ${pvpBarquillo}€
    - Los cucuruchos de una bola cuestan ${pvpBarquillo + pvpBolaHelado}€.
    - Los de dos bolas cuestan ${pvpBarquillo + 2*pvpBolaHelado}€.
    - Los de tres bolas cuestan ${pvpBarquillo + 3*pvpBolaHelado}€.
`);