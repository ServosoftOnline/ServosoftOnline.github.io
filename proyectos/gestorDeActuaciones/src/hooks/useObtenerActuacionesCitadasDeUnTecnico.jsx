/*
    HOOK QUE OBTIENE LAS ACTUACIONES EN ESTADO CITADA DE UN TECNICO
		- Es una consulta anidada que contiene AND Y OR
		- Hay que seguir unas reglas definidas en https://firebase.google.com/docs/firestore/query-data/queries?hl=es-419#or_queries
		- el nombre que obtení del hook no pude ponerlo como nombre, lo tuve que poner asi: `${nombre}`
*/

// React
import {useState, useEffect} from 'react';

// Contextos
import {useAuth} from '../contextos/AuthContext';

// Firebase
import {db} from '../firebase/firebaseConfig';
import {collection, onSnapshot, query, where, or, and, orderBy} from 'firebase/firestore';

// Mi Hook
const useObtenerActuacionesCitadasDeUnTecnico = (nombre) => {	

	// Estados
	const {sesion} = useAuth();	
	const [actuaciones, establecerActuaciones] = useState([]);		
	
	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

		// Si existe sesión abierta realizo la consulta
		if (sesion) {
			
			const obtenerActuaciones = () => {	
				
				const consulta = query(collection(db, 'actuaciones'), and (

						or(
							where('estado', '==', 'EstadoAgenda'),
							where('estado', '==', 'EstadoEnCamino'),
							where('estado', '==', 'EstadoEnCliente'),
							where('estado', '==', 'EstadoSupervision'),							
							where('estado', '==', 'EstadoFaltaCitas'),
							where('estado', '==', 'EstadoIncidencias'),
							where('estado', '==', 'EstadoSupervisado')
							// Si pongo este último where supera los limites de firebase. Por ahora no devuelve los estados ilocalizables
							// where('estado', '==', 'EstadoIlocalizable')
						),
						
						or(
							
							where('tecnico1', '==', `${nombre}`),
							where('tecnico2', '==', `${nombre}`),
							where('tecnico3', '==', `${nombre}`),
							where('tecnico4', '==', `${nombre}`)
							// Si pongo este último where supera los limites de firebase. Por ahora no funciona con 5 tecnicos
							// where('tecnico5', '==', `${nombre}`)
						)					
					),
					orderBy('fechaCitacion', 'asc'),
					orderBy('idHoraCitacion', 'asc'));


				// Ejecuta la consulta. Si se produjera un error lo muestro en consola
				const unsuscribe = onSnapshot(consulta, (snapshot) => {
					establecerActuaciones(snapshot.docs.map((documento) => {
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
	return [actuaciones];
}
 
export default useObtenerActuacionesCitadasDeUnTecnico;