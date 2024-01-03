/*
    ASYNC / AWAIT y TRY / CATCH
    
    - Con await indicamos que no realize ninguna acción hasta recibir la respuesta de la promesa
    - con async incamos que se realize de forma asincrona.
    - Casi siempre los veremos juntos
    - Al usarlos ya podremos almacenar una promesa en una vble.
    - No tendremos que usar los metodos then y catch. Usaríamos menos líneas de codigo
    - Tratamos (try) de realizar el codigo y llamamos a la promesa.
    - Si existiese error, lo atrapamos (catch) y lo tratamos

*/

// Promesa copiada de promesaEjemplo.js
// fetchPosts equivale a obtenerPosts
const fetchPosts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            // Supongo que estos post han sido obtenidos despues de una consulta a una bbdd
            const post = ['Post1', 'Post2', 'Post3'];
            const hayError = true;
            if (hayError) reject('Ocurrio un error al obtener los post'); else resolve(post);            
        }, 4000);
    });
};

// declaro la función que muestre los post usando async / await
// Los post no se podrán mostrar hasta saber si los tengo o tengo mensaje de error
const mostrarPosts = async() => {
    try {
        const post = await fetchPosts();
        /* Este bloque de lineas de codigo se ejecutarían si obtengo respuesta correcta de la promesa */
        console.log(post);
    }
    catch(error){
        /* Este bloque de lineas de codigo se ejecutarían si obtengo respuesta incorrecta de la promesa */
        console.log(error);
    }
}

// Llamo a la función
mostrarPosts();

