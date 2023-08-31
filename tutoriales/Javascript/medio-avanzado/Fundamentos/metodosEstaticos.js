/*
    METODOS Y PROPIEDADES ESTÁTICOS/AS
    - Son metodos que se definen dentro de una clase. Puedo acceder a ellos sin crear un nuevo objeto
    - Le añado la palabra static al principio para indicar que es estático
    - Lo llamo escribiendo el nombre de la clase.nombre del metodo.
    - Las propiedades tambien pueden ser estáticas
*/

class Usuario {
    constructor (nombre,correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    static registrados = 1000;
    static borrar(id) {
        console.log(`El usuario cuyo id es ${id} ha sido borrado`);
    }
}
// Llamo al metodo borrar y a la propiedad registrados sin crear un objeto
Usuario.borrar(3);
console.log(`Usuarios registrados en nuestra web: ${Usuario.registrados}`);