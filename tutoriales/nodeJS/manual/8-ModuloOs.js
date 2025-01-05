/*
    Modulo OS:

        - Uno de los commonJS que viene por defecto en NodeJS
        - Nos permite acceder a información del sistema operativo
        - Lo importo mediante require y solo poniendo 'os'. No hace falta poner la ruta

        - Algunos de sus métodos mas usuales son:
            - userInfo: Devuelve un objeto con información del usuario
            - uptime: Devuelve el tiempo que lleva el sistema encendido expresados en segundos
            - platform: Devuelve el sistema operativo en el que se ejecuta NodeJS
            - totalmem: Devuelve la memoria total del sistema en bytes
            - freemem: Devuelve la memoria libre del sistema en bytes
            - release: Devuelve la versión del sistema operativo
        
*/

// Importo el modulo OS
const os = require('os')

// Muestro en consola los métodos descritos anteriormente
console.log(os.userInfo())
console.log(os.uptime())
console.log(os.platform())
console.log(os.totalmem())
console.log(os.freemem())

// Muestro resultados por consola en una tabla
console.table({
    os: os.platform(),
    version: os.release()
})

