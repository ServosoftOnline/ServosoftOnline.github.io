/*
    API DEL NAVEGADOR QUE PERMITE TRABAJAR CON FECHAS

        - No es necesario importar nada

        - Métodos:

            - toString(). Transforma un objeto fecha en una cadena de texto con mucha informacion para poder mostrarla en pantalla.
            - toDateString(). Transforma un objeto fecha en una cadena de texto pero solo muestra el dia del mes, el mes, el dia y el año
            - toTimeString(). Devuelve texto con la hora actual y la zona horaria
            - getMonth(). Devuelve un número con el índice del mes. 
            - getDate(). Devuelve un número con el día
            - getFullYear(). Devuelve el año.

        - Mas información y en el enlace: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
        - Puedo hacer menos cosas que con date-fns. Por ejemplo me permite poner fechas en español y poner fechas completas

*/

// Creo un objeto de fecha con el momento actual.
// Muestra el objeto Date: Date Sun Oct 13 2024 20:54:54 GMT+0200 (hora de verano de Europa central)
const fechaActual = new Date();
console.log(fechaActual);

// Creo un objeto con la fecha de mi cumpleaños. Debo indicarla en este formato. La 'T' sirve para indicar la hora
// Muestra el objeto Date: Date Sun Oct 13 2024 20:54:54 GMT+0200 (hora de verano de Europa central)
const cumpleaños = new Date('1975-04-25T09:00');
console.log(cumpleaños);

// Muestra el texto: Fri Apr 25 1975 09:00:00 GMT+0200 (hora de verano de Europa central)
console.log(cumpleaños.toString());

// Muestra el texto: Fri Apr 25 1975
console.log(cumpleaños.toDateString());

// Muestra el texto: 20:54:54 GMT+0200 (hora de verano de Europa central)
console.log(fechaActual.toTimeString());

// Muestra el numero 3
console.log(cumpleaños.getMonth());

// Muestra el número 25
console.log(cumpleaños.getDate());

// Muestra el número 1975
console.log(cumpleaños.getFullYear());





