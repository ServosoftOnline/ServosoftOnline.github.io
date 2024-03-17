// AÑADE LAS CAPACIDADES DE FORMA DINÁMICA

// importo el objeto titulaciones y creo un array con el contenido
import data from './data/dataCapacidades';

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
})