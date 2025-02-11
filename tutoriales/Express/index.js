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

// Funcion middleware que se ejecuta antes de llegar a las rutas. Muestra la ruta y el metodo utilizado
app.use((req, res, next) => {
    console.log('Middleware ejecutado')
    console.log(`Ruta accedida: ${req.url} con el método ${req.method}`)
    next()
})

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

// Accedo a esta ruta tanto desde el navegador como desde thunder client
app.all('/info', (req, res) => {
    res.send('Server info')
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

/*
    INICIO DE LAS PRUEBAS REQUEST BODY. SIMULACION DE PETICIONES POST DESDE EL CLIENTE PASANDOLE DATOS AL SERVIDOR
    Para probarlo hay que seguir los pasos descritos en el archivo express.txt y usarla extension thunder client:
    Desde la extension indico el método post, la url se corresponderia con el endpoint. En el body indico el tipo de datos que envio y en el recuadro de abajo introduzco los datos que quiero enviar
*/

// PRUEBA 1: Recibo un texto, lo muestro en consola y devuelvo un texto "Usuario creado"
app.use(express.text())
app.post('/user', (req, res) => {    
    console.log(req.body)
    res.send('Usuario creado')
})

// PRUEBA 2: Recibo un json con los datos personales de un cliente. 
app.use(express.json())
app.post('/userInfo', (req, res) => {    
    console.log(req.body)
    res.send('Añadido datos personales a la BBDD')
})

// PRUEBA 3: Recibo información desde un formulario. 
app.use(express.urlencoded({extended: false}))
app.post('/formulario', (req, res) => {    
    console.log(req.body)
    res.send('Recibido los datos desde el formulario')
})

/*
    INICIO DE LAS PRUEBAS REQUEST PARAMS.
    Usando rutas dinámicas envio parametros desde el cliente que recibe el servidor. Véase en express.txt
*/

/* 
    PRUEBA 1: Recibo un parametro que siempre es un string.
    Muestro en consola el objeto completo con el parámetro recibido.
    El valor que coincide con el parámetro lo maso a mayusculas
    Muestro un mensaje en el navegador con el parámetro recibido y el tipo de dato que es
    Para probarlo hay que introducir en el navegador la url http://localhost:3000/user/elIdQueQuieraEnviar
*/

app.get('/user/:id', (req, res) => {
    console.log(req.params) 
    console.log(`Lo paso a mayusculas: ${req.params.id.toUpperCase()}`)     
    res.send(`Recibido el parametro: ${req.params.id} de tipo: ${typeof req.params.id}` )
})

/*
    PRUEBA 2: Recibo dos parametros y devuelvo su suma. Pero extrallendo los parametros de req.params
    La url seria por ejemplo http://localhost:3000/suma/1/4
*/
app.get('/suma/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params
    res.send(`El resultado de su suma es: ${parseInt(num1) + parseInt(num2)}`)
})

/*
    PRUEBA 3: Devuelve una imagen solo si el usuario es baranda
    La url http://localhost:3000/imagen/baranda/photo devuelve una imagen.
    La url http://localhost:3000/imagen/baranda/photo2 devuelve pagina no encontrada. se aplicaria el use
    La url http://localhost:3000/imagen/baranda2/photo devolvería Usuario incorrecto
    
*/
app.get('/imagen/:usuario/photo', (req, res) => {
    const {usuario} = req.params
    if(usuario === 'baranda'){
        res.sendFile('./assets/logo.png', {
            root: __dirname
        })
    } else {
        res.send('Usuario incorrecto')
    }

}) 

/*
    PRUEBA 4: Enviamos el nombre y la edad de un usuario y devolvemos un mensaje con el nombre y la edad
    El orden con el que extraigo los parámetros no importa. Extraigo primero la edad y despues el nombre
*/
app.get('/usuario/:nombre/edad/:edad', (req, res) => {
    const {edad, nombre} = req.params
    res.send(`Bienvenido ${nombre}, tienes ${edad} años`)
})

/*
    INICIO DE LAS PRUEBAS QUERY. Véase mas detalles en express.txt
*/

/* 
    PRUEBA1: Enviar la edad y la fecha de cumpleaños mediante query
    - La url seria: http://localhost:3000/vble/?edad=50&cumpleanos=25 de abril de 1975.
    - Los espacios serán remplazados por %
    - Muestra por consola el objeto que contiene ambas variables y mostrarlas en el navegador
*/
app.get('/vble/', (req, res) => {    
    console.log(req.query)
    res.send(`Mi edad es: ${req.query.edad} años, nací el ${req.query.cumpleanos}`)    
})

/*
    PRUEBA 2: Devuelve los libros de javascript solo si se le indica mediante una query
    - Url: http://localhost:3000/search/?q=Libros%20de%20javascript devolvería la paginas de libros de javascript
    - En caso contraria devolvería una página normal

*/
app.get('/search', (req, res) => {
    if(req.query.q === 'Libros de javascript') res.send('Lista de libros de javascript')        
    else res.send('Pagina normal')    
})

/*
    PRUEBA 4: Enviar desde el cliente dos datos en una sola variable
    - La url: http://localhost:3000/combinado?user=jesus&user=oscar sería recibida por el servidor como un objeto
    - Su propiedad seria user y su valor seria un array formado por dos strings jesus y oscar

*/

app.get('/combinado/', (req, res) => {
    console.log(req.query)
})

// Llegado esta momento ha recorrido todas las rutas y no ha encontrado ninguna, por lo que devuelvo un mensaje de error
app.use((req, res) => {
    res.send('Pagina no encontrada')
    //res.status(404).send('Pagina no encontrada')
})

// FIN DE LAS RUTAS

// Indico el puerto donde escucha la aplicacción y lo muestro en consola
app.listen(3000)
console.log('Servidor escuchando en el puerto 3000')