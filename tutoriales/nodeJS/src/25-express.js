/*
    EXPRESS:

    - Es uno de los Frameworks existentes de NodeJS más usados para la creación de servidores web

        - Facilita la creación de servidores web en lugar de como lo hice en 11-ModuloHTTP.js
            - Me ahorro usar los condiciones if para las rutas

        - Su web de documentación es: https://expressjs.com/   

        - Otros frameworks:

            - Koa, Hapi, etc                
            - NextJS es un framework de node que usa typescript
            - Socket.io es una biblioteca que se usa con Express para la comunicación en tiempo real basada en eventos

    - En este script hago lo mismo que en el archivo 11-ModuloHTTP.js pero usando express

    - Pasos a seguir para instalar una aplicación Express:
        - npm init -y -> Creo el package.json
        - Añado el "type:" "module" en el package.json
        - npm install express -> Instalo el módulo express
        - npm install nodemon -D -> Instalo nodemon como dependencia de desarrollo
        - Creo una carpeta src y dentro un archivo llamado index.js con el contenido de este archivo
        - Creo un script en package.json para ejecutar el servidor con nodemon
            - Añado en los scripts: "dev": "nodemon src/index.js"
            - Para ejecutar el servidor escribo en consola npm run dev

*/

// Importo el módulo express
import express from 'express'

// Creo una instancia de express
const app = express()

// Defino que respondo cuando accedan a la ruta ppal respondas con un h1 que diga Bienvenido!
app.get('/', (request, response) => {
    response.send('<h1>Bienvenido!</h1>')
})

// Defino que respondo cuando accedan a la ruta about respondas con un h1 que diga Acerca de ...
app.get('/about', (request, response) => {
    response.send('<h1>Acerca de ...</h1>')
})

// Le indico que escuche en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor express a la escucha en el puerto 3000')
})