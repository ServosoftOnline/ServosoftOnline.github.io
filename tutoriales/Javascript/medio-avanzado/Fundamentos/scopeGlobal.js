/*
    SCOPE O ALCANCE DE VBLES (globales, locales o de bloque)
    - Indica desde que partes del proyecto podemos llegar a las vbles.
    - Aquí veremos el ALCANCE GLOBAL
        - Son declaradas fuera de una función como const, let o var
        - Podemos acceder a ellas desde cualquier parte del código
*/

// Ejemplo 1: Las vble global son accesibles desde dentro de una función
var nombre = 'Jesús';
let primerApellido = 'Gutiérrez';
const segundoApellido = 'Fernández'
const bienvenido = () => console.log(`Buenos días ${nombre} ${primerApellido} ${segundoApellido}`);
bienvenido();

