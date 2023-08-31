/*
   OBJETO BOM: LOCATION
    - Accede a la barra de direcciones del navegador accediendo a informacion
        - Obtener la URL donde nos encontramos
        - Cargar nuevos documentos
        - Mediante sus métodos y propiedades, muestra información sobre la ubicacion donde me encuentro
            - href. Devuelve la URL
            - hostname. Devuelve el host. en local devuelve un string vacio
            - pathname. Devuelve la ruta incluido el nombre del archivo de la pagina
            - protocol. Devuelve el protocolo utilizado. En local devuelve "file:" en remoto devolvera "https", ..
            - assign. Redireccionar a otro sitio
            - history. Permite ir hacia la pagina anterior y posterior
*/

// muestra todos sus metodos
console.log(window.location);

// Métodos más usuales
console.log(`URL: ${location.href}`);
console.log(`Nombre del host: ${location.hostname}`);
console.log(`Ruta: ${location.pathname}`);
console.log(`Protocolo: ${location.protocol}`);

const redirecciona = () => {
    location.assign('http://google.es');
}

const paginaAnterior = () => {
    history.back();
}

const paginaSiguiente = () => {
    history.forward();
}

