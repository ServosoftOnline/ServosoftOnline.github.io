// AÑADE LAS HABILIDADES DE FORMA DINÁMICA

// importo el objeto habilidades y creo un array con el contenido
import data from './data/dataHablidades';
console.log(data);

// Obtengo la columna izquierda
const columnaIzquierda = document.querySelector('.columnaIzquierda');

// Creo el div con la clase capacidades
const divHabilidades = document.createElement('div');
divHabilidades.setAttribute('class', 'habilidades');
columnaIzquierda.appendChild(divHabilidades);

// Creo la cabecera contenidos
const cabeceraContenidos = document.createElement('h3');
cabeceraContenidos.textContent = 'Habilidades';
divHabilidades.appendChild(cabeceraContenidos);

// Creo el div con la clase contenido
const divContenido = document.createElement('div');
divContenido. setAttribute('class', 'contenido');
divHabilidades.appendChild(divContenido);

// Creo la lista de las habilidades
const listaHabilidades = document.createElement('ul');
listaHabilidades.setAttribute('class', 'lista-dos-a-dos-habilidades');
divContenido.appendChild(listaHabilidades);

// Elementos de la lista
data.habilidades.forEach((itemHabilidad) => {
    
    const estrellas = document.createElement('li');
    estrellas.innerHTML = itemHabilidad.estrellas;
    listaHabilidades.appendChild(estrellas);

    const habilidad = document.createElement('li');
    habilidad.innerHTML = itemHabilidad.habilidad;
    listaHabilidades.appendChild(habilidad);
})