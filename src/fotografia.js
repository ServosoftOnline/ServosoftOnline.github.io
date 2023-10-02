// AÑADE LA FOTOGRAFIA DE FORMA DINÁMICA
 

// Obtengo la columna de la izquierda
const columnaIzquierda = document.querySelector('.columnaIzquierda');

// Creo un div y le añado la clase fotografía
const fotografia = document.createElement('div');
fotografia.classList.add('fotografia');

// Creo una imagen con su ubicación y le añado la clase sombreada
const imagen = document.createElement('img');
imagen.src = "./img/fotografia.png";
imagen.classList.add('sombreada');

// La imagen es hijo de la fotografia y la fotografia es hijo de la columna de la izquierda
fotografia.appendChild(imagen);
columnaIzquierda.appendChild(fotografia);
