'use strict';

/*
    FUNCIONALIDAD DE TODOS LOS EVENTOS QUE SE PRODUZCAN DENTRO DEL CONTENEDOR PRODUCTO
        - Evento de los thumbs. Al pinchar en ellos se cambia la imagen grande
*/

// Obtengo todo lo que necesito para la funcionalidad e los thumbs
const producto$1 = document.getElementById('producto');
const imagenGrande = producto$1.querySelector('.producto__imagen');
const thumbs = producto$1.querySelector('.producto__thumbs');

// Obtengo lo necesario para la funcionalidad e los colores
const propiedadColor = producto$1.querySelector('#propiedad-color');

// obtengo lo necesario para la funcionalidad de añadir cantidad
const botonMenos = producto$1.querySelector('#disminuir-cantidad');
const botonMas = producto$1.querySelector('#incrementar-cantidad');
const cantidad = producto$1.querySelector('#cantidad');


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

// Funcionalidad de añadir/disminuir cantidad. No puede bajar de 1
botonMenos.addEventListener('click', (e) => {
    if (cantidad.value > 1) cantidad.value--;     
});

botonMas.addEventListener('click', (e) => {
    cantidad.value++;
});

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






        - En un objeto guardaremos nombre del producto, color, tamaño y cantidad
        - El precio lo obtendremos desde una base de datos simulada
        

    
    



*/

// Obtengo botones, ventana y todo el producto
const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const botonAgregarAlCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');

// Función que abrirá la ventana del carrito y revisa los productos agregados actualmente
const renderCarrito = () => {
    ventanaCarrito.classList.add('carrito--active');
}; 

// Recorro los dos botones que abren y cierran el carrito, les añado un event listener y muestro o oculto la ventana
botonesAbrirCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        renderCarrito();
    });
});

botonesCerrarCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        ventanaCarrito.classList.remove('carrito--active');
    });
});

// Función que agrega al carrito
botonAgregarAlCarrito.addEventListener('click', () => {
    producto.dataset.productoId;
    producto.querySelector('.producto__nombre').innerText;
    parseInt(producto.querySelector('#cantidad').value);
    producto.querySelector('#propiedad-color input:checked').value;
    producto.querySelector('#propiedad-tamaño input:checked').value;

    // console.log(`id:` + id);
    // console.log(`nombre: ` + nombre);
    // console.log(`cantidad: ` + cantidad);
    // console.log(`color:` + color);
    // console.log('tamaño: ' + tamaño);
    


    
    
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
