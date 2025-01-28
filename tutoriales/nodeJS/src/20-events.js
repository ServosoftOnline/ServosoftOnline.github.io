/*
    EVENTS

    - Permite manejar eventos en nodejs. Ejemplo escucha a un boton

    - Se usa el módulo events:

        - Es común importarlo y a la constante donde se almacene llamarlo EventEmitter
        - Permite crear instancias para poder escuchar eventos
        - Almacenar la nueva instancia en la cte customEmitter y poder acceder a sus diferentes métodos

            - Entre los diferentes métodos se encuentran:

                - on.
                    - Equivale al addEventListener de Javascript pero en el backend
                    - Tiene dos parámetros:
                        - Nombre del evento
                        - La funcion que debe ejecutar cuando se genere el evento

                    - Debo definirlo antes de generarlo. Debo ponerlo en primer lugar

                - emit.
                    - Genera un evento. Puedo generar tantos eventos como necesite
                    - tiene dos parámetros:
                        - El evento que quiero generar
                        - El o los datos que quiero pasar a ese evento
        
        - El script 11-ModuloHTTP.js tiene la misma filosofía de este script. 
            - Creo un servidor que se encuentra escuchado el introducir paginas webs en el navegador
            - Despendiendo de la url recibida responde con una cabecera diferente

        - Event driven programing. Es una programación basada en eventos


*/

// Importo el módulo events y lo almaceno en la cte EventEmitter
const EventEmitter = require('events')

// Creo una instancia de EventEmitter y lo almaceno en la cte customEmitter
const customEmitter = new EventEmitter()

// Defino el evento. Muestro en consola el primer dato y el segundo solo si existe
customEmitter.on('response', (data, data2) => {
    console.log(data)
    if (data2) console.log(data2)
})

// Genero el evento varias veces enviando un dato. Puedo enviarle diferentes tipos de datos 
customEmitter.emit('response', 'Hola Mundo')
customEmitter.emit('response', 20)
customEmitter.emit('response', [1,2,3])
customEmitter.emit('response', {nombre: 'Oscar'})

// Genero el evento enviando dos datos
customEmitter.emit('response', 'Bienvenida', {nombre: 'Silvia'})