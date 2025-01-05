/*
    Módulo creado por mí para poder exportar datos y poder importarlos en otro archivo

        - Puedo importar variables, arrays, objetos y funciones
        - Los declaro y los exporto mediante el objeto global module y su método exports
*/

// Declaracion de variables, arrays y objetos
const miPortafolio = 'https://servosoftonline.github.io';
const miNumero = 620890221;
const miArray = [1, 2, 3, 4, 5];
const usuario = {
    nombre: 'ServoSoft',
    email: 'oscarfernandezsantiago@gmail.com'
}

// Puedo declarar otros datos y no tengo porque exportarlos
const miOtroDato = 'Este dato no lo exporto';

/*
// Formas de exportar los datos:
// Primera forma: Añadirlo todo en un objeto
const misDatos = {
    miPortafolio: miPortafolio,
    miNumero: miNumero,
    miArray: miArray,
    usuario: usuario
}

module.exports = misDatos;
*/

// Segunda forma: Añadirlo en un objeto pero de forma mas resumida
module.exports = {
    miPortafolio,
    miNumero,
    miArray
}

// O exportar datos de forma individual
module.exports.usuario = usuario