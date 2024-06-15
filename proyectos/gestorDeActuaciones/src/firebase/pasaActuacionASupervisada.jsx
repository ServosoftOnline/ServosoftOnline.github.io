/*
    FUNCION QUE AGREGA LAS INCIDENCIAS YA SUPERVISADAS A LA COLECCION ACTUALIZACIONESSUPERVISADAS
    
        - Por parámetros obtengo la actuacion y los comentarios del supervisor
        - Actualizo el estado y su descripción
        - Añado al objeto actuacion los comentarios del supervisor y la fecha de hoy 
*/

// Firebase
import { db } from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

// Date-fns
import { getUnixTime } from "date-fns";

// La función
const pasaActuacionASupervisada = async (actuacion, comentariosSupervision) => {

    // Actualizo el objeto antes de añadirlo
    const fechaSupervison = getUnixTime(new Date());
    actuacion.estado = 'EstadoSupervisado';
    actuacion.estadoDescripcion = 'Supervisada';
    actuacion.comentariosSupervision = comentariosSupervision;
    actuacion.fechaSupervision = fechaSupervison;    
    
    // Añado en la coleccion actuacionesSupervisadas
    try {       
        await addDoc(collection(db, 'actuacionesSupervisadas'), actuacion);
        console.log('Añadido actuacion a actuacionesSupervisadas');

    } catch (error) {
        console.error('Error al agregar el documento a la coleccion actuacionesSupervisadas');
        console.log(error);
    }

}

export default pasaActuacionASupervisada;