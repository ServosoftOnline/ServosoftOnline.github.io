/*
    Este script crea un servidor mediante el módulo http de commonJs y mediante express:

        - Hacen lo mismo. Dejaré comentado la parte que lo hace mediante http
            - Al usar express me ahorro los condicionales
            
        - Al añadir un routing es más fácil en express que con el módulo http
        
        - Routing significa que respondo diferentes respuestas dependiendo de la url
            - Permite extender la aplicacion respondiendo diferente contenido dependiendo de la ruta
            
            - Implica el uso de los siguientes métodos:

                - sendFile permite responder con archivos
                - send y delimitando el texto entre comillas respondo un texto.

                - use permite responder el contenido si no se encuentra ninguna ruta de las anteriores
                    - No respondería un estado 404 sino un estado 200. Ver en inspeccionar / red
                    - El estado 200 indica que todo ha ido bien, no hubo error en el servidor.
                    - Nos permite manejar paginas que no existen
                    - Si quisiera que devuelva un estado 404 le añado el método status. Que dejo comentado

             

*/

/*
// CREACION DE UN SERVIDOR WEB MEDIANTE HTTP
// Importo los modulos http y fs de commonJs
const http = require('http')
const fs = require('fs')

// Creo el servidor donde solo por acceder lee el archivo index.html y lo devuelve
const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./static/index.html')
    read.pipe(res)
})

// El servidor se encontrará escuchando en el puerto 3000 y mostrará el mensaje en consola
server.listen(3000)
console.log('Servidor escuchando en el puerto 3000')
*/


// CREACION WEB MEDIANTE EXPRESS
// Importo express
const express = require('express')

// Llamo a la función express y almaceno el resultado en la app
const app = express()

// ROUTING
// Las llamadas al raiz responderá con el archivo index.html. Mediante root: __dirname le indico la ruta completa
app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

// Las llamadas a la ruta about responderá con el texto: Texto del about
app.get('/about', (req, res) => {
    res.send('Texto del about')
})

// Llegado este momento, no ha encontrado ninguna ruta y no respondio nada. Indico que no encontré la pagina
app.use((req, res) => {
    res.send('Pagina no encontrada')
    //res.status(404).send('Pagina no encontrada')
})
// Indico que la aplicación esta escuchando el un puerto y lo muestro en consola
app.listen(3000)
console.log('Servidor escuchando en el puerto 3000')