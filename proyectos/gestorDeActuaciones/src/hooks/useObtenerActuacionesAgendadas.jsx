/*
    HOOK QUE OBTIENE LAS ACTUACIONES EN ESTADO DE O&m:	
*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where, orderBy, limit} from 'firebase/firestore';

// Hook
const useObtenerActuacionesAgendadas = () => {

    // Estados
	const {sesion} = useAuth();	
	const [actuacionesAgendadas, asignarActuacionesAgendadas] = useState([]);

	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

		// Si existe sesión abierta realizo la consulta
		if (sesion) {			

			// Consulta 
			const consulta = query(
				collection(db, 'actuaciones'),			
				where('estado', '==', 'EstadoAgenda'),
				orderBy('fechaIncidencia', 'asc'),
				limit(10)
			);

			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = onSnapshot(consulta, (snapshot) => {
				asignarActuacionesAgendadas(snapshot.docs.map((documento) => {
					return ({...documento.data(), id: documento.id});					
				}));			
			}, (error) => {console.log(error)});		

			// Cierra la consulta
			return unsuscribe;
		}

	}, [sesion]);

	// Devuelvo el estado gastos
	return [actuacionesAgendadas];
}

export default useObtenerActuacionesAgendadas;