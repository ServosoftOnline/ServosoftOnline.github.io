/*
    HOOK QUE OBTIENE LOS GASTOS DEL USUARIO ACTUAL

        - Importo:
			- Lo que precise de react
			- El contexto que contiene información del usuario
			- La base de datos y las funciones que preciso para realizar la consulta

        - Creo la funcion hook:
			- Extraigo la sesión del contexto con la información del usuario
			- El estado que contendrá los gastos obtenidos de la consulta

			- Creo el efecto que se ejecutará al principio y cada vez que cambie el usuario

				- Creo la consulta:
					- Obtiene de colección gastos de la base de datos
					- todos los registros cuyo campo uidUsuario coincida con el uid de la sesión actual,
					- ordenalas por fecha en orden descendente
					- limítalos a 10 resultados para que posteriormente mostremos de 10 en 10 en pantalla
					- Esta consulta requiere de un indice compuesto en firestore. 
						- La consola mostrará un enlace donde solucionaremos esto
						- Solo hay que estar seguro de tener abierto el navegador con la misma cuenta donde agregamos firebase

				- Ejecuta la consulta:
					- Ejecuto la función onSnapshot de firestore
					- Le paso la consulta y se ejecutara una funcion cada vez que se actualize la base de datos
					- El parámetro snapshot de esa función contendrá una visión de la base de datos actualmente
					- Cambiará el estado gastos con un nuevo arreglo
						- snapshot.docs es un arreglo con todos los resultados de la consulta
						- Los recorro con la función map y a cada iteracción la llamaré gasto
						- Devolviendo un objeto con todas las propiedades y añado la propiedad id con el valor id del gasto de la db
					- El resultado de ejecutar la consulta lo guardo en unsuscribe

				- Cierro la consulta devolviendo unsuscribe

			- Devuelvo el estado gastos con los resultado de la consulta
				- Que será un array de objetos con un objeto por cada resultado de la consulta

		- Exporto la función hook
			
*/

// React
import {useState, useEffect} from 'react';

// Contextos
import {useAuth} from './../contextos/AuthContext';

// Firebase
import {db} from './../firebase/firebaseConfig';
import { collection, onSnapshot, query, orderBy, where, limit} from 'firebase/firestore';

// Hook
const useObtenerGastos = () => {

	const {sesion} = useAuth();	
	const [gastos, cambiarGastos] = useState([]);	

	// Efecto
	useEffect(() => {

		// Consulta
		const consulta = query(
			collection(db, 'gastos'),
			where('uidUsuario', '==', sesion.uid),
			orderBy('fecha', 'desc'),
			limit(10)
		);
		
		// Ejecuta la consulta
		const unsuscribe = onSnapshot(consulta, (snapshot) => {
			cambiarGastos(snapshot.docs.map((gasto) => {
			    return {...gasto.data(), id: gasto.id}
			}));
		});		

		// Cierra la consulta        
		return unsuscribe;

	}, [sesion]);
    
	// Devuelvo el estado gastos con los resultados de la consulta
	return [gastos];
}
 
export default useObtenerGastos;