/*

ES MODULE:

    - Forma anterior de importar módulos:

        - Viene definida en commonJs        
        - Declaramos las funciones en un archivo y mediante module.exports las exportamos
        - Las importamos donde deseamos mediante require('ruta_del_modulo')
        - Ver ejemplos en modules/math.js y src/6-usarModuloMath.js
        - Aún se puede usar pero no es recomendable

    - Forma más actual:

        - Proviene de un conjunto de reglas de javascript llamadas ECMAStript
        - Node va tratando de adaptapse a esas reglas de forma progresiva
        - Estás reglas tambien se aplican en react y ya las uso allí
        - Es necesario añadir "type": "module" en el archivo package.json para trabajar con módulos
        - Seguimos declarando las funciones en un archivo pero no usarmos module.exports
        - Esto me permitirá usar las instrucciones import y export en lugar de node.modules
        - Podemos exportar cada funcion por separado anteponiendo exports en la declaración de la funcion
        - O podemos exportalas todas mediante un export default al final
        - Si las exportamos por separado las importamos extraidas mediante llaves
        - Si las exportamos todas por defectos las importamos y las almaceno en un nombre que yo quiera          

    - En este script usaré la forma más actual de importar funciones
        - Las funciones las tengo declaradas en modules/mathECMAScript.js y desde allí las exporto
        - Las importo en este script
            - Las funciones que exporte por defecto las almaceno en el nombre math y las uso
            - La funcion divide la exporté de forma individual, por lo que la importo con llaves y la uso 


*/

// Importo todas las funciones que estan exportadas por defecto desde el archivo mathECMAScript.js
// E importo de forma individual a la funcion divide. Explicando así las dos formas de importar en esmodule
import math, {divide} from './../modules/mathECMAScript.js'

// Muestro operaciones básicas de matemáticas por consola usando math y divide
const operando1 = 8
const operando2 = 4
console.log(`El resultado de sumar ${operando1} y ${operando2} es: ${math.add(operando1, operando2)}`)
console.log(`El resultado de restar ${operando1} menos ${operando2} es: ${math.subtract(operando1, operando2)}`)
console.log(`El resultado de multiplicar ${operando1} por ${operando2} es: ${math.multiply(operando1, operando2)}`)
console.log(`El resultado de dividir ${operando1} entre ${operando2} es: ${divide(operando1, operando2)}`)