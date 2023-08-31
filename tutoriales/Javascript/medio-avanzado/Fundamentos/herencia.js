/*
    HERENCIA DE CLASES:
    - Las clases son plantillas para crear objetos. Podemos crear nuevas clases que hereden de otras clases.
    - Permite crear una clase nueva tomando propiedades y métodos de otras clases de la que hereda
    - Usaré la palabra Clase_nueva extends Clase_heredada para indicar obtendré sus metodos y propiedades
    - Con la palabra super obtengo las propiedades y metodos, incluido el constructor, de la clase heredada
    - Creo un nuevo metodo constructor en la clase nueva y uso this para las nuevas propiedades

*/

// Ejemplo de una web donde existen usuarios normales y moderadores.
// Los moderadores heredarán los metodos y propiedades de los usuarios y ademas tendrán permisos
// El moderador tendrá el metodo para borrar post si le pasamos su id.
// Si tiene incluido entre sus permisos el de Borrar lo hará

class Usuario {
    constructor (usuario, contraseña){
        this.usuario = usuario;
        this.contraseña = contraseña;
        console.log(`Creado el usuario: ${usuario}`);
    }

    obtenerPost (){
        const post = ['post1', 'post2'];
        return post;        
    }
}

class Moderador extends Usuario {
    constructor(usuario, contraseña, permisos){
        super(usuario,contraseña);
        this.permisos = permisos;
        console.log(`${usuario} es moderador`);
    }

    borrarPost(id){
        if(this.permisos.includes('Borrar')) console.log(`El post cuyo id es ${id} ha sido borrado `);
        else console.log('No tiene permisos para borrar');
    }

}

// Creo un usuario y accedo al metodo del usuario para obtener los post existentes
const usuario = new Usuario('Oscar', 123456);
console.log(`${usuario.usuario} puede acceder a los post: ${usuario.obtenerPost()}`);

// Creo un moderador al cual le añado permisos y obtengo los post gracias al metodo heredado de usuario
const moderador = new Moderador('Jesus', 345678, ['Borrar', 'Modificar']);
console.log(`${moderador.usuario} accede a los mismos post mediante un metodo heredado: ${moderador.obtenerPost()}`);

// Muestro el contenido de usuario y moderador. 
// El moderador tiene permisos y el usuario no. Ambos tienen usuario y contraseña definidos en la clase original
console.log(usuario);
console.log(moderador);

// Solo el moderador puede acceder al metodo borrarPost
moderador.borrarPost(2);




