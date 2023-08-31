/*
Contiene las funciones para cargar categorias.
    - Importo las categorias y lo llamo dataCategorias
    - Desextructuro el array de las categorias y me quedo solo con las categorias
    - Debo añadir esta plantilla de forma dinámica:
        <a href="#" class="categoria" data-categoria="america">
            <img class="categoria__img" src="./img/america.jpg" alt="" />
            <div class="categoria__datos">
                <p class="categoria__nombre">America</p>
                <p class="categoria__numero-fotos">35 fotos</p>
            </div>
        </a>
    - el contenedor de este código serán el elemento HTML cuyo id sea categorias
    - Recorro las categorías y por cada una de ellas voy añadiendo código
        - Construllo cada elemento html y despues lo inserto
        - A tener en cuenta el parámetro personalizado "data-categoria"
        - Añado al DOM    

*/

console.log('Cargando categorias ....');
import dataCategorias from '../datos/categorias.js';
const {categorias} = dataCategorias;
const contenedorCategorias = document.getElementById('categorias');

categorias.forEach((categoria) => {  
    // CONSTRULLENDO EL ELEMENTO HTML
    const nuevaCategoria = document.createElement('a');
    const plantilla = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
        </div>
    `
    // Añado la plantilla a la etiqueta
    nuevaCategoria.innerHTML = plantilla;
    // añado los atributos a la etiqueta
    nuevaCategoria.href = '#';
    nuevaCategoria.classList.add('categoria');
    
    /*
    Añado un atributo personalizado. dataset contiene todas las propiedades personalizadas.
    Le añado un nuevo atributo llamado categoria que contendrá la categoria que pasamos
    por parámetro en el forEach con su id
    */
    nuevaCategoria.dataset.categoria = categoria.id;

    // AÑADIENDO EL ELEMENTO AL DOM
    contenedorCategorias.append(nuevaCategoria);
});