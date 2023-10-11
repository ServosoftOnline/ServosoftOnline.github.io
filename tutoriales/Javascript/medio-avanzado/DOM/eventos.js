/*
- DOM: EVENTOS

    - Son indispensables
    - Registro acciones que ocurren dentro de la pagina y reaccionamos a ellas con codigo
    - Hay cientos de eventos

    - Algunos ejemplos:
        - Cuando la pagina acabe de cargar para despues reaccionar
        - Cuando se pulse click sobre un botón para ejecutar código
        - Cuando el usuario pase el cursor por una caja o un elemento
        - Cuando se está escribiendo sobre un formulario o se envia
        - Reaccionar ante animaciones, copiar o pegar desde el portapapeles, ante transiciones

    - Formas de trabajar con eventos
        1.- Mediante botones usando <button onclick></button>. 
            -Es menos recomendable porque ensuciamos el código no usando html (onclick)
            
        2.- Mediante el metodo event listener. Opción recomendada:
            Pasos:
                - Ejemplos en este archivo
                - Añadir un id al elemento
                - Obtener el elemento mediante el id añadido
                
                - Agregamos un event listener.
                    - Sintaxis event listener
                    - elemento.addEventListener('evento_sucedido', callback(e), true o false)
                    - Cuando sucede el evento, se ejecuta la función callback que contiene el código y true o false determina el método de progragación
                    - Primer parámetro indica el evento que sucedido. Ej: click
                    - Segundo parámetro es la funcion callback que contiene el codigo ha realizar contiene el parametro e que es el evento en si
                    - Como tercer parámetro opcional en el padre podemos pasar true o false, que indican metodo captura o burbuja respectivamente

            - Agrear un evento a múltiples elementos sin propagación. NO RECOMENDADO
                - Ejemplo en este archivo
                - Seleccionamos todos los elementos
                - Los recorro con un ciclo. 
                - Agrego un event listener en cada vuelta a cada elemento

            - Agreagar un evento a multiltiples elementos usando la prograpación o delegación de eventos
                - Ejemplo en propagaciónDeEventos.js
                - Si agregamos un event listener a un elemento lo heredan sus hijos
                - Permite optimizar el código y la memoria del pc del usuario                

            - Tipos de propagación de eventos
                - Ejemplo en tiposDePropagacionDeEventos.js
                - captura y burbuja

            - Eliminar un evento
                - Ejemplo en eliminarEventos.js
                - La función a ejecutar debo sacarla fuera y no como un callback
                - La llamaré desde addEventListener('evento', función)) para añadir el evento
                - La llamare desde removeEventListener('evento' funcion) para eliminarlo
            - Comportamiento de los eventos.
                -  El navegador prevee un comportamiento de los eventos por defecto:
                    - Ej: Una # en el href hace que el cursor se valla al principio
                    - e.preventDefault(). Previene ese comportamiento
        

*/

// Uso event listener. El boton1 cambiará la clase de la caja1. Pasar de "clase" a "clase activa" y viceversa
const boton1 = document.getElementById('boton1');
const caja = document.querySelector('#contenedor1 .caja');

boton1.addEventListener('click', (e) => {
    caja.classList.toggle('activa');
});

// Aplico eventos a múltiples elementos sin usar propagacion. Mostara en consola en que caja hice click
// El parámetro e contiene el evento. Accedo a su codigo html y mediante innerHTML muestro su contenido que es "caja X"
const cajas = document.querySelectorAll('.caja');
cajas.forEach((caja) => {
    caja.addEventListener('click', (e) => {
        console.log(`Has hecho click en la ${e.target.innerHTML}`);
    });
});
