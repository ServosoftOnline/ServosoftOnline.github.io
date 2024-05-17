/*
    HOOK QUE OBTIENE UNA ACTUACION AL COMPLETO A PARTIR DE SU ID
*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import {collection, onSnapshot, query, where} from 'firebase/firestore';

// Hook
const useObtenerNombreSiEstaEnCaminoOEncliente = (idActuacion) => {

    // Estados
	const [tecnicoEnCaminoOEnCliente, setTecnicoEnCaminoOEnCliente] = useState('');	
	const {sesion} = useAuth();	
	
	// Ejecuto el efecto para realizar la consulta de forma asincrona
	useEffect(() => {

		// Si hay sesión abierta realizo la consulta
		if(sesion) {

			// Consulta 
			const consultaObtenerTecnico = query(
				collection(db, 'roles'),
				where('idActuacion', '==', idActuacion)
			);
			
			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = (onSnapshot(consultaObtenerTecnico, (snapshot) => {
				setTecnicoEnCaminoOEnCliente(snapshot.docs.map((documento) => {								
					return (documento.data().nombre);
				}));			
			}, (error) => {console.log(error)}));		

			// Cierra la consulta
			return unsuscribe;
		}		

	}, [idActuacion, sesion]);    

	// Devuelvo el estado con el gasto que contiene un objeto con el gasto
	return [tecnicoEnCaminoOEnCliente];	
}

export default useObtenerNombreSiEstaEnCaminoOEncliente;
