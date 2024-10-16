// AÑADE LOS CURSOS DE FORMA DINÁMICA

// importo el objeto cursos y creo un array con el contenido
import dataCursos from './data/dataCursos';
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