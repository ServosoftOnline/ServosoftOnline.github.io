/*
    EJEMPLO DE PROMESA:

    - Función que devuelve una promesa
    - Devolvere la promesa con return new Promise ()
    - pasamos como argumento los callbacks resolve y reject
    - Este es un ejemplo que consiste en consultar a una base de datos y obtener los resultados
    - Aun no he llegado allí. En nuestro ejemplo usaremos un array llamado post que contiene los post obtenidos
    - No puedo almacenar las promesas en constantes o vbles. Hay que usar then y catch
    - Si lo hago la consola me dirá que estoy pendiente de responderle a una promesa y dará error
*/

// fetchPosts equivale a obtenerPosts
const fetchPosts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            // Supongo que estos post han sido obtenidos despues de una consulta a una bbdd
            const post = ['Post1', 'Post2', 'Post3'];
            const hayError = false;
            if (hayError) reject('Ocurrio un error al obtener los post'); else resolve(post);            
        }, 4000);
    });
}

// Si la promesa devuelve exito muestro el post
fetchPosts().then((post) => {
    console.log(post);
});

// Si la promesa devuelve error muestro el mensaje de error
fetchPosts().catch((error) => {
    console.log(error);
});

// Tambien puedo concatenar los metodos then y catch y quedaría así. Sustituyo el último ; por . y concateno
fetchPosts()
    .then((post) => {
        console.log(post);
    })
    .catch((error) => {
    console.log(error);
    })
;

// dará error. Navegador pendiente de resolución de promesa
// let miVble = fetchPosts();
// console.log(miVble);
