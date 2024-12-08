/*
    OPERADORES:

        - Símbolos especiales que permiten realizar operaciones con los diferentes tipos de datos

        - Tipos de operadores:

            - De tipo:
                - Permite ver el tipo de datos que contiene una variable.
                - Usaré la instruccion typeof seguido de la variable
                - Si aplico typeof a un array me dirá que es un objeto pero no podrá definiri si es realmente un array
                    - Para eso uso la funcion Array.isArray(variable) y entre parentesis pongo la variable

            - Aritméticos:
                - Suma
                - Resta
                - Multiplicacion
                - Division
                - Resto de una division
                - Potencia

            - De asignación:
                - =
                - +=
                - -=
                - *=
                - /=

            - De comparación: 
                - Comparan dos valores y devolverá true o false
                - Si el comparador es estricto, sí tendrá en cuenta el tipo de dato.
                - De igualdad (==)
                - De igualdad estricta (===)
                - De desigualdad (!=)
                - De desigualdad estricta (!==)
                - Mayor que (>)
                - Mayor o igual que (>=)
                - Menor que (<)
                - Menor o igual que (<=)


            - Lógicos:
                - Permite comprobar si dos condiciones son verdaderas
                - Operador Y (&&)
                - Operador O (||)
                - Operador NOT (!). Invierte el valor boleano que tenga inicialemente

            - De cadena:
                - Operador +    Permite concatenar cadenas
                - Operador +=   Permite asignar valores

            - De incremento y decremento
                - Operador ++
                - Operador --


*/

// OPERADORES DE TIPO
// Variables y constantes que contienen diferentes tipos de datos
let variableTipoString = 'Un string cualquiera';
const numero = 3;
let altura = 1.67;
const soyPadre = true;
let vacia;
let nula = null;
let frutas = ['fresa', 'piña' , 'manzana'];
let heroe = {nombre: 'Barman', universo: 'DC'};
let videoconsolas = [
    {nombre: 'PlayStation', fabricante: 'Sony'},
    {nombre: 'Xbox', fabricante: 'Microsoft'}
];

// Muestro en consola los diferentes tipos de datos que contienen las variables o constantes
console.log('OPERADORES DE TIPO')
console.log(`La variable variableTipoString es de tipo: ${typeof variableTipoString} `);
console.log(`La constante numero es de tipo: ${typeof numero}`);
console.log(`La variable altura es de tipo: ${typeof altura} aunque contenga un numero decimal`);
console.log(`La variable soyPadre es de tipo: ${typeof soyPadre}`);
console.log(`La variable vacia es de tipo: ${typeof vacia}. Las variables vacias contienen undefined`);
console.log(`La variable nula es de tipo: ${typeof nula}. Las variables nulas contienen un objeto`);
console.log(`El array frutas es de tipo: ${typeof frutas}. Los arrays son tratados como objetos en javascript`);
console.log(`Contiene realmente un array: ${Array.isArray(frutas)}. Devolvera true o false si lo es o no`);
console.log(`La variable heroe contiene un tipo: ${typeof heroe}`);
console.log(`La variable videoconsolas contiene un tipo: ${typeof videoconsolas}`);
console.log(`La variable videoconsolas contiene es un array: ${Array.isArray(videoconsolas)}`);


// OPERADORES ARITMETICOS
// Definicion de las diferentes constantes
const numero1 = 15;
const numero2 = 5;

const suma = numero1 + numero2;
const resta= numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;
const resto = numero1 % numero2;
const numero1AlCubo = numero1 ** 3;

// Muestro en consola los diferentes resultados
console.log('\nOPERADORES ARITMETICOS');
console.log(`Numero1: ${numero1}, numero2: ${numero2}`);
console.log('El resutado de su suma es: ' + suma);
console.log('El resultado de su resta es: ' + resta);
console.log('Su multiplicacion es: ' + multiplicacion);
console.log('Si los dividimos, el resultado seria: ' + division + ' y el resto: ' + resto);
console.log(`${numero2} al cubo es: ${numero1AlCubo}`);

// OPERADORES DE ASIGNACION
console.log('\nOPERADORES DE ASIGNACION');
let numeroAsignado = 1;
console.log('Mediante el operador de asignacion = asigné inicialemte el valor: ' + numeroAsignado);

numeroAsignado += 4;
console.log('Mediante el operador de asignación += le sumo 4, qeudando su resultado así: ' + numeroAsignado);

numeroAsignado -= 2;
console.log('Mediante el operador de asignacion -= le resto 2, quedando su resultado así: ' + numeroAsignado);

numeroAsignado *= 2;
console.log('Mediante el operador de asignacion *= lo multiplico por 2, quedando su resultado asi: ' + numeroAsignado);

numeroAsignado /= 3;
console.log('Mediante el operador de asignacion /= lo divido entre 3, quedando su resultado asi: ' + numeroAsignado);

// OPERADORES DE COMPARACIÓN
console.log('\nOPERADORES DE COMPARACION');
let numero1AComparar = 17;
let numero2AComparar = 12;
let numero3AComparar = 11;

// Comparadores de igualdad y igualdad estricta
if (numero1AComparar == 17) console.log('El numero es 17. Uso el comparador de igualdad ==');
else console.log('El numero no es 17');

if (numero1AComparar == "17") console.log('El numero es 17. Uso el comparador de igualdad ==. No tiene encuenta que 17 es un string');
else console.log('El numero no es 17');

if (numero1AComparar === "17") console.log('El numero es 17');
else console.log('El numero no es 17. Uso el comparador de igualdad estricta === .Aquí si tiene en cuenta que es un string');

if (numero1AComparar === 17) console.log('El numero es 17. Uso el comparador de igualdad estricta === .');
else console.log('El numero no es 17');

// Comparador de desigualdad y desigualdad estricta
if (numero1AComparar != 21) console.log('El numero es diferente a 17');
else console.log('El numero es 17');

if (numero1AComparar !== "17") console.log('El numero es diferente a 17. uso el comparador de desigualdad estricta');
else console.log('El numero es 17');

// Comparador de mayor y mayor que
if (numero2AComparar > numero3AComparar) console.log(`${numero2AComparar} es mayor que ${numero3AComparar}`);
else console.log(`${numero2AComparar} es menor o igual que ${numero3AComparar}`);

if (numero2AComparar >= numero3AComparar) console.log(`${numero2AComparar} es mayor o igual que ${numero3AComparar}`);
else console.log(`${numero2AComparar} es menor que ${numero3AComparar}`);

// OPERADORES LOGICOS
console.log('\nOPERADORES LOGICOS');
const esMayorDeEdad = false;
const tieneEntrada = false;
console.log(`El visitante es mayor de edad: ${esMayorDeEdad} y tiene entrada: ${tieneEntrada}`);

// Operador &&
if(esMayorDeEdad && tieneEntrada) console.log('Puede entrar al recinto porque es mayor de edad y tiene entrada');
else console.log('No tiene permitido la entrada. Debe tener entrada y ser mayor de edad');

// Operador ||
if(esMayorDeEdad || tieneEntrada) console.log('Puede entrar al recinto porque tiene entrada o es mayor de edad');
else (console.log('No tiene permitido la entrada. Debe tener entrada o ser mayor de edad'));

// Operador !
console.log('Dejó de tener la entrada si inicialmente la tenía o no tenía y consiguio una: ' + !tieneEntrada);

// OPERADORES DE CADENA
// Defino las variables
let nombre = "Oscar";
let primerApellido = "Fernandez";
let nombreCompleto = nombre + ' ' + primerApellido;

// Lo muestro en pantalla y le asigno el valor del segundo appelido al nombre completo
console.log('\nOPERADORES DE CADENA');
console.log(`Mi nombre es ${nombre} y mi primer apellido es ${primerApellido}`);
console.log('Mi nombre junto con el primer applido es: ' + nombreCompleto);
nombreCompleto += ' Santiago';
console.log('Mi nombre completo es: ' + nombreCompleto);


// OPERADORES DE INCREMENTO Y DECREMENTO. Establezco un valor inicial, lo aumento y disminuyo una unidad
console.log('\nOPERADORES DE INCREMENTO Y DECREMENTO');

let cifra = 0;
console.log(`La variable cifra contiene inicialemente: ${cifra}`);

cifra ++;
console.log(`Incremento en una unidad y cifra contiene ahora: ${cifra}`);

cifra --;
console.log(`Decremento en una unidad y cifra contiene ahora: ${cifra}`);








