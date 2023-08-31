/*
    SCOPE O ALCANCE DE VBLES (globales, locales o de bloque)
    - Indica desde que partes del proyecto podemos llegar a las vbles.
    - Aquí veremos el ALCANCE LOCAL
        - Son declaradas dentro de una función como const, let o var
        - Podemos acceder a ellas sólo desde la propia función
        - Podemos declarar con el mismo nombre vbles globales y locales.
            - Dentro de la función prevalecerá la vble local.
            - Fuera de la función prevalecerá la vble global.
        - Si la vble es global y no está definida localmente, estará accesible desde dentro de la funcion
*/

// Ejemplo para observar el alcance de la vble llamada numero:
// La vble es definida de forma global, la pasamos como argumento a la funcion cuentaLetras
// llamo a la funcionAnidada donde muestro el contenido
// 
var numero = 1;
var cuentaLetras = (cadena) => {
    var numero = cadena.length;
    console.log(`${cadena} tiene ${numero} letras`);
    var funcionAnidada = () => {
        console.log(`Contenido de la vble numero dentro de la función anidada: ${numero}`);
        //Muestra 5. vble global a nivel de la funcion cuentaLetras
    }
    funcionAnidada();
}
cuentaLetras('Oscar');  //Muestra Oscar tiene 5 letras. Vble local en la funcion cuentaLetras
console.log(`Contenido de la vble numero de forma global: ${numero}`);    //Muestra 1. vble global


