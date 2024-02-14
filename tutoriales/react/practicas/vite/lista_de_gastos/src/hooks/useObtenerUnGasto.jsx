/*
    HOOK QUE OBTIENE UN SOLO GASTO A PARTIR DE SU ID

*/

// React
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

// Firebase
import {db} from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

// Hook
const useObtenerUnGasto = (idGasto) => {
	// console.log('Gasto que le llega al hook: ' + idGasto);
	const navigate = useNavigate();
	const [gasto, establecerGasto] = useState('inicial');
	
	// Conecto una sola vez y al principio a la base de datos y obtengo el gasto.
	useEffect(() => {

		const obtenerGasto = async () => {
			// Obtengo el documento de forma asincrona
			try {
				const documento = await getDoc(doc(db, 'gastos', idGasto));
				console.log(documento.data());
				// Si lo obtuve cambio el estado gasto y lo añado
				if(documento.exists) establecerGasto(documento);
				else navigate('/lista');

			} catch (error) {
				console.log(error);
			}
		}
		obtenerGasto();


	}, [navigate, idGasto]);    

	// Devuelvo el gasto
	return [gasto];	
}
 
export default useObtenerUnGasto;