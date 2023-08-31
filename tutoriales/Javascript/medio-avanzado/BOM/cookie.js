/*
    OBJETO BOM: COOKIE
    - Una cookie es un conjunto propiedad valor. Las cookies se unen unas con otras separadas por un ;
    - No se borran cuando actualizo la pagina. Se borrarán con una función, cuando cierro el navegador o cuando expire una fecha.
    - Para trabajar con ellas:
        - Instalar la extension de visual studio code que se llama live server. Crea un botón en Visual Studio
        - Para crear una cookie escribimos document.cookie = 'propiedad=valor'.
        - Para borrarla debemos sobrescribirla con un valor vacio y una fecha de expiracion pasada
    - En chrome se pueden ver las cookies en Herramientas para el desarrolador/Aplicacion/Almacenamiento 
*/

/*
    Ejemplo de uso de cookies:
    - Abro y cierro sesión almacenando el valor como una cookie.
    - Si hubiera una cookie con una propiedad llamada usuario muestra en consola bienvenido y el nombre de usuario
    - En caso contrario se inicia la sesión de forma automática e introducimos el nombre
    - Si recargamos la página y tenemos iniciada la sesión seguirá mostrando la bienvenida en consola. No se borraría.
    - Para recorrer todas las cookies:
        - Almaceno todas las cookies en un array. Uso el método split y uso como separador el ;
        - Recorro el array hasta localizar la propiedad que sea usuario y almaceno su valor usando de nuevo el método split y como separador el =
    - Con la función mostrarCookies mostraré en consola si esta guardado el usuario como cookie

*/

let valor;
const iniciarSesion = () => {
    valor = window.prompt('Introduzca nombre de usuario:');
    document.cookie = `usuario=${valor}`;
    alert('Sesión iniciada');    
}

const cerrarSesion = () => {
    document.cookie = 'usuario= ;expires=1 Jan 2000 01:00:00 UTC';
    alert('Sesión cerrada');
}

const mostrarCookies = () => {
    console.log(document.cookie);
}

const todasLasCookies = document.cookie.split(';');
todasLasCookies.forEach((cookie) => {
    const propiedad = cookie.split('=')[0];
    if (propiedad === 'usuario'){
        valor = cookie.split('=')[1];
    }
});

if(valor) alert(valor + " bienvenido!!"); else iniciarSesion();