'use strict';

// AÑADE LA FOTOGRAFIA DE FORMA DINÁMICA
 

// Obtengo la columna de la izquierda
const columnaIzquierda$3 = document.querySelector('.columnaIzquierda');

// Creo un div y le añado la clase fotografía
const fotografia = document.createElement('div');
fotografia.classList.add('fotografia');

// Creo una imagen con su ubicación y le añado la clase sombreada
const imagen = document.createElement('img');
imagen.src = "./img/fotografia.png";
imagen.classList.add('sombreada');

// La imagen es hijo de la fotografia y la fotografia es hijo de la columna de la izquierda
fotografia.appendChild(imagen);
columnaIzquierda$3.appendChild(fotografia);

// Muestra el perfil profesional de forma dinámica

const columnaIzquierda$2 = document.querySelector('.columnaIzquierda');
const perfil = document.createElement('div');
perfil.classList.add('perfil');
perfil.innerHTML = `
    <h1>Óscar Fernández Santiago</h1>
    <h2>Desarrollador de aplicaciones Fullstack</h2>
    <h3>Perfil profesional</h3>
    <p>
        Soy técnico superior en Administracion de Sistemas Informáticos Monousuario y Multiusuario.
        Desde que me titulé en 1998 he trabajado siempre en el sector de la informática, telecomunicaciones
        y desarrollo de aplicaciones.
    </p>
`;

columnaIzquierda$2.appendChild(perfil);

// AÑADE CONTACTO DE FORMA DINÁMICA - Debo hacerlo más dinámico insertando una data y recorriendo el contenido


const columnaIzquierda$1 = document.querySelector('.columnaIzquierda');
const contacto = document.createElement('div');
contacto.classList.add('contacto');


// Plantilla
contacto.innerHTML = `    
    <div class = "contenido">
        <h3>Contacto</h3>
        <ul>
            <li>
                <i class="fa-solid fa-phone fa-beat" style = "color: #06395c;"> </i>
                <p>620890221</p>
            </li>
            <li>
                <i class="fa-solid fa-envelope fa-beat" style = "color: #06395c;"> </i>
                <p>oscarfernandezsantiago@gmail.com</p>
            </li>
            <li>
                <i class="fa-solid fa-house fa-beat" style = "color: #06395c;"> </i>
                <p>Calle biznaga, 10. Mijas (Málaga)</p>
            </li>
            <li>
                <i class="fa-solid fa-user-group fa-beat" style = "color: #06395c;"> </i>
                <p>Casado y con dos niños preciosos</p>
            </li>
        </ul>
    </div>
`;

// Añado al DOM
columnaIzquierda$1.appendChild(contacto);


/*
// Plantilla
<!-- 
            <div class = "titulacion">
                <h3>Titulación</h3>
                <div class = "contenido">
                    <ul>
                        <li> <b>Técnico Superior en Administración de Sistemas Informáticos Monousuario y
                            Multiusuario.</b></li>
                        <li>SEPTIEMBRE 1996 - JUNIO 1998</li>
                        <li>Instituto Bezmiliana en el Rincón de la Victoria</li>
                    </ul>
                    <ul>
                        <li><b>Bachillerato superior</b></li>
                        <li>SEPTIEMBRE 1989 - JUNIO 1994</li>
                        <li>Instituto educación secundaria Fuengirola Nº 1</li>
                    </ul>
                    <ul>
                        <li><b>Educación Basica</b></li>
                        <li>SEPTIEMBRE 1980 - JUNIO 1989</li>
                        <li>Colegio público Andalucía</li>
                    </ul>
                </div>
            </div>
             -->

*/

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
const columnaIzquierda = document.querySelector('.columnaIzquierda');

// Creo el div con la clase titulacion
const titulacion = document.createElement('div');
titulacion.setAttribute('class', 'titulacion');
columnaIzquierda.appendChild(titulacion);

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
