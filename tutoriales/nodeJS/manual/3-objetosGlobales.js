/*

    OBJETOS GLOBALES:

    - Objetos que ya se encuentran disponibles al instalar node
    - Son accesibles de forma global desde toda la aplicacion
     
        - __dirname
            - Contiene el directorio donde se encuentra el archivo            
            
        - __filename
            - Contiene la ruta completa incluyendo el directorio

        - module
            - Objeto con múltiples propiedades:
                - Carpeta donde está abierto este archivo
                - Informacion sobre más rutas
                - Permite separar la aplicacion en diferentes archivos o modulos
            - Contiene un objeto exports que permite exportar datos a otros archivos    
            - Puede verse su contenido en consola escribiendo console.log(module)

        - require
            - Funcion que nos permite importar esos modulos

        - process
            - Muestra informacion del sistema operativo



*/

console.log(`El directorio donde se encuentra este archivo es: ${__dirname}`);
console.log(`Su ruta completa es: ${__filename}`);

console.log('El objeto module contiene: ');
console.log(module);

console.log('El objeto require contiene: ');
console.log(require);

console.log('El objeto process contiene: ');
console.log(process);
