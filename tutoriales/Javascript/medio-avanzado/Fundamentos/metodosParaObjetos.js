/*

METODOS PARA OBJETOS.
- Existen metodos propios que los crearé al definir el objeto y metodos propios de Javascript
- Los propios los llamaré asi: objeto.metodo(). Los de Javascripts los llamo asi: Object.metodo(objeto)
    
    - Metodos de Javascript para objetos:
        - keys(). Devuelve un array con los nombres de las propiedades de un objeto.
        - values(). Devuelve un array con los valores de un objeto.
        - entries(). Devuelve un array con los nombres de las propiedades y sus valores correspondientes.

*/

// Declararo el objeto usuario
let usuario = {
    nombre: 'Oscar',
    edad: 48,
    amigos: ['Pedro', 'David', 'Jesús'],
    saludo : () => {
        console.log('Hola a todos');
    } 
};

// Llamo a metodo propio
usuario.saludo();

// keys(). Ejemplo: Obtengo un array que contiene las propiedades del objeto usuario. Muestro su número
const propiedades = Object.keys(usuario);
console.log(`El objeto usuario tiene ${propiedades.length} propiedades`);
console.log (propiedades);

// values(). Ejemplo: Obtengo un array con los resultados del objeto usuario
const valores = Object.values(usuario);
console.log(valores);

// entries(). Ejemplo: Obtengo un array con el contenido completo del objeto usuario
const objetoCompleto = Object.entries(usuario);
console.log(objetoCompleto);