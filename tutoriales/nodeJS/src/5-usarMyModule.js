/*
    - Describo como importar un modulo local realizado por mi y mostrar la información que el modulo contiene
        - El módulo se encuentra en la carpeta local llamada modules
        - Puedo importar todo el objeto entero o extraer los datos que necesito
        - Para ello uso el objeto global require y le indico la ruta del archivo
        
*/

// Importo el modulo myModule
const misDatos = require ('../modules/myModule.js');

// Extraigo solo el usuario al utilizar el objeto global require
const {usuario} = require ('../modules/myModule.js');

// Muestro en consola los datos importados
console.log(misDatos);
console.log(usuario);
