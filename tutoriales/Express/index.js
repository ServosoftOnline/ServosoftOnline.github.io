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

    - Así se habría creado el servidor web si hubiera usado el modulo http de commonjs:

        const http = require('http')
        const fs = require('fs')

        const server = http.createServer((req, res) => {
            const read = fs.createReadStream('./static/index.html')
            read.pipe(res)
        }

        server.listen(3000)
        console.log('Servidor escuchando en el puerto 3000')

*/

// CREACION DEL SERVIDOR WEB MEDIANTE EXPRESS
// Importo express
const express = require('express')

// Llamo a la función express y almaceno el resultado en la app
const app = express()

// INICIO DE LAS RUTAS (O TAMBIEN LLAMADO ROUTING)
// Al entrar en la ruta raiz devuelvo el archivo index.html situado dentro de la carpeta static
app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

// Al entrar en la ruta /about devuelvo el texto 'Lista de productos usando el método get
app.get('/products', (req, res) => {

    // Antes de devolver la respuesta haría operaciones con la base de datos: Validaciones, consultas, etc
    res.send('Lista de productos')

})

// Puedo entrar en la misma ruta anterior pero usando el método post me devolerá el texto 'Creando productos'
app.post('/products', (req, res) => {
    res.send('Creando productos')
})

// Igual para el método put
app.put('/products', (req, res) => {
    res.send('Actualizando un producto')
})

// Igual para el método delete
app.delete('/products', (req, res) => {
    res.send('Eliminando un producto')
})

// Igual para el método patch
app.patch('/products', (req, res) => {
    res.send('Actualizando un dato de un producto')
})

// Al entrar en la ruta /miarchivo devuelvo una imagen con un logo
app.get('/miarchivo', (req, res) => {
    res.sendFile('./assets/logo.png', {
        root: __dirname
    })
})

// Al entrar en la ruta usuario devuelvo un objeto JSON con un nombre y un apellido
app.get('/usuario', (req, res) => {
    res.json({
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 30,
        comidasPreferidas: ['Pizza', 'Hamburguesa', 'Ensalada']
    })
})

// Al entrar en la ruta /isAlive devuelve el codigo de estado 204 indicando que esta todo bien y que no devuelve contenido
// El navegador lo transformará en un estado 304 indicando que no ha cambiado el contenido
app.get('/isAlive', (req, res) => {
    res.sendStatus(204)
})

// FIN DE LAS RUTAS

/*
    INICIO DE LAS PRUEBAS REQUEST BODY. SIMULACION DE UNA PETICIONES POST
    Para probarlo hay que seguir los pasos descritos en el archivo express.txt
    Debo simular una peticion desde el front usando la extension thunder client: método post, endponint localhost:3000/user. En el body debo enviar un texto
*/

// Esté código indica que recibiré texto, mostraŕe en consola el dato enviado y devuelvo un mensaje de usuario creado
app.use(express.text)
app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('Usuario creado')
})

// Llegado esta momento ha recorrido todas las rutas y no ha encontrado ninguna, por lo que devuelvo un mensaje de error
app.use((req, res) => {
    res.send('Pagina no encontrada')
    //res.status(404).send('Pagina no encontrada')
})

// Indico el puerto donde escucha la aplicacción y lo muestro en consola
app.listen(3000)
console.log('Servidor escuchando en el puerto 3000')