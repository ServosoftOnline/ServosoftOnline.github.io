/*
    HOOK QUE OBTIENE EL NOMBRE DE UN USUARIO

*/

// React
import {useState, useEffect} from 'react';

// Contextos
import {useAuth} from '../contextos/AuthContext';

// Firebase
import {db} from '../firebase/firebaseConfig';
import {collection, onSnapshot, query, where} from 'firebase/firestore';

// Hook
const useObtenerIdActuacionDeUnUsuario = () => {

	// Estados
	const {sesion} = useAuth();	
	const [idActuacionDeUnUsuario, setIdActuacionDeUnUsuario] = useState([]);	
	
	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

	// Si existe sesión abierta realizo la consulta
		if (sesion) {

			// Consulta 
			const consultaObtenerNombre = query(
				collection(db, 'roles'),
				where('idUsuario', '==', sesion.uid)
			);
			
			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = (onSnapshot(consultaObtenerNombre, (snapshot) => {
				setIdActuacionDeUnUsuario(snapshot.docs.map((documento) => {								
					return (documento.data().idActuacion);
				}));			
			}, (error) => {console.log(error)}));		

			// Cierra la consulta
			return unsuscribe;
		}

	}, [sesion]);

	// Devuelvo el estado gastos
	return [idActuacionDeUnUsuario];
}
 
export default useObtenerIdActuacionDeUnUsuario;