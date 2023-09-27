/*
    FUNCIONALIDAD DE ABRIR EL CARRITO
    - Abriremos y cerraremos el carrito desde aquí
    - Abrirá de dos formas
        - Al pulsar en "Mi carrito" arriba a la derecha
            - Mostrará el contenido del carrito actual
        - Al pulsar "Agregar al carrito" en notificaciones
            - Añadirá nombre del producto, color, tamaño y cantidad.
            - El precio lo cogerá de una simulada base de datos
        - Usaremos el atributo personalizado llamado data-accion = "abrir-carrito" de index.html
    
    



*/

//Obtengo dos botones que abren el carrito, la ventana del carrito
const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');


// Función que abrirá la ventana del carrito y revisa los productos agregados actualmente
const renderCarrito = () => {
    ventanaCarrito.classList.add('carrito--active');
} 

// Recorro los dos botones que abren y cierran el carrito, les añado un event listener y las muestro o oculto
botonesAbrirCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        renderCarrito();
    })
});

botonesCerrarCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        ventanaCarrito.classList.remove('carrito--active');
    })
});


