/*
    HOOK QUE OBTIENE LOS TECNICOS QUE ACOMPAÑARÁN EN UNA ACTUACION PARTIR DE SU ID
*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

// Mi Hook
const useObtenerTecnicosAPartirDelIdActuacion = (idActuacion) => {

    // Estados
	const [todosLosTecnicos, establecerTodosLosTecnicos] = useState('');	
	const {sesion} = useAuth();	
	
	// Ejecuto el efecto para realizar la consulta de forma asincrona
	useEffect(() => {

		// Si hay sesión abierta realizo la consulta
		if(sesion) {

			const obtenerTecnicos = async () => {
				try {
					// Obtengo el documento de forma asincrónica
					const documento = await getDoc(doc(db, 'actuaciones', idActuacion));
			
					// Si el documento existe, obtengo los datos de los técnicos y los añado al estado tecnicos
					if (documento.exists) {
						const data = documento.data();
						const { tecnico1, tecnico2, tecnico3, tecnico4, tecnico5 } = data;
						const tecnicosAcompañantes = [tecnico1, tecnico2, tecnico3, tecnico4, tecnico5];
						establecerTodosLosTecnicos(tecnicosAcompañantes);
					} else {
						// Si el documento no existe, podrías manejar el caso de alguna manera, como lanzando un error o mostrando un mensaje al usuario
						console.log('El documento no existe');
					}

				} catch (error) {
					// Manejo de errores en caso de que ocurra algún problema al obtener los datos
					console.error('Error al obtener los datos de los técnicos:', error);
				}
			}

			// la llamo
			obtenerTecnicos();
		}		

	}, [idActuacion, sesion]);    

	// Devuelvo el estado con el gasto que contiene un objeto con el gasto
	return [todosLosTecnicos];	
}

export default useObtenerTecnicosAPartirDelIdActuacion;
