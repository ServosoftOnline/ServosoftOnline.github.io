/*

METODOS Y PROPIEDADES PARA ARRAYS. PARTE 1 / 2:

- Son los metodos son funciones ya declaradas por javascript que podemos aplicar para tratar con arrays
- Javascript los considera objetos con métodos (funciones) y propiedades (vbles).
- Las propiedades no llevan corchetes y los métodos sí.
    - lenght. Cuenta la cantidad de elementos
    - toString(). Transforma un array en cadena de texto separada por comas que puede mostrar el navegador
    - join(). Igual que toString. Puedo elegir la cadena de caracteres que los separa en lugar de comas
    - sort(). Ordena definitivamente de forma ascendente un array de strings o números por orden alfabético o numerico
    - reverse(). Igual que sort() pero descendente
    - concat(). Une dos arreglos en uno solo
    - push(). Añade un elemento al final del array
    - unshift(). Añade un elemento al principio de un array
    - pop(). Elimina el último elemento de un array
    - shift(). Elimina el primer elemento de un array
    - splice(). Agrega elementos en un array en una posicion indicada
    - slice(). Copia una parte de un array en otro. Manteniendo el array origen intacto
*/

// Arrays para los ejemplos
const colores =  ['Verde', 'Amarillo', 'Azul'];
let numeros = [5, 8, 2, 1];
let amigos = ['Pedro', 'David', 'Jesús'];
const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melón'];


//Funciones
function muestraColores(){
    console.log(`El array colores contiene actualmente: ${colores}`);
}

function muestraNumeros(){
    console.log(`El array numeros contiene actualmente: ${numeros}`);
}

function muestraAmigos(){
    console.log(`El array amigos contiene actualmente: ${amigos}`);
}

function muestraFrutas(){
    console.log(`El array frutas contiene actualmente: ${frutas}`);
}

// Muestro el array con los colores iniciales
muestraColores();

//length. Cuenta elementos
console.log(`Colores contiene ${colores.length} elementos`);

// toString(). Uso DOM que será explicado más adelante. Accedo al documento de la pagina, al body 
// y sustituyo el codigo html del body con esta cadena de texto obtenida a partir de los elementos del array
document.body.innerHTML = colores.toString();

// join(). Ej: Mostrará en consola el contenido del array separados por guiones y espacios antes y despues.
console.log(`Colores separados por guiones mediante el metodo join(): ${colores.join(' - ')}`);

// sort(). Ordena de forma ascendente. 
console.log(`Colores ordenados de forma ascendente usando el metodo sort(): ${colores.sort()}`);

// Muestro el array con los numeros iniciales
muestraNumeros();
console.log(`Números ordenados de forma ascendente usando el metodo sort(): ${numeros.sort()}`);

// reverse(). Ordena de forma descendente
console.log(`Colores ordenados de forma descendete mediante el metodo reverse(): ${colores.reverse()}`);
 
// concat(). concatena arrays
console.log(`Concateno los colores y los números mediante el metodo concat():  ${colores.concat(numeros)}`);

// push(). Añade al final
colores.push('Violeta');
console.log('Añado el color violeta al final');
muestraColores();

// unshift(). Añade al principio
console.log('Añado el color magenta al principio');
colores.unshift('Magenta');
muestraColores();

// pop(). Elimino el último elemento del array y muestro los que quedan
console.log(`Despues de eliminar el  ${colores.pop()} quedan los colores ${colores}`); 

// shift(). Elimino el primer elemento del array y muestro los que quedan
console.log(`Despues de eliminar el ${colores.shift()} quedan los colores ${colores}`);

// splice(posicion a partir de la que inserto, numero de elementos que elimino, elementos que inserto ).
// Inserta elementos en un array en la posición que queramos. 
muestraAmigos();
amigos.splice(1, 2, 'Rafael', 'Roberto');
muestraAmigos();
amigos.splice(2, 0, 'Daniel');
muestraAmigos();

// slice(posicion a partir de la cual quiero copiar, Hasta antes de que elemento copiar)
muestraFrutas()
console.log(`Mis frutas preferidas son: ${frutas.slice(1, 6)}`);
console.log(`Las frutas diuréticas son: ${frutas.slice(2, 4)}`);
console.log('El array frutas original sigue intacto');
muestraFrutas();





