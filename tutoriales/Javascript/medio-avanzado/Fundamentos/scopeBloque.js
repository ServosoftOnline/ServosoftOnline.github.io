/*
    SCOPE O ALCANCE DE VBLES (globales, locales o de bloque)
    - Indica desde que partes del proyecto podemos llegar a las vbles.
    - Aquí veremos el ALCANCE DE BLOQUE
        - Son declaradas de tipo const o let.
        - Si la declaramos de tipo var, aunque este dentro del bloque sera global. No se recomienda
        - Se declaran dentro de un bloque y solo son alcanzables desde dicho bloque.
        - No solo aplica a funciones. Aplica en condicionales, ciclos, switch, ...
        - Un bloque es todo el codigo que se escribe entre llaves{}
        - Si existe funciones, condicionales, ciclos, switch , ... que son anidados tambien son alcanzables
*/

// Ejemplo sin mucha lógica pero sirve para explicar el alcance de vbles dentro y fuera de una sentencia if
// Vease tambien los bloques de codigos anidados.
// La vble accesoPermitido global fuera del bloque contiene false y dentro del bloque contiene true

let edad = 19;
let accesoPermitido = false;
if(edad >= 18){
    let accesoPermitido = true;
    console.log(`Acceso permitido desde la sentencia if: ${accesoPermitido}`); //Muestra true
    if(true){
        console.log(`Acceso permitido dentro de sentencia anidada if: ${accesoPermitido}`); //Muestra true
    }
    let funcion = () => {
        console.log(`Acceso permitido dentro de función anidada: ${accesoPermitido} `); //Muestra true
    }
    funcion();
}
console.log(`Acceso permitido desde fuera de la sentencia if: ${accesoPermitido}`); //Muestra false

// Ejemplo de la importancia de usar let o const para declarar vbles que tengan alcance de bloque
// Si la declaramos como var la haremos global aunque se haga dentro del bloque y será accesible desde fuera

if(true){
    var vbleGlobal = true;
    let vbleLocaldeBloque = true;
}
console.log(`Contenido de la vble declarada como var dentro de un bloque y llamada desde fuera: ${vbleGlobal}`);
console.log(vbleLocaldeBloque); //Muestra error de vble no accesible

