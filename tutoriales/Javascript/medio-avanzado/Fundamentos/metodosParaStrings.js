/*
    METODOS PARA STRINGS:
    - lenght. Contiene el numero de caracteres de un texto
    - indexOf(). Devuelve la primera posicion de un caracter. Si no encuentra devuelve -1
    - lastIndexOf(). Devuelve la última posición de un caracter. Si no encuentra devuelve -1
    - slice(). Devuelve un fragmento de una cadena de texto. indicamos origen y opcionalmente el destino
    - replace(). Reemplaza un fragmento de una cadena de texto por otro. Sin modificar el texto original
    - split(). Convierte una cadena de texto en un array. Debemos indicar el caracter separador
    - toUpperCase(). Devuelve una cadena de texto en mayusculas
    - toLowerCase(). Devuelve una cadena de texto en minúsculas
*/

// length. Ejemplo: cuento el número de caracteres que contiene la cadena
const texto = 'Cuantos carácteres contengo?';
console.log(`La constante de tipo string llamada texto contiene ${texto.length} carácteres`);

// indexOf(). Ejemplo: Indico la posicion de la primera "a"
console.log(`La primera \"a\" se encuentra en la posicion ${texto.indexOf('a')} `);

// lastIndexOf(). Ejemplo: Indico la posicón de la última "a"
console.log(`La ultima \"a\" se encuentra en la posicion ${texto.lastIndexOf('a')} `);

// slice(). Muestro el fragmento contengo. Tambien puedo indicar posiciones absolutas positivas y negativas
console.log('Muestro el fragmento \"contengo\" de tres formas posibles');
console.log(texto.slice(texto.lastIndexOf('c'), texto.lastIndexOf('?'))); // Mejor
console.log(texto.slice(19,27));
console.log(texto.slice(-9,-1));

// replace(). Ejemplo. Cambio el fragmento contengo por tengo. Muestro el texto original y no cambia
console.log(texto.replace('contengo', 'tengo'));
console.log(texto);

// split(). Ejemplo: Creo un array con las palabras de la cadena texto
console.log(`Las palabras del texto son: ${texto.split(' ')}`);

// toUpperCase(). Ejemplo: Muestro la cadena de texto en mayusculas
console.log(`La cadena de texto en mayúsculas: ${texto.toLocaleUpperCase()}`);

// toLowerCase(). Ejemplo. Muestro la cadena de texto en minúsculas
console.log(`La cadena de texto en minúsculas: ${texto.toLocaleLowerCase()}`);




