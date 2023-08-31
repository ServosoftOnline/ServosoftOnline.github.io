'use strict';

const saludar = () => {
    console.log('Bienvenido al proyecto Galeria.');
};

/*
	- Este archivo sirve para simular la conexion a la base de datos
	- Contiene toda la información relacionada con las fotos
		- Las categorías que son los contienentes
		- su id
		- La descripción de la fotografia
		- su ruta
		- Lo exporto para despues imporarlo desde categorías.js, index.js
*/

var datos = {
	fotos: {
		america: [
			{
				id: 1,
				nombre: 'America 1',
				descripcion:
					'America 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/1.jpg',
			},
			{
				id: 2,
				nombre: 'America 2',
				descripcion:
					'America 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/2.jpg',
			},
			{
				id: 3,
				nombre: 'America 3',
				descripcion:
					'America 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/3.jpg',
			},
			{
				id: 4,
				nombre: 'America 4',
				descripcion:
					'America 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/4.jpg',
			},
			{
				id: 5,
				nombre: 'America 5',
				descripcion:
					'America 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/5.jpg',
			},
			{
				id: 6,
				nombre: 'America 6',
				descripcion:
					'America 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/6.jpg',
			},
			{
				id: 7,
				nombre: 'America 7',
				descripcion:
					'America 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/7.jpg',
			},
			{
				id: 8,
				nombre: 'America 8',
				descripcion:
					'America 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/8.jpg',
			},
			{
				id: 9,
				nombre: 'America 9',
				descripcion:
					'America 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/9.jpg',
			},
			{
				id: 10,
				nombre: 'America 10',
				descripcion:
					'America 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/10.jpg',
			},
		],
		europa: [
			{
				id: 11,
				nombre: 'Europa 1',
				descripcion:
					'Europa 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/1.jpg',
			},
			{
				id: 12,
				nombre: 'Europa 2',
				descripcion:
					'Europa 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/2.jpg',
			},
			{
				id: 13,
				nombre: 'Europa 3',
				descripcion:
					'Europa 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/3.jpg',
			},
			{
				id: 14,
				nombre: 'Europa 4',
				descripcion:
					'Europa 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/4.jpg',
			},
			{
				id: 15,
				nombre: 'Europa 5',
				descripcion:
					'Europa 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/5.jpg',
			},
			{
				id: 16,
				nombre: 'Europa 6',
				descripcion:
					'Europa 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/6.jpg',
			},
			{
				id: 17,
				nombre: 'Europa 7',
				descripcion:
					'Europa 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/7.jpg',
			},
			{
				id: 18,
				nombre: 'Europa 8',
				descripcion:
					'Europa 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/8.jpg',
			},
			{
				id: 19,
				nombre: 'Europa 9',
				descripcion:
					'Europa 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/9.jpg',
			},
			{
				id: 20,
				nombre: 'Europa 10',
				descripcion:
					'Europa 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/10.jpg',
			},
		],

		africa: [
			{
				id: 21,
				nombre: 'África 1',
				descripcion:
					'África 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/1.jpg',
			},
			{
				id: 22,
				nombre: 'África 2',
				descripcion:
					'África 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/2.jpg',
			},
			{
				id: 23,
				nombre: 'África 3',
				descripcion:
					'África 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/3.jpg',
			},
			{
				id: 24,
				nombre: 'África 4',
				descripcion:
					'África 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/4.jpg',
			},
			{
				id: 25,
				nombre: 'África 5',
				descripcion:
					'África 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/5.jpg',
			},
			{
				id: 26,
				nombre: 'África 6',
				descripcion:
					'África 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/6.jpg',
			},
			{
				id: 27,
				nombre: 'África 7',
				descripcion:
					'África 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/7.jpg',
			},
			{
				id: 28,
				nombre: 'África 8',
				descripcion:
					'África 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/8.jpg',
			},
			{
				id: 29,
				nombre: 'África 9',
				descripcion:
					'África 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/9.jpg',
			},
			{
				id: 30,
				nombre: 'África 10',
				descripcion:
					'África 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/10.jpg',
			},
		],
		asia: [
			{
				id: 31,
				nombre: 'Asia 1',
				descripcion:
					'Asia 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/1.jpg',
			},
			{
				id: 32,
				nombre: 'Asia 2',
				descripcion:
					'Asia 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/2.jpg',
			},
			{
				id: 33,
				nombre: 'Asia 3',
				descripcion:
					'Asia 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/3.jpg',
			},
			{
				id: 34,
				nombre: 'Asia 4',
				descripcion:
					'Asia 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/4.jpg',
			},
			{
				id: 35,
				nombre: 'Asia 5',
				descripcion:
					'Asia 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/5.jpg',
			},
			{
				id: 36,
				nombre: 'Asia 6',
				descripcion:
					'Asia 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/6.jpg',
			},
			{
				id: 37,
				nombre: 'Asia 7',
				descripcion:
					'Asia 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/7.jpg',
			},
			{
				id: 38,
				nombre: 'Asia 8',
				descripcion:
					'Asia 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/8.jpg',
			},
			{
				id: 39,
				nombre: 'Asia 9',
				descripcion:
					'Asia 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/9.jpg',
			},
			{
				id: 40,
				nombre: 'Asia 10',
				descripcion:
					'Asia 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/10.jpg',
			},
		],
		oceania: [
			{
				id: 41,
				nombre: 'Oceania 1',
				descripcion:
					'Oceania 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/1.jpg',
			},
			{
				id: 42,
				nombre: 'Oceania 2',
				descripcion:
					'Oceania 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/2.jpg',
			},
			{
				id: 43,
				nombre: 'Oceania 3',
				descripcion:
					'Oceania 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/3.jpg',
			},
			{
				id: 44,
				nombre: 'Oceania 4',
				descripcion:
					'Oceania 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/4.jpg',
			},
			{
				id: 45,
				nombre: 'Oceania 5',
				descripcion:
					'Oceania 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/5.jpg',
			},
			{
				id: 46,
				nombre: 'Oceania 6',
				descripcion:
					'Oceania 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/6.jpg',
			},
			{
				id: 47,
				nombre: 'Oceania 7',
				descripcion:
					'Oceania 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/7.jpg',
			},
			{
				id: 48,
				nombre: 'Oceania 8',
				descripcion:
					'Oceania 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/8.jpg',
			},
			{
				id: 49,
				nombre: 'Oceania 9',
				descripcion:
					'Oceania 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/9.jpg',
			},
			{
				id: 50,
				nombre: 'Oceania 10',
				descripcion:
					'Oceania 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/10.jpg',
			},
		],
		antartida: [
			{
				id: 51,
				nombre: 'Antártida 1',
				descripcion:
					'Antártida 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/1.jpg',
			},
			{
				id: 52,
				nombre: 'Antártida 2',
				descripcion:
					'Antártida 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/2.jpg',
			},
			{
				id: 53,
				nombre: 'Antártida 3',
				descripcion:
					'Antártida 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/3.jpg',
			},
			{
				id: 54,
				nombre: 'Antártida 4',
				descripcion:
					'Antártida 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/4.jpg',
			},
			{
				id: 55,
				nombre: 'Antártida 5',
				descripcion:
					'Antártida 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/5.jpg',
			},
			{
				id: 56,
				nombre: 'Antártida 6',
				descripcion:
					'Antártida 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/6.jpg',
			},
			{
				id: 57,
				nombre: 'Antártida 7',
				descripcion:
					'Antártida 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/7.jpg',
			},
			{
				id: 58,
				nombre: 'Antártida 8',
				descripcion:
					'Antártida 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/8.jpg',
			},
			{
				id: 59,
				nombre: 'Antártida 9',
				descripcion:
					'Antártida 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/9.jpg',
			},
		],
	},
};

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

const fotos = datos.fotos;
// O desextructuro el objeto haciendo esto const {fotos} = data;

var dataCategorias = {
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

/*
Contiene las funciones para cargar categorias.
    - Importo las categorias y lo llamo dataCategorias
    - Desextructuro el array de las categorias y me quedo solo con las categorias
    - Debo añadir esta plantilla de forma dinámica:
        <a href="#" class="categoria" data-categoria="america">
            <img class="categoria__img" src="./img/america.jpg" alt="" />
            <div class="categoria__datos">
                <p class="categoria__nombre">America</p>
                <p class="categoria__numero-fotos">35 fotos</p>
            </div>
        </a>
    - el contenedor de este código serán el elemento HTML cuyo id sea categorias
    - Recorro las categorías y por cada una de ellas voy añadiendo código
        - Construllo cada elemento html y despues lo inserto
        - A tener en cuenta el parámetro personalizado "data-categoria"
        - Añado al DOM    

*/

console.log('Cargando categorias ....');
const {categorias} = dataCategorias;
const contenedorCategorias$1 = document.getElementById('categorias');

categorias.forEach((categoria) => {  
    // CONSTRULLENDO EL ELEMENTO HTML
    const nuevaCategoria = document.createElement('a');
    const plantilla = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
        </div>
    `;
    // Añado la plantilla a la etiqueta
    nuevaCategoria.innerHTML = plantilla;
    // añado los atributos a la etiqueta
    nuevaCategoria.href = '#';
    nuevaCategoria.classList.add('categoria');
    
    /*
    Añado un atributo personalizado. dataset contiene todas las propiedades personalizadas.
    Le añado un nuevo atributo llamado categoria que contendrá la categoria que pasamos
    por parámetro en el forEach con su id
    */
    nuevaCategoria.dataset.categoria = categoria.id;

    // AÑADIENDO EL ELEMENTO AL DOM
    contenedorCategorias$1.append(nuevaCategoria);
});

/*
    - CARGA Y DESPLAZA LA IMAGEN PRINCIPAL DE LA GALERIA.
        - CARGA.  
        - Pasos:
            1.- Obtengo la galeria

            2.- Creo la funcion cargar imagen tiene como parámetros informacion de la imagen a cargar
                2.1.- Obtengo el elemento que contiene la imagen activa
                2.2.- Sobrescribo su atributo src con la ruta pasada por parámetro
                2.3.- Igual para titulo de la fotografia y descripcion
                2.4.- Añado atributo personalizado que contendrá el id de la imagen
            
            3.- Añado un borde a la imagen seleccionada en el carusel
                3.1.- Necesito:
                    - El id que lo tengo como argumento
                    - La categoria activa es un atributo personalizado de galeria
                    - El id del archivo fotos lo obtengo de las imagenes importadas.
                    - Su posición en el carusel
                        - Lo obtengo comparando el id de las fotos de la categoria activa con el idex parámetro
                3.2.- Una vez obtenido lo que necesito el resto del código no lo entiendo.
                    - La clase galeria__carousel-slide--active añade un borde blanco a la fotografía activa.
                    - Obtengo todos los elementos cuya clase contenga el selector galeria__carousel-slide
                    - Si su número de elementos obtenidos es mayor a cero es que ya hay una fotografia con borde
                    - A esa fotografia con borde le quito de su lista de clases galeria__carousel-slide--active
                    - Le añado el borde a la que coincide con la posición en el carrusel.

            4.- Exporto la función. Usos:
                - Al cargar las categorías por primera vez
                - Cuando haga click en una imagen del carrusel
                - Cuando me desplaze por las imagenes principales con sus botones.

        - DESPLAZA
            - Debo cargar la imagen que tenga el siguente o anterior index dependiendo del sentido pasado como parámetro
            - Para ello necesito la siguiente informacion:
                - la categoria activa
                - todas las fotos de la categoria activa
                - el id de la imagen actual
                - el index de la imagen actual

*/


const galeria$4 = document.getElementById('galeria');
const cargarImagen = (id, nombre, descripcion, ruta) => {
    galeria$4.querySelector('.galeria__imagen').src = ruta;
    galeria$4.querySelector('.galeria__titulo').innerText = nombre;
    galeria$4.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
    galeria$4.querySelector('.galeria__imagen').dataset.idImagen = id;
    
    // Añadir borde a la imagen activa en el carusel
    const categoriaActiva = galeria$4.dataset.categoria;
    const fotos = datos.fotos[categoriaActiva];
    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if(foto.id === id) indexImagenActual = index;
    });

    // Elimina el borde blanco de la imagen del carousel seleccionada anteriormente y se lo añade a la nueva
 	if (galeria$4.querySelectorAll('.galeria__carousel-slide').length > 0) {
        galeria$4.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');  
        galeria$4.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
	}

};


const cargarAnteriorSiguiente = (sentido) => {
    
    // Obtengo la categoria activa
    const categoriaActiva = galeria$4.dataset.categoria;
    // Obtengo todas las fotos de la categoria activa
    const fotos = datos.fotos[categoriaActiva];
    // Obtengo el id de la imagen actual. Es el atributo personalizado del elemento cuya clase se llama galeria__imagen
    const idImagenActual = parseInt(galeria$4.querySelector('.galeria__imagen').dataset.idImagen);
    
    // Obtengo el index de la imagen actual. Indica su posición actual dentro del carousel.
    // Será aquel en el que el id de la imagen actual y el id de la fotografía coincidan 
    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if (foto.id === idImagenActual) indexImagenActual = index;
    });

    // Tomare como referencia el index de la imagen actual para saber si llegue al final de la galeria por ambos sentidos
    // Si no llegue al final. Destructuro la fotografia obteniendo las vbles y cargo la imagen
    if (sentido === 'anterior'){
        if (indexImagenActual>0){
            const {id, nombre, descripcion, ruta} = fotos[indexImagenActual-1];
            cargarImagen(id, nombre, descripcion, ruta);       
        }
    } else if(sentido === 'siguiente'){
        if (indexImagenActual+1<fotos.length){
            const {id, nombre, descripcion, ruta} = fotos[indexImagenActual+1];
            cargarImagen(id, nombre, descripcion, ruta);
        }
    }
};

/*
    - ESTE ARCHIVO HACE QUE CUANDO HAGA CLICK EN LA CATEGORIA QUE SEA ME ABRA SU GALERIA CORRESPONDIENTE:
        - En cargarCategorias.js cargué todas las categorias y ya las tengo
        - En este archivo el código hace lo siguiente:

            - Entrar en una galeria:
                - Añado un evento de click al contenedor de todas las categorias, estas lo heredarán
                - Controlo que el cursor no se valla para arriba cuando hago click en la galeria   
                - Me aseguro que hacen click en la categoria y no en su contenedor mediante el metodo closet
                - Modifico la clase css de la categoria y la pongo activa
                - Le quito el scroll a la galeria una vez abierta
                

            - Mostrar las fotografías en el carrusel
                - Almaceno la categoría que se eligio
                - Añado un atributo personalizado con la categoría que usaré para cargar la imagen en el carrusel
                - Almaceno las fotografías asociadas
                - Cargo la imagen activa que se verá en grande pasandole los datos como parámetro.
                - Borro el carrusel. En la segunda vez que entro se muestran las fotos anteriores y las actuales
                - Recorro las fotografias añadiendo de forma dinámica su ruta y añadiendo el html
     
                

*/

// Controlando que index.js importó bien este archivo
console.log('Cargando eventos para las categorias ...');

// Obtengo el contenedor con todas las categorias
const contenedorCategorias = document.getElementById('categorias');

// Obtengo la galeria que mostraré le pondré la clase activa cuando haga click
const galeria$3 = document.getElementById('galeria');

// Añado el evento click a la galeria
contenedorCategorias.addEventListener('click', (e) => {
    // Previene ese comportamiento que se valla hacia arriva el cursor al hacer click en la categoria
    e.preventDefault();

    // Me aseguro que hago click en el enlace y no en su contenedor. Me devuelve null si no clickeo en el enlace
    if (e.target.closest('a')) {
        // Activo la galeria
        galeria$3.classList.add('galeria--active');

        // Elimino el scroll
        document.body.style.overflow = 'hidden';
        
        // MOSTRANDO LAS FOTOGRAFIAS EN EL CARROUSEL
        // Almaceno la categoria seleccionada gracias al atributo personalizado del enlace data-categoria
        const categoriaActiva = e.target.closest('a').dataset.categoria;

        // Añado el atributo personalizado categoria que contendrá la categoría seleccionada
        galeria$3.dataset.categoria = categoriaActiva;
         

        // Almaceno las fotos de la categoria seleccionada
        const fotos = datos.fotos[categoriaActiva];

        // Cargo la imagen activa. Destructuro la primera foto que será la activa por defecto y obtengo vbles
        const {id, nombre, descripcion, ruta} = fotos[0];

        // Paso como parametros esas vbles
        cargarImagen(id, nombre, descripcion, ruta);

        // Borro el carrusel
        const carrusel = document.querySelector('.galeria__carousel-slides');
        carrusel.innerHTML = ' ';
        // Las recorro. Inserto la ruta y su id de forma dinámica y añadiendo al DOM 
            fotos.forEach(foto => {
              const slide = `
                  <a href="#" class="galeria__carousel-slide">
                  <img class="galeria__carousel-image" src="${foto.ruta}" data-id = "${foto.id}" alt="" />
                  </a>
            `; 
            galeria$3.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
        // Añado el borde a las fotografías
        galeria$3.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }});

/*
    - CIERRA LA GALERIA
    
        - En eventoCategorias.js añadíamos la clase galeria--active para abrirla
        - En este archivo le quitamos la galeria activa para desactivarla cerrarla
        - Al cerrarla y devolver el control a categorias debo activarle de nuevo el school
*/
const galeria$2 = document.getElementById('galeria');
const cerrarGaleria = () => {
    galeria$2.classList.remove('galeria--active');
    // Muestro el scroll.
    document.body.style.overflow = '';
};

/*
    - FUNCION QUE CONSIGUE TODA LA INFORMACIÓN NECESARIA PARA PODER CARGAR LA IMAGEN COMO IMAGEN PPAL EN LA GALERIA
    
        - Necesito: id, nombre, descripcion y ruta.
            - el id lo obtengo a partir del evento que pasé como parámetro.
                - Debo pasarlo a número para compararlo con el id de la fotografia de los datos
            - el nombre, la descripción y la ruta los obtengo de la siguiente forma:
                - Importo las fotos
                - Obtengo la categoría activa a partir del atributo personalizado categoria
                - Recorro el array que contiene todas las fotos que corresponden con la categoría activa
                - Si el id que pasé por el evento es igual al id de la foto, he encontrado la fotografia
        - En el momento que encuentro toda la información llamo a la función cargarImagen y le paso todos los datos

           
*/


const fotoInfo = (e) => {
    const id = parseInt(e.target.dataset.id);
    const galeria = document.getElementById('galeria');
    const categoriaActiva = galeria.dataset.categoria;
    
    datos.fotos[categoriaActiva].forEach((foto) => {
        if(foto.id === id) cargarImagen(id,foto.nombre,foto.descripcion,foto.ruta);   
    });
};

/*
    - FUNCION CAROUSEL DESPLAZA LAS IMAGENES HACIA UN SENTIDO U OTRO
        - Usaré una API llamada intersection observer
        - Creo un observador del carrousel que observará continuamente lo siguiente:
            - Imagenes que son visibles
            - Dependiendo del parámetro sentido
                - Hacia la derecha. La primera imagen oculta de la derecha la coloca al principio 
                - Hacia la izquierda. La primera imagen oculta de la izquierda se mueve una posicion a la derecha



*/

// Obtengo la galeria
const galeria$1 = document.getElementById('galeria');

const carousel = (sentido) => {

    /*
        Configuracion del observador: Mira el elemento html cuya clase sea galeria__carousel-slides,
        sin ningún margen y será considerada visible cuando se vea el 90% (La imagen activa tiene un borde blanco)
    */
    const configuracionObservador = {
        root: document.querySelector('.galeria__carousel-slides'),
        rootMargin: '0px',
        threshold: 0.9

    };
    // Creo el observador con su configuracion, observo y cuando acabo lo elimino
    const observador = new IntersectionObserver((entradas) => {
        // Recorro los slides y me quedo un array solo con los visibles
        const slidesVisibles = entradas.filter((entrada) => {
            if (entrada.isIntersecting === true) return entrada;
        });
        
        // Dependiendo del sentido ejecutará un código u otro
        if(sentido === 'derecha'){

            // Obtengo el último slide visible y su index
            const ultimoSlideVisible = slidesVisibles[slidesVisibles.length -1];
            const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible);

            // Si el ultimo index visible es menor que el número de entradas -1. El primer index es cero.
            // desplazo el scroll. Ahora el primero de los visibles será el siguiente al ultimo slide visible
            // Lo introduzco en el scroll, de forma suave y lo coloco al principio
            if(indexUltimoSlideVisible < entradas.length -1)  {
                entradas[indexUltimoSlideVisible +1].target.scrollIntoView ({
                    behavior: 'smooth',
                    inline: 'start'
                });
            }
             
                  
        } else if (sentido === 'izquierda') {
            // Obtengo el primer slide visible y su index
            const primerSlideVisible = slidesVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);

            // Ejecuto el scroll siempre que no esté al principio
            if(indexPrimerSlideVisible > 0){
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView ({
                    behavior: 'smooth',
                    inline: 'start'
                });                
            }
            
        }

        // Una vez acabado el codigo anterior dejo de observar
        slides.forEach((slide) => {
            observador.unobserve(slide);
        });

    }, configuracionObservador);


    // Obtengo todos los slides de la galeria
    const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');

    // Recorro todos los slides y los mando observar
    slides.forEach((slide) => {
        observador.observe(slide);
    });
    
};

/*
    - CONTIENE LOS EVENTOS QUE SE PRODUCIRAN EN LA GALERIA DE IMAGENES
        
        - Usaré propagacion de eventos
        - Obtengo el botón pulsado
            - Este contiene un atributo personalizado llamado acción con las diferentes acciones: 
                - cerrar-galeria, anterior-imagen, siguiente-imagen, siguiente-slide o anterior-slide
            - Obtengo la galeria.
            - Tengo la referencia de la galeria. Uso el metodo closest para obtener el botón mas cercano
            - Me aseguro que pulso un boton usando la sentencia if y el operador ? sobre objetos
                - El botón tiene un dataset?, ese dataset se llama accion?. 
                - Daría error si no lo usase
            - Dependiendo del contenido del atributo accion llamaré a una u otra funcion
        
   
        - Cargar imagen principal a traves de la funcion fotoInfo()
            - e.target contiene el elemento imagen que contiene el id de la fotografía
            - e.target.dataset contiene el id
            - Le paso el evento completo a la función fotoInfo() para que extraiga la información y la cargue

    
        
*/

const galeria = document.getElementById('galeria');
galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button');
    
    // contenido de los botones
    if (boton?.dataset?.accion === 'cerrar-galeria') {
        cerrarGaleria(boton?.dataset?.accion === 'cerrar-galeria');
    } else if (boton?.dataset?.accion === 'anterior-imagen') {
        cargarAnteriorSiguiente('anterior');
    } else if (boton?.dataset?.accion === 'siguiente-imagen') {
        cargarAnteriorSiguiente('siguiente');
    } else if (boton?.dataset?.accion === 'siguiente-slide') {
       carousel('derecha');
    } else if (boton?.dataset?.accion === 'anterior-slide') {
        carousel('izquierda');       
    } 

    // cambiar imagen ppal
    if(e.target.dataset.id) fotoInfo(e);       
    
});

// saludo para probar rollup
saludar();
