/*
    HOOK QUE OBTIENE LAS INCIDENCIAS PENDIENTES DE COORDINAR
*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where, orderBy, limit} from 'firebase/firestore';

// Hook
const useObtenerIncidenciasPtesDeAsignar = () => {

    // Estados
	const {sesion} = useAuth();	
	const [incidenciasSinAsignar, asignarIncidenciasSinAsignar] = useState([]);

	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

		// Si existe sesión abierta realizo la consulta
		if (sesion) {			

			// Consulta 
			const consultaPrimeras10Incidencias = query(
				collection(db, 'actuaciones'),			
				where('estado', '==', 'pte_de_coordinar'),
				// orderBy('fechaIncidencia', 'asc'),
				limit(10)
			);

			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = onSnapshot(consultaPrimeras10Incidencias, (snapshot) => {
				asignarIncidenciasSinAsignar(snapshot.docs.map((documento) => {
					return ({...documento.data()});
				}));			
			}, (error) => {console.log(error)});		

			// Cierra la consulta
			return unsuscribe;
		}

	}, [sesion]);

	// Devuelvo el estado gastos
	return [incidenciasSinAsignar];
}

export default useObtenerIncidenciasPtesDeAsignar;

/* 
---------------------------------------------------------------------------

// Estados
const {sesion} = useAuth();	
const [gastos, cambiarGastos] = useState([]);
const [ultimoGasto, cambiarUltimoGasto] = useState(null);
const [hayMasPorCargar, cambiarHayMasPorCargar] = useState(false);

// Funcion que muestra mas gastos a partir del último gasto obtenido
const obtenerMasGastos = () => {

	// Consulta que obtiene los siguientes 10 gastos a partir del ultimo gasto mostrado
	const consultaObtener10GastosMas = query(
		collection(db, 'gastos'),
		where('uidUsuario', '==', sesion.uid),
		orderBy('fecha', 'asc'),
		limit(10),
		startAfter(ultimoGasto)
	);

	// Ejecuta la consulta de más gastos
	const unsuscribe = onSnapshot(consultaObtener10GastosMas, (snapshot) => {
		// si sigo teniendo mas gastos
		if(snapshot.docs.length > 0 ) {

			// Actualizo mi último gasto
			cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);

			// Concateno los gastos que ya tenía a los nuevos y añado un id con el id del gasto
			cambiarGastos(gastos.concat(snapshot.docs.map((gasto) => {
				return {...gasto.data(), id: gasto.id}
			})));

		} else {
			// Actualizo el estado
			cambiarHayMasPorCargar(false);
		}
		// Si falla la ejecucion de la consulta muestro el error en consola	
	}, error => {console.log(error)});

	// Cierra la consulta de más gastos   
	return unsuscribe;
}

// Efecto que se produce al principio y si cambia la sesion
useEffect(() => {

	// Si existe sesion ejecuto la consulta
	if(sesion){

		// Consulta que obtiene los 10 primeros gastos
		const consultaObtenerPrimeros10Gastos = query(
			collection(db, 'gastos'),
			where('uidUsuario', '==', sesion.uid),
			orderBy('fecha', 'asc'),
			limit(10)
		);
	
		// Ejecuta la consulta de los 10 primeros gastos
		const unsuscribe = onSnapshot(consultaObtenerPrimeros10Gastos, (snapshot) => {
			// Si quedan más gastos por mostrar
			if(snapshot.docs.length > 0){
				// Guardo como último gasto, su índice será la longitud -1 porque los arrays empiezan en 0
				cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);
				// Actualizo el estado
				cambiarHayMasPorCargar(true);
				} else {
					cambiarHayMasPorCargar(false);
				}

			// Añado los primeros gastos y el id del gasto
			cambiarGastos(snapshot.docs.map((gasto) => {
				return {...gasto.data(), id: gasto.id}
			}));
		});		

		// Cierra la consulta de los 10 primeros gastos    
		return unsuscribe;
	}

}, [sesion]);

// Devuelvo el estado gastos, la función obtenerMasGastos y el estado hayMasPorCargar
return [gastos, obtenerMasGastos, hayMasPorCargar];

*/