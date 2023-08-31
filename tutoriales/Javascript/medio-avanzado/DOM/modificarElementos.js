/*
- DOM: MODIFICAR ELEMENTOS DEL DOCUMENTO HTML
    - Debo obtener el elemento para después modificarlo, añadirle atributos u modificarle su estilo
    - Propiedades y métodos del objeto document: 
        - elemento.innerHTML
            - Accedo al contenido del elemento html y lo cambio
        - elemento.attribute
            - Accedo a los atributos del elemento html y lo cambio
            - Ejemplos: modificar el atributo value de los formularios o el atributo src de las imágenes, ... 
        - elemento.setAttribute(atributo que modificamos o agregamos, valor)
            - Parecido al anterior. Dá mas control en algunas situaciones
            - Puede agregar atributos personalizados usando la palabra data-. Será necesario en algunos momentos
        - elemento.style.propiedad.
            - Permite modificar estilos css
            - Algunas propiedades css:
                - background
                - color
                - Las propiedades css que tengan un guión en medio debemos transformarlas y usar camelCase
                    - text-transform que pasa las fuentes fuentes a mayusculas usaríamos textTransorm

*/

// Obtengo la primera caja. muestro la caja y su contenido.
// Modifico el texto, añado la etiqueta negrita y la página cambia
const primeraCaja = document.querySelector('.caja');
console.log(primeraCaja);
console.log(primeraCaja.innerHTML);
primeraCaja.innerHTML = '<b>Caja 1 modificada en negrita</b>';


// Le añado el atributo id a la primera caja obtenida.
// Si el objeto primera caja no tuviera la propiedad id la crea y si existe la machaca
primeraCaja.id = 'nuevo-atributo';
console.log(primeraCaja);

// Añado la clase caja activa a la primer caja usando setAttribute
primeraCaja.setAttribute('class', 'caja activa');
console.log(primeraCaja);

// Añado el atributo personalizado llamado data-id
primeraCaja.setAttribute('data-id', '234-567-123');
console.log(primeraCaja);

// Obtengo la primera caja del contenedor 2, le cambio el fondo, el color de la fuente y las pongo en mayusculas
const contenedor2Caja1 = document.querySelector('#contenedor2 .caja');
contenedor2Caja1.style.background = '#000';
contenedor2Caja1.style.color = '#fff';
contenedor2Caja1.style.textTransform = 'uppercase';