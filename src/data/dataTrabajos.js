/*
    OBJETO TRABAJOS
    - Contiene toda la información de mis proyectos que agregaré de forma dinamica
    - La clase del icono que son dos >> siempre es el mismo por lo que lo insertaré de forma estática
        - No lo añado como propiedad    
*/

export default {
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
            descripcion: '<b>Aplicación completa y funcional que permite a cualquier empresa que ofrezca servicios técnicos poder gestionar las visitas de sus técnicos.</b> Tiene perfiles para diferentes usuarios, administradores, coordinadores y técnicos. Suma los puntos de cada actuación de forma automática, es responsive, genera informes en libros excel, ...\n\n<b><u>Pueden probar esta aplicación con estos usuarios:</u></b>\n\n- <b>Usuario</b>: administrador@gmail.com - <b>contraseña:</b> 123456\n\n- <b>Usuario:</b> coordinador@gmail.com - <b>contraseña:</b> 123456\n\n- <b>Usuario:</b> tecnico1@gmail.com - <b>contraseña:</b> 123456\n\n- <b>Usuario:</b> tecnico2@gmail.com - <b>contraseña:</b> 123456\n\n',
        },

        {
            id: '5',
            proyecto: 'Blog Gastronómico',
            enlace: 'https://recetas-online.vercel.app/',
            imagenSrc: './img/trabajo5.jpg',
            descripcion: "He desarrollado un blog de recetas de cocina con funcionalidades <b>CRUD (Crear, Leer, Actualizar, Eliminar)</b>. \n\nLa aplicación permite a los usuarios <b>gestionar recetas</b> completas con <b>subida de imágenes a través de Cloudinary</b>, optimizando la experiencia visual con un diseño <b>completamente responsive</b>.\n\nEl proyecto está construido como una aplicación <b>MERN</b> (MongoDB, Express, React, Node.js) y demuestra habilidades clave en el <b>despliegue full-stack</b> y la integración con servicios de terceros.\n\nActualmente, el proyecto se encuentra en desarrollo. La próxima fase incluirá la implementación de <b>autenticación de usuarios con JWT</b>, lo que permitirá a los usuarios registrarse y gestionar sus propias recetas de forma segura."

        }
    ]
};

