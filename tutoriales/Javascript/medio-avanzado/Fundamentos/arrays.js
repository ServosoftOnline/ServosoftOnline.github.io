/*
    ARRAYS:

    1.- Como acceder a su contenido
    2.- Añadir contenido
    3.- Sobrescribir contenido
    4.- Javascript los considera objetos. Tienen propiedades y funciones.
        4.1.- La propiedad lenght cuenta el número de elementos del array
        4.2.- El metodo o función push añade un elemento al final del array
        4.3.- En consola/array/prototype se muestran las diferentes funciones de los array
    5.- Se usan menos que los objetos, pero son casi igual de importantes
*/

// 1.- Acceso
const amigos = ['Pedro', 'David', 'Jesus'];
console.log(amigos[1]); // Mostrará David
console.log(amigos[0]); // Mostrará Pedro

// 2.- Añadir contenido. Puedo saltar indices. Javascript rellenará los huecos con 'empty'.
// no es usual usar esta forma y dejar huecos vacios. Lo usual es usar la función push del punto 5
let colores = [];
colores[0] = 'Azul';
colores[1] = 'Amarillo';
colores[3] = 'Verde';
console.log(colores);

// 3.- Sobrescribir
colores[0] = 'Blanco'; // Blanco sobrescribe a Azul
console.log(colores);

// 4.- La propiedad lenght cuentar la cantidad de elementos que tiene un array
console.log('El array colores tiene ' + (colores.length) + ' elementos'); //Mostrará 4. cuenta tambien los vacios

// 5.- push agrega un elemento al final de un array sin saber cuantos elementos exiten
colores.push('Naranja'); //Añade Naranja al final del array. Se mantiene el hueco vacio.
console.log(colores);