/*
    OBJETO BOM: WINDOW.

        - Objeto que forma parte de BOM. Browser Objet model
        - Permite trabajar con animaciones, audios, portapapeles, etc
        - sus metodos son globales, podemos acceder a ellos desde cualquier parte del codigo
        - puedo acceder a ellos escribiendo window.metodo o escribir solo el metodo
         
        - metodos y propiedades mas frecuentes del objeto window:
            - window.alert(). Muestra ventana con mensajes de alerta
            - window.innetWidth. Obtiene el ancho de la ventana del navegador que tiene en ese momento
            - window.innetHeight. Igual para el alto. No tiene en cuenta barra de herramientas, marcadores y scroll
            - window.screen.width. Ancho total del monitor en px
            - window.screen.height. Alto total del monitor en px
            - window.screen.availWidth. Ancho del monitor disponible
            - window.screen.availHeight. Alto del monitor disponible


            - window.open(direccionDondeApunta, nombreDeLaVentana, cadena de texto con opciones). Abre ventanas
                - Los parámetros son opcionales.
                - En cadena de texto puedo poner ancho, alto de la ventana, .. Si no pongo nada abre una pestaña.
                - Permite guardar la ventana en una vble obteniendo propiedades y metodos adicionales
                    - Por ejemplo mostrar en pantalla con el metodo write
                - No se ve bien abrir ventanas. puede usarse en contadas ocasiones
            
*/

// muestro todos los métodos en consola
console.log(window);

// los metodos de window son globales. window.alert() y alert() funcionan igual
window.alert('Mensaje de alerta!!');
alert('Segundo aviso!!!');

// Funciones para abrir ventanas
let ventana;
const abrirVentana = () => {
    ventana = window.open('https://www.msn.com/es-es', ' Abre ventana msn', 'width = 720, height = 405');
};

const cerrarVentana = () => {
    ventana.close();
};

// 
const pixeles = () => {
    ventana = window.open('','Resolucion');
    ventana.document.write(`
        <h1>Ya empezamos a escribir en pantalla!!</h1>
        <p>Resolución del monitor: ${ventana.window.screen.width}px de ancho y ${ventana.window.screen.height}px de alto</p>
        <p>Resolución sin barra de windows: ${window.screen.availWidth}px de ancho y ${window.screen.availHeight}px de alto </p>
        <p>Tamaño de la ventana: ${window.innerWidth} px de ancho y ${window.innerHeight} px de alto</p>
    `);
}

