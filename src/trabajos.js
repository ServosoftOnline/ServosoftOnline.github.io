// AÑADE MIS TRABAJOS DE FORMA DINÁMICA

// importo el objeto trabajos y creo un array con el contenido
import dataTrabajos from './data/dataTrabajos';
const {trabajos} = dataTrabajos;
console.log(trabajos);

// Obtengo la columna donde las añado
const columnaDerecha = document.querySelector('.columnaDerecha');
console.log(columnaDerecha);

// Creo el div con la clase trabajos
const divTrabajos = document.createElement('div');
divTrabajos.setAttribute('class', 'trabajos');
columnaDerecha.appendChild(divTrabajos);

// Creo la cabecera Mis trabajos que contiene un icono y el texto Mis trabajos
const cabMisTrabajos = document.createElement('div');
cabMisTrabajos.setAttribute('class', 'cabecera');
divTrabajos.appendChild(cabMisTrabajos);

// Icono
const iTrabajos = document.createElement('i');
iTrabajos.setAttribute('class', 'fa-brands fa-github fa-beat-fade fa-2xl');
iTrabajos.setAttribute('style', 'color: #400080;');
cabMisTrabajos.appendChild(iTrabajos);

// Texto Mis trabajos
const h2MisTrabajos = document.createElement('h2');
h2MisTrabajos.textContent = 'Mis trabajos';
cabMisTrabajos.appendChild(h2MisTrabajos);

// Recorro el array y voy añadiendo los trabajos
trabajos.forEach((itemTrabajo) => {

    // Creo el div con la clase contenido
    const divContenido = document.createElement('div');
    divContenido.setAttribute('class', 'contenido');
    divTrabajos.appendChild(divContenido);

    // Creo el div con la clase izquierda que contendrá el nombre del proyecto y un enlace con una imagen
    const divIzda = document.createElement('div');
    divIzda.setAttribute('class', 'izquierda');
    divContenido.appendChild(divIzda);

    // Proyecto
    const h3Proyecto = document.createElement('h3');
    h3Proyecto.textContent = itemTrabajo.proyecto;
    divIzda.appendChild(h3Proyecto);

    // Enlace1
    const a1Proyecto = document.createElement('a');
    a1Proyecto.setAttribute('href', `${itemTrabajo.enlace}`);
    a1Proyecto.setAttribute('target', '_blank');
    divIzda.appendChild(a1Proyecto);

    // Imagen
    const imgProyecto = document.createElement('img');
    imgProyecto.setAttribute('src', `${itemTrabajo.imagenSrc}`);
    a1Proyecto.appendChild(imgProyecto);

    // Creo el div con la clase derecha que contendrá la descripción, el mismo enlace, y un icono >>
    const divDcha = document.createElement('div');
    divDcha.setAttribute('class', 'derecha');
    divContenido.appendChild(divDcha);

    // Descripcion
    const pDescripcion = document.createElement('p');
    pDescripcion.textContent = itemTrabajo.imagenSrc
    divDcha.appendChild(pDescripcion);

    // Enlace2
    const a2Proyecto = document.createElement('a');
    a2Proyecto.setAttribute('href', `${itemTrabajo.enlace}`);
    a2Proyecto.setAttribute('target', '_blank');
    a2Proyecto.textContent = 'IR AL SITIO';
    divDcha.appendChild(a2Proyecto);

    // Icono >>
    const iconoIrAlSitio = document.createElement('i');
    iconoIrAlSitio.setAttribute('class', 'fas fa-angle-double-right');
    a2Proyecto.appendChild(iconoIrAlSitio);


});
/*
<div class = "trabajos">
    <div class = "cabecera">
        <i class="fa-brands fa-github fa-beat-fade fa-2xl" style="color: #400080;"></i>
        <h2>Mis trabajos</h2>
    </div>
    
    <div class = "contenido">
        <div class = "izquierda">
            <h3>L80</h3>
            <a href="https://servosoftonline.github.io/L80/" target = "_blank"> <img src ="./img/trabajo1.jpg"> </a>
        </div>
        
        <div class = "derecha">
            <p>Sitio web de un grupo musical desarrollado en HTML, CSS y JAVASCRIPT. Es responsive, está creado en una sola página, sin usar ningun CMS y contiene una galería de imágenes.</p> 
            <a href = "https://servosoftonline.github.io/L80/" target = "_blank"> IR AL SITIO <i class="fas fa-angle-double-right"> </i> </a>
        </div>                  
    </div>                
</div>
*/

