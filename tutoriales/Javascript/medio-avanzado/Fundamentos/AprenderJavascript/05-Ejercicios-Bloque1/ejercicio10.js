/*
    Ejercicio 10:

    - El otro dia fui con mis amigos Pepe y Manolo a un restaurante de smash burgers
    - Yo me comí dos hamburguesas, Pepe se comió tres y Manolo seis.
    - Cuantas hamburguesas nos comimos en total?
    - Y .... ¿Es cierto que yo comi menos que pepe?
    - Muestra los resultados usando templates strings, interpolando variables usando ${}

    
*/

// Alamaceno los datos en variables o constantes
let hamburguesasQueComiYo = 12;
let hamburguerasQueComioPepe = 3;
let hamburguerasQueComioManolo = 6;

// Muestro en consola el titulo del ejercicio y el resultado
console.log('EJERCICIO 10 DEL BLOQUE DE EJERCICIOS EN JAVASCRIPT');
console.log(`
Me fui de comilona al restuaurante smash burgers con mis amigos Pepe y Manolo.
Yo me comí ${hamburguesasQueComiYo} hamburguesas, Pepe se comió ${hamburguerasQueComioPepe} y Manolo se comió ${hamburguerasQueComioManolo}.
En total nos comimos ${hamburguesasQueComiYo + hamburguerasQueComioPepe + hamburguerasQueComioManolo} hamburguesas.
`);

if (hamburguesasQueComiYo>hamburguerasQueComioPepe) console.log('Yo comí mas hamburguesas que Pepe');
else console.log('Pepe comio mas hamburguesas que yo');