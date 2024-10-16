/* 
    fetchAPI: (PERMITE TRABAJAR CON APIs EXTERNAS) (EJEMPLO USANDO ASYNC/AWAIT)

        - Más elegante que en fetchAPI.js donde no uso async await.
        - API del navegador que permite realizar peticiones a servidores externos
        - Usaré la web https://www.npoint.io/
            - Permite simular que halla un servidor que nos responde algo
            - Esta pagina puede caer pero existen otras paginas que hacen la misma función

            - En todas hay que hacer lo mismo: 

                - Pegar la cadena de texto en formato json y subirla.
                    - La cadena de texto subida fue la que contiene el archivo datos.json

                - Al compartirla no proporciona un enlace.
                    - En esta práctica me devolvio el enlace: https://api.npoint.io/378a936868740db99c96

                - Cuando use la API fetch me devolverá el JSON


*/

// Guardo el enlace entre comillas
const endPoint = 'https://api.npoint.io/378a936868740db99c96';

// Creo la función asincrona donde se espera a obtener la respuesta. Despues se espera a extraer los datos
const obtenerDatos = async() => {
    const respuesta = await fetch(endPoint);
    const datos = await respuesta.json();    
    console.log(datos);
}

// Llamo a la función
obtenerDatos();
