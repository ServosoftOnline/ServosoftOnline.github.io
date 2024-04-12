/*
    HOOK QUE COMPRUEBA SI EXISTE EN LA COLECCION INCIDENCIAS SI EXISTE UN ARRAY DE INCIDENCIAS
*/

// React
import {useState, useEffect} from 'react';

// Contextos
import {useAuth} from '../contextos/AuthContext';

// Firebase
import {db} from '../firebase/firebaseConfig';
import {collection, onSnapshot, query, where} from 'firebase/firestore';

const useIncidenciasDuplicadas = (data) => {
	
	const [incidenciasDuplicadas, setIncidenciasDuplicadas] = useState([]);
	const { sesion } = useAuth();

	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {
		
		const obtenerIncidenciasDuplicadas = ((codigoIncidencia) => {
			
			if (sesion) {	
				console.log('Comprobando la incidencia: ' + codigoIncidencia)			;
	
				// Consulta 
				const estaDuplicada = query(
					collection(db, 'incidencias'),
					where('codigoIncidencia', '==', codigoIncidencia)
				);
				
				// Ejecuta la consulta. Si se produjera un error lo muestro en consola
				const unsuscribe = onSnapshot(estaDuplicada, (snapshot) => {
					setIncidenciasDuplicadas(snapshot.docs.map((documento) => {		
						console.log('NO ENTRO: no Se ejecuta el return de useIncideciasDuplicadas');		
						return (documento.data().codigoIncidencia);
					}));			
				}, (error) => {console.log(error)});						
				
				// Cierra la consulta
				return unsuscribe;
			}
		});
		
		// Voy llamando a obtenerIncidenciasDuplicadas por cada incidencia obtenida
		data.forEach((incidencia) => {			
			obtenerIncidenciasDuplicadas(incidencia['Código Incidencia']);
		});
	
	}, [sesion, data]);
	
		// Devuelvo el estado gastos
		// console.log('devuelvo: ' + incidenciasDuplicadas);
		return [incidenciasDuplicadas];

}

export default useIncidenciasDuplicadas;
