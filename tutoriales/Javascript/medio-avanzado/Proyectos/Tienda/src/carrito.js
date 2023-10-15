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

    - MOSTRAR ALERTA QUE SE AÑADIERON PRODUCTOS AL CARRITO
        - Obtengo el div cuyo id es notificacion
        - Le añado la clase notificacion--active para mostrar la alerta
        - Obtengo la imagen del div y le cambio su src de forma dinámica a partir del color
        - Cuando pasen cinco segundos le quito la clase notificacion--active y desaparece
            
    - MOSTRAR EL CARRITO (RENDERIZAR)
        - Compruebo si existen productos en el carrito
            - Si no existieran muestro la ventana de carrito vacio.
                - Le añado la clase carrito--vacio
                - Cuando haga click en el boton de cerrar la ventana o de volver a la tienda
                    - Le vuelvo a añadir la clase carrito
            - Si existieran productos continuo el proceso

        - Activo la ventana del carrito con productos
        - Debo borrar si hubiera productos anteriores porque se añadarían duplicados.
            - Estos tiene la clase carrito_producto

        - Recorro el carrito y en cada pasada ...
            - Por cada uno de los elementos llamado productoCarrito
            - Dependiendo del color mostraré una imagen u otra en el carrito
            - Creo la plantilla.
                - Añado de forma dinámica lo obtenido en el paso anterior mediante backticks
            
            - El precio lo cogeré de la base de datos simulada en productos.js
                - Voy añadiendo los precios multiplicados por las cantidades al total

            - Voy a añadir un formato de moneda para europa
                - Usaré una API de Javascript para transformar números en monedas
                - Creo el objeto formatearMoneda
                - Elaborando la plantilla uso su método format(numeroATransformar)
                    - ese número es el resultado de multiplicar el producto de precio por la cantidad
            
            - Añado al DOM la plantilla y el total

    - ELIMINAR PRODUCTOS DEL CARRITO
        - Localizo cuando hago click en cualquiera de los botones para borrar productos
            - Hago un event listener a toda la ventana
            - Estos botones tienen el atributo personalizado eliminar-item-carrito

        - Localizo el index del producto a eliminar
            - El carrito esta compuesto por productos, y estos son objetos.
            - Estos objetos estarán divididos en contenedores (div) dentro del documento html
                - Estos div tendrán la clase carrito__producto
            
            - Agrupo todos los divs en un array para despues ver la posicion que ocupa
                - Esta posición coincide con el index a eliminar del carrito
                - Guardo todos los divs, al principio en una lista de nodos.
                - Los paso a array dejandolos encerrados en brackets [] y el operador spread ...
                - Ya puedo usar el método indexOf() para localizar el div seleccionado
                    - Se lo paso como argumento y me devuelve la posición que ocupa
            
        - Creo de nuevo el carrito omitiendo el producto que ocupa la posición obtenida anteriormente
            - Uso el método filter para crear el nuevo carrito
                - Sobrescribo el propio carrito con todos los elementos menos el que ocupa la posicion
                - En cada pasada puedo acceder al objeto del carrito y a su posicion(item e index);
                - Si las posiciones del div localizado y la del objeto del carrito son diferentes 
                    - Devuelvo el objeto y lo vuelvo a introducir en el carrito

        - Si hay elementos en el carrito lo renderizo
        - Si no resuelvo un BUG que mostraba el último elemento del carrito y activo la ventana carrito vacio

    - SIMULAR LA CONEXION CON LA BASE DE DATOS Y AÑADIR EL O LOS PRODUCTOS DEL CARRITO
        - Lo haría al pulsar el botón de comprar



*/

// Importo el objeto productos
import data from "./data/productos";

// Obtengo la ventana del carrito, el producto entero e inicio la vble carrito como un array
const ventanaCarrito = document.getElementById('carrito');
const producto = document.getElementById('producto');
let carrito = [];

// ABRIR EL CARRITO
const botonesAbrirCarrito = document.querySelectorAll('[data-accion = "abrir-carrito"]');
botonesAbrirCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        renderCarrito();
    })
});

// CERRAR EL CARRITO
const botonesCerrarCarrito = document.querySelectorAll('[data-accion = "cerrar-carrito"]');
botonesCerrarCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        ventanaCarrito.classList.remove('carrito--active');
    })
});

// AGREGAR PRODUCTOS Y MOSTRAR ALERTA CUANDO SE INTRODUCE ALGUNO
const botonAgregarAlCarrito = document.getElementById('agregar-al-carrito');
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

    // ALERTA DE AÑADIR UN PRODUCTO AL CARRITO
    const divNotificacion = document.getElementById('notificacion');
    divNotificacion.classList.add('notificacion--active');    
    divNotificacion.querySelector('img').src = `./img/thumbs/${color}.jpg`;
    setTimeout(() => {divNotificacion.classList.remove('notificacion--active');}, 5000);
    
});


// RENDERIZAR
// API obtener monedas. Nueva instancia Internacionalización, argumentos: idioma Y estilo de formato de moneda
const formatearMoneda = new Intl.NumberFormat('es-ES', {style: 'currency' , currency: 'EUR'});

const renderCarrito = () => {
    
    if(carrito.length < 1) {
        // Carrito vacio
        ventanaCarrito.setAttribute('class', 'carrito--vacio');
        
        ventanaCarrito.addEventListener('click' , (e) => {
            if (e.target.closest('button')?.dataset.accion === 'cerrar-carrito' ||
                e.target.classList[0] === 'carrito__btn-regresar'            
            ) ventanaCarrito.setAttribute('class', 'carrito');
        });

    } else {
        // Carrito con productos
        ventanaCarrito.classList.add('carrito--active');
        

        // Bug: Sin añadir productos nuevos, si cierro y abro el carrito se añaden productos duplicados
        // Para solucionar esto borro del DOM esos productos para despues crear de nuevo el carrito
        ventanaCarrito.querySelectorAll('.carrito__producto').forEach((producto) => { producto.remove(); });

        // Recorro el carrito
        let total = 0;
        carrito.forEach((productoCarrito) => {
            
            // Localizo el precio comparando id del producto del carrito con el id del array. Actualizo total
            data.productos.forEach((objetoProducto) => {
                if (productoCarrito.id === objetoProducto.id){ 
                    productoCarrito.precio = objetoProducto.precio;                    
                    total += objetoProducto.precio * productoCarrito.cantidad;                    
                }
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

            // Modifico el total en el DOM
            ventanaCarrito.querySelector('.carrito__total').textContent = formatearMoneda.format(total);            
        });
    };
} 

// ELIMINAR PRODUCTOS DEL CARRITO
ventanaCarrito.addEventListener('click', (e) => {
    if (e.target.closest('button')?.dataset.accion === 'eliminar-item-carrito') {
        
        // Obtengo el indice a eliminar
        const divProducto = e.target.closest('.carrito__producto');
        const posicionDivProducto = [...ventanaCarrito.querySelectorAll('.carrito__producto')].indexOf(divProducto);
        
        // Creo el nuevo carrito
        carrito = carrito.filter((item, index) => {
            if(posicionDivProducto != index) return item;
        });

        // renderizo o resuelvo bug
        if (carrito.length > 0) {
            renderCarrito();
        } else {           
            const divCarritoBody = ventanaCarrito.querySelector('.carrito__body');           
            const elementoAEliminar = ventanaCarrito.querySelector('.carrito__producto');
            divCarritoBody.removeChild(elementoAEliminar);
            ventanaCarrito.setAttribute('class', 'carrito--vacio');
        }
    };
});

// CONEXION CON BASE DE DATOS SIMULADA
document.getElementById('carrito__btn-comprar').addEventListener('click', (e) => {
    console.log('Enviando la compra ....');
    console.log(carrito);
});
