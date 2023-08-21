// ABRIR CARRITO, CERRARLO, AGREGAR PRODUCTO

// Obtengo los dos botones que abren y cierran el carrito, el contenedor de carrito
const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');

// Funcion que abre el carrito
const renderCarrito = () => {
    ventanaCarrito.classList.add('carrito--active');
}

// Función que cierra el carrito
const cierraCarrito = () => {
    ventanaCarrito.classList.remove('carrito--active');
}

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

