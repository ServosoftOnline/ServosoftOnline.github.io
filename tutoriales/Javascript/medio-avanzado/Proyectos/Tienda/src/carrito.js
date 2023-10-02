/*
    FUNCIONALIDAD DE ABRIR EL CARRITO
    - Abriremos y cerraremos el carrito desde aquí
    - Se abrirá de dos formas
        - Al pulsar en "Mi carrito" arriba a la derecha
            - Mostrará el contenido del carrito actual
        - Al pulsar "Agregar al carrito" en notificaciones
            - Añadirá nombre del producto, color, tamaño y cantidad.
            - El precio lo cogerá de una simulada base de datos
        - Usaremos el atributo personalizado llamado data-accion = "abrir-carrito" de index.html
    
    - Para agregar productos al carrito:
        - En la vble producto guardaré el contenedor entero del producto y localizo la información que necesito
        - Obtengo el id a traves del atributo personalizado data-producto-id
            - Los atributos personalizados Javascript le quita el guión y pondría la i en mayuscula
            - En el botonAgregarAlCarrito debo obtenerlo asi productoId
        - Obtengo el nombre a traves del texto que contiene el elemento cuya clase es producto_nombre
            - Al ser clase hay que añadirle el .

        - Obtengo la cantidad a traves del valor del input de la cantidad
            - Al ser un id hay que añadirle el #
            - Quizas sea necesario pasarlo a entero
        - Obtengo el color a partir del id propiedad-color que tenga el valor seleccionado
        - Obtengo el tamaño igual que el color con el id propiedad-tamaño
        - Agrego esta información mediante push

        - Renderizar el carrito:
            - Activo la ventana.
            - Recorro el carrito y en cada pasada
                - Por cada uno de los elementos llamado productoCarrito
                - Creo la plantilla.
                    - Añado de forma dinámica lo obtenido en el paso anterior mediante backticks
                - El precio lo cogeré de la base de datos simulada en productos.js



            








        - En un objeto guardaremos nombre del producto, color, tamaño y cantidad
        - El precio lo obtendremos desde una base de datos simulada
        

    
    



*/

// Obtengo botones, ventana y todo el producto
const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const botonAgregarAlCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
const carrito = [];


// Función que abrirá la ventana del carrito y revisa los productos agregados actualmente
const renderCarrito = () => {
    ventanaCarrito.classList.add('carrito--active');

    carrito.forEach((productoCarrito) => {
        const plantillaProducto = `
            <div class="carrito__producto-info">
                <img src="./img/tennis/1.jpg" alt="" class="carrito__thumb" />
                <div>
                    <p class="carrito__producto-nombre">
                        <span class="carrito__producto-cantidad">${productoCarrito.cantidad} x </span>${productoCarrito.nombre}
                    </p>
                    <p class="carrito__producto-propiedades">
                        Tamaño:<span>${productoCarrito.tamaño}</span> Color:<span>${productoCarrito.color}</span>
                    </p>
                </div>
            </div>
            <div class="carrito__producto-contenedor-precio">
                <button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                        />
                    </svg>
                </button>
                <p class="carrito__producto-precio">$500.00</p>
            </div>
        `;

        const itemCarrito = document.createElement('div');
        itemCarrito.classList.add('carrito__producto');
        itemCarrito.innerHTML = plantillaProducto;
        ventanaCarrito.querySelector('.carrito__body').appendChild(itemCarrito);
    });
} 

// Recorro los dos botones que abren y cierran el carrito, les añado un event listener y muestro o oculto la ventana
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

// Función que agrega al carrito
botonAgregarAlCarrito.addEventListener('click', () => {
    const id = producto.dataset.productoId;
    const nombre = producto.querySelector('.producto__nombre').innerText;
    const cantidad = parseInt(producto.querySelector('#cantidad').value);
    const color = producto.querySelector('#propiedad-color input:checked').value;
    const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value;

    // console.log(`id: ` + id);
    // console.log(`nombre: ` + nombre);
    // console.log(`cantidad: ` + cantidad);
    // console.log(`color: ` + color);
    // console.log('tamaño: ' + tamaño);

    // Añado el contenido del carrito
    carrito.push ({
        id: id,
        nombre: nombre,
        cantidad: cantidad,
        color: color,
        tamaño: tamaño
    });



    
    
});


/*
    - Para agregar productos al carrito:
        - En la vble producto guardaré el contenedor entero del producto y localizo la información que necesito
        - Obtengo el id a traves del atributo personalizado data-producto-id
            - Los atributos personalizados Javascript le quita el guión y pondría la i en mayuscula
            - En el botonAgregarAlCarrito debo obtenerlo asi productoId
        - Obtengo el nombre a traves de la clase producto_nombre
            - Al ser clase hay que añadirle el .
        - Obtengo la cantidad a traves del valor del input de la cantidad
            - Al ser un id hay que añadirle el #
            - Quizas sea necesario pasarlo a entero
        - Obtengo el color a partir del id propiedad-color que tenga el valor seleccionado
        - Obtengo el tamaño igual que el color con el id propiedad-tamaño
*/