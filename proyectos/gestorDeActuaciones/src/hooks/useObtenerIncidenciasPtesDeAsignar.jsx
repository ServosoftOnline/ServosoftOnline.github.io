/*
    HOOK QUE OBTIENE LAS INCIDENCIAS PENDIENTES DE COORDINAR
*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where, orderBy, limit} from 'firebase/firestore';

// Hook
const useObtenerIncidenciasPtesDeAsignar = () => {

    // Estados
	const {sesion} = useAuth();	
	const [incidenciasSinAsignar, asignarIncidenciasSinAsignar] = useState([]);

	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

		// Si existe sesión abierta realizo la consulta
		if (sesion) {			

			// Consulta 
			const consulta = query(
				collection(db, 'actuaciones'),			
				where('estado', '==', 'pte_de_coordinar'),
				orderBy('fechaIncidencia', 'asc'),
				limit(10)
			);

			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = onSnapshot(consulta, (snapshot) => {
				asignarIncidenciasSinAsignar(snapshot.docs.map((documento) => {
					return ({...documento.data()});
				}));			
			}, (error) => {console.log(error)});		

			// Cierra la consulta
			return unsuscribe;
		}

	}, [sesion]);

	// Devuelvo el estado gastos
	return [incidenciasSinAsignar];
}

export default useObtenerIncidenciasPtesDeAsignar;