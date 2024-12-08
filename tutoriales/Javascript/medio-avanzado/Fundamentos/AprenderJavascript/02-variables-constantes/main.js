/* 
    Variables. Espacio en memoria donde almacenar información
        tipos:
            - var. Es una variable global. NO RECOMENDADO SU USO.
            - let. Cuyo alcance es de bloque. Se podrá modificar su contenido
            - const. Con alcance de bloque tambien y no se podrá modificar su contenido
*/


// Variables
var nombre = 'Oscar';
let apellido = "Fernández";
const nacionalidad = 'Española';
let edad = 48;

// Muestro en consola el contenido inicial de dichas variables
console.log(`Yo soy ${nombre} ${apellido}, tengo nacionalidad ${nacionalidad} y ${edad} años.`);

// Modifico el valor de las variables. La constante nacionalidad no podría cambiarla. Me daría error.
nombre = "Silvia";
apellido = "Cruz";
edad = 47;

// Muestro en consola el contenido modificado de las variables
console.log(`Mi esposa ${nombre} ${apellido} tiene ${edad} años y tambien es ${nacionalidad}`);