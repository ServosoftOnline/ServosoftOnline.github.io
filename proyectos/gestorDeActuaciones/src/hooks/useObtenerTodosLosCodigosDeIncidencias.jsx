/*
    HOOK QUE OBTIENE TODOS LOS CODIGOS DE INCIDENCIAS DE LA COLECCION INCIDENCIAS
*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

// Hook
const useObtenerTodosLosCodigosDeIncidencias = () => {

    // Estados
    const { sesion } = useAuth();
    const [todosLosCodigosdeIncidenciaDeLaBBDD, asignarTodosLosCodigosDeIncidenciaDeLaBBDD] = useState([]);

    // Ejecuto el efecto para realizar la consulta de forma asincrona
    useEffect(() => {

        // Si existe sesión abierta realizo la consulta
        if (sesion) {

            // Consulta
            const unsubscribe = onSnapshot(collection(db, 'actuaciones'), (snapshot) => {
                const codigosIncidencia = snapshot.docs.map((documento) => {
                    return documento.data().codigoIncidencia; // Accede al campo 'codigoIncidencia'
                });
                asignarTodosLosCodigosDeIncidenciaDeLaBBDD(codigosIncidencia);
            }, (error) => {
                console.log(error)
            });

            // Cierra la consulta            
			return unsubscribe;
        }

    }, [sesion]);

    // Devuelvo el estado gastos
    return [todosLosCodigosdeIncidenciaDeLaBBDD];
}

export default useObtenerTodosLosCodigosDeIncidencias;
