/*
    HOOK QUE OBTIENE TODOS LOS CODIGOS DE INCIDENCIAS DE LA COLECCION INCIDENCIAS
*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where, orderBy} from 'firebase/firestore';

// Hook
const useObtenerTodosLosTecnicos = () => {

    // Estados
	const {sesion} = useAuth();	
	const [todosLosTecnicos, asignarTodosLosTecnicos] = useState([]);

	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

		// Si existe sesión abierta realizo la consulta
		if (sesion) {			

			// Consulta 
			const consulta = query(
				collection(db, 'roles'),			
				where('idRol', '==', 'tecnico'),
				orderBy('nombre', 'asc')				
			);

			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = onSnapshot(consulta, (snapshot) => {
				asignarTodosLosTecnicos(snapshot.docs.map((documento) => {
					return ({...documento.data(), id: documento.id});					
				}));			
			}, (error) => {console.log(error)});		

			// Cierra la consulta
			return unsuscribe;
		}

	}, [sesion]);

    // Devuelvo el estado gastos
    return [todosLosTecnicos];
}

export default useObtenerTodosLosTecnicos;
