/*
    OBJETOS:

    0 .- Las variables dentro de un objeto se les llama propiedades. A las funciones se les llama métodos
    1.- Mejora la comprensión del contenido de los array
    2.- Puedo introducir otros objetos, arrays, funciones
    3.- Puedo acceder a su contenido mejor que un array al poder indicar su propiedad
    4.- Añadir contenido a un objeto
    5.- Sobrescribir contenido de un objeto
    6.- Acceder a los métodos de dentro de un objeto
*/

// 1.- CONTENIDO DE UN ARRAY
// true corresponden a 'si esta suscrito a nuestra web' y false a que esta 'suscrito por correo'. como lo indico?
const personaArray  = ['Pepe', 46, 'correo@correo.com', true, false];
const personaObjeto = {
    nombre: 'Pepe',
    edad: 46,
    correo: 'correo@correo.com',
    suscritoWeb: true,
    suscritoCorreo: false
};

// 2.- OBJETO QUE CONTIENE OTRO OBJETO, UN ARRAY Y UNA FUNCION.
// El segundo objeto no tiene el simbolo = y el ; al final
let usuario = {
    nombre: 'Pepe',
    edad: 46,
    correo: 'correo@correo.com',
    suscrito: {
        web: true,
        correo: false
    },
    coloresFavoritos: ['Verde', 'Azul', 'Violeta'],
    saludo: function(){
        alert ('Hola. Aprende a usar objetos literales con este script');
    }
};

// 3.- FORMAS PARA ACCEDER AL CONTENIDO DE UN OBJETO CON RESPECTO A UN ARRAY.

//Muestra todo el objeto usuario
console.log(usuario);

// Si fuera array tendría que indicar usuario[0]. Con objetos se entiende mejor
console.log('La propiedad nombre contiene: ' + usuario.nombre);

// Otra forma de acceder
console.log('La propiedad edad contiene: ' + usuario['edad']);

// Otra forma de acceder.
// Si cambio 'correo' por otro valor del objeto, la constante cambia y lo que muestra tambien
const constante = 'correo';
console.log(usuario[constante]);

//Almacenar el contenido en una vble
let edad;
edad = usuario['edad'];
console.log('La vble edad contiene: ' + edad);

// Muestra si esta suscrito por correo
console.log('Esta suscrito por correo: ' + usuario.suscrito.correo);

// 4.- AÑADIR NUEVO CONTENIDO A UN OBJETO
usuario.pais = 'Mexico';
console.log('Nueva propiedad añadida Pais: ' + usuario.pais);

// 5.- SOBRESCRIBIR
usuario.pais = 'España';
console.log('Pais sobrescrito: ' + usuario.pais);

// 6.- FORMA DE LLAMAR A UN METODO
usuario.saludo();
