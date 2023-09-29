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
        - Esta información la agregaré al arreglo llamado carrito que contendrá un objeto con lo obtenido anteriormente
        - Si pulso el boton de agregar al carrito mas productos se almacenarán todos en el array carrito
            - Despues habrá que ordenar toda la información. Los id duplicados solo habrá que modificar la cantidad
            








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
    console.log(carrito);
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