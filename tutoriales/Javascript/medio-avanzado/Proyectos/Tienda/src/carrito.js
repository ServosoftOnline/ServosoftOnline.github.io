/*
    FUNCIONALIDAD DEL CARRITO

    - ABRIR CARRITO
        - Se abrirá de dos formas
            - Al pulsar en "Mi carrito" arriba a la derecha
                - Mostrará el contenido del carrito actual
            - Al pulsar "Agregar al carrito" en notificaciones
                - Añadirá nombre del producto, color, tamaño y cantidad.
                - El precio lo cogerá de una simulada base de datos
            - Usaremos el atributo personalizado llamado data-accion = "abrir-carrito" de index.html

    - AGREGAR PRODUCTOS
        - Obtengo el producto entero
            - Lo guardo en la constante producto

        - Obtengo la informacion que preciso del producto
            - El id a traves del atributo personalizado data-producto-id
                - Los atributos personalizados Javascript le quita el guión y pondría la i en mayuscula
                - En el botonAgregarAlCarrito debo obtenerlo asi productoId
            
            - El nombre a traves del texto que contiene el elemento cuya clase es producto_nombre
                - Al ser clase hay que añadirle el .

            - La cantidad a traves del valor del input de la cantidad
                - Al ser un id hay que añadirle el #
                - Quizas sea necesario pasarlo a entero

            - El color a partir del id propiedad-color que tenga el valor seleccionado
            - El tamaño igual que el color con el id propiedad-tamaño

        - Si hay productos duplicados no los añado.
            - Si hay productos en el carrito que tengan el mismo id, color y tamaño no duplico y sumo su cantidades

        - Agrego toda la información obtenida mediante push,
            
    - MOSTRAR EL CARRITO (RENDERIZAR)
        - Activo la ventana del carrito.

        - Debo borrar si hubiera productos anteriores porque se añadarían duplicados.
            - Estos tiene la case carrito_producto
        - Recorro el carrito y en cada pasada ...
            - Por cada uno de los elementos llamado productoCarrito
            - Dependiendo del color mostraré una imagen u otra en el carrito
            - Creo la plantilla.
                - Añado de forma dinámica lo obtenido en el paso anterior mediante backticks
            - Lo añado al DOM
            - El precio lo cogeré de la base de datos simulada en productos.js
            - Voy a añadir un formato de moneda para europa
                - Usaré una API de Javascript para transformar números en monedas
                - Creo el objeto formatearMoneda
                - Elaborando la plantilla uso su método format(numeroATransformar)
                    - ese número es el resultado de multiplicar el producto de precio por la cantidad
        
        

        
        

*/

// Importo el objeto productos
import data from "./data/productos";

// Obtengo boton y botones, ventana carrito, todo el producto y creo el array carrito vacio
const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const botonAgregarAlCarrito = document.getElementById('agregar-al-carrito');
const ventanaCarrito = document.getElementById('carrito');
const producto = document.getElementById('producto');
const carrito = [];

// API obtener monedas. Nueva instancia Internacionalización, argumentos: idioma Y estilo de formato de moneda
const formatearMoneda = new Intl.NumberFormat('es-ES', {style: 'currency' , currency: 'EUR'});

// Si no hay productos muestro carrito vacio, si los hay renderizo el carrito
const renderCarrito = () => {
    if (carrito.length < 1) {

        // Muestro el carrito vacio
        ventanaCarrito.classList.add('carrito--vacio');

    } else {

        // RENDERIZO
        ventanaCarrito.classList.add('carrito--active');

        // Sin añadir productos nuevos, si cierro y abro el carrito se añaden productos duplicados
        // Para solucionar esto borro del DOM esos productos para despues crear de nuevo el carrito
        const limpioCarrito = ventanaCarrito.querySelectorAll('.carrito__producto');
        limpioCarrito.forEach((producto) => { producto.remove(); });

        // Recorro el carrito
        carrito.forEach((productoCarrito) => {
            
            // Recorro el array productos y localizo el precio comparando id del producto del carrito con el id del array
            data.productos.forEach((producto) => {
                if (productoCarrito.id === producto.id){ productoCarrito.precio = producto.precio }
            });

            // Asigno el thumb correcto dependiendo del color y asigno la ruta correcta
            let thumbSrc = '';
            if (productoCarrito.color === 'rojo') {
                thumbSrc = './img/thumbs/rojo.jpg'
            } else if (productoCarrito.color === 'amarillo') {
                thumbSrc = './img/thumbs/amarillo.jpg'
            } else if (productoCarrito.color === 'negro') {
                thumbSrc = './img/thumbs/negro.jpg'
            };        
                
            // Creo la plantilla modificando los valores a partir del contenido del carrito
            const plantillaProducto = `
                <div class="carrito__producto-info">
                    <img src= "${thumbSrc}" alt="" class="carrito__thumb" />
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
                    <p class="carrito__producto-precio">                    
                        ${formatearMoneda.format(productoCarrito.precio * productoCarrito.cantidad)}
                    </p>
                </div>
            `;

            // Creo la estructura y la añado al DOM
            const itemCarrito = document.createElement('div');
            itemCarrito.classList.add('carrito__producto');
            itemCarrito.innerHTML = plantillaProducto;
            ventanaCarrito.querySelector('.carrito__body').appendChild(itemCarrito);
        });
            
    
    }
    
} 

// Añado un evento a los botones que abren y cierran el carrito
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

// Función que agrega productos al carrito
botonAgregarAlCarrito.addEventListener('click', () => {
    
    // Obtengo lo que quiero añadir
    const id = producto.dataset.productoId;
    const nombre = producto.querySelector('.producto__nombre').innerText;
    const cantidad = parseInt(producto.querySelector('#cantidad').value);
    const color = producto.querySelector('#propiedad-color input:checked').value;
    const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value;

    // Muestro los resultados para asegurarme que son correctos
    // console.log(`id: ` + id);
    // console.log(`nombre: ` + nombre);
    // console.log(`cantidad: ` + cantidad);
    // console.log(`color: ` + color);
    // console.log('tamaño: ' + tamaño);

    
    // busco duplicados en el carrito. Si lo encuentro aumento el item.cantidad y no lo añado
    let productoEnCarrito = false;
    carrito.forEach((item) => {
        if(item.id === id && item.color === color && item.tamaño === tamaño) {
            item.cantidad = item.cantidad + cantidad;
            productoEnCarrito = true;
        }
    });
    
    if(productoEnCarrito === false) {
        carrito.push ({
            id: id,
            nombre: nombre,
            cantidad: cantidad,
            color: color,
            tamaño: tamaño
        });
    }    
    
});
