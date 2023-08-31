/*
    ENVIAR PARAMETROS A LAS FUNCIONES:
    -   El argumento lo enviamos al llamar a la función y el parámetro es como lo recibimos en la función
        David sería un argumento y amigo sería el parámetro 
    -   Ejemplo 1. Saludo a un amigo. Declaro la función en modo flecha y uso templateStrings
    -   Ejemplo 2: Usando dos parámetros. Pasaré dos números y devolveré su suma.
    -   Ejemplo 3: Usando tres parámetros. Calculadora basica. Pasaré la operacion y dos números

*/

// Ejemplo 1: Saludo a un amigo enviando su nombre por parámetro. Se asigna la cadena amigo por defecto
const saludoAmigo = (amigo = 'colega') => console.log(`Hola ${amigo}`);
saludoAmigo('David');       // Muestra Hola David
saludoAmigo('Federico');    // Muestra Hola Federico
saludoAmigo();              // Muestra Hola colega. No envio parámetro. Se usará el valor por defecto

//Ejemplo 2: Sumar dos números
const sumar = (numero1, numero2) => {
    console.log('Su suma es: ' + (numero1+numero2));
}
sumar(8,15);
sumar(30,29);

// Ejemplo 3: Calculadora básica
const calculadoraBasica = (operacion, numero1, numero2) => {
    switch (operacion){
        case 'suma':
            console.log('Su suma es: ' + (numero1 + numero2));
            break;
        case 'resta':
            console.log('Su resta es: ' + (numero1 - numero2));
            break;
        case 'multiplica':
            console.log('Su multiplicacion es: ' + (numero1 * numero2));
            break;
        case 'divide':
            console.log('Su división es: ' + (numero1 / numero2));
            break;
        default:
            console.log('Esta calculadora solo realiza sumas, restas, multiplicaciones y divisiones');
    }
}

calculadoraBasica ('suma', 4, 5);
calculadoraBasica ('resta', 10, 15);
calculadoraBasica ('multiplica', 4, 5);
calculadoraBasica ('divide', 100, 10);
calculadoraBasica ('raiz_cuadrada', 80, 8);









