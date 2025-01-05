/*
    Módulo creado por mi para exportar funciones básicas de matemáticas
    Los requeriré en el archivo 6-usarModuloMath.js en la carpeta manual
*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};