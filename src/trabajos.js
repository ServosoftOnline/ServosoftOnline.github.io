// AÑADE MIS TRABAJOS DE FORMA DINÁMICA

// importo el objeto trabajos y creo un array con el contenido
import dataTrabajos from './data/dataTrabajos';
const {trabajos} = dataTrabajos;

// Obtengo la columna donde las añado
const columnaDerecha = document.querySelector('.columnaDerecha');

// Creo el div con la clase trabajos
const divTrabajos = document.createElement('div');
divTrabajos.setAttribute('class', 'trabajos');
columnaDerecha.appendChild(divTrabajos);

// Creo la cabecera con el icono y el texto Mis trabajos
const cabTrabajos = document.createElement('div');
cabTrabajos.setAttribute('class', 'cabecera');
divTrabajos.appendChild(cabTrabajos);

// Icono
const iTrabajos = document.createElement('i');
iTrabajos.setAttribute('class', 'fa-brands fa-github fa-beat-fade fa-2xl');
iTrabajos.setAttribute('style', 'color: #400080;');
cabTrabajos.appendChild(iTrabajos);

// Texto Mis trabajos
const h2MisTrabajos = document.createElement('h2');
h2MisTrabajos.textContent = 'Mis trabajos';
cabTrabajos.appendChild(h2MisTrabajos);


// Recorro el array y voy añadiendo los trabajos
trabajos.forEach((trabajo, index) => {

    // Creo el div con la clase contenido
    const divContenido = document.createElement('div');
    divContenido.setAttribute('class', 'contenido');
    divTrabajos.appendChild(divContenido);

    // Titulo del proyecto
    const h3Titulo = document.createElement('h3');
    h3Titulo.setAttribute('class', 'titulo');
    h3Titulo.textContent = trabajo.proyecto;
    divContenido.appendChild(h3Titulo);
     
    // El div con la clase contenido-centrado contiene un enlace al sitio con una imagen descriptiva
    const divContenidoCentrado = document.createElement('div');
    divContenidoCentrado.setAttribute('class', 'contenido-centrado');
    divContenido.appendChild(divContenidoCentrado);

    // Enlace con la imagen descriptiva
    const aSitio = document.createElement('a');
    const imagen = document.createElement('img');
    aSitio.setAttribute('href' , trabajo.enlace);
    aSitio.setAttribute('target' , '_blank');
    imagen.setAttribute('src', trabajo.imagenSrc);
    aSitio.appendChild(imagen);
    divContenidoCentrado.appendChild(aSitio);

    // El div con la clase contenido-alineado_izda contiene la descripcion del sitio y el enlace Ir al sitio >>
    const divAlineadoIzda = document.createElement('div');
    divAlineadoIzda.setAttribute('class', 'contenido-alineado_izda');
    divContenido.appendChild(divAlineadoIzda);    

    // Descripción
    const pDescripcion = document.createElement('p');

    /* los saltos de línea \n\n en el texto se reemplazarán por etiquetas <br><br>,
    lo que permitirá que se muestren como saltos de línea (punto y aparte). Tambien permite añadir negrita */
    pDescripcion.innerHTML = trabajo.descripcion.replace(/\n\n/g, '<br><br>');
    divAlineadoIzda.appendChild(pDescripcion);

    // Mostrar el manual
    const aDescargaManual = document.createElement('a');
    aDescargaManual.setAttribute('href', './src/manual/manual.pdf');
    aDescargaManual.setAttribute('target', '_blank');
    aDescargaManual.textContent = 'Manual de usuario';
    divAlineadoIzda.appendChild(aDescargaManual);

    // Enlace Ir al sitio con el icono >>
    const aIrAlSitio = document.createElement('a');
    const iIrAlsitio = document.createElement('i');
        
    aIrAlSitio.setAttribute('href', trabajo.enlace);
    aIrAlSitio.setAttribute('target', '_blank');
    aIrAlSitio.textContent = 'IR AL SITIO';
    iIrAlsitio.setAttribute('class', 'fas fa-angle-double-right');
    aIrAlSitio.appendChild(iIrAlsitio);
    divAlineadoIzda.appendChild(aIrAlSitio);

    // Separador. El último elemento del array no mostrará el separador
    if (index < trabajos.length - 1) {
        const separador = document.createElement('hr');
        divAlineadoIzda.appendChild(separador);
    }

});
