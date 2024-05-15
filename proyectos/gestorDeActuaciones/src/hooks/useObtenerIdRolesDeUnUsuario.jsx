/*
    HOOK QUE DEVUELVE EL NOMBRE DE UN USUARIO Y SU ID ASOCIADO EN LA COLECCION ROLES

*/

// React
import { useState, useEffect } from 'react';

// Contextos
import { useAuth } from '../contextos/AuthContext';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

// Hook
const useObtenerIdRolesDeUnUsuario = () => {

    // Estados
    const { sesion } = useAuth();    
    const [idRoles, setIdRoles] = useState(null);

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
            const unsuscribe = onSnapshot(consultaObtenerNombre, (snapshot) => {
                snapshot.docs.forEach((documento) => {                    
                    setIdRoles(documento.id);
                });
            }, (error) => { console.log(error) });

            // Cierra la consulta
            return unsuscribe;
        }

    }, [sesion]);

    // Devuelvo los estados nombre y idUsuario
    return [idRoles];
}

export default useObtenerIdRolesDeUnUsuario;
