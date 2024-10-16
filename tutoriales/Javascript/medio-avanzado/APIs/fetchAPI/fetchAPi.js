/* 
    fetchAPI: (PERMITE TRABAJAR CON APIs EXTERNAS) (EJEMPLO SIN USAR ASYNC/AWAIT)

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

// Uso la API fetch que devolverá la respuesta en una promesa
fetch(endPoint)

    .then((respuesta) => {

        console.log('Respondió el servidor');

        // Mediante el metodo json extraigo los resultados de la respuesta en formato json.
        // Serán devueltos mediante otra promesa
        const resultados = respuesta.json();

        // Gestiono la nueva promesa
        resultados
            .then((datos) => {
                
                // Datos ya contiene el JSON devuelto por el servidor                
                console.log('Devolviendo el siguiente JSON:')
                console.log(datos);

                // Accedo a lo que necesite: Nombre, id, si es suscriptor, ...
                console.log('Nombre: ' + datos.nombre);
                console.log('id:' + datos.id);
                console.log('Es subscriptor? ' + datos.suscriptor_activo);
            })

            .catch((error) => {
                console.log('Error al extraer la respuesta en formato json')
                console.log(error);
            });

    })
    .catch((error) => {
        console.log('El servidor no respondió. Podría estar caido');
        console.log(error);

    })


