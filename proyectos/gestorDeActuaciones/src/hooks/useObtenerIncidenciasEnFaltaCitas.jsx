/*
    HOOK QUE OBTIENE LAS ACTUACIONES EN ESTADO DE MANTENIMIENTO
*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where, orderBy, limit} from 'firebase/firestore';

// Hook
const useObtenerIncidenciasEnFaltaCitas = () => {

    // Estados
	const {sesion} = useAuth();	
	const [incidenciasEnFaltaCitas, asignarIncidenciasEnFaltaCitas] = useState([]);

	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

		// Si existe sesión abierta realizo la consulta
		if (sesion) {			

			// Consulta 
			const consulta = query(
				collection(db, 'actuaciones'),			
				where('estado', '==', 'EstadoFaltaCitas'),
				orderBy('fechaIncidencia', 'asc'),
				limit(10)
			);

			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = onSnapshot(consulta, (snapshot) => {
				asignarIncidenciasEnFaltaCitas(snapshot.docs.map((documento) => {
					return ({...documento.data(), id: documento.id});					
				}));			
			}, (error) => {console.log(error)});		

			// Cierra la consulta
			return unsuscribe;
		}

	}, [sesion]);

	// Devuelvo el estado gastos
	return [incidenciasEnFaltaCitas];
}

export default useObtenerIncidenciasEnFaltaCitas;