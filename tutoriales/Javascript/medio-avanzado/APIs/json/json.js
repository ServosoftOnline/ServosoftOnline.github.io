/*
    📌 Objeto JSON

    - Significado: Javascript Object Notation
    - Es un objeto donde podre guardar información. Los sitios se pasan informacion entre ellos usando objetos JSON.	
    - Sustituye a los que se llamaba XML
    - Tiene una estructura un poco diferente a los objetos de javascript.	
    - Son muy similares a un objeto de javascript.
    - Es de las formas más comunes de usar y es fácil de usar.
    - Todos los lenguajes de programación tienen funciones para leer json. PHP, PYTHON, ...
    - Se le hace una petición al servidor y este responde con un objeto que no tiene porque ser un archivo.
    - Puede contener unos tipos de datos y tiene unas reglas para su creación
	
*/

/*
	📌 Tipos de datos que podemos usar en JSON:
	- cadena de texto
	- numeros
	- objetos (en formato JSON)
	- arreglos
	- booleanos
	- null

	Tipos de datos que NO podemos usar en JSON:
    - funciones. Sí podía añadir funciones en objetos de javascript, pero no en objetos JSON. No puedo pasar funciones solo datos.
    - objetos de fecha. Si quiero pasar una fecha debo antes transformarla en una cadena de texto
    - undefined. Si quiero poner un valor que no esté definido debo usar null.
*/

/*
    📌 Reglas para crear objetos JSON. Diferencias con los objetos de javascript

    - Las aplicaré en el archivo datos.json. Considero que el servidor devolvio este archivo con el objeto solicitado
    - No me ha permitido añadir comentarios.
    - Las propiedades deben ir entre comillas dobles
    - Las cadenas de caracteres tambien deben ir en comillas dobles no simples.
    - Los arreglos deben contener objetos
*/

/*
    Métodos muy usados:

    📌 parse()
	Le paso una cadena de texto con formato JSON, devuelve un objeto de javascript con el que puedo trabajar en mi aplicación.    

    📌 stringify()
	Le paso un objeto de javascript, devuelve una cadena de texto en formato JSON que puedo pasarla a la aplicación que lo pida

*/

// Cadena de texto con formato JSON.
const datos = `
    {
        "id": 1,
        "nombre": "Oscar Fernández Santiago",
        "suscriptor_activo": true,
        "posts": [
            {
                "id": 1,
                "titulo": "Titulo del primer post",
                "texto": "texto del primer post ..."
            },
            {
                "id": 2,
                "titulo": "Titulo del segundo post",
                "texto": "texto del segundo post ..."
            }
        ]
    }
`;

// Uso del método parse: Creo el objeto y trabajo con el. Muestro el objeto al completo y el nombre
const objeto = JSON.parse(datos);
console.log(objeto);
console.log(objeto.nombre);

// Uso del método stringify: Tengo un objeto de javascript, lo paso a cadena de texto en formato JSON que envio al servidor en la peticion
const usuario = {
	nombre: 'Óscar',
	correo: 'correo@correo.com',
	coloresFavoritos: ['azul', 'rojo', 'negro']
};

// Muestra: {"nombre":"Óscar","correo":"correo@correo.com","coloresFavoritos":["azul","rojo","negro"]}
console.log(JSON.stringify(usuario));