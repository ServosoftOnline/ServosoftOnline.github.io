/*
DOM: CREANDO Y REEMPLAZAR ELEMENTOS DEL DOCUMENTO HTML
    - Crear elementos desde cero
        - Tres pasos:
            1.- Crear un elemento
            2.- Crear el texto del elemento y sus atributos
                - .innerText. Propiedad que permite añadir texto
                - Añadir atributos siguiendo indicaciones del archivo modificarElementos.js
            3.- Agregar el elemento al DOM
                - Obtener el elemento donde deseo añadirlo
                - Introduzco el elemento creado en el elemento obtenido
                - Formas:
                    - .appendChild(elemento). Agrega el elemento al final
                    - .insertAdjacentElement(elemento)
                        - .afterbegin. Agrega el elemento al principio
                        - .beforebegin. Agrega antes del elemento padre. En el elemento anterior
                        - .beforeend. Agrega el elemento al final. Igual que appendChild
                        - .afterend. Agrega después del elemento padre. En el elemento siguiente
    
    - Reemplazar un elemento por otro
        - Obtento el elemento a reemplazar
        - Forma
            - .replaceWitch(nuevoElemento). Reemplaza un elemento por otro

*/

// Agrego una caja al final del contenedor1
const agregarCajaAlFinal = () => {
    // Paso 1
    const nuevaCaja = document.createElement('div');
    // Paso 2
    nuevaCaja.innerText = 'Nueva caja al final';
    nuevaCaja.setAttribute('class', 'caja activa');
    // Paso 3
    const contenedor = document.getElementById('contenedor1');
    contenedor.appendChild(nuevaCaja);
}

// Agrego una caja al principio del contenedor 1
const agregarCajaAlPrincipio = () => {
    const nuevaCaja = document.createElement('div');
    nuevaCaja.innerText = 'Nueva caja al principio';
    nuevaCaja.setAttribute('class', 'caja activa');
    const contenedor = document.getElementById('contenedor1');
    contenedor.insertAdjacentElement('afterbegin', nuevaCaja);
}

// Podría agregar cajas antes y despues del elemento padre pero sería duplicar las funciones anteriores
// Solo modificando el primer párametro de insertAdjacentElement

// Cambiar la primer caja del contenedor1
const cambiarCaja = () => {
    const nuevaCaja = document.createElement('div');
    nuevaCaja.innerText = 'Nueva caja al principio';
    nuevaCaja.setAttribute('class', 'caja activa');
    document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);
}