/*
    HOOK QUE OBTIENE LOS TECNICOS QUE ACOMPAÑARÁN EN UNA ACTUACION PARTIR DE SU ID
		- La primera vez que se ejecuta este hook idRoles contiene null. La promesa se ejecutará la segunda vez que pase por aqui
*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

// Mi Hook
const useObtenerInicioDeJornada = (idRoles) => {

    // Estados
	const [inicioJornadaObtenido, setInicioJornadaObtenido] = useState('');	
	const {sesion} = useAuth();	
	
	// Ejecuto el efecto para realizar la consulta de forma asincrona
	useEffect(() => {

		// Si hay sesión abierta realizo la consulta
		if(sesion && idRoles !== null) {

			const obtenerInicioJornada = async () => {
				try {
					// Obtengo el documento de forma asincrónica
					const documento = await getDoc(doc(db, 'roles', idRoles));
			
					// Si el documento existe, obtengo los datos de los técnicos y los añado al estado tecnicos
					if (documento.exists) {						
						setInicioJornadaObtenido(documento.data().inicioJornada);
					} else {						
						console.log('El documento no existe');
					}

				} catch (error) {
					// Manejo de errores en caso de que ocurra algún problema al obtener los datos
					console.error('Error al obtener inicio de jornada:', error);
				}
			}

			// la llamo
			obtenerInicioJornada();
		}		

	}, [idRoles, sesion]);    

	// Devuelvo el estado con el gasto que contiene un objeto con el gasto
	return [inicioJornadaObtenido];	
}

export default useObtenerInicioDeJornada;