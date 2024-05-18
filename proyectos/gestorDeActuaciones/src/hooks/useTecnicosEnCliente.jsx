/*
    HOOK QUE OBTIENE TODOS LOS TECNICOS QUE ESTEN EN CAMINO A ALGUNA ACTUACION
*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where, orderBy} from 'firebase/firestore';

// Hook
const useTecnicosEnCliente = () => {

    // Estados
	const {sesion} = useAuth();	
	const [tecnicosEnCliente, setTecnicosEnCliente] = useState([]);

	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

		// Si existe sesión abierta realizo la consulta
		if (sesion) {			

			// Consulta 
			const consulta = query(
				collection(db, 'roles'),			
				where('estado', '==', "EnCliente"),
				orderBy('nombre', 'asc')
			);

			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = onSnapshot(consulta, (snapshot) => {
				setTecnicosEnCliente(snapshot.docs.map((documento) => {
					return (documento.data().nombre);					
				}));			
			}, (error) => {console.log(error)});		

			// Cierra la consulta
			return unsuscribe;
		}

	}, [sesion]);

	// Devuelvo el estado gastos
	return [tecnicosEnCliente];
}

export default useTecnicosEnCliente;