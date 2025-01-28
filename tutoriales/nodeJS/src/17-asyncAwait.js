/*
    async / await:

        - Sintaxis más simple y actual de trabajar con promesas
            - No sería necesario usar los métodos .then y .catch
            - Más fácil de entender. No recargan el código.

        - async indica que su contenido se ejecuta de forma asincrona
            - Se antepone la palabra async al nombre de la función

        - await indica que esa operación llevará un poco de tiempo
            - Permite poder ejecutar la sintaxis de operaciones sincronas solo poniendo delante await
                - Ej: const result = await getText('./../data/second.txt')
            - Ver un await antes de llamar a la función ya indica que la funcion es asincrona

        - Se usa junto con try / catch
            - En el interior del try se ejecuta el codigo y se se produce un error salta al catch
            - catch recoge el error y lo trata

        - Se pueden generar errores de forma manual para que quede recogido en el catch
            - Usaré trow new error('Mensaje de error)

*/

// Extraigo el método readFile del módulo fs para usarlo de forma asincrona
const {readFile} = require('fs')

// Declaro esta funcion que leerá el contenido de un archivo mediante una promesa
const getText = (pathfile) => {
    return new Promise((resolve, reject) => {
        readFile(pathfile, 'utf8', (err, data) => {
            if (err) reject(err)
            resolve(data)    
        })    
    }) 
}

// Declaro la funcion que leerá todos estos archivos. getText va devolviendo promesas
const read = async () => {

    try {        

        console.log(await getText('./../data/first.txt'))
        console.log(await getText('./../data/second.txt'))
        // throw new Error ('Se produce un error inexperado despues de leer el segundo archivo')
        console.log(await getText('./../data/thirdSync.txt'))
        console.log(await getText('./../data/fourthSync.txt'))

    } catch (error) {

        // Mostraría el error recogido en el thow si lo descomentara
        console.log(error)
    }
    
}

// LLamo a la función
read()