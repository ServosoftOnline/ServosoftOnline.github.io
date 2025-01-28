/*
    PROMISIFY:

    - En node salieron primero los callbacks
    - Despues salieron las promesas y el programador tenía que pasar los callbacks a promesas
    - Despues llegó el async / await que se usó junto con los try / catch
    - El método promisify del módulo util permite convertir callbacks en promesas de forma automatica
    - Este ejemplo usa asyn /awit, try

    - Este ejemplo optimiza aún mas el script 17-asyncAwait.js        
        - Genera el mismo resultado usando el async / await, try / catch y el metodo promisify
        - Evita crear la función getText con la promesa que tiene en su interior        

*/

// Extraigo el método readFile del módulo fs para leer archivos de forma asincrona
const {readFile} = require('fs')

// Extraigo el método promisify del módulo util que permite convertir callbacks en promesas
const {promisify} = require('util')

// Llamo al método promisify, le paso el callback que devuelve readfile. La cte readFilePromise contiene la funcion readFile convertida en una promesa
const readFilePromise = promisify(readFile)

/*
    Declaro la funcion read que leerá todos estos archivos usando en su interiorla funcion readFilePromise y le pongo el await delante indicando que la funcion es asincrona. El metodo de readFile requeria del archivo a leer y el tipo de codificación, de ahí el utf-8
*/
const read = async () => {

    try {        

        console.log(await readFilePromise('./../data/first.txt', 'utf-8'))
        console.log(await readFilePromise('./../data/second.txt', 'utf-8'))
        console.log(await readFilePromise('./../data/thirdSync.txt', 'utf-8'))
        console.log(await readFilePromise('./../data/fourthSync.txt', 'utf-8'))        

    } catch (error) {
        console.log(error)
    }
    
}

// LLamo a la función read que lee todos los archivos
read()