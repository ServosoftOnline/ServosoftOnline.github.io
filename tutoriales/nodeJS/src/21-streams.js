/*
    STREAMS:

    - Trabajar con archivos grandes puede relentizar el uso de una aplicacion
    - Hace que el servidor pueda seguir trabajando mientras trabaja con archivos grandes
        - Ejemplo de comando para ver el tamaño de los archivos de una carpeta en linux
        - ls -l ./../data

    - Para evitarlo se usan diferentes métodos del módulo fs:

        - El método createReadStream permite leer archivos grandes en múltiples partes de forma automática

            - Le puedo añadir de forma opcional un objeto para determinar sus propiedades
                - Propiedad encoding y valor una codificación
                - Propiedad hightWaterMark y valor el tamaño de los chunks
                - Existen muchas más que no veré aqui

            - Me devolverá un objeto con diferentes manejadores de eventos que llamare stream:
                - Le añadiré el metodo on para escuchar estos diferentes eventos:

                    - data
                        - Se produce cuando se inidica la conexion
                        - Las porciones de datos que se van recibiendo se llaman chunk
                        - El peso de estas porciones por defecto es de 65 kb
                    
                    - end.
                        - Se produce cuando se cierra la conexion.
                        - En este caso cuando se finaliza el envio de datos

                    - error
                        - Se activa cuando se produce un error


    
    - En este script:
        - Crearé un archivo grande, que una vez creado dejaré comentado el código.
        - Usare los diferentes manejadores de eventos para gestionar ese archivo


*/



// Creo un archivo grande de texto mediante la funcion asincrona writeFile que devuelve una promesa
// Repetirá el string "Hola mundo " 1000000 veces creando un archivo grande
const {writeFile} = require('fs/promises')
const createBigFile = async () => {
    await writeFile('./../data/bigFile.txt', 'Hola mundo '.repeat(10000))
}
createBigFile()


/*

// Importo el método createReadStream que está basado en eventos. Se ejecutará pasado un evento
const {createReadStream} = require('fs')

// Creo el objeto de manejadores de eventos que llamaré stream. Le indico el archivo a leer y la codificacion para ver en strings y no en buffer
const stream = createReadStream('./../data/bigFile.txt', {
    encoding: 'utf-8'
})

// Cuando escuches(on) el evento (data) ve mostrando las porciones de datos (chunk) por consola
stream.on('data', (chunk) => {
    console.log(chunk)
})

// Cuando acabe de enviar el archivo mostrará en consola que ya terminó
stream.on('end', () => {
    console.log('ACABO EL ENVIO DEL ARCHIVO')
})

// Si se produjera un error durante la lectura mostraría el error producido
stream.on('error', (error) => {
    console.log(`Se ha producido el siguiente error: ${error}`)
})
*/