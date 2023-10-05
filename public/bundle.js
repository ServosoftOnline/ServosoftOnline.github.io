'use strict';

// AÑADE LA FOTOGRAFIA DE FORMA DINÁMICA
 

// Obtengo la columna de la izquierda
const columnaIzquierda$5 = document.querySelector('.columnaIzquierda');

// Creo un div y le añado la clase fotografía
const fotografia = document.createElement('div');
fotografia.classList.add('fotografia');

// Creo una imagen con su ubicación y le añado la clase sombreada
const imagen = document.createElement('img');
imagen.src = "./img/fotografia.png";
imagen.classList.add('sombreada');

// La imagen es hijo de la fotografia y la fotografia es hijo de la columna de la izquierda
fotografia.appendChild(imagen);
columnaIzquierda$5.appendChild(fotografia);

// Muestra el perfil profesional de forma dinámica

const columnaIzquierda$4 = document.querySelector('.columnaIzquierda');
const perfil = document.createElement('div');
perfil.classList.add('perfil');
perfil.innerHTML = `
    <h1>Óscar Fernández Santiago</h1>
    <h2>Desarrollador de aplicaciones Fullstack</h2>
    <h3>Perfil profesional</h3>
    <p>
        <b>Soy técnico superior en Administracion de Sistemas Informáticos Monousuario y Multiusuario.</b>
        Desde que me titulé en 1998 he trabajado siempre en el sector de la informática, telecomunicaciones
        y desarrollo de aplicaciones.
    </p>
`;

columnaIzquierda$4.appendChild(perfil);

/*
    OBJETO DATOS DE CONTACTO
    - Contiene toda la información de mis datos de contacto que agregaré de forma dinamica

*/

var dataContacto = {
    datosDeContacto: [
        {
            id: '1',
            clase: 'fa-solid fa-phone fa-beat',
            estilo: 'color: #06395c;',
            dato: '620890221'            
        },

        {
            id: '2',
            clase: 'fa-solid fa-envelope fa-beat',
            estilo: 'color: #06395c;',
            dato: 'oscarfernandezsantiago@gmail.com'            
        },

        {
            id: '3',
            clase: 'fa-solid fa-house fa-beat',
            estilo: 'color: #06395c;',
            dato: 'Calle biznaga, 10. Mijas (Málaga)'            
        },

        {
            id: '4',
            clase: 'fa-solid fa-user-group fa-beat',
            estilo: 'color: #06395c;',
            dato: 'Casado y con dos niños preciosos'            
        }
    ]
};

// AÑADE CONTACTO DE FORMA DINÁMICA - Debo hacerlo más dinámico insertando una data y recorriendo el contenido

const {datosDeContacto} = dataContacto;
console.log(datosDeContacto);

// Obtengo la columna de la izquierda
const columnaIzquierda$3 = document.querySelector('.columnaIzquierda');

// Creo el div con la clase contacto
const divContacto = document.createElement('div');
divContacto.classList.add('contacto');
columnaIzquierda$3.appendChild(divContacto);

// creo la cabecera contacto
const cabContacto = document.createElement('h3');
cabContacto.textContent = 'Contacto';
divContacto.appendChild(cabContacto);

// Creo el div con la clase contenido
const divContenido$1 = document.createElement('div');
divContenido$1.setAttribute('class', 'contenido');
divContacto.appendChild(divContenido$1);

// Creo la lista que contendrá los datos de contacto
const ulDatosDeContacto = document.createElement('ul');
divContenido$1.appendChild(ulDatosDeContacto);

// Recorro el array, creo los elementos de la lista, los iconos y los parrafos con los datos
datosDeContacto.forEach((itemDato) => {
    
    // Elemento
    const liDatosDeContacto = document.createElement('li');
    ulDatosDeContacto.appendChild(liDatosDeContacto);

    // Icono
    const iDatosDeContacto = document.createElement('i');
    iDatosDeContacto.setAttribute('class', `${itemDato.clase}`);
    iDatosDeContacto.setAttribute('style', `${itemDato.estilo}`);
    liDatosDeContacto.appendChild(iDatosDeContacto);

    // Párrafo
    const pDatosDeContacto = document.createElement('p');
    pDatosDeContacto.textContent = itemDato.dato;
    liDatosDeContacto.appendChild(pDatosDeContacto);

});

/*
    OBJETO TITULACIONES
    - Contiene toda la información de mis titulos que agregaré de forma dinamica
*/

var dataTitulacion = {
    titulaciones: [
        {
            id: '1',
            titulo: 'Técnico Superior en Administración de Sistemas Informáticos Monousuario y Multiusuario',
            fecha: 'SEPTIEMBRE 1996 - JUNIO 1998',
            centro: 'Instituto Bezmiliana en el Rincón de la Victoria'
        },

        {
            id: '2',
            titulo: 'Bachillerato superior',
            fecha: 'SEPTIEMBRE 1989 - JUNIO 1994',
            centro: 'Instituto de educación secundaria Fuengirola Nº 1'
        },

        {
            id: '3',
            titulo: 'Educación General Básica',
            fecha: 'SEPTIEMBRE 1980 - JUNIO 1989',
            centro: 'Colegio público Andalucía'
        },
    ]
};

// AÑADE LAS TITULACIONES DE FORMA DINÁMICA

const {titulaciones} = dataTitulacion;
// console.log(titulaciones);

// Obtengo la columna donde las añado
const columnaIzquierda$2 = document.querySelector('.columnaIzquierda');

// Creo el div con la clase titulacion
const titulacion = document.createElement('div');
titulacion.setAttribute('class', 'titulacion');
columnaIzquierda$2.appendChild(titulacion);

// Creo la cabecera titulacion
const cabeceraTitulacion = document.createElement('h3');
cabeceraTitulacion.textContent = 'Titulacion';
titulacion.appendChild(cabeceraTitulacion);

// Creo el div con la clase contenido
const contenidoTitulacion = document.createElement('div');
contenidoTitulacion.setAttribute('class', 'contenido');
titulacion.appendChild(contenidoTitulacion);


// Recorro las titulaciones y creo una lista en cada pasada con la información
titulaciones.forEach((titulo) => {
    
    // creo la lista
    const lista = document.createElement('ul');
    contenidoTitulacion.appendChild(lista);

    // añado el titulo en negrita
    const nombreTitulacion = document.createElement('li');
    const titulacionNegrita = document.createElement('b');
    titulacionNegrita.textContent = titulo.titulo;
    nombreTitulacion.appendChild(titulacionNegrita);
    lista.appendChild(nombreTitulacion);

    // Añado la fecha
    const fecha = document.createElement('li');
    fecha.textContent = titulo.fecha;
    lista.appendChild(fecha);

    // Añado el centro
    const centro = document.createElement('li');
    centro.textContent = titulo.centro;
    lista.appendChild(centro);

});

/*
    OBJETO CAPACIDADES
    - Contiene toda la información de mis capacidades que agregaré de forma dinamica
*/

var dataCapacidades = {
    capacidades: [
        {
            id: '1',
            estrellas: "&#9733;&#9733;&#9733;&#9733;",
            capacidad: 'Html',          
        },

        {
            id: '2',
            estrellas: '&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'Css',          
        },

        {
            id: '3',
            estrellas: '&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'Javascript',
        },

        {
            id: '4',
            estrellas: '&#9733;&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'B. Prácticas',
        },

        {
            id: '5',
            estrellas: '&#9733;&#9733;&#9733;',
            capacidad: 'React',    
        },

        {
            id: '6',
            estrellas: '&#9733;&#9733;&#9733;',
            capacidad: 'Github',            
        },

        {
            id: '7',
            estrellas: '&#9733;&#9733;',
            capacidad: 'PHP',        
        },
    ]
};

// AÑADE LAS CAPACIDADES DE FORMA DINÁMICA

const {capacidades} = dataCapacidades;

// Obtengo la columna izquierda
const columnaIzquierda$1 = document.querySelector('.columnaIzquierda');

// Creo el div con la clase capacidades
const divCapacidades = document.createElement('div');
divCapacidades.setAttribute('class', 'capacidades');
columnaIzquierda$1.appendChild(divCapacidades);

// Creo la cabecera contenidos
const cabeceraContenidos = document.createElement('h3');
cabeceraContenidos.textContent = 'Capacidades';
divCapacidades.appendChild(cabeceraContenidos);

// Creo el div con la clase contenido
const divContenido = document.createElement('div');
divContenido. setAttribute('class', 'contenido');
divCapacidades.appendChild(divContenido);

// Creo el div con la clase contieneEstrellas
const divContieneEstrellas = document.createElement('div');
divContieneEstrellas.setAttribute('class', 'contieneEstrellas');
divContenido.appendChild(divContieneEstrellas);

// Añado las estrellas
const spanEstrellas = document.createElement('span');
spanEstrellas.setAttribute('class', 'estrellas');
spanEstrellas.innerHTML = `
    <p>&#9733;&#9733;&#9733;&#9733;</p>
    <p>&#9733;&#9733;&#9733;&#9733;</p>
    <p>&#9733;&#9733;&#9733;&#9733;</p> 
    <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p> 
    <p>&#9733;&#9733;&#9733;</p> 
    <p>&#9733;&#9733;&#9733;</p> 
    <p>&#9733;&#9733;&#9733;&#9733;</p> 
`;
divContieneEstrellas.appendChild(spanEstrellas);

// Creo el div con la clase capacidad
const divCapacidad = document.createElement('div');
divCapacidad.setAttribute('class', 'capacidad');
divContenido.appendChild(divCapacidad);

// Recorro de nuevo el arreglo con las capacidades y voy añadiendo cada una de las capacidades
capacidades.forEach((itemCapacidad) => {
    const parrafo = document.createElement('p');
    parrafo.textContent = itemCapacidad.capacidad;
    divCapacidad.appendChild(parrafo);
});

// MUESTRO DE FORMA DINÁMICA EL APARTADO DE IDIOMAS

// Obtengo la columna de la iquierda
const columnaIzquierda = document.querySelector('.columnaIzquierda');

// Creo el div con la clase idiomas
const divIdiomas = document.createElement('div');
divIdiomas.setAttribute('class', 'idiomas');
columnaIzquierda.appendChild(divIdiomas);

// Creo la cabecera idiomas
const cabeceraIdiomas = document.createElement('h3');
cabeceraIdiomas.textContent = 'Idiomas';
divIdiomas.appendChild(cabeceraIdiomas);

// Creo el parrafo. "domino el idioma inglés" va en negrita y al principio
const parrafoIdiomas = document.createElement('p');
const textoEnNegrita = document.createElement('b');
textoEnNegrita.textContent = 'Domino el idioma inglés ';
parrafoIdiomas.textContent = 'gracias a mis años de estudio y a mi experiencia al practicar con personas de habla inglesa durante mis años de trabajo.';
divIdiomas.appendChild(parrafoIdiomas);
parrafoIdiomas.insertAdjacentElement('afterbegin', textoEnNegrita);
