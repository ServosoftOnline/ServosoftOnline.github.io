/*
    OBJETO BOM: TIMER
    - Dos metodos para poder iniciar y parar un timer
        - window.setTimeOut(() => {}, milisegundos).
            - Ejecutar algúna funcion despues de cierto tiempo.
            - Devuelve un identificador que lo uso cuando quiera pararlo
            - Estructura
                - Primer argumento un callback
                - Segundo argumento tiempo indicado en milisegundos
            - Pulsar un botón, empezar el tiempo a correr y cuando finalize ejecuto la acción
        - windows.clearTimeout(idenficiador del timer a parar) 
            - uso el identificador que devolvió setTimeout 
    - Método para ejecutar una funcion cada X tiempo
        - windows.setInterval().
            - Ejecuta una función cada cierto tiempo
            - Se ejecuta de forma infinita hasta que lo indiquemos
            - Uso una función para iniciar la cuenta, otra para pararla y un botón para cada acción
*/


// Pulsaría el boton de saludar en index.html y saludaría inmediatamente
const saludar = () => {
    console.log('Hola');
}

// Pulsaría el boton de inicar saludo en index.html, esperaria 5 segundos y invoca a la funcion saludar
let id;
const iniciarSaludo = () => {
    console.log('Tardo cinco segundos en saludar.');
    id = window.setTimeout(saludar, 5000);
   
}

// Paro el saludo. Si pulso parar saludo antes que acabe el tiempo, no saludará
const pararSaludo = () => {
    console.log('Ya no saludo');
    clearTimeout(id);
}

// Iniciar y parar un contador de números mostrados en consola
let numero = 0;
let idInterval;
const iniciarCuenta = () => {
    console.log('Empieza la cuenta');
    idInterval = setInterval(() => {
        numero++;
        console.log(numero);
    }, 1000);
}

const pararCuenta = () => {
    console.log('Paro de contar');
    clearInterval(idInterval);
    
}
