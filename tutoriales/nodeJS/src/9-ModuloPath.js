/*
    MODULO PATH:

        - Otro módulo de commonJsModules
        - Nos permite trabajar con carpetas y archivos y poder conocer sus rutas

        - Nodejs es un entorno multiplataforma. Puede usarse en linux, windows, mac, etc

            - Las rutas en cada uno de los sistemas operativos se expresan de forma diferente
            - En windows se usan diferentes separadores de rutas
                - \ y en linux /. No sé cual se usa en mac
            - El modulo path se encarga de resolver esto mediante el metodo join.

        - Metodos que incluye:

            - sep. Devuelve el separador de rutas de nuestro sistema operativo. En linux devolveria / y en windows \

            - join(). Nos permite rutas de directorios de forma segura. Así nos aseguramos que las rutas se ejecuten de forma correcta en cualquier sistema operativo

            - basename. Devuelve el archivo base de una ruta. Devolvería el archivo omitiendo la ruta
            - dirname. Devuelve el directorio de una ruta. Devolvería la ruta omitiendo el archivo

            - parse. Devuelve un objeto que contiene la ruta con los diferentes pares propiedad valor:

                - root. Raiz de la ruta
                - dir. Directorio
                - base. Nombre del archivo
                - ext. Extensión del archivo
                - name. Nombre del archivo sin la extensión

            - resolve. Alternativa a join. Devuelve una ruta absoluta dependiendo del sistema operativo usado

*/

// Importo el módulo CommonJsModules y muestro en consola diferentes uso de sus metodos
const path = require('path')

// El separador que usa el sistema opetativo que estoy usando
console.log(`El separador de este sistema operativo es: ${path.sep}`)

// La ruta completa, el archivo y el directorio
const filePath = path.join('tutoriales', 'nodeJS', '/manual', '9-ModuloPath.js')
console.log(`Ruta completa incluyendo el archivo: ${filePath}`)
console.log(`Nombre del archivo: ${path.basename(filePath)}`)
console.log(`Ruta: ${path.dirname(filePath)}`)

// La misma información anterior pero dividida en un objeto
console.log('Objeto con la ruta: ');
console.log(path.parse(filePath))

// Ejemplos de resolver una ruta. Devolviendo rutas absolutas
console.log(path.resolve('dist'))
console.log(path.resolve(path.basename(filePath)))