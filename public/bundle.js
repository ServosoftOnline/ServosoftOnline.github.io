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
// console.log(datosDeContacto);

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

/*
    OBJETO Experiencia
    - Contiene toda la información de mi experiencia laboral que agregaré de forma dinamica
*/

var dataExperiencia = {
    experiencia: [
        {
            id: '1',
            profesion: 'Desarrollador de aplicaciones',
            fecha: 'ENERO 2017 - JULIO 2021',
            descripcion: 'Me establecí como trabajador autonomo para ofrecer mis conocimientos y experiencia. Realizaba de forma simultánea el desarrollo de sitios y aplicaciones WEBs y servicios de telecomunicaciones.'
        },

        {
            id: '2',
            profesion: 'Técnico en telecomunicaciones',
            fecha: 'SEPTIEMBRE 2009 - ACTUALIDAD',
            descripcion: 'Soporte telefónico y presencial a clientes corporate de Vodafone. REPSOL, ENDESA, AENA, BANCO DE ESPAÑA son algunos de nuestros clientes. Instalo y resuelvo averías en diferentes tecnologías como XDSL, FIBRA OPTICA, RADIO ENLACES, CENTRALITAS DE TELEFONOS, ...'          
        },

        {
            id: '3',
            profesion: 'Proyecto familiar',
            fecha: 'NOVIEMBRE 2007 - ENERO 2009',
            descripcion: 'Responsable en un proyecto familiar relacionado con la hostelería. Tuve a mi cargo a 12 personas.'
        },

        {
            id: '4',
            profesion: 'Técnico infórmatico',
            fecha: 'JULIO 1999 - SEPTIEMBRE 2006',
            descripcion: 'Diversos trabajos relacionados con la reparación de ordenadores, montaje de redes locales e instalación y reparacion de sistemas de seguridad. En mi último trabajo fuí responsable del mantenimiento de 12 oficinas repartidas por todo el territorio español.'
        }
    ]
};

// AÑADE LA EXPERIENCIA LABORAL DE FORMA DINÁMICA

const {experiencia} = dataExperiencia;
// console.log(experiencia);

// Obtengo la columna donde las añado
const columnaDerecha$1 = document.querySelector('.columnaDerecha');
// console.log(columnaDerecha);

// Creo el div con la clase experiencia
const divExperiencia = document.createElement('div');
divExperiencia.setAttribute('class', 'experiencia');
columnaDerecha$1.appendChild(divExperiencia);

// Creo la cabecera que contiene el icono y el texto Experiencia
const cabExperiencia = document.createElement('div');
cabExperiencia.setAttribute('class', 'cabecera');
divExperiencia.appendChild(cabExperiencia);

const iconoExperiencia = document.createElement('i');
iconoExperiencia.setAttribute('class', 'fa-solid fa-hands fa-beat-fade fa-2xl');
iconoExperiencia.setAttribute('style', 'color: #400080;');
cabExperiencia.appendChild(iconoExperiencia);

const h2Experiencia = document.createElement('h2');
h2Experiencia.textContent = 'Experiencia';
cabExperiencia.appendChild(h2Experiencia);

// Recorro el array y voy creando cada una de las experiencias
experiencia.forEach((itemExperiencia) => {

    // div contenido
    const divContenido = document.createElement('div');
    divContenido.setAttribute('class', 'contenido');
    divExperiencia.appendChild(divContenido);

    // profesion
    const profesion = document.createElement('h3');
    profesion.textContent = itemExperiencia.profesion;
    divContenido.appendChild(profesion);
    
    // Fecha
    const fecha = document.createElement('h4');
    fecha.textContent = itemExperiencia.fecha;
    divContenido.appendChild(fecha);

    // Descripcion
    const descripcion = document.createElement('p');
    descripcion.textContent = itemExperiencia.descripcion;
    divContenido.appendChild(descripcion);  

});

/*
    OBJETO CURSOS
    - Contiene toda la información de mis cursos que agregaré de forma dinamica
*/

var dataCursos = {
    cursos: [
        {
            id: '1',
            año: '2023',
            curso: 'Javascript: El Curso Completo, Práctico y desde Cero',
            descripcion: 'Curso realizado en la plataforma online Udemy proporcionado por Carlos Arturo Esparza'
        },

        {
            id: '2',
            año: '2016',
            curso: 'HTML, CSS Y JAVASCRIPT',
            descripcion: 'Curso presencial proporcionado por FOREM-A. Formación y Empleo de Andalucía'
        },

        {
            id: '3',
            año: '2011',
            curso: 'Analista programador',
            descripcion: 'Curso de Java SE y PostgreSQL realizado de forma presencial en INGENIA situado en el Parque Tecnológico de Andalucía'
        },

        {
            id: '4',
            año: '1994',
            curso: 'Programador de ordenadores',
            descripcion: 'Curso de programación en varios lenguajes de la época (BASIC, DBASE, COBOL, CLIPPER Y C) proporcionado por FILEKOM. Era muy jóven, no tenia mas de 20 años, y aprendí lenguajes de programación que aunque varios no se usan actualmente, me ayudó a entender la programación actual'
        }
    ]
};

// AÑADE LOS CURSOS DE FORMA DINÁMICA

const {cursos} = dataCursos;
// console.log(cursos);

// Obtengo la columna donde las añado
const columnaDerecha = document.querySelector('.columnaDerecha');
// console.log(columnaDerecha);

// Creo el div con la clase cursos
const divCursos = document.createElement('div');
divCursos.setAttribute('class', 'cursos');
columnaDerecha.appendChild(divCursos);

// Creo el div de la cabecera que contiene un icono y el texto Cursos
const cabCursos = document.createElement('div');
cabCursos.setAttribute('class', 'cabecera');
divCursos.appendChild(cabCursos);

// icono
const iCursos = document.createElement('i');
iCursos.setAttribute('class', 'fa-solid fa-graduation-cap fa-beat-fade fa-2xl');
iCursos.setAttribute('style', 'color: #400080;');
cabCursos.appendChild(iCursos);

// Texto Cursos
const h2Cursos = document.createElement('h2');
h2Cursos.textContent = 'Cursos';
cabCursos.appendChild(h2Cursos);

// Recorro el array y voy añadiendo los cursos
cursos.forEach((itemCurso) => {

    // Div contenido
    const divContenido = document.createElement('div');
    divContenido.setAttribute('class', 'contenido');
    divCursos.appendChild(divContenido);

    // Div izquierda que contiene el año
    const divIzda = document.createElement('div');
    divIzda.setAttribute('class', 'izquierda');
    divContenido.appendChild(divIzda);

    // Año
    const pAno = document.createElement('p');
    pAno.textContent = itemCurso.año;
    divIzda.appendChild(pAno);

    // Div derecha que contiene el nombre del curso y la descripción
    const divDcha = document.createElement('div');
    divDcha.setAttribute('class', 'derecha');
    divContenido.appendChild(divDcha);

    // Curso
    const h4Curso = document.createElement('h4');
    h4Curso.textContent = itemCurso.curso;
    divDcha.appendChild(h4Curso);

    // Descripcion
    const pDescripcion = document.createElement('p');
    pDescripcion.textContent = itemCurso.descripcion;
    divDcha.appendChild(pDescripcion);

});
