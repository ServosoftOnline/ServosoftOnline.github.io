/*
    HOOK QUE OBTIENE EL ROL DE UN USUARIO

*/

// React
import {useState, useEffect} from 'react';

// Contextos
import {useAuth} from '../contextos/AuthContext';

// Firebase
import {db} from '../firebase/firebaseConfig';
import {collection, onSnapshot, query, where} from 'firebase/firestore';

// Hook
const useIncidenciasDuplicadas = (data) => {

	// Estados
	const {sesion} = useAuth();	
	const [incidencia, asignarIncidencia] = useState([]);	
	
	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

	// Si existe sesión abierta realizo la consulta
		if (sesion) {

			// Consulta 
			const consulta = query(
				collection(db, 'incidencias'),
				where('codigoIncidencia', '==', '266001')
			);
			
			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = onSnapshot(consulta, (snapshot) => {
				asignarIncidencia(snapshot.docs.map((documento) => {				
					return (documento.data().nombre);
				}));			
			}, (error) => {console.log(error)});		

			// Cierra la consulta
			return unsuscribe;
		}

	}, [sesion]);

	// Devuelvo el estado gastos
	return [incidencia];
}
 
export default useIncidenciasDuplicadas;