/*
    CLASES

        - Son plantillas que usamos para crear objetos
        - Permite encapsular codigo
        
        Estructura:
            - Las vbles que contiene se llaman propiedades y las funciones métodos
            - El nombre de la clase debe iniciar en mayúscula para diferenciarla de una vble
            - El contenido va entre llaves
            - Usa como separador el simbolo igual
            - Tiene un metodo llamado constructor para iniciarlo.
                - Le pasamos como parámetros los valores que quiero usar para crear el objeto
                - Para guardarlos usamos la palabra this. 
                    - this dentro de una clase hace referencia a la propia clase. 
                    - Creará la propiedad guardando el valor que paso por parámetro

        - Creación de un objeto de una clase:
            - Uso la palabra new, el nombre de la clase y adjunto los parámetros que espera el constructor
            - new devuelve un objeto
*/

// Ejemplo: Pagina web donde trabajamos con varios usuarios
// Defino la clase Usuario
class Usuario {

    // Propiedades
    tipo = 'usuario';
    
    // Metodo constructor
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        console.log('Nuevo usario registrado!');
    }

    // Métodos
    obtenerUsuario() {
        console.log('Obteniedo datos ...');
        return `${this.nombre} ${this.apellido}`;
    }
}

// Creo dos usuarios y los obtengo desde un metodo del objeto usuario
const usuario   = new Usuario ('Oscar', 'Fernández');
const usuario2  = new Usuario ('Jesús', 'villegas');
console.log(usuario.obtenerUsuario());
console.log(usuario2.obtenerUsuario());