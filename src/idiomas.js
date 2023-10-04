// MUESTRO DE FORMA DINÁMICA EL APARTADO DE IDIOMAS

// Obtengo la columna de la iquierda
const columnaIzquierda = document.querySelector('.columnaIzquierda')

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