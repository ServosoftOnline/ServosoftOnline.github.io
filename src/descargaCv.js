// AÑADE EL BOTÓN PARA DESCARGAR MI CURRICULUM DE FORMA DINÁMICA

// Obtengo la columna donde las añado
const columnaDerecha = document.querySelector('.columnaIzquierda');

// Creo el div con la clase enlaceAlCurriculum
const divEnlaceAlCurriculum = document.createElement('div')
divEnlaceAlCurriculum.setAttribute('class', 'enlaceAlCurriculum');
columnaDerecha.appendChild(divEnlaceAlCurriculum);

// Creo el enlace al currículum
const enlaceCurriculum = document.createElement('a');
enlaceCurriculum.setAttribute('href', './public/cv.pdf');
enlaceCurriculum.setAttribute('download', 'CV_OscarFernandezSantiago.pdf');
enlaceCurriculum.textContent = 'Descargar Currículum';
enlaceCurriculum.setAttribute('class', 'boton-cv'); 
divEnlaceAlCurriculum.appendChild(enlaceCurriculum);