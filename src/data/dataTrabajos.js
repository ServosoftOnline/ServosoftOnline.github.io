/*
    OBJETO TRABAJOS
    - Contiene toda la información de mis proyectos que agregaré de forma dinamica
    - La clase del icono que son dos >> siempre es el mismo por lo que lo insertaré de forma estática
        - No lo añado como propiedad    
*/

export default {
    trabajos: [
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
            descripcion: '<b>Aplicación finalizada que permite a cualquier empresa que ofrezca servicios técnicos poder gestionar sus actuaciones técnicas.</b> Tiene perfiles para diferentes usuarios, administradores, coordinadores y técnicos. Suma los puntos de cada actuación de forma automática, es responsive, genera informes en libros excel, ...\n\n<b><u>Pueden probar esta aplicación con estos usuarios:</u></b>\n\n- <b>Usuario</b>: administrador@gmail.com - <b>contraseña:</b> 123456\n\n- <b>Usuario:</b> coordinador1@gmail.com - <b>contraseña:</b> 123456\n\n- <b>Usuario:</b> tecnico1@gmail.com - <b>contraseña:</b> 123456\n\n- <b>Usuario:</b> tecnico2@gmail.com - <b>contraseña:</b> 123456\n\n',
        }
    ]
};

