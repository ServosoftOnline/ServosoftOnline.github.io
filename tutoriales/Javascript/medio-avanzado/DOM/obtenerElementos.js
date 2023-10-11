/*
DOM: OBTENER LOS ELEMENTOS DEL DOCUMENTO HTML
    
    - getElementById(id)
        - Devuelve un objeto con el elemento del documento html con el id pasado como argumento. 
        - Métodos:
            - children. 
                - Devuelve una colección HTML de elementos con sus elementos hijo. Tiene métodos propios
            - parentElement. 
                - Devuelve un objeto con el elemento padre

    - getElementsByTagName(etiqueta).
        - Devuelve una colección HTML, no un array, de elementos en base a su etiqueta. 
        - Tiene métodos propios
            - lenght

    - getElementsByClassName(clase)
        - Devuelve una colección HTML, no un array, de elementos en base a su clase CSS.

    - querySelector(selector_CSS)
        - Devuelve el primer elemento que coincida con el selector css indicado. 
        - Podemos acceder más al interior del selector indicado inicialmente 
        - Mediante el pseudo elemtento last-child puedo acceder al útimo hijo

    - querySelectorAll(selector_CSS)
        - Devuelve una lista de nodos con todos los elementos que coincidan con el selector css
        - Esta lista de nodos tiene sus propios métodos como por ejemplo forEach()
        - Al contrario que en las colecciones de HTML donde no podemos usar forEach()

    - closest.
        - Busca un elemento desde dentro hacia afuera   
        - Si tengo referencia a un elemento hijo, me permite poder obtener elementos padres o abuelos

    - Se usan mas querySelector o querySelectorAll que getElementsByTagName o getElementsByClassName
        - porque se trabaja mejor con listas de nodos que colecciones html

    - Si se usa getElementById por comodidad
    - Se pueden encadenar el uso de todos los métodos anteriores

*/

// Obtengo el contenedor1
const contenedor1 = document.getElementById('contenedor1');

// Muestro el elemento contenedor 1 y sus métodos
console.log(contenedor1);

// Muestro los elementos hijos de contenedor 1 y sus métodos. 
console.log(contenedor1.children);

// Muestro el elemento padre de contenedor 1 y sus métodos. 
console.log(contenedor1.parentElement);

// Obtengo todos los divs del documento html
const divs = document.getElementsByTagName('div');
console.log(divs);
console.log(`La pagina tiene ${divs.length} divisores`);

// Obtengo todos los elementos del documento html cuya clase sea contenedor
const contenedores = document.getElementsByClassName('contenedor');
console.log(`El documento html tiene ${contenedores.length} clases llamadas contenedor`);

// Obtener la caja 1. Es el primer elemento html que se encuentra en el div cuyo id es contenedor1 y la clase caja.
// id lo indicamos con una # y clase lo indicamos con un .
const caja1 = document.querySelector('#contenedor1 .caja');
console.log(caja1);

// Obtener todas las cajas del contenedor1
const cajasContenedor1 = document.querySelectorAll('#contenedor1 .caja');
cajasContenedor1.forEach((caja) => {
    console.log(caja);
});


// Tengo la referencia del elemento nieto que es la última caja del contenedor2
// Quiero obtener el elemento contendedor principal que es el abuelo
const ultimaCajaContenedor2 = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCajaContenedor2.closest('.contenedor-principal'));

// Combino dos métodos para obtener la caja4
const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelector('.caja'));
