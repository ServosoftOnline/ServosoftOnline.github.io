/* 
    OPERADORES NUMERICOS EN JAVASCRIPT

    1.- Operadores aritméticos:
        = Asigna valor a una vble
        + Suma
        - Resta
        * Multiplicación
        / División
        % Modulo. Resto de una división
        ++ Aumento
        -- Disminución
    
    2.- Operadores de asignación
        += Suma un número
        -= Resta un numero
        *= Multiplica por un numero
        /= Divide por un numero
        %= Obtiene el resto de una division y lo asigna a la vble

    3.- Operadores de comparación
        ==  Igual en valor
        === Igual en valor y en tipo
        !=  Diferente en valor
        !== Diferente en valor y tipo
        >   Mayor que
        >=  Mayor o igual que
        <   Menor que
        <=  Menor o igual que
        ?   Operador ternario. Ejecuta código si se cumple una condición
*/

// OPERADORES ARITMETICOS
// Operaciones basicas
let resultadoSuma = 3 + 3;
let resultadoResta =  5 - 10;
let restoDivision = 10 % 3;
console.log('El resto de la division es: ' + restoDivision);

// ++Aumento
let numero = 1;
numero++;
console.log('Número aumentado vale: ' + numero);

// OPERADORES DE ASIGNACION
// Suma un numero igual para restar, multiplicar y dividir
let sumarNumero = 2;
sumarNumero +=5;
console.log('Sumado 5 al numero inicial que valia 2: ' + sumarNumero);


// OPERADORES DE COMPARACION
const esMayor = 4 > 2;                  //true
const esMayorIgual = 4 >= 4;            //true
const sonIguales = 10 == 10;            //true
const sonIgualesEnTipo = 10 === '10';   //False

//Operador ternario. 
const cualEsMayor = 7 > 14 ? 'Es mayor el primer número' : 'Es mayor el segundo número';
console.log(cualEsMayor); //Mostrará Es mayor el segundo número






