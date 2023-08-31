/*
    - ESTE ARCHIVO HACE QUE CUANDO HAGA CLICK EN LA CATEGORIA QUE SEA ME ABRA SU GALERIA CORRESPONDIENTE:
        - En cargarCategorias.js cargué todas las categorias y ya las tengo
        - En este archivo el código hace lo siguiente:

            - Entrar en una galeria:
                - Añado un evento de click al contenedor de todas las categorias, estas lo heredarán
                - Controlo que el cursor no se valla para arriba cuando hago click en la galeria   
                - Me aseguro que hacen click en la categoria y no en su contenedor mediante el metodo closet
                - Modifico la clase css de la categoria y la pongo activa
                - Le quito el scroll a la galeria una vez abierta
                

            - Mostrar las fotografías en el carrusel
                - Almaceno la categoría que se eligio
                - Añado un atributo personalizado con la categoría que usaré para cargar la imagen en el carrusel
                - Almaceno las fotografías asociadas
                - Cargo la imagen activa que se verá en grande pasandole los datos como parámetro.
                - Borro el carrusel. En la segunda vez que entro se muestran las fotos anteriores y las actuales
                - Recorro las fotografias añadiendo de forma dinámica su ruta y añadiendo el html
     
                

*/

// Controlando que index.js importó bien este archivo
console.log('Cargando eventos para las categorias ...');

// Importo archivo fotos.js que contiene el objeto fotos, que mostraré en la galeria
import dataFotos from '../datos/fotos';

// Importo la funcion de cargar imagen para cargar la imagen ppal
import { cargarImagen } from '../galeria/cargarImagen';

// Obtengo el contenedor con todas las categorias
const contenedorCategorias = document.getElementById('categorias')

// Obtengo la galeria que mostraré le pondré la clase activa cuando haga click
const galeria = document.getElementById('galeria');

// Añado el evento click a la galeria
contenedorCategorias.addEventListener('click', (e) => {
    // Previene ese comportamiento que se valla hacia arriva el cursor al hacer click en la categoria
    e.preventDefault();

    // Me aseguro que hago click en el enlace y no en su contenedor. Me devuelve null si no clickeo en el enlace
    if (e.target.closest('a')) {
        // Activo la galeria
        galeria.classList.add('galeria--active');

        // Elimino el scroll
        document.body.style.overflow = 'hidden';
        
        // MOSTRANDO LAS FOTOGRAFIAS EN EL CARROUSEL
        // Almaceno la categoria seleccionada gracias al atributo personalizado del enlace data-categoria
        const categoriaActiva = e.target.closest('a').dataset.categoria;

        // Añado el atributo personalizado categoria que contendrá la categoría seleccionada
        galeria.dataset.categoria = categoriaActiva;
         

        // Almaceno las fotos de la categoria seleccionada
        const fotos = dataFotos.fotos[categoriaActiva];

        // Cargo la imagen activa. Destructuro la primera foto que será la activa por defecto y obtengo vbles
        const {id, nombre, descripcion, ruta} = fotos[0];

        // Paso como parametros esas vbles
        cargarImagen(id, nombre, descripcion, ruta);

        // Borro el carrusel
        const carrusel = document.querySelector('.galeria__carousel-slides');
        carrusel.innerHTML = ' ';
        // Las recorro. Inserto la ruta y su id de forma dinámica y añadiendo al DOM 
            fotos.forEach(foto => {
              const slide = `
                  <a href="#" class="galeria__carousel-slide">
                  <img class="galeria__carousel-image" src="${foto.ruta}" data-id = "${foto.id}" alt="" />
                  </a>
            ` 
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
        // Añado el borde a las fotografías
        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    };
});