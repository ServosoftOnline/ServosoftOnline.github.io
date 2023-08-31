/*
    RETURN
    1.- Debemos tratar que una función haga solo una tarea. 
    2.- Indica que queremos salir de la funcion, devolviendo opcionalmente un valor, objeto, array...
    3.- En ejemplo 1 la función solo calcula el resultado. No lo calcula y lo muestra en consola
    4.- En el ejemplo 2 hacemos lo mismo que el uno, pero no uso vble y reduzco el código.
*/

// Ejemplo 1: Calculadora básica usando return.
const calculadoraBasica = (operacion, numero1, numero2) => {
    let resultado;
    switch (operacion){
        case 'suma':
            resultado = numero1 + numero2;
            break;
        case 'resta':
            resultado = numero1 - numero2;
            break;
        case 'multiplica':
            resultado = numero1 * numero2;
            break;
        case 'divide':
            resultado = numero1 / numero2;
            break;
        default:
            console.log('Esta calculadora solo realiza sumas, restas, multiplicaciones y divisiones');
    }
    return resultado;
}
console.log(`El resultado de la suma usando vbles en la funcion es ${calculadoraBasica('suma', 5, 6)}`);

// Ejemplo2: Igual que el anterior, eliminando la vble de la funcion y los break que no son necesarios
const calculadoraBasica2 = (operacion, numero1, numero2) => {
    switch (operacion){
        case 'suma':        return numero1 + numero2;
        case 'resta':       return numero1 - numero2;
        case 'multiplica':  return numero1 * numero2;
        case 'divide':      return numero1 / numero2;
        default:            return 'Esta calculadora solo realiza sumas, restas, multiplicaciones y divisiones';
    }
}
console.log(`El resultado de la suma sin usar vbles en la función es ${calculadoraBasica2('suma', 15, 6)}`);

