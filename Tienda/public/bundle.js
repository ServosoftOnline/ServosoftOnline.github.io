'use strict';

/*
    FUNCIONALIDAD DE TODOS LOS EVENTOS QUE SE PRODUZCAN DENTRO DEL CONTENEDOR PRODUCTO
        - Evento de los thumbs. Al pinchar en ellos se cambia la imagen grande
*/

// Obtengo todo lo que necesito para la funcionalidad e los thumbs
const producto = document.getElementById('producto');
const imagenGrande = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

// Obtengo lo necesario para la funcionalidad e los colores
const propiedadColor = producto.querySelector('#propiedad-color');

// obtengo lo necesario para la funcionalidad de añadir cantidad
const botonMenos = producto.querySelector('#disminuir-cantidad');
const botonMas = producto.querySelector('#incrementar-cantidad');
const cantidad = producto.querySelector('#cantidad');


// Funcionalidad de los thumbs
thumbs.addEventListener('click', (e) => {
    // Si hago click en cualquier imagen de thumbs
    if (e.target.tagName === 'IMG'){
        // obtengo su ruta completa
        const imagenSrc = e.target.src;
        // obtengo la posicion donde se encuentra el último caracter /
        const lastIndex = imagenSrc.lastIndexOf('/');
        // El nombre de la imagen es lo que viene despues del /. Si no añado el mas 1 cogería tambien el /
        const nombreImagen = imagenSrc.slice(lastIndex + 1);
        // Cambio el source de la imagen grande que será ahora el del thumbs. El cambio se produce inmediato.
        // Los nombres de los archivos imagen grande y thumbs deber ser el mismo
        imagenGrande.src = `./img/tennis/${nombreImagen}`;
    }
});

// Funcionalidad de los colores
propiedadColor.addEventListener('click', (e) => {
    // Si hago click en el input
    if (e.target.tagName === 'INPUT') {
        const colorSeleccionado = e.target.value;
        imagenGrande.src = `./img/tennis/${colorSeleccionado}.jpg`;
    }
    
});

// Funcionalidad de añadir/disminuir cantidad
botonMenos.addEventListener('click', (e) => {
    if (cantidad.value > 1) cantidad.value--;     
});

botonMas.addEventListener('click', (e) => {
    cantidad.value++;
});

// ABRIR CARRITO, CERRARLO, AGREGAR PRODUCTO

// Obtengo los dos botones que abren y cierran el carrito, el contenedor de carrito
const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');

// Funcion que abre el carrito
const renderCarrito = () => {
    ventanaCarrito.classList.add('carrito--active');
};

// Función que cierra el carrito
const cierraCarrito = () => {
    ventanaCarrito.classList.remove('carrito--active');
};

// Añado un evento a cada botón de abrir carrito
botonesAbrirCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        renderCarrito();
    });    
});

// Añado un evento a cada botón de cerrar carrito
botonesCerrarCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        cierraCarrito();
    });    
});