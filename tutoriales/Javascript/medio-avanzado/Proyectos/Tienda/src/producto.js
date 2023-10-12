/*
    FUNCIONALIDAD DEL PRODUCTO

        - El interfaz del producto lo muestra index.html

        - Añado el nombre,descripción y precio de forma dinámica a partir del objeto productos
            - Formateo el precio a moneda europea

        - Añadiremos aquí las siguientes funcionalidades:
            - Al hacer click en los thumbs se mostrará su imagen en grande
            - Al hacer click en los colores y tamaños me quedo con el valor seleccionado
            - Al hacer click en -/+ disminuyo o aumento la cantidad. No puede ser menor de 1
        
*/

// Importo el objeto productos
import data from './data/productos';

// Nombre y descripción del producto
document.querySelector('.producto__nombre').textContent = data.productos[0].nombre;
document.querySelector('.producto__descripcion').textContent = data.productos[0].descripcion;

// Precio
const formatearPrecio = new Intl.NumberFormat('es-ES', {style: 'currency' , currency: 'EUR'});
document.querySelector('.producto__precio').textContent = formatearPrecio.format(data.productos[0].precio);

// Producto
const producto = document.getElementById('producto');

// Funcionalidad de los thumbs
const imagenGrande = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

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
const propiedadColor = producto.querySelector('#propiedad-color')
propiedadColor.addEventListener('click', (e) => {
    // Si hago click en el input
    if (e.target.tagName === 'INPUT') {
        const colorSeleccionado = e.target.value;
        imagenGrande.src = `./img/tennis/${colorSeleccionado}.jpg`;
    }
    
});


// Funcionalidad de cantidad
const botonMenos = producto.querySelector('#disminuir-cantidad');
const botonMas = producto.querySelector('#incrementar-cantidad');
const cantidad = producto.querySelector('#cantidad');
botonMenos.addEventListener('click', (e) => {
    if (cantidad.value > 1) cantidad.value--;     
});

botonMas.addEventListener('click', (e) => {
    cantidad.value++;
});
