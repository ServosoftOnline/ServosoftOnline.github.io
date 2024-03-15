// AÑADE CONTACTO DE FORMA DINÁMICA - Debo hacerlo más dinámico insertando una data y recorriendo el contenido


// importo el objeto datos de contacto y creo un array con el contenido
import dataContacto from "./data/dataContacto";
const {datosDeContacto} = dataContacto;

// Obtengo la columna de la izquierda
const columnaIzquierda = document.querySelector('.columnaIzquierda');

// Creo el div con la clase contacto
const divContacto = document.createElement('div');
divContacto.classList.add('contacto');
columnaIzquierda.appendChild(divContacto);

// creo la cabecera contacto
const cabContacto = document.createElement('h3');
cabContacto.textContent = 'Contacto';
divContacto.appendChild(cabContacto);

// Creo el div con la clase contenido
const divContenido = document.createElement('div');
divContenido.setAttribute('class', 'contenido');
divContacto.appendChild(divContenido);

// Creo la lista que contendrá los datos de contacto
const ulDatosDeContacto = document.createElement('ul');
divContenido.appendChild(ulDatosDeContacto);

// Recorro el array, creo los elementos de la lista, los iconos y los parrafos con los datos
datosDeContacto.forEach((itemDato) => {
    
    // Elemento
    const liDatosDeContacto = document.createElement('li');
    ulDatosDeContacto.appendChild(liDatosDeContacto);

    // Icono
    const iDatosDeContacto = document.createElement('i');
    iDatosDeContacto.setAttribute('class', `${itemDato.clase}`);
    iDatosDeContacto.setAttribute('style', `${itemDato.estilo}`);
    liDatosDeContacto.appendChild(iDatosDeContacto);

    // Párrafo
    const pDatosDeContacto = document.createElement('p');
    pDatosDeContacto.textContent = itemDato.dato;
    liDatosDeContacto.appendChild(pDatosDeContacto);

});