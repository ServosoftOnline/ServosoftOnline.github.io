/*
    HOOK QUE PERMITE OBTENER LOS DATOS QUE MOSTRARÉ EN EL COMPONENTE LISTA DE GASTOS
        - Importo
        - Creo la funcion hook
            - Contiene el estado gastos con una array con todos lo gastos
            - Conectarse a la base de datos y añadirlos en el estado gastos
                - Me conecto una sola vez mediante un efecto
            - Devuelvo el array con todos los gastos
*/

import {useState, useEffect} from 'react';
import {db} from './../firebase/firebaseConfig';
import {useAuth} from './../contextos/AuthContext';
import { collection, onSnapshot, query, orderBy, where, limit, startAfter } from 'firebase/firestore';

const useObtenerGastos = () => {

	const {sesion} = useAuth();
	const [gastos, cambiarGastos] = useState([]);
	const [ultimoGasto, cambiarUltimoGasto] = useState(null);
	const [hayMasPorCargar, cambiarHayMasPorCargar] = useState(false);

	const obtenerMasGastos = () => {
		const consulta = query(
			collection(db, 'gastos'),
			where('uidUsuario', '==', sesion.uid),
			orderBy('fecha', 'desc'),
			limit(10),
			startAfter(ultimoGasto)
		);

		onSnapshot(consulta, (snapshot) => {
			if(snapshot.docs.length > 0){
				cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);

				cambiarGastos(gastos.concat(snapshot.docs.map((gasto) => {
					return {...gasto.data(), id: gasto.id}
				})))
			} else {
				cambiarHayMasPorCargar(false);
			}
		}, error => {console.log(error)});
	}

	useEffect(() => {
		const consulta = query(
			collection(db, 'gastos'),
			where('uidUsuario', '==', sesion.uid),
            // Esta ordenación por fecha descendente requiere un indice compuesto en la colección y se realiza en la consola firebase
			orderBy('fecha', 'desc'),
			limit(10)
		);

		const unsuscribe = onSnapshot(consulta, (snapshot) => {
			if(snapshot.docs.length > 0){
				cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);
				cambiarHayMasPorCargar(true);
			} else {
				cambiarHayMasPorCargar(false);
			}
			
			cambiarGastos(snapshot.docs.map((gasto) => {
				return {...gasto.data(), id: gasto.id}
			}));
		});

		return unsuscribe;
	}, [sesion]);

	return [gastos, obtenerMasGastos, hayMasPorCargar];

}
 
export default useObtenerGastos;