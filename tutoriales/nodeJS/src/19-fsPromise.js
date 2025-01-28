/*
    FS/PROMISE:

    - Evita tener que usar el método promisify del módulo util
    - Es la forma más avanzada y actual para usar promesas
    - Usando async/await y el try/catch podemos usar los métodos asincronos convertidos directamente en promesas

    - Obtengo el mismo resultado que en los scripts pero de formá más optima y actual:
        - 16-promise.js
        - 17-asyncAwait.js
        - 18-promisyfy.js   
        - Estos ejemplos muestra las diferentes evoluciones que ha sufrido como usar promesas en nodejs

*/

// Extraigo el método readFile de la subcarpeta promises del módulo fs para leer archivos de forma asincrona
const {readFile} = require('fs/promises')

// No necesito el método el método promisify del módulo util
// const {promisify} = require('util')

// No necesito almacenar la funcion convertida en promesa en la cte readFilePromise
// const readFilePromise = promisify(readFile)

// La función read puede usar directamente la funcion readFile que ya devuelve promesas directamente
const read = async () => {

    try {        

        console.log(await readFile('./../data/first.txt', 'utf-8'))
        console.log(await readFile('./../data/second.txt', 'utf-8'))
        console.log(await readFile('./../data/thirdSync.txt', 'utf-8'))
        console.log(await readFile('./../data/fourthSync.txt', 'utf-8'))        

    } catch (error) {
        console.log(error)
    }
    
}

// LLamo a la función read que lee todos los archivos
read()