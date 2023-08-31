/*
    - CIERRA LA GALERIA
    
        - En eventoCategorias.js añadíamos la clase galeria--active para abrirla
        - En este archivo le quitamos la galeria activa para desactivarla cerrarla
        - Al cerrarla y devolver el control a categorias debo activarle de nuevo el school
*/
const galeria = document.getElementById('galeria');
const cerrarGaleria = () => {
    galeria.classList.remove('galeria--active');
    // Muestro el scroll.
    document.body.style.overflow = '';
}

// La exportamos con nombre por defecto para que la importemos desde otro lugar con el nombre que queramos
export default cerrarGaleria;
