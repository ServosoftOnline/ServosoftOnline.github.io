/*
- Este archivo sirve para simular la conexion a la base de datos
    - El objeto categorías contiene un array compuesto por un objeto por cada categoria
        - Objeto por cada categoría contiene:
            - id
            - nombre
            - numero de fotos obtenido de forma dinámica. Para ello:
                - importo el objeto fotos entero desde fotos.js y lo llamo data
                - Me quedo con las fotos.
                - Número de cada fotos que tiene cada  continente
            - imagen de la portada
                - Añado su ruta
*/

import data from './fotos';
const fotos = data.fotos;
// O desextructuro el objeto haciendo esto const {fotos} = data;

export default {
	categorias: [
		{ 
            id: 'america',
            nombre: 'América',
            numeroFotos: fotos['america'].length,
            imagenPortada: './img/america.jpg' 
        },
		{
            id: 'europa',
            nombre: 'Europa',
            numeroFotos: fotos['europa'].length,
            imagenPortada: './img/europa.jpg' 
        },
		{ 
            id: 'africa',
            nombre: 'África',
            numeroFotos: fotos['africa'].length,
            imagenPortada: './img/africa.jpg' 
        },
		{
            id: 'asia',
            nombre: 'Asia',
            numeroFotos: fotos['asia'].length,
            imagenPortada: './img/asia.jpg' 
        },
		{
            id: 'oceania',
            nombre: 'Oceania',
            numeroFotos: fotos['oceania'].length,
            imagenPortada: './img/oceania.jpg' 
        },
		{
			id: 'antartida',
			nombre: 'Antártida',
			numeroFotos: fotos['antartida'].length,
			imagenPortada: './img/antartida.jpg',
		},
	],
};
