// AÑADE LA EXPERIENCIA LABORAL DE FORMA DINÁMICA

// importo el objeto experiencia y creo un array con el contenido
import dataExperiencia from "./data/dataExperiencia";
const {experiencia} = dataExperiencia;

// Obtengo la columna donde las añado
const columnaDerecha = document.querySelector('.columnaDerecha');

// Creo el div con la clase enlaceAlCurriculum
const divEnlaceAlCurriculum = document.createElement('div')
divEnlaceAlCurriculum.setAttribute('class', 'enlaceAlCurriculum');
columnaDerecha.appendChild(divEnlaceAlCurriculum);

// Creo el enlace al currículum
const enlaceCurriculum = document.createElement('a');
enlaceCurriculum.setAttribute('href', './public/cv.pdf'); // Ruta al archivo
enlaceCurriculum.setAttribute('download', 'CV_OscarFernandezSantiago.pdf'); // Cambia el nombre si quieres
enlaceCurriculum.textContent = 'Descargar Currículum';
enlaceCurriculum.setAttribute('class', 'boton-cv'); // Clase CSS para estilos
divEnlaceAlCurriculum.appendChild(enlaceCurriculum);

// Añades el enlace dentro del divEnlaceAlCurriculum antes del divExperiencia
divEnlaceAlCurriculum.appendChild(enlaceCurriculum);

// Creo el div con la clase experiencia
const divExperiencia = document.createElement('div')
divExperiencia.setAttribute('class', 'experiencia');
divEnlaceAlCurriculum.appendChild(divExperiencia);

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
