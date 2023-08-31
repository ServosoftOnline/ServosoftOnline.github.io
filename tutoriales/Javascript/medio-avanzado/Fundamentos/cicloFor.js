/*
    CICLO FOR.
    - No confundir con el metodo forEach() para arrays que ejecuta un codigo por cada elemento
    - Estructura que permite repetir código mientras se cumpla una condición.
    - Su interior tiene tres expresiones. for(expresión1; expresión2; expresión3){codigo que se repite};
        - expresión1. Se ejecuta una vez antes ejecutar por primera vez el codigo
        - expresión2. Condición que mientras se cumpla se repite el codigo
        - expresion3. Se ejecuta siempre despues que se ejecute el codigo
    - Evitar ciclos infinitos al introducir estas expresiones
*/

// Mostrar los numeros del 1 al 10
for(let numero = 1; numero < 11; numero ++){
    console.log(numero);
}

// Mostrar los numeros pares del 0 al 10
for (let numero = 0; numero <=10; numero = numero +2) {
    console.log(numero);
}

// Mostrar los números del 10 al 1
for(let numero = 10; numero >= 1; numero--){
    console.log(numero);
}

// Mostrar el contenido del array nombres
const nombres = ['Juan', 'Carlos', 'Pepe', 'Gabriel', 'Dionisio'];
for(indice = 0; indice < nombres.length; indice ++) {
    console.log(nombres[indice]);
}

// Mismo ejemplo anterior usando el metodo para arrays forEach()
console.log('Mismo resultado usando metodo forEach()');
nombres.forEach((nombre) => console.log(nombre));