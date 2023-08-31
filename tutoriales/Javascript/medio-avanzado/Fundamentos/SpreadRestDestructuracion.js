/*
OPERADOR SPREAD, PARÁMETRO REST y DESCTRUCTURACION DE OBJETOS Y ARRAYS

    OPERADOR SPREAD:
    - Es novedoso en el momento de redactar este documento. Antes se usaba el metodo push().
    - Permite tomar elementos de un array u objeto y expandirlos en otro lugar como otro array u otro objeto.
    - Se define con ... seguido del array u ubjeto que queremos añadir.
    - Puedo añadirlo al principio, medio o final.
    - Puedo modificar los elementos del objeto/array que inserto y se actualizan en el objeto/array insertado.
    - Si introduzco una propiedad/valor que ya existe lo sobrescribe.
    - Puedo elegir que sobrescribir dependiendo de donde añador el operador spread.

    PARAMETROS REST
    - Cuando usamos el operador Spread dentro de una función se llaman parametros Rest.
    - Permite añadir más parámetros de los que teniamos pensados adicionalmente que seran añadidos como array.

    DESTRUCTURACION DE OBJETOS Y ARRAYS
    - Permite obtener elementos/propiedades de objetos/arrays y guardarlos en vbles manteniendo el original.
    - Puedo enviar un objeto/array como parámetro y destructurarlo como argumento cuando declaro la funcion.

*/

// EJEMPLOS DE OPERADOR SPREAD
// Ejemplo 1: Añado en el array de comidaFavorita mis frutas favoritas 
const frutas = ['Granada', 'Melocotón', 'Manzana'];
const comidaFavorita = ['Lubina', 'Sardinas', ...frutas];
console.log(`Mi comida favorita es ${comidaFavorita}`); // Muestra Lubina,Sardinas,Granada,Melocotón,Manzana

// Ejemplo 2: Añado en el objeto usuario sus datos de acceso. Sobrescribiendo el nombre
const datosDeAcceso = {
    nombre: 'Pepe',
    usuario: 'Baranda',
    password: '123456'
}
const usuario = {
    nombre: 'Oscar',
    ...datosDeAcceso,
    edad: 48
}
console.log(usuario); // Muestra el objeto usuario con el nombre Pepe

// Continuacion Ej2:Si quisiera que el nombre fuera Carlos. Tendría que usar el operador spread al principio
const usuario2 = {
    ...datosDeAcceso,
    nombre: 'Oscar',
    edad: 48
}
console.log(usuario2); // Muestra el objeto usuario con el nombre Oscar


// EJEMPLO DE PARAMETROS REST
// Declaro una función que tendrá los parametros usuario y password. Podré añadir mas parámetros si quiero
const añadirUsuario = (usuario, password, ...datosAdicionales) => {
    console.log(usuario,password, datosAdicionales);
}
añadirUsuario('Oscar', '12345', 'correo@correo.com', 'España'); //Muestra Oscar, 12345 y el resto en un array 
añadirUsuario('Juan', '34567'); // Muestra Juan, 23456
añadirUsuario('Alejandro'); // Muestra Alejandro, undefined

// EJEMPLOS DE DESTRUCTURACION.
// Destructuracion de un array. El array amigos los guardaré en vbles.
const amigos = ['Pedro', 'David', 'Jesus'];
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(`Mis amigos guardados en constantes son ${primerAmigo}, ${segundoAmigo} y ${tercerAmigo}`);
console.log(amigos); // El array amigos sigue intacto

// Desctructuracion de un objeto. Guardaré en las vlbes nombre y pais los datos correspondientes
const datosPersonales = {
    nombre: 'Oscar',
    edad: 48,
    pais: 'España'
};

const algunosDatos = {nombre, pais, edad} = datosPersonales;
console.log(nombre,pais); // Muestra Oscar España

// Destructuración en una función. Envio el objeto como parametro y lo destructuro en la funcion como argumento
const mostrarEdad = ({nombre, edad}) => {
    console.log(`${nombre} tiene ${edad} años`);
}
mostrarEdad(datosPersonales);


