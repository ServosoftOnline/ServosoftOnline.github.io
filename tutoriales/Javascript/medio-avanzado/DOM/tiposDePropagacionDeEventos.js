/*

- DOM: TIPOS DE PROPAGACION DE EVENTOS
    - dos tipos:
        1.- Propagación por burbuja (bubbling). Primero reaccion el evento del hijo y despues el del padre.
        2.- Propagación por captura (capturing). Primero reaccion  el evento del padre y despues el del hijo
        3.- Para aplicar un tipo de propagación u otro uso el tercer argumento opcional de addEventListener en el padre
            - false. butbuja. Valor por defecto
            - true. captura


*/


// Agrego evento al contenedor padre.le aplico el modo de propagación captura
const contenedor = document.getElementById('contenedor1')
contenedor.addEventListener('click', (e) => {
    console.log('Hiciste click en el contenedor');
}, true);

// El elemento hijo hereda el evento del padre. 
const caja = document.querySelector('#contenedor1 .caja');
caja.addEventListener('click', (e) => {
    console.log('Hiciste click en la caja 1')
});