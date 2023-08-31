//Información mostrada en pantalla que describirá los diferentes contenidos mostrados en consola
document.write("<h1>Esta aplicacion de javascript mostrará los ejercicios realizados en este curso basico de javascript.</h1>");
document.write("Link del curso: https://www.youtube.com/watch?v=RqQ1d1qEWlE <br>");
document.write("Será necesario que tengas la consola abierta para ver lo que muestra. Para ello pulsa Control+Mays+I<br><br>");
document.write("<h2>Contenido del curso: </h2>1.- Tipos de datos <br>2.- Variables y constantes<br>3.- Operadores numericos, logicos, concatenacion y arrays <br>4.- Control de flujo: Sentencias if, sentencia switch, bucle while y bucle for <br>5.- Funciones");

//1.- TIPOS DE DATOS
console.log("TIPOS DE DATOS");
console.log("Esto es una cadena:", "Hola Mundo");
console.log("Esto es un número:", 14.3);
console.log("Esto es un booleano:", true);
console.log("Esto es un array, la consola mostrará las posiciones donde se encuentran cada item y el número de items totales:", [1,2,3]);
console.log("Esto es un objeto",{"Usuario":"Oscar","Puntuación":70.4});

//salto de linea en consola
console.log("\n");

//2.- VARIABLES Y CONSTANTES
//Ejemplos de vbles y constantes que se mostraran en consola.Las creamos usando var o let y va a determinar su alcance 
console.log("VBLES Y CONSTANTES");
const nameuser="Oscar";
var lastname="Fernández";
let age=48;
console.log("La constante nameuser contiene el valor",nameuser);
console.log("La variable lastname contiene el valor",lastname);
console.log("La variable age contiene el valor",age);
console.log("Existen reglas para los nombres de vbles o contantes");
console.log("No pueden empezar por numeros o por simbolos especiales, excepto $ o _");
console.log("Para nombrar vbles o contantes se suele usar lo que se llama CAMELCASE y consiste en lo siguiente: Cuando el nombre es compuesto solemos poner en mayusculas la primera letra de cada palabra. Ejemplo:nombreDePersona");
//salto de linea en consola
console.log("\n");

//3.- OPERADORES NUMÉRICOS, LÓGICOS Y CONTATENACIÓN
//Definimos vbles numericas
var numeroUno=40;
var numeroDos=76;
var suma=numeroUno+numeroDos;
var resta=numeroUno-numeroDos;
var multiplicacion=numeroUno*numeroDos;
var division=numeroUno/numeroDos;
var esMayor=numeroUno>numeroDos;
var esMenor=numeroUno<numeroDos;
var sonIguales=numeroUno==numeroDos;
var sonDiferentes=numeroUno!=numeroDos;
var esMenorOIgual=numeroUno<=numeroDos;
var esMayorOigual=numeroUno>=numeroDos;

//Mostramos resultados en consola.
console.log("OPERACIONES NUMERICAS");
console.log("Numero uno contiene:",numeroUno);
console.log("Numero dos contiene:", numeroDos);
console.log("Su suma es:",suma);
console.log("Su resta es:",resta);
console.log("Su producto es:",multiplicacion);
console.log("Su division es:",division);
//salto de linea en consola
console.log("\n");

console.log("OPERACIONES LOGICAS");
console.log("Número uno es mayor: ",esMayor);
console.log("Número uno es menor: ",esMenor);
console.log("Son iguales:",sonIguales);
console.log("Son diferentes:",sonDiferentes);
console.log("Numero uno es menor o igual a numero dos:", esMenorOIgual);
console.log("Numero uno es mayor o igual a numero dos:",esMayorOigual);
//salto de linea en consola
console.log("\n");

console.log("OPERACION CONCATENACION");
//Definimos vbles alfanumericas
var password="contraseñaCorrecta";
var input1="contraseñaIncorrecta";
var input2="contraseñaCorrecta";
var acceso1=input1==password;
var acceso2=input2==password;

//mostramos resultados en consola
console.log("El password es:", password);
console.log("La primera vez se introdujo:", input1);
console.log("Se pudo acceder la primera vez:",acceso1);
console.log("La segunda vez se introdujo:",input2);
console.log("Se pudo acceder la segunda vez:",acceso2);
//salto de linea en consola
console.log("\n");

console.log("OPERACIONES CON ARRAYs");
var familia = ['oscar','silvia','jesus','lucia'];
console.log("Los componentes de la familia son: ",familia[0],familia[1],familia[2],familia[3]);
console.log("Esta formada por",familia.length,"miembros");
//salto de linea en consola
console.log("\n");


//4.- CONTROL DE FLUJO
console.log("CONTROL DE FLUJO");

//4.1 Sentencia if-else
var input="contraseñaCorrecta";
//Si ambas coindicen mostrará acceso permitido, en caso contrario mostrará acceso incorrecto.
if(input==password){
    console.log("Resultado de la sentencia if-else: Acceso permitido");
} else {
    console.log("Resultado de la sentencia if-else: Acceso incorrecto");
}

//4.2 Sentencia else if
var puntuacion=31;
if(puntuacion>=50){
    console.log("Resultado de la sentencia if-else if-else: Eres un maquina");
    } else if(puntuacion>=30){
    console.log("Resultado de la sentencia if-else if-else: Eres bueno");
    } else {
    console.log("Resultado de la sentencia if-else if-else: Puedes hacerlo mejor");
}

//4.3 Sentencia switch
var tarjetaDeBanco = "Tarjeta de credito";
switch(tarjetaDeBanco){
    case 'Tarjeta de debito':
        console.log("Resultado sentencia switch: Dispones de una tarjeta de debito");
    break;
    case 'Tarjeta de credito':
        console.log("Resultado sentencia switch: Dispones de una tarjeta de credito");
    break;
    default:
        console.log("Resultado sentencia switch: No dispones de tarjeta de banco");
}

//4.4 Bucles
//Mostrara en consola 10 veces el mensaje Hola mundo. Es importante no generar un bucle infinito
var contador=10;
console.log("Resultado del bucle while");
while(contador>0){
    console.log("Hola mundo!");
    contador--;
}
//salto de linea en consola
console.log("\n");

//Recoremos el array de la familia creado anteriormente en tipos de datos. De adelante hacia atras y viceversa
//Recordamos que los indices de un array empiezan por 0. Deberé añadir o restar 1 dependiendo de que me interese
console.log("Resultado del bucle for recorriendo un array desde el principio");
for(let i=0; i<familia.length; i++){
    console.log("El miembro",i+1,"de la familia es",familia[i]);
}

//salto de linea en consola
console.log("\n");

console.log("Resultado del bucle for recorriendo un array desde el final");
for(let i=familia.length; i>0; i--){
    console.log("El miembro",i,"de la familia es",familia[i-1]);
}

//salto de linea en consola
console.log("\n");

//5.- FUNCIONES.
console.log("FUNCIONES");
//Dos funciones muestra el contenido de la familia y lo saluda
function muestra(array){
        for(let i=0; i<array.length; i++){
        console.log("El indice",i+1,"del array es",array[i]);
    }
}

function saluda(array){
    for(let i=0; i<array.length; i++){
        console.log("Hola",array[i]);
    }

}
console.log("Mostramos y saludamos a la familia mediante dos funciones");
muestra(familia);
saluda(familia);