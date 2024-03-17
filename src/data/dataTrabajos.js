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
            enlace: 'https://servosoftonline.github.io/L80/',
            imagenSrc: './img/trabajo1.jpg',
            descripcion: 'Sitio web de un grupo musical desarrollado en HTML, CSS y JAVASCRIPT. Es responsive, está creado en una sola página, sin usar ningun CMS y contiene una galería de imágenes',
        },

        {
            id: '2',
            proyecto: 'Control de gastos',
            enlace: 'https://lista-de-gastos-e0c1c.web.app/',
            imagenSrc: './img/trabajo2.jpg',
            descripcion: 'Aplicación para llevar un control de gastos. El frontend está realizado con React y el backend con Firebase. Es responsive, válido para monitores 4k, FullHd y móviles',
        },

        {
            id: '3',
            proyecto: 'Lista de tareas',
            enlace: 'https://listadetareas-b9c81.web.app',
            imagenSrc: './img/trabajo3.jpg',
            descripcion: 'Aplicación para gestionar tareas. Podré añadirlas, editarlas, borrarlas y marcarlas como completadas. Las marcadas como completadas podré ocultarlas si así lo deseo. Está realizada con React y guarda las tareas en el propio navegador',
        }
    ]
};
