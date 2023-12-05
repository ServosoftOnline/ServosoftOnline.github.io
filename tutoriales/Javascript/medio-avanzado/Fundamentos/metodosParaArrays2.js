/*

METODOS Y PROPIEDADES PARA ARRAYS. PARTE 2/2

- Son los metodos son funciones ya declaradas por javascript que podemos aplicar para tratar con arrays

- Javascript los considera objetos con métodos y propiedades.
    - Los métodos equivaldrían a las funciones y las propiedades a las vbles.
    - Las propiedades no llevan corchetes y los métodos sí.

    - indexOf(). Obtengo el primer index de un elemento. Si no lo encuentra devuelve -1.
    - lastIndexOf(). Igual que indexOf() pero devuelve el último.
    - forEach(). Permite recorrer un array. Ejecutando una función por cada elemento del arreglo.
      Accedemos al elemento en cada pasada y podemos trabajar con él. ES MUY USUAL!!
    - find(). Igual que forEach() y podemos devolver un valor mediante return
    - map(). Igual que find() creará un nuevo arreglo con los resultados devueltos e iguales numero de elementos
    - filter(). Igual que map(). El numero de elementos del nuevo array se basará en una condición.
    - includes(). Localiza un elemento concreto dentro de un array. Devuelve true o false Validan formularios
    - every(). Igual que forEach(). Ejecuto una condición y devuelve true si todos los elementos la cumplen.
    - some(). Igual que every. pero devuelve true si alguno de los elementos cumplen la condición 
    
    - Javascript toma las cadenas de texto como arrays. 
        - Podemos acceder a un caracter usando array[index]. Lo uso en el ejemplo de find()
        - Tambien tienen metodos. Ej: array.toUpperCase lo pasa a mayusculas. Lo uso en el ejemplo de map()
        - typeof. Propiedad que comprueba el tipo de un dato. Usado en el ejemplo de every()

*/

// indexOf(). Lo usaré para localizar la posición de un elemento dentro de un array.
const nombres = ['Óscar', 'Silvia', 'Jesús', 'Lucía', 'Jesús'];
function localizaPrimerElemento (arreglo, elemento) {
    if (arreglo.indexOf(elemento) != -1){
        console.log(`Localizé a ${elemento}. Ocupa la posicion ${arreglo.indexOf(elemento)}`);
    } else {
        console.log(`${elemento} no se encuentra en el array de nombres`);
    }
}
console.log(`La posición 0 del indice contiene el valor ${nombres[0]}`); // Muestra Óscar
localizaPrimerElemento (nombres, 'Jesús'); // Jesús esta dos veces en el array. Devuelve la primera posicion
localizaPrimerElemento (nombres, 'Bartolomé'); // No encuentra a Bartolomé

// lastIndexOf(). En el array nombres hay dos Jesús. Localizaré el último
console.log(nombres.lastIndexOf('Jesús')); // Devuelve 4

// forEach(). Recibe una función que indico de tipo flecha que puede tener opcionalemnte los parámetros
// array y posición que ocupa. Esto recorre todo el array saludando a todos y muestra la posicion que ocupa
console.log('Saludo a todos mediante el metido forEach()')
nombres.forEach((persona, posicion) => {
    console.log(`Hola ${persona} ocupas la posicion ${posicion}`);
});

// find(). Ejemplo: Devolver el primer nombre cuya primera letra sea L.
// Si quiero buscar una letra que no estuviese en el array devolveria undefined
// Javascript considera las cadenas de caracteres tambien como arrays. 
// nombre[0] contiene el primer caracter de la cadena devuelta en cada pasada
const empiezaPorL = nombres.find((nombre) => {
    if (nombre[0] === 'L'){
        return nombre;
    }
})
console.log(`El primer nombre que empieza por L en el array de nombres es: ${empiezaPorL}`);

// map(). Ejemplo: Obtener un nuevo array con los nombre es mayuscula.
const nombresEnMayusculas = nombres.map((nombreATransformar) => {
    return nombreATransformar.toUpperCase();
});
console.log(`Nuevo array con los nombres en mayusculas usando el metodo map(): ${nombresEnMayusculas} `);

// Reducción de la función anterior en una sola línea. 
const nombresEnMayusculas2 = nombres.map((nombreATransformar) => nombreATransformar.toUpperCase());

// filter(). Ejemplo: Obtener un nuevo array con los nombres de cinco letras.
// Si usara map, devolvería un array con el mismo numero de elementos con los valores undefined si no cumple
const nombres4Letras = nombres.filter((nombre) => {
    if(nombre.length === 5){
        return nombre;
    }
});
console.log(`Nuevo array con los nombres de 5 letras: ${nombres4Letras}`);

// includes(). Ejemplo: Saber si Silvia esta en el array de nombres
if(nombres.includes('Silvia')) console.log('Silvia se encuentra en el array nombres');
else console.log('Silvia no esta');
console.log(nombres);

// every(). Ejemplo: Validar si todos los elementos del array nombres contienen texto.
// introduzco número por error el número 50
nombres.push(50);
const nombresValidos = nombres.every((nombre) => {
    if(typeof nombre === 'string') return true;
    else return false;
});
console.log(`Todos los elementos del array nombre contiene strings: ${nombresValidos}`);
// Elimino el ultimo elemento para que nombres contenga de nuevo cadenas de texto
nombres.pop()

// some(). Ejemplo: Validar si alguno de los elementos del array no contiene texto.
const nombresValidos2 = nombres.some((nombre) => {
    if(typeof nombre !== 'string') return true;
    else return false;
});
console.log(`Algún elemento del array nombres no es string: ${nombresValidos2}`);
