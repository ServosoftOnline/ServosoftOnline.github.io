/*
    STREAMS Y HTTP
        - Permite leer un archivo y enviarlo mediante un servidor a traves de HTTP
        - Accedo a localhost:3000 y selecciono inspeccionar con el botón derecho:

            - Accedo a red/cabeceras se encuentra la siguiente información:
                - la url que lo solicitó
                - Codigo de estado 200 ok, indicando que terminó bien
                - Transfer-Encoding: chunked, indicando que he transferido el archivo en trozos



*/

// Importo los módulos
const http = require('http')
const {createReadStream} = require('fs')

// Creo el servidor
const server = http.createServer((req, res) => {

    // Leo el archivo
    const fileStream = createReadStream('./../data/bigFile.txt', {
        encoding: 'utf-8'
    })

    // Evento de eschucha que envia al frontend las porciones del archivo mediante el método pipe
    // Mediante pipe le voy enviando las porciones de contenido de fileStream al objeto resquest (res)
    fileStream.on('data', (chunk) => {
        fileStream.pipe(res)
    })

    // Si se produjese un error lo muestro en consola. Los paréntesis de error son opcionales
    fileStream.on('error', error => {
        console.log(`Se ha producido el siguiente error: ${error}`)
    })
})

// Indico el puerto donde el servidor escucha y lo muestro en consola
server.listen(3000)
console.log('Server on port 3000')
