/*
    CALLBACKS
    
        - Son funciones que podemos pasar como parámetro a otras funciones
         borrar - Así desde una función se podrá llamar a otra función
        - Se aplica cuando usamos librerías o paquetes
        - El parámetro que pasamos como función será de tipo flecha. () => {}
        - Si fuera una operación sencilla usabamos return devolvemos un tipo de dato.
        - En operaciones mas complejas usamos un callbacks
        - Se devuelve información dentro de las llaves
        - y el contenido dentro de lo que indicamos dentro de los parámetros
        -

*/

// Son dos ejemplos ficticios. Solo los uso para explicar el funcionamiento de los callbacks.
// Cuando usemos callbacks tendremos librerias compuestas de funciones (SOSPECHO QUE LO HARÁN LOS FRAMEWORKS
// No tendremos que definir la funcion del ejemplo1.
// Nosotros las llamamos, le pasamos parámetros y uno de ellos sera un callback
// Nos lo devolverá y hacemos lo que consideremos con ello


// Ejemplo 1: Defino yo la función y recibo callback.
obtenerPostDelUsuario = (usuario, callback) => {
    console.log(`Obteniendo los post del usuario ${usuario} ...`);
    // conexion falsa a una base de de datos, espero de dos segundos y ejecuto la funcion callback de su interior
    setTimeout(() => {
        let post = ['Post1', 'Post2', 'Post3'];
        callback(post);
    }, 2000);
}


// Ejemplo 2: Supongo que instalo una libreria para conectarnos a una base de datos.
// Una de las funciones de esta libreria es obtenerPostDelUsuario que obtiene los post de un usuario
// Le paso el usuario Oscar y una funcion que es un callbacks que se llama postDevueltos
// La funcion de la libreria hace todo el trabajo , invoca el callbacks, 
// La librería devuelve información entre las llaves del callbacks y es accesible
// a esa información a traves del parámetro del callback
// Despues en este caso los muestro por consola. No tiene porque ser así siempre
obtenerPostDelUsuario ('Oscar', (postDevueltos) => {
    console.log(postDevueltos);
});
