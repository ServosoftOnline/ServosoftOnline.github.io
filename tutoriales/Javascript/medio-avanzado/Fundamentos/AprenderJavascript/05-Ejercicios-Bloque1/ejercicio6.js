/*
    Ejercicio 6:

    - En mi tienda de videjuegos tengo una oferta
    - Si el cliente compra un juego de 50 euros o más, se le hace un 20% de descuento
    - Un cliente compra el Tekken 15 que cuesta 50 euros
    - Cuando tendría que pagar el cliente por el juego.
    - Muestra los resultados usando templates strings, interpolando variables usando ${}
    
*/

// Alamaceno los datos en variables o constantes
let precioAplicarLaOferta = 50;
let descuento = 20;
let pvpTekken15 = 50;

// Muestro el titulo del ejercicio los datos y el resultado
console.log('EJERCICIO 6 DEL BLOQUE DE EJERCICIOS EN JAVASCRIPT');
console.log(`OFERTA EN MI TIENDA: SI TE GASTAS ${precioAplicarLaOferta} EUROS O MAS TIENES UN ${descuento}% DE DESCUENTO`);
console.log(`Un cliente compró el tekken 15 que costaba ${pvpTekken15} euros`);
console.log(`Se le aplicó el 20% de descuento y solo pagó: ${(pvpTekken15 - (pvpTekken15 * descuento) / 100)} euros`)