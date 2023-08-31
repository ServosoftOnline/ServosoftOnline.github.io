/*
DOM: PROPAGRACIÓN DE EVENTOS

    - Si agrego un evento al elemento padre lo heredan sus hijos
    - Si su hijo ya tiene un evento actuará la propagración de eventos.
    - evento.stopPropagation(). Evitar la propagacion. Lo aplicamos en el event listener del hijo


*/

// Agrego evento al contenedor padre
const contenedor = document.getElementById('contenedor1')
contenedor.addEventListener('click', (e) => {
    console.log('Hiciste click en el contenedor');
});

// El elemento hijo hereda el evento del padre. 
// Si deseo que no lo herede uso el método e.stopProgragation()
const caja = document.querySelector('#contenedor1 .caja');
caja.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Hiciste click en la caja 1')
});


