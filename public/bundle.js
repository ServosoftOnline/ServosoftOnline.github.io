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

// Div con los textos
const perfil = document.createElement('div');
perfil.classList.add('perfil');
perfil.innerHTML = `
    <h1>Óscar Fernández Santiago</h1>
    <h2>Desarrollador de aplicaciones Fullstack</h2>
    <h3>Perfil profesional</h3>    
`;
columnaIzquierda$4.appendChild(perfil);

// div con la descripción
const contenidoPerfil = document.createElement('div');
contenidoPerfil.setAttribute('class', 'contenido');
contenidoPerfil.innerHTML = `
    <p>
        <h4>Soy técnico superior en Administracion de Sistemas Informáticos Monousuario y Multiusuario.</h4>
        <p>Desde que me titulé en 1998 he trabajado siempre en el sector de la informática, telecomunicaciones
        y desarrollo de aplicaciones. </p>
    </p>
`;
perfil.appendChild(contenidoPerfil);

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
            dato: 'Mijas (Málaga)'            
        }

        // {
        //     id: '4',
        //     clase: 'fa-solid fa-user-group fa-beat',
        //     estilo: 'color: #06395c;',
        //     dato: 'Casado y con dos niños preciosos'            
        // }
    ]
};

// AÑADE CONTACTO DE FORMA DINÁMICA - Debo hacerlo más dinámico insertando una data y recorriendo el contenido

const {datosDeContacto} = dataContacto;

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
// ulDatosDeContacto.setAttribute('class', 'lista-dos-a-dos');
divContenido$1.appendChild(ulDatosDeContacto);

// Recorro el array y voy mostrando los elementos de dos en dos
datosDeContacto.forEach((itemDato) => {    

    // Elemento que contiene el icono
    const liIcono = document.createElement('li');
    liIcono.setAttribute('class', 'iconoContacto');
    ulDatosDeContacto.appendChild(liIcono);

    // Icono
    const iIcono = document.createElement('i');
    iIcono.setAttribute('class', `${itemDato.clase}`);
    iIcono.setAttribute('style', `${itemDato.estilo}`);
    liIcono.appendChild(iIcono);

    // Elemento que contiene la descripcion
    const liDescripcion = document.createElement('li');
    liDescripcion.setAttribute('class', 'descripcionContacto');
    ulDatosDeContacto.appendChild(liDescripcion);

    // Descripción
    const pDescripcion = document.createElement('p');
    pDescripcion.textContent = itemDato.dato;
    liDescripcion.appendChild(pDescripcion);


    
});

/* 
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

*/

/*
    OBJETO TITULACIONES
    - Contiene toda la información de mis titulos que agregaré de forma dinamica
*/

var dataTitulacion = {
    titulaciones: [
        {
            id: '1',
            titulo: 'Técnico Superior en Administración de Sistemas Informáticos Monousuario y Multiusuario. Ciclo formativo superior',
            fecha: 'SEPTIEMBRE 1996 - JUNIO 1998',
            centro: 'Instituto Bezmiliana en el Rincón de la Victoria'
        }

        // {
        //     id: '2',
        //     titulo: 'Bachillerato superior',
        //     fecha: 'SEPTIEMBRE 1989 - JUNIO 1994',
        //     centro: 'Instituto de educación secundaria Fuengirola Nº 1'
        // },

        // {
        //     id: '3',
        //     titulo: 'Educación General Básica',
        //     fecha: 'SEPTIEMBRE 1980 - JUNIO 1989',
        //     centro: 'Colegio público Andalucía'
        // },
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
cabeceraTitulacion.textContent = 'Titulación';
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
    const titulacionNegrita = document.createElement('h4');
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

var data = {
    capacidades: [
        {
            id: '1',
            estrellas: '&#9733;&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'Buenas Prácticas',
        },

        {
            id: '2',
            estrellas: '&#9733;&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'Html',          
        },

        {
            id: '3',
            estrellas: '&#9733;&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'Css',          
        },

        {
            id: '4',
            estrellas: '&#9733;&#9733;',
            capacidad: 'Sass',    
        },

        {
            id: '5',
            estrellas: '&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'Diseño responsive',        
        },

        {
            id: '6',
            estrellas: '&#9733;&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'Javascript (ES6)',
        },

        {
            id: '7',
            estrellas: '&#9733;&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'POO',
        },

        {
            id: '8',
            estrellas: '&#9733;&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'React',
        },

        {
            id: '9',
            estrellas: '&#9733;&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'Vite',    
        },

        {
            id: '10',
            estrellas: '&#9733;&#9733;&#9733',
            capacidad: 'Create react app',    
        },

        {
            id: '11',
            estrellas: '&#9733;&#9733;&#9733;',
            capacidad: 'Webpack',    
        },

        {
            id: '12',
            estrellas: '&#9733;&#9733;',
            capacidad: 'Babel',    
        },

        {
            id: '13',
            estrellas: '&#9733;&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'Firebase (SAAS)',        
        },

        {
            id: '14',
            estrellas: '&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'Node',        
        },

        {
            id: '15',
            estrellas: '&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'Express',        
        },

        {
            id: '16',
            estrellas: '&#9733;&#9733;',
            capacidad: 'PHP',        
        },

        {
            id: '17',
            estrellas: '&#9733;&#9733;&#9733;&#9733;',
            capacidad: 'Git',            
        },

        {
            id: '18',
            estrellas: '&#9733;&#9733;&#9733;&#9733',
            capacidad: 'Github',            
        },

        {
            id: '19',
            estrellas: '&#9733;&#9733;&#9733;&#9733',
            capacidad: 'Linux',
        },

        {
            id: '20',
            estrellas: '&#9733;&#9733;&#9733;&#9733;&#9733',
            capacidad: 'Windows',
        }

    ]
};

// AÑADE LAS CAPACIDADES DE FORMA DINÁMICA


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

// Creo la lista de las capacidades
const listaCapacidades = document.createElement('ul');
listaCapacidades.setAttribute('class', 'lista-dos-a-dos');
divContenido.appendChild(listaCapacidades);

// Elementos de la lista
data.capacidades.forEach((itemCapacidad) => {
    
    const estrellas = document.createElement('li');
    estrellas.innerHTML = itemCapacidad.estrellas;
    listaCapacidades.appendChild(estrellas);

    const capacidad = document.createElement('li');
    capacidad.innerHTML = itemCapacidad.capacidad;
    listaCapacidades.appendChild(capacidad);
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
            profesion: 'Técnico en telecomunicaciones',
            fecha: 'SEPTIEMBRE 2009 - ENERO 2025',
            descripcion: 'Soporte telefónico y presencial a clientes corporate de Vodafone. REPSOL, ENDESA, AENA, BANCO DE ESPAÑA son algunos de nuestros clientes. Instalo y resuelvo averías en diferentes tecnologías como XDSL, FIBRA OPTICA, RADIO ENLACES, CENTRALITAS DE TELEFONOS, ...'          
        },

        {
            id: '2',
            profesion: 'Desarrollador de aplicaciones',
            fecha: 'ENERO 2017 - JULIO 2021',
            descripcion: 'Me establecí como trabajador autonomo para ofrecer mis conocimientos y experiencia. Realizaba de forma simultánea el desarrollo de sitios y aplicaciones WEBs y servicios de telecomunicaciones.'
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
            descripcion: 'Diversos trabajos relacionados con la reparación de ordenadores, montaje de redes locales e instalación y reparacion de sistemas de seguridad. En mi último trabajo, como informático, fuí responsable del mantenimiento de 12 oficinas repartidas por todo el territorio español.'
        }
    ]
};

// AÑADE LA EXPERIENCIA LABORAL DE FORMA DINÁMICA

const {experiencia} = dataExperiencia;

// Obtengo la columna donde las añado
const columnaDerecha$1 = document.querySelector('.columnaDerecha');

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
            año: '2024',
            curso: 'Javascript: El Curso Completo, Práctico y desde Cero',
            descripcion: 'Curso realizado en la plataforma online Udemy proporcionado por Carlos Arturo Esparza'
        },        

        {
            id: '2',
            año: '2024',
            curso: 'React y Firebase: El Curso Completo, Práctico y desde Cero',
            descripcion: 'Curso realizado en la plataforma online Udemy proporcionado por Carlos Arturo Esparza'
        },

        {
            id: '3',
            año: '2016',
            curso: 'HTML, CSS Y JAVASCRIPT',
            descripcion: 'Curso presencial proporcionado por FOREM-A. Formación y Empleo de Andalucía'
        },

        {
            id: '4',
            año: '2011',
            curso: 'Analista programador',
            descripcion: 'Curso de Java SE y PostgreSQL realizado de forma presencial en INGENIA situado en el Parque Tecnológico de Andalucía'
        },

        {
            id: '5',
            año: '1994',
            curso: 'Programador de ordenadores',
            descripcion: 'Curso de programación en varios lenguajes de la época (BASIC, DBASE, COBOL, CLIPPER Y C) proporcionado por FILEKOM. Era muy jóven, no tenia mas de 20 años, y aprendí lenguajes de programación que aunque varios no se usan actualmente, me ayudó a entender la programación actual'
        }
    ]
};

// AÑADE LOS CURSOS DE FORMA DINÁMICA

const {cursos} = dataCursos;

// Obtengo la columna donde las añado
const columnaDerecha = document.querySelector('.columnaDerecha');

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
h2Cursos.textContent = 'Formación';
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

/*
    OBJETO TRABAJOS
    - Contiene toda la información de mis proyectos que agregaré de forma dinamica
    - La clase del icono que son dos >> siempre es el mismo por lo que lo insertaré de forma estática
        - No lo añado como propiedad    
*/

var dataTrabajos = {
    trabajos: [

        {
            id: '0',
            proyecto: 'Este Curriculum - Portafolio',
            enlace: 'https://servosoftonline.github.io',
            imagenSrc: './img/trabajo0.jpg',
            descripcion: '<b>La página web estática que ves en este momento ha sido creada por mí. Para ello usé HTML, CSS, Javascript y POO.</b> Cree tantos objetos como apartados diferentes tiene esta web (Datos de contacto, titulaciones, capacidades, experiencia laboral, formación, y trabajos).',
        },

        {
            id: '1',
            proyecto: 'L80',
            enlace: 'https://servosoftonline.github.io/Proyectos/L80/',
            imagenSrc: './img/trabajo1.jpg',
            descripcion: '<b>Sitio web de un grupo musical desarrollado en HTML, CSS y JAVASCRIPT.</b> Es responsive, está creado en una sola página y contiene una galería de imágenes',
        },

        {
            id: '2',
            proyecto: 'Control de gastos',
            enlace: 'https://lista-de-gastos-e0c1c.web.app/',
            imagenSrc: './img/trabajo2.jpg',
            descripcion: '<b>Aplicación para llevar un control de gastos.</b> El frontend está realizado con React y el backend con Firebase. Es responsive, válido para monitores 4k, FullHd y móviles',
        },

        {
            id: '3',
            proyecto: 'Lista de tareas',
            enlace: 'https://listadetareas-b9c81.web.app',
            imagenSrc: './img/trabajo3.jpg',
            descripcion: '<b>Aplicación para gestionar tareas.</b> Podré añadirlas, editarlas, borrarlas y marcarlas como completadas. Las marcadas como completadas podré ocultarlas si así lo deseo. Está realizada con React y guarda las tareas en el propio navegador',
        },

        {
            id: '4',
            proyecto: 'Gestor de actuaciones',
            enlace: 'https://gestordeactuaciones.web.app/',
            imagenSrc: './img/trabajo4.jpg',
            descripcion: '<b>Aplicación completa y funcional que permite a cualquier empresa que ofrezca servicios técnicos poder gestionar sus actuaciones técnicas.</b> Tiene perfiles para diferentes usuarios, administradores, coordinadores y técnicos. Suma los puntos de cada actuación de forma automática, es responsive, genera informes en libros excel, ...\n\n<b><u>Pueden probar esta aplicación con estos usuarios:</u></b>\n\n- <b>Usuario</b>: administrador@gmail.com - <b>contraseña:</b> 123456\n\n- <b>Usuario:</b> coordinador@gmail.com - <b>contraseña:</b> 123456\n\n- <b>Usuario:</b> tecnico1@gmail.com - <b>contraseña:</b> 123456\n\n- <b>Usuario:</b> tecnico2@gmail.com - <b>contraseña:</b> 123456\n\n',
        }
    ]
};

// AÑADE MIS TRABAJOS DE FORMA DINÁMICA

const {trabajos} = dataTrabajos;

// Obtengo la columna donde las añado
const divTrabajos = document.querySelector('.trabajos');

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

    /*
    // Mostrar el manual
    const aDescargaManual = document.createElement('a');
    aDescargaManual.setAttribute('href', './src/manual/manual.pdf');
    aDescargaManual.setAttribute('target', '_blank');
    aDescargaManual.textContent = 'Manual de usuario';
    divAlineadoIzda.appendChild(aDescargaManual);
    */

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
    // if (index < trabajos.length - 1) {
    //     const separador = document.createElement('hr');
    //     divAlineadoIzda.appendChild(separador);
    // }

});
