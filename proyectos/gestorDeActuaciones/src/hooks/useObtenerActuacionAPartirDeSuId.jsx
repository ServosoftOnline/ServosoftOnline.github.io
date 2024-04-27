/*
    HOOK QUE OBTIENE UNA ACTUACION AL COMPLETO A PARTIR DE SU ID
*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

// Hook
const useObtenerActuacionAPartirDeSuId = (idActuacion) => {

    // Estados
	const [actuacion, establecerActuacion] = useState('');	
	const {sesion} = useAuth();	
	
	// Ejecuto el efecto para realizar la consulta de forma asincrona
	useEffect(() => {

		// Si hay sesión abierta realizo la consulta
		if(sesion) {

			// Declaro la función obtener Gasto
			const obtenerActuacion = async () => {

				// Obtengo el documento de forma asincrona			
				const documento = await getDoc(doc(db, 'actuaciones', idActuacion));
				
				// Si lo obtuve lo añado en el estado gasto. si no lo redirigo a lista de gastos
				if(documento.exists) establecerActuacion(documento.data());				
			}

			// la llamo
			obtenerActuacion();
		}		

	}, [idActuacion, sesion]);    

	// Devuelvo el estado con el gasto que contiene un objeto con el gasto
	return [actuacion];	
}

export default useObtenerActuacionAPartirDeSuId;
