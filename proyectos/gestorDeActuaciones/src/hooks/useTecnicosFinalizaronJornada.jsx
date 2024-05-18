/*
    HOOK QUE OBTIENE LAS ACTUACIONES EN ESTADO DE INCIDENCIA
*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where, orderBy} from 'firebase/firestore';

// Hook
const useTecnicosFinalizaronJornada = () => {

    // Estados
	const {sesion} = useAuth();	
	const [tecnicosFinalizaronJornada, setTecnicosFinalizaronJornada] = useState([]);

	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

		// Si existe sesión abierta realizo la consulta
		if (sesion) {			

			// Consulta 
			const consulta = query(
				collection(db, 'roles'),			
				where('inicioJornada', '==', false),
				orderBy('nombre', 'asc')
			);

			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = onSnapshot(consulta, (snapshot) => {
				setTecnicosFinalizaronJornada(snapshot.docs.map((documento) => {
					return (documento.data().nombre);					
				}));			
			}, (error) => {console.log(error)});		

			// Cierra la consulta
			return unsuscribe;
		}

	}, [sesion]);

	// Devuelvo el estado gastos
	return [tecnicosFinalizaronJornada];
}

export default useTecnicosFinalizaronJornada;