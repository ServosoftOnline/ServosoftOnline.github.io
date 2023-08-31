/*
    CONDICIONALES:
        1.- Indicamos que nuestra programacion actue de forma diferente dependiendo de que situacion
        2.- Sentencia if - else que devolverán true o false

*/

// vbles
let asistenteAlConcierto = {
    edad: 18,
    tieneEntrada: true,
    discapacidad: 'no'
};

// Ejemplo 1: Solo podrá acceder al concierto si tiene entrada y es mayor de edad.
// Indico la razón exacta anidando condicionales if
console.log('CONDICIONAL IF-ELSE:');
if(asistenteAlConcierto.tieneEntrada){
    if(asistenteAlConcierto.edad >= 18){
        console.log('Acceso permitido');
    } else {
        console.log('No puede acceder al concierto. Tiene entrada pero no es mayor de edad');
    }
} else {
    console.log('No puede acceder al concierto debido a que no tiene entrada');
}

// Ejemplo 2: Igual que el anterior pero usando el operador logico &&. 
// No indico la razón exacta por la que no entra
console.log('CONDICIONAL IF-ELSE USANDO OPERADOR LOGICO &&:');
if (asistenteAlConcierto.edad >= 18 && asistenteAlConcierto.tieneEntrada){
    console.log('Acceso permitido');
} else {
    console.log('No puede acceder al concierto porque es menor de edad o no tiene entrada');
}

//Ejemplo3: Controlaremos su discapacidad usando sentencias else if. Supongo que ya tiene el acceso permitido
//Si es discapacitado visual se le asignará la 1ª fila. Si es discapacitado auditivo se le asignará 2ª
// if(asistenteAlConcierto.discapacidad === 'visual'){
//     console.log('Acceso permitido. Discapacidad visual. Asignar primera fila');
//     } else if {
//         console.log('Acceso permitido. Discapacidad auditiva. Asignar segunda fila');
//     }

// } else {
//     console.log('Acceso permitido y no tiene discapacidad. Asignar a partir de la tercera fila');
// }

if(asistenteAlConcierto.discapacidad === 'visual'){
    console.log('Discapacidad visual. Asignar primera fila');    
    } else if (asistenteAlConcierto.discapacidad === 'auditiva'){
        console.log('Discapacidad auditiva. Asignar segunda fila');
    } else {
        console.log('Sin discapacidad. Asignar a partir de la tercera fila');
    }
