/*

- DOM: ELIMINAR EVENTOS
    - Pasos:
        1.- Crear los botones en el documento html y les añadimos un id
        2.- Obtener los botones y el elemento al cual le aplicaremos el evento a partir de sus ids en el archivo js
        3.- Añado un addEventListener al boton de añadir para que cuando haga click añado otro addEventListener a la caja (IMPORTANTE)
        4.- El addEventListener de la caja hara un toggle y la pondrá la clase activa
        5.- Saco el toggle del listener del elemento, lo pongo fuera y lo llamo cuando se ejecute el listener del elemento.
        6.- Añado addEventListener al boton de eliminar evento
        7.- elemento.removeEventListener('tipo de evento a eliminar', función que queriamos ejecutar y sacamos fuera antes, en este caso el toggle);

*/

// Ejemplo: Activar de forma dinámica un evento y eliminarlo
// Cuando carga la página la caja1 no tendrá ningun evento
// El botón de activar evento le añadira un toggle de tal forma que si hago click en la caja la pongo activa
// El botón de eliminar evento le quitará el evento creado por el boton activar

const agregarEvento = document.getElementById('añadirEvento');
const eliminarEvento = document.getElementById('eliminarEvento');
const elemento = document.querySelector('#contenedor1 .caja');
const toggleClase = () => elemento.classList.toggle('activa');

agregarEvento.addEventListener('click', () => elemento.addEventListener('click', toggleClase));
eliminarEvento.addEventListener('click', () => elemento.removeEventListener('click', toggleClase));
