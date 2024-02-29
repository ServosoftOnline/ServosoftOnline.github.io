/*
HOOK QUE OBTIENE TODOS LOS GASTOS DE CADA CATEGORIA EN EL MES ACTUAL
	- Obtengo todos lo gastos acontecidos mediante el hook useObtenerTodosLosGastosDelMes	
	- Le aplico el método reduce para sumar todos los importes de las categorias del arreglo obtenido

		- Devolverá un objeto donde:
			- Sus propiedades serán las categorías 
			- Y sus valores las sumas de los importes

		- Hay que pasarle dos parámetros:
			- Una función o call back
				- Se ejecutará por cada elemento obtenido del hook useObtenerTodosLosGastosDelMes
				- Tendrá a su vez otros dos parámetros
					- El objeto que devolverá (llamado objetoResultante)
					- El objeto de la iteracción actual (Llamado objetoActual)
				- En cada pasada almacenaré sus categorías y cantidades del objeto actual
				- En el objeto resultante de su categoria actual le sumo la cantidad actual
				- Devuelvo el objeto resultante que se almacenará en la cte.

			- Un valor inicial
				- En este caso un objeto con todas las categorías iniciadas a 0

	- El objeto que almacené en la cte lo paso a un array
		- Al objeto resultante le aplico el método keys para obtener sus propiedades
		- Le aplico el metodo map y voy devolviendo un array de objetos
			- con dos propiedades con sus respectivos valores
				- El elemento recorrido es la categoria obtenida mediante keys
				- La propiedad categoría y su valor es el elemento recorrido
				- la propiedad importe con la sumaDeGastos cuyo indicé es el elemento recorrido

	- llamo a la funcion que cambia el estado y almaceno el objeto devuelto en el paso anterior
	- Devuelvo el estado con el resultado de todo el proceso

*/

import { useState } from "react";
import useObtenerTodosLosGastosDelMes from "./useObtenerTodosLosGastosDelMes";

const useObtenerGastosDelMesPorCategoria = () => {

	// Estados
	const [gastosPorCategoria, cambiarGastosPorCategoria] = useState([]);
	const [gastos] = useObtenerTodosLosGastosDelMes();
	// console.log(gastos);

	// Método reduce
	const sumaDeGastos = gastos.reduce((objetoResultante, objetoActual) => {
		const categoriaActual = objetoActual.categoria;
		const cantidadActual = objetoActual.importe;
		objetoResultante[categoriaActual] += cantidadActual;
		return objetoResultante;
	}, {
		'comida': 0,
    	'cuentas y pagos': 0,
		'hogar': 0,
		'transporte': 0,
		'ropa': 0,
		'salud e higiene': 0,
		'compras': 0,
		'diversion': 0
	});
	
	// Obtuve el objeto sumaDeGastos, lo paso a un array y modifico el estado que quiero devolver
	cambiarGastosPorCategoria(Object.keys(sumaDeGastos).map((elemento) => {
		return {categoria: elemento, importe:sumaDeGastos[elemento]}
	}));

	// Devuelvo el estado
	return gastosPorCategoria;
}
 
export default useObtenerGastosDelMesPorCategoria;