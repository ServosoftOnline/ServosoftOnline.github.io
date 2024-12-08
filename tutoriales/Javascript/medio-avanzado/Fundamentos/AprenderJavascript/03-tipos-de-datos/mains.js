/*
    TIPOS DE DATOS EXISTENTES:

        - string o cadena de texto
        - int o número entero
        - float, double o numero decimal
        - bolean o boleano, contendrá true o false
        - undefined no contendrá valor
        - null o nula no hay nada en la variable de forma intencionada
        - array o arreglo contendrá una colección de datos
            - Un array puede contener objetos

        - objeto. contiene claves y valores

*/

// cadena de texto
let frase = 'Bienvenido al curso de javascript';

// Número entero
let anio = 2025;

// Número decimal
let interes = 2.5;

// Boleano
let mayorDeEdad = true;

// Undefined
let vacia;
console.log(`Contenido de la variable vacia: ${vacia}`);

// Nula
let nula = null;
console.log(`Contenido de la variable nula: ${nula}`);

// Arreglo
let frutas = ['fresa', 'piña' , 'manzana'];
console.log(`Contenido del array frutas: ${frutas}`);

// Objeto
let heroe = {nombre: 'Barman', universo: 'DC'};
console.log(`Contenido del objeto heroe:`);
console.log(heroe);

// Defino un Array de objetos
let videoconsolas = [
    {nombre: 'PlayStation', fabricante: 'Sony'},
    {nombre: 'Xbox', fabricante: 'Microsoft'}
];

// Muestro el contenido del array de objetos en consola
console.log('Contenido del array de objetos videoconsolas: ');
videoconsolas.forEach((videoconsola) => {    
    console.log(`Videoconsola: ${videoconsola.nombre}, Fabricante: ${videoconsola.fabricante}`);
});






