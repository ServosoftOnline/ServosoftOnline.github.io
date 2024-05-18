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
const useTecnicosIniciaronJornada = () => {

    // Estados
	const {sesion} = useAuth();	
	const [tecnicosIniciaronJornada, setTecnicosIniciaronJornada] = useState([]);

	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

		// Si existe sesión abierta realizo la consulta
		if (sesion) {			

			// Consulta 
			const consulta = query(
				collection(db, 'roles'),			
				where('inicioJornada', '==', true),
				orderBy('nombre', 'asc')
			);

			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = onSnapshot(consulta, (snapshot) => {
				setTecnicosIniciaronJornada(snapshot.docs.map((documento) => {
					return (documento.data().nombre);					
				}));			
			}, (error) => {console.log(error)});		

			// Cierra la consulta
			return unsuscribe;
		}

	}, [sesion]);

	// Devuelvo el estado gastos
	return [tecnicosIniciaronJornada];
}

export default useTecnicosIniciaronJornada;