/*
    OPERADOR TERNARIO:
        1.- Ejemplo que proporciona acceso VIP a entradas vip y acceso REGULAR a entradas regulares
        2.- Puedo hacer condiciones con una sola línea de codigo usando un operador ternario
        3.- Puedo encontrar codigos con operadores ternarios que usan varias líneas

*/

//VBLES
let entrada ='REGULAR';
let acceso;

//Ejemplo usando switch - case
switch (entrada){
    case 'VIP':
        acceso = 'Acceso VIP';
        break;
    case 'REGULAR':
        acceso = 'Acceso Regular';
        break;
    default:
        acceso = 'Acceso no válido'
}
console.log('Proporciono ' + acceso + ' mediante un condicional SWITCH - CASE');

// Mismo ejemplo usando un operador ternario
acceso = (entrada === 'VIP') ? 'Acceso VIP' : 'Acceso regular';
console.log('Proporciono ' + acceso + ' mediante un operador ternario');

//Mismo ejemplo usando un operador ternario pero no lo almaceno en ninguna vble
entrada === 'VIP' ? console.log('Acceso VIP') : console.log('Acceso regular');
