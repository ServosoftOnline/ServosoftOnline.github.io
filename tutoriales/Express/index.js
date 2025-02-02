/*
    Este script crea un servidor mediante mediante express:

        - Dejo comentado como se haría mediante el módulo http y fs de commonJs para ver las diferencias            
        - Al añadir un routing es más fácil en express que con el módulo http

        - Creo mis rutas, tambien llamado Routing, que es la forma de responder a diferentes urls:

            - Usaré los métodos de comunicación HTTP descritos en el archivo modeloClienteServidor.txt
            - Junto con los metodos sendFile, send y use de express:

                - sendFile permite responder con archivos
                - send y delimitando el texto entre comillas respondo un texto.

                - use permite responder el contenido si no se encuentra ninguna ruta de las anteriores
                    - No respondería un estado 404 sino un estado 200. Ver en inspeccionar / red
                    - El estado 200 indica que todo ha ido bien, no hubo error en el servidor.
                    - Nos permite manejar paginas que no existen
                    - Si quisiera que devuelva un estado 404 le añado el método status. Que dejo comentado
            
        - Para probarlas hay que seguir los pasos descritos en el archivo modeloClienteServidor.txt

    Así se habría creado el servidor web mediante el modulo http:

        const http = require('http')
        const fs = require('fs')

        const server = http.createServer((req, res) => {
            const read = fs.createReadStream('./static/index.html')
            read.pipe(res)
        }

        server.listen(3000)
        console.log('Servidor escuchando en el puerto 3000')

})

*/

// CREACION DEL SERVIDOR WEB MEDIANTE EXPRESS
// Importo express
const express = require('express')

// Llamo a la función express y almaceno el resultado en la app
const app = express()

// Creo mis rutas
app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/products', (req, res) => {
    // Antes de devolver la respuesta haría operaciones con la base de datos: Validaciones, consultas, etc
    res.send('Lista de productos')
})

app.post('/products', (req, res) => {
    res.send('Creando productos')
})

app.put('/products', (req, res) => {
    res.send('Actualizando un producto')
})

app.delete('/products', (req, res) => {
    res.send('Eliminando un producto')
})

app.patch('/products', (req, res) => {
    res.send('Actualizando un dato de un producto')
})

app.use((req, res) => {
    res.send('Pagina no encontrada')
    //res.status(404).send('Pagina no encontrada')
})

// Indico el puerto donde escucha la aplicacción y lo muestro en consola
app.listen(3000)
console.log('Servidor escuchando en el puerto 3000')