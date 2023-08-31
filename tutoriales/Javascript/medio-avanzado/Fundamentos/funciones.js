/*
    FUNCIONES:
    1.- Son bloques de codigo que definimos y ejecutamos cuando lo precisamos. Ej: cuando pulsamos un boton
    2.- Podemos reutilizarlo.
    3.- Puedo llamarlas desde el propio codigo donde estamos o desde otro lugar. Ej: boton en index
    3.- Formas de definirlas y usarlas:
        3.1.- Declararla y llamarla
        3.2.- Asignando una función a una vble y llamarla
        3.3.- Función de tipo flecha. Se puede abreviar

*/

// Forma1: Declararla y llamarla
function saludo (){
    console.log('BIENVENIDO!!');
}
saludo();

//Puedo almacenar el contenido de una funciónen una constante o vble
const contieneSaludo = saludo;

// Forma2: Declararla, guardarla en una vble
const segundoSaludo = function(){
    console.log('A nuestro sitio web!!');
}
segundoSaludo();

// Forma3: Practicamente igual que la forma2. Quito la palabra function y añado una flecha
const tercerSaludo = () => {
    console.log('Aquí veras tus progresos.');
}
tercerSaludo();

// Forma3: Abreviada en una sola linea. Elimino punto y coma y llaves. Sigue funcionando
const cuartoSaludo = () => console.log('ANIMO!');
cuartoSaludo();





