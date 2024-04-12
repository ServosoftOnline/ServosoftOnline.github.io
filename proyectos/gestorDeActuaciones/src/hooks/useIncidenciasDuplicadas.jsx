/*
    HOOK QUE COMPRUEBA SI UNA CODIGO DE INCIDENCIA ESTÁ YA EN LA BBDD

*/

// React
import {useState, useEffect} from 'react';

// Contextos
import {useAuth} from '../contextos/AuthContext';

// Hooks importados
import useObtenerTodosLosCodigosDeIncidencias from './useObtenerTodosLosCodigosDeIncidencias';

// Hook
const useIncidenciaDuplicadas = ([data]) => {

	// Estados
	const {sesion} = useAuth();
	const [todosLosCodigosdeIncidenciaDeLaBBDD]= useObtenerTodosLosCodigosDeIncidencias();
	const [todosLosCodigosDeIncidenciaDeLaData, asignarTodosLosCodigosDeIncidenciaDeLaData] = useState([]);
	const [existeAlgunDuplicado, asignarExisteAlgunDuplicado] = useState(false);

	// Recorro la data y voy viendo si está incluido en los codigos de incidencia en los obtenidos de la BBDD


	console.log(data);
	// if(todasLasIncidencias.length > 0) {
	// 	console.log('Todos lo códigos de incidencia de la bbdd');
	// 	todasLasIncidencias.forEach((incidencia) => {			
	// 		console.log(incidencia.codigoIncicencia);
	// 	});
	// }

	// includes(). Ejemplo: Saber si Silvia esta en el array de nombres
// if(nombres.includes('Silvia')) console.log('Silvia se encuentra en el array nombres');
// else console.log('Silvia no esta');
// console.log(nombres);

	return [existeAlgunDuplicado];
	
}
 
export default useIncidenciaDuplicadas;