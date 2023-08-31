/*
    CONDICIONAL SWITCH - CASE
    1.- Condicional que usaremocs cuando sepamos cuales van a ser sus valores.
    2.- Si queremos usar operadores lógicos y ampliar las posibilidades de las compraciones usaremos if-else.
    3.- Debemos indicar la sentencia BREAK para salir
    4.- DEFAULT ejecutará el codigo cuando no se cumplen ninguno de los casos anteriores  
*/

//VBLES
let persona = {
    nombre: 'Oscar',
    pais: 'Inglaterra'
}

//Ejemplo con else if
console.log('USANDO IF - ELSE IF')
if(persona.pais === 'España'){
    console.log('La persona es española');
} else if(persona.pais === 'Francia'){
    console.log('La persona es francesa');
} else if (persona.pais === 'Inglaterra'){
    console.log('La persona es inglesa');
} else {
    console.log('La persona no es española, francesa o inglesa');
}

//Mismo ejemplo con switch - case
console.log('USUANDO SWITCH-CASE');
switch (persona.pais){
    case 'España':
        console.log('La persona es española');
        break;
    case 'Francia':
        console.log('La persona es francesa');
        break;
    case 'Inglaterra':
        console.log('La persona es inglesa');
        break;
    default:
        console.log('La persona no es española, francesa o inglesa');
}
