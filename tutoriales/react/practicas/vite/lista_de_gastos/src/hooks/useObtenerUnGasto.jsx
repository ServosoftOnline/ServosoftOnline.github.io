/*
    HOOK QUE OBTIENE UN SOLO GASTO A PARTIR DE SU ID

*/

// React
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

// Hook
const useObtenerUnGasto = (idGasto) => {

	const navigate = useNavigate();
	const [gasto, establecerGasto] = useState('');	
	
	// Conecto una sola vez y al principio a la base de datos y obtengo el gasto.
	useEffect(() => {

		// Declaro la función obtener Gasto
		const obtenerGasto = async () => {
			// Obtengo el documento de forma asincrona			
			const documento = await getDoc(doc(db, 'gastos', idGasto));
			
			// Si lo obtuve lo añado en el estado gasto. si no lo redirigo a lista de gastos
			if(documento.exists) establecerGasto(documento.data());
			else navigate('/lista');
		}

		// la llamo
		obtenerGasto();

	}, [navigate, idGasto]);    

	// Devuelvo el estado con el gasto que contiene un objeto con el gasto
	return [gasto];	
}
 
export default useObtenerUnGasto;