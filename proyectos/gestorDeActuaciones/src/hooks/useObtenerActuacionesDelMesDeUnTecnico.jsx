/*
    HOOK QUE OBTIENE TODAS LAS ACTUACIONES DE UN TENICO EN EL MES ACTUAL	

				
*/

// React
import {useState, useEffect} from 'react';

// date-fns
import { endOfMonth, startOfMonth, getUnixTime } from 'date-fns'; 

// Contextos
import {useAuth} from '../contextos/AuthContext';

// Firebase
import {db} from '../firebase/firebaseConfig';
import {collection, onSnapshot, query, where, or, and, orderBy} from 'firebase/firestore';

// Mi Hook
const useObtenerActuacionesDelMesDeUnTecnico = (nombre) => {	
	
	// Estados
	const {sesion} = useAuth();	
	const [actuacionesDelMesDeUnUsuario, setActuacionesDelMes] = useState([]);		
	
	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

		// Si existe sesión abierta realizo la consulta
		if (sesion) {
			
			const obtenerActuaciones = () => {	
				
				const consulta = query(collection(db, 'actuacionesSupervisadas'), and (

						or(
							where('fechaSupervision', '>=', getUnixTime(startOfMonth(new Date()))),
							where('fechaSupervision', '<=', getUnixTime(endOfMonth(new Date()))),
						),
						
						or(
							
							where('tecnico1', '==', `${nombre}`),
							where('tecnico2', '==', `${nombre}`),
							where('tecnico3', '==', `${nombre}`),
							where('tecnico4', '==', `${nombre}`),
							// Si pongo este último where supera los limites de firebase. Por ahora no funciona con 5 tecnicos
							// where('tecnico5', '==', `${nombre}`)
						)					
					),
					
					orderBy('fechaSupervision', 'asc'));


				// Ejecuta la consulta. Si se produjera un error lo muestro en consola
				const unsuscribe = onSnapshot(consulta, (snapshot) => {
					setActuacionesDelMes(snapshot.docs.map((documento) => {
						return ({...documento.data(), id: documento.id});					
					}));			
				}, (error) => {console.log(error)});		

				// Cierra la consulta
				return unsuscribe;
			}
			
			obtenerActuaciones();
		}

	}, [sesion, nombre]);

	// Devuelvo
	return [actuacionesDelMesDeUnUsuario];
}
 
export default useObtenerActuacionesDelMesDeUnTecnico;