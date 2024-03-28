/*
    HOOK QUE OBTIENE EL ROL DE UN USUARIO

*/

// React
import {useState, useEffect} from 'react';

// Contextos
import {useAuth} from '../contextos/AuthContext';

// Firebase
import {db} from '../firebase/firebaseConfig';
import {collection, onSnapshot, query, where} from 'firebase/firestore';

// Hook
const useObtenerRolDeUnUsuario = () => {

	// Estados
	const {sesion} = useAuth();	
	const [rol, asignarRol] = useState([]);	
	
	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

	// Si existe sesión abierta realizo la consulta
		if (sesion) {

			// Consulta 
			const consultaObtenerRol = query(
				collection(db, 'roles'),
				where('idUsuario', '==', sesion.uid)
			);
			
			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = onSnapshot(consultaObtenerRol, (snapshot) => {
				asignarRol(snapshot.docs.map((documento) => {				
					return (documento.data().idRol);
				}));			
			}, (error) => {console.log(error)});		

			// Cierra la consulta
			return unsuscribe;
		}

	}, [sesion]);

	// Devuelvo el estado gastos
	return [rol];
}
 
export default useObtenerRolDeUnUsuario;