/*
    OPERADORES LOGICOS:
        && AND  - Deben cumplirse las dos conciones
        || OR   - Deben cumplirse una condición o la otra 
        ! Not   - Lo que es true lo pasa a false y viceversa

    Venta de entradas usando operadores lógicos:
        Ejemplo 1: Operador &&  - AND. Podrán entrar mayores de edad sin tener en cuenta el permiso de sus padres
        Ejemplo 2: Operador ||  - OR. Podrán entrar menores de edad si tiene permiso de sus padres
        Ejemplo 3: Operador !   - NOT. No podrá entrar si no tiene entrada.
        NOTA: Para probar todos los ejemplos es necesario tener comentados los que no van a usarse. Cuando usemos condicionales
        podría hacerlo todo junto sin tener que comentar nada
*/

// Definiciones de vbles
let nombre = 'Oscar';
let edad = 17;
let tieneEntrada = true;
let permisoPaterno = true;
let permitirAcceso;


// Ejemplo 1. Operador lógico &&. Tendrá acceso si es mayor de edad y tiene entrada
// permitirAcceso = edad>= 18 && tieneEntrada;


// Ejemplo 2: Operador logico ||. Tendrá acceso si es mayor y tiene entrada o si tiene entrada y permiso parterno
permitirAcceso = (edad>=18 && tieneEntrada) || (tieneEntrada && permisoPaterno);
 
// Ejemplo 3: Operaodr logico !. Si no tiene entrada no tendrá acceso
// permitirAcceso = !tieneEntrada;

//Mostrar en consola si tiene o no acceso al recinto dependiendo del resultado de los ejemplos anteriores
console.log('Tiene acceso al recinto: ' + permitirAcceso);

