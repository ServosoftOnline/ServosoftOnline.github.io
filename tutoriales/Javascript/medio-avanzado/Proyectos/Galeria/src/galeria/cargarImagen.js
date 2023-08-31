/*
    - CARGA Y DESPLAZA LA IMAGEN PRINCIPAL DE LA GALERIA.
        - CARGA.  
        - Pasos:
            1.- Obtengo la galeria

            2.- Creo la funcion cargar imagen tiene como parámetros informacion de la imagen a cargar
                2.1.- Obtengo el elemento que contiene la imagen activa
                2.2.- Sobrescribo su atributo src con la ruta pasada por parámetro
                2.3.- Igual para titulo de la fotografia y descripcion
                2.4.- Añado atributo personalizado que contendrá el id de la imagen
            
            3.- Añado un borde a la imagen seleccionada en el carusel
                3.1.- Necesito:
                    - El id que lo tengo como argumento
                    - La categoria activa es un atributo personalizado de galeria
                    - El id del archivo fotos lo obtengo de las imagenes importadas.
                    - Su posición en el carusel
                        - Lo obtengo comparando el id de las fotos de la categoria activa con el idex parámetro
                3.2.- Una vez obtenido lo que necesito el resto del código no lo entiendo.
                    - La clase galeria__carousel-slide--active añade un borde blanco a la fotografía activa.
                    - Obtengo todos los elementos cuya clase contenga el selector galeria__carousel-slide
                    - Si su número de elementos obtenidos es mayor a cero es que ya hay una fotografia con borde
                    - A esa fotografia con borde le quito de su lista de clases galeria__carousel-slide--active
                    - Le añado el borde a la que coincide con la posición en el carrusel.

            4.- Exporto la función. Usos:
                - Al cargar las categorías por primera vez
                - Cuando haga click en una imagen del carrusel
                - Cuando me desplaze por las imagenes principales con sus botones.

        - DESPLAZA
            - Debo cargar la imagen que tenga el siguente o anterior index dependiendo del sentido pasado como parámetro
            - Para ello necesito la siguiente informacion:
                - la categoria activa
                - todas las fotos de la categoria activa
                - el id de la imagen actual
                - el index de la imagen actual

*/

import data from "../datos/fotos";

const galeria = document.getElementById('galeria');
const cargarImagen = (id, nombre, descripcion, ruta) => {
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
    
    // Añadir borde a la imagen activa en el carusel
    const categoriaActiva = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActiva];
    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if(foto.id === id) indexImagenActual = index;
    });

    // Elimina el borde blanco de la imagen del carousel seleccionada anteriormente y se lo añade a la nueva
 	if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');  
        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
	}

}


const cargarAnteriorSiguiente = (sentido) => {
    
    // Obtengo la categoria activa
    const categoriaActiva = galeria.dataset.categoria;
    // Obtengo todas las fotos de la categoria activa
    const fotos = data.fotos[categoriaActiva];
    // Obtengo el id de la imagen actual. Es el atributo personalizado del elemento cuya clase se llama galeria__imagen
    const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);
    
    // Obtengo el index de la imagen actual. Indica su posición actual dentro del carousel.
    // Será aquel en el que el id de la imagen actual y el id de la fotografía coincidan 
    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if (foto.id === idImagenActual) indexImagenActual = index;
    });

    // Tomare como referencia el index de la imagen actual para saber si llegue al final de la galeria por ambos sentidos
    // Si no llegue al final. Destructuro la fotografia obteniendo las vbles y cargo la imagen
    if (sentido === 'anterior'){
        if (indexImagenActual>0){
            const {id, nombre, descripcion, ruta} = fotos[indexImagenActual-1];
            cargarImagen(id, nombre, descripcion, ruta);       
        }
    } else if(sentido === 'siguiente'){
        if (indexImagenActual+1<fotos.length){
            const {id, nombre, descripcion, ruta} = fotos[indexImagenActual+1];
            cargarImagen(id, nombre, descripcion, ruta);
        }
    }
}

export {cargarImagen, cargarAnteriorSiguiente}; 