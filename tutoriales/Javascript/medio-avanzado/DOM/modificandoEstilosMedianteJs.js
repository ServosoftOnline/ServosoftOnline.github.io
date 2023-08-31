/*
- DOM: MODIFICAR ESTILOS CSS MEDIANTE "inline styles"
    - Podemos modificar estilos css mediante la propiedad style modificando así el atributo style del elemento HTML
    - No será necesario tener una clase y podremos modificar los estilos de forma dinámica. Con clases no podríamos.
    - Pasos:
        - Obtener el elemento a modificar
        - Usamos la propiedad style de la siguiente forma:
            - elemento.style.elemento_html_que queremos modificar = valor

*/

// Asignar un fondo negro y un color de fuente blanca a la última caja del contenedor 2
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff';

// Modifico los estilos de forma dinámica aumentando o disminuyendo el tamaño de las fuentes de todas las cajas
const todasLasCajas = document.querySelectorAll('.caja');
let tamaño = 24;
const aumentarFuente = () => {
    todasLasCajas.forEach((caja) => {
        tamaño++;
        caja.style.fontSize = `${tamaño}px`;
    });
}

const disminuirFuente = () => {
    todasLasCajas.forEach((caja) => {
        tamaño--;
        caja.style.fontSize = `${tamaño}px`;
    });
}