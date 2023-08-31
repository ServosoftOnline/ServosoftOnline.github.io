/*
    TEMPLATE STRINGS:
        1.- Permite trabajar con codigo Javascript en cadenas de texto
        2.- Reduce la cantidad de código empleado en mostrar cadenas de caracteres.
        3.- Debemos usar backtrips en lugar de comillas simples o dobles. ``
        4.- Usar ${} permite introducir dentro codigo de Javascript
        
*/

// vbles
const nombre = 'Oscar';
const edad = 48;
const pais = 'España';

// Como se mostraba en ejemplos anteriores y como se mejora con templatestrings
console.log('Sin templatestrings: Soy ' + nombre + ' tengo ' + edad + ' años y soy de ' + pais);
console.log(`Con templatestrings: Soy ${nombre} tengo ${edad} años y soy de ${pais}`);
