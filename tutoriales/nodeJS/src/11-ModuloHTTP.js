/*
    MODULO HTTP:

    - Otro módulo de commonJsModules
    - Uno de los módulos mas usuales que permite crear servidores web

    - Modelo cliente servidor:

        - Desde el navegador se hacen solicitudes a un servidor web
        - El servidor responde a las solicitudes mediante el lenguaje de programación que se encuentre en este
        - El servidor le devuelve una pagina html al cliente

        - nodeJS permite crear servidores web con el módulo HTTP

            - Recibirá peticiones y responderá a estas peticiones mediante el protocolo de comunicaciones HTTP
            - request sería la peticion desde el cliente
            - response sería la respuesta del servidor
        
    - Metodos del módulo HTTP:

        - createServer(callback con los parámetros request y response) crea el servidor web
            - Al crear un servidor no preciso usar el parámetro request

        - response.write('Contenido'). Añado el contenido que mostrará el navegador al acceder al servidor
        - response.end(). Indico que la respuesta ha terminado

        - listen(puerto_de_escucha_no_reservado) -> Escucha las peticiones en un puerto específico
            - Los puertos reservados se encuentran en https://es.wikipedia.org/wiki/Anexo:Puertos_de_red
            - Si el puerto está reservado se lanzará un error
            - Suelen usarse números altos para evitar conflictos con los puertos reservados

        - Al ejecutar este archivo en consola mediante: node 11-ModuloHTTP.js se mostrará el mensaje:
            - Servidor escuchando en el puerto 3000

        - Me conecto a mi ordenador mediante el navegador en el puerto 3000 escribiendo localhost:3000
            - El navegador mostrará el mensaje: Servidor nodejs a la escucha
            - Si escribo localhost:3000/loquesea tambien mostrará el mensaje

        - Cuando corte la ejecucion del servidor mediante Ctrl + C el navegador ya no mostrará el mensaje
            - Habrá finalizado la ejecución del servidor

        - Métodos de request
            - url. Devuelve la url introducida en el navegador
                - Me permite poder añadir contenidos diferentes dependiendo de la url introducida
                - Al llegar al return response.end(), no continuaría la ejecución del codigo y no daría error

    - En futuros proyectos no será necesario hacer las rutas de esta forma. Usaré otro módulo para esta funcion

*/

// Importamos el módulo HTTP
const http = require('http');

/* 
    Creo el servidor. Dependiendo de la url introducida en el navegador escribirá un contenido diferente
    Si la url no es la raiz o /about mostrará el mensaje error 404 con un enlace para volver a la raiz
*/

const server = http.createServer((request, response) => {

    console.log(`URL introducida en el navegador: ${request.url}`)

    if(request.url === '/') {
        response.write('<h1>Bienvenido al servidor</h1>')
        return response.end()
    } 

    if(request.url === '/about') {
        response.write('<h1>Acerca de</h1>')
        return response.end()
    } 

    response.write(`
        <h1>Error 404:</h1>
        <p>Pagina no encontrada</p>
        <a href='/'>Volver a la pagina principal</a>
    `)
    
    response.end()
    
})

server.listen(3000)

// Muestro en consola el mensaje de informacion
console.log('Servidor escuchando en el puerto 3000')