/*
    Tipos de datos:
    1.- string - cadena de texto. Javascript los considera arrays
    2.- number - numeros enteros o decimales
    3.- boolean - booleanos (verdadero o falso)
    4.- arrays - arreglos. Permite almacenar multiples valores de diferente tipo.
    5.- objet - objeto. Conjunto de valores agrupados en parejas propiedad valor. 
    6.- function - funciones. Bloques de codigo que podemos repetir
    7.- valor null - valor nulo. vble sin valor
    8.- valor undefined- valor sin definir. Lo asigna por defecto javascript cuando una vble carece de valor
*/

// 1.- CADENA DE TEXTO
// Tipos de comillas que se pueden usar. Todas valen
let nombre = 'Oscar';
let primerApellido = "Fernandez";
let segundoApellido = `Santiago`;
console.log('Nombre completo: '+ nombre +' '+ primerApellido +' ' + segundoApellido);

// Poner una palabra entrecomillada
const parrafo1 = "Esto es un 'parrafo'";
console.log(parrafo1);
const parrafo2= 'Esto es un "parrafo"';
console.log(parrafo2);
const parrafo3= "Esto es un \"parrafo\"";
console.log(parrafo3);

// 2.- NUMEROS ENTEROS O DECIMALES
let numeroEntero = 4;
let numeroDecimal = -4.123;

// 3.- BOOLEANOS (VERDADERO O FALSO)
let usuarioConectado = true;
let mayorQue = 1 > 2;
console.log("Contenido de la vlbe 'mayorQue': " + mayorQue);

// 4.- ARRAYS - ALMACENA MULTIPLES VALORES DE DIFERENTES TIPOS.
//Este array contiene texto, numeros, booleano, objeto, otro array dentro
let array = ['texto', 456, true, {propiedad:'valor'}, [1,2,3]];

// 5.- OBJETOS. ALMACENA MULTIPLES VALORES AL IGUAL QUE LOS ARRAYS ES MAS DETALLADO
let datosPersonales = {
    nombreCompleto: {
        nombre: 'Oscar',
        primerApellido: 'Fernández',
        segundoApellido: 'Santiago'
    },
    edad: 48,
    mayorDeEdad: true,
    direccionCompleta: {
        calle: 'Biznaga',
        numero: 10,
        planta: 5,
        letra: 'B'
    }
};

// Accedería a todo el objeto, a su nombre, a si es mayor de edad y al numero de su calle respectivamente
console.log('Datos personales: '    + datosPersonales);
console.log('Nombre de pila: '      + datosPersonales.nombreCompleto.nombre);
console.log('Es mayor de edad: '    + datosPersonales.mayorDeEdad);
console.log('Número de la calle: '  + datosPersonales.direccionCompleta.numero);

// 6.- FUNCIONES
//Pueden definirse y solo ser llamadas cuando yo lo decida. Ej: cuando haga click en un botón o ocurra algo
function muestraHola(){
    console.log('Muestro el mensaje hola desde una función');
}
muestraHola();

// 7.- VALOR NULL. Reinicia el valor de una vble cuando no sabes que ponerle
let vbleNula = null;
console.log(vbleNula);

// 8.- VALOR UNDEFINED. No suele ponerese a mano. Lo usa Javascript cuando una vble no tiene ningun valor
let vbleNoDefinida = undefined;
console.log(vbleNoDefinida);
