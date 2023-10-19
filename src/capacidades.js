// AÑADE LAS CAPACIDADES DE FORMA DINÁMICA

// importo el objeto titulaciones y creo un array con el contenido
import data from './data/dataCapacidades';
// const {capacidades, estrellas} = data;


// Obtengo la columna izquierda
const columnaIzquierda = document.querySelector('.columnaIzquierda');

// Creo el div con la clase capacidades
const divCapacidades = document.createElement('div');
divCapacidades.setAttribute('class', 'capacidades');
columnaIzquierda.appendChild(divCapacidades);

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

// Añado la columna con las estrellas
const spanEstrellas = document.createElement('span');
spanEstrellas.setAttribute('class', 'estrellas');

data.capacidades.forEach((itemEstrella) => {
    const estrellasDeUnaCapacidad = document.createElement('p');
    estrellasDeUnaCapacidad.innerHTML = itemEstrella.estrellas;
    spanEstrellas.appendChild(estrellasDeUnaCapacidad);    
});

divContieneEstrellas.appendChild(spanEstrellas);

// Creo el div con la clase capacidad
const divCapacidad = document.createElement('div');
divCapacidad.setAttribute('class', 'capacidad');
divContenido.appendChild(divCapacidad);

// Añado la columna de las capacidades
data.capacidades.forEach((itemCapacidad) => {
    const parrafo = document.createElement('p');
    parrafo.textContent = itemCapacidad.capacidad;
    divCapacidad.appendChild(parrafo);
});