/*
    MODULO FS (sync):

        - Otro módulo de commonJsModules
        - Permite trabajar con archivos de forma sincrona o asincrona

            - forma sincrona:

                - bloquea el hilo principal de ejecución
                - Se ejecuta la tarea, se espera a que termine y se pasa a la siguiente
                - En los primeros lenguajes de programación solo existía esta forma
                - No es recomendable usarla en aplicaciones de alto rendimiento

                - Métodos sincronos:

                    - readFileSync. Lee un archivo de forma sincrona:

                        - Indico la ruta del archivo
                        - Indico la codificacion de caracteres
                        - O no se le indico la codificacion y el buffer devuelto lo paso a string

                    - writeFileSync. Escribe un archivo de forma sincrona:

                        - Indico la ruta del directorio donde se guardará el archivo creado y su contenido
                        - El contenido puedo introducirlo a mano o mediante una constante o vble
                        - Si ya existiera un archivo con ese nombre lo sobrescribiría
                        - Si quiero añadir contenido a un archivo ya existente, puedo hacerlo con el flag 'a' (append)

            - forma asincrona:

                - no bloquea el hilo principal de ejecución
                - Se ejecuta la tarea y se pasa a la siguiente sin esperar a que termine
                - Optimiza el rendimiento de la aplicación
                - Los métodos son los mismos que los anteriores pero sin la palabra Sync al final
                - Es necesario añadirle una funcion callback como último argumento
                    - Tiene dos parametros: error y data
                        - El error si lo hubiera
                        - En el caso que no los hubiera, los datos obtenidos

                - Metodos asincronos:

                    readFile. Lee un archivo de forma asincrona:

                        - Le paso una ruta

                        - Le paso una funcion callback con dos parametros: error y data:
                            - error almacenára el error. Si no existiera guardaría null
                                - Si hubiera error se interrumpe el script y mostraría el error en consola
                            - data almacenará los datos obtenidos del archivo

        - Almacenar una funcion dentro de otra y a su vez dentro de otra se llama callback hell.

            - Es complicado de leer y mantener.
            - Evitamos esto com promesas y async await

*/

// Importo el módulo CommonJsModules y lo almaceno en una constante del mismo nombre que el modulo
const fs = require('fs')

// METODOS SINCRONOS:
console.log('MUESTRO RESULTADOS DE LOS MÉTODOS SINCRONOS:')

// Leo los archivos y muestro el contenido en consola
const first = fs.readFileSync('./../data/first.txt', 'utf8')
const second = fs.readFileSync('./../data/second.txt')
console.log(first)
console.log(second.toString())

// Creo un tercer archivo y escribo en él
fs.writeFileSync('./../data/thirdSync.txt', 'Este es el nuevo contenido del tercer archivo. Creado de forma sincrona')

// Creo un cuarto archivo añadiendo el contenido mediante una constante
const title = 'Este es el nuevo contenido del cuarto archivo. Creado de forma sincrona'
fs.writeFileSync('./../data/fourthSync.txt', title)

// Añado contenido al cuarto archivo
fs.writeFileSync('./../data/fourthSync.txt', ' .Este es el contenido añadido al cuarto archivo de forma sincrona', {flag: 'a'})

// METODOS ASINCRONOS:
console.log('MUESTRO RESULTADOS DE LOS MÉTODOS ASINCRONOS:')
fs.readFile('./../data/first.txt', 'utf8', (error, data) => {
    if(error) console.log(error)
    console.log(data)
    fs.writeFileSync('./../data/first.txt', '. Texto añadido al primer archivo de forma asincrona', {flag: 'a'})
})




