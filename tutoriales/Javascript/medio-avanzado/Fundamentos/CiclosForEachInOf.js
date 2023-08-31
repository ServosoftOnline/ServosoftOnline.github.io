/*

    CICLOS FOREACH, FORIN Y FOROF

    - Ciclo forEach()
        - Permite recorrer los elementos de un array
        - Parámetros opcionales el elemento del array y su posicion que empieza por cero
        
    - Ciclo for in
        - Permite recorrer las propiedades y valores de un objeto.
        - No se suele usar para mostrar en pantalla. Para eso ya dispongo de metodos para recorrer objetos.
        - Si se suele usar para sobrescribir los valores.
    
    - Ciclo for of
        - Permite recorrer los valores de un objeto iterable
        - Ejemplos de objetos iterables: Arrays, strings, mapas, listas de nodos, colecciones .... 
        - Como alternativa puedo pasar el objeto itetable a array mediante el operador spread y usar forEach()
    

*/

// forEach() . Recorre todo el array mostrando la posición que ocupa y su nombre
const miembrosAbadia = ['Malaquias', 'Jorge', 'Severino', 'Berengario', 'Adelmo'];
miembrosAbadia.forEach((miembro, posicion) => {
    console.log(`El miembro de la abadia número ${posicion+1} es ${miembro}`);
});

// Ciclo for in. Ejemplo 1: Recorre todo el objeto y muestra todas sus propiedades y valores
const datosPersonales = {
    nombre: 'Malaquias',
    edad: 68,
    funcion: ['Bibliotecario', 'Orador', 'Formador']
};
for(propiedad in datosPersonales) console.log(`Su ${propiedad} es ${datosPersonales[propiedad]}`);

// for in. Ejemplo 2: Borra todos sus contenidos. Los sobrescriremos con espacios en blanco
for (propiedad in datosPersonales) {
    datosPersonales[propiedad] = '';
}
console.log('Borro su contenido');
console.log(datosPersonales);

// Ciclo for of. Ejemplo: Mostrar el contenido de las etiquetas head de mi pagina web
// Accedo a todas las etiquetas hijas de head dentro de mi pagina. Lo almaceno en una coleccion html
const etiquetas = document.head.children;
// Recorro el contenido de la coleccion html mediante el ciclo for of
console.log('Muestro las etiquetas y su contenido dentro de head mediante ciclo for of ');
for(contenido of etiquetas){
    console.log(contenido);
}

// Para recorrer la coleccion html mediante forEach() puedo pasarlo a array mediante operador spread
console.log('Muestro las etiquetas y su contenido dentro de head mediante ciclo forEach');
[...etiquetas].forEach((elemento) => console.log(elemento));
