/*
    PROMESAS:

        - Permite escribir código asincrono mas fácil que entender que los callbacks
        - Evita que el codigo escrito se valla a la derecha usando demasiadas tabulaciones

        - Para ello uso objeto especial proporcionado por Javascript que se llama promise

            - No es necesario importarlo.    
            - Declaro una función donde crearé la instancia de la promesa que contendrá dos parametros:
                - resolve. Que contendrá lo datos
                - reject. Que contendrá el error si se produjese
            - Cuando llame a la función usaré los metodos:
                - .then((result) => {})
                    - Se ejecutará cuando halla datos almacenados.
                    - Estarán almacenados en result
                    - Ejecutará la funcion de tipo flecha que halla en su interior

                - .catch((err) => {})
                    - Se ejecutará cuando halla error
                    - El error estará almacenado en err
                    - Ejecutará la funcion de tipo flecha que halla en su interior
        
        - Este ejemplo:
            - Leerá el contenido del archivo first.txt sin usar promesa
            - Leerá el contenido del archivo second.txt mediante una promesa

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

// Leo de forma asincrona el archivo first.txt sin usar una promesa
readFile('./../data/first.txt', 'utf8', (err, data) => {
    if (err) console.log(err)
    console.log(data)    
})

// Obtendrá mediante promesas el contenido de los archivos second.txt y thirdSync.txt
getText('./../data/second.txt')
    .then((result) => {
        console.log(result)
        getText('./../data/thirdSync.txt')
            .then((result) => {
                console.log(result)
                getText('./../data/fourthSync.txt')
                    .then((result) => {
                        console.log(result)
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            })
            .catch((error) => console.log(error))
    })
    .catch((error) => console.log(error))