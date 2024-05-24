/*
    FUNCION QUE ACTUALIZA EL ESTADO DE UNA ACTUACION A "Finalizada"
*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc } from "firebase/firestore";


// La función
const actualizaActuacionSupervisada = async (idActuacion, comentariosSupervision) => {
            
    return await updateDoc(doc(db, 'actuaciones', idActuacion), {        
        estado: 'EstadoSupervisado',
        estadoDescripcion: 'Supervisada',
        comentariosSupervision: comentariosSupervision
    });
           
}

export default actualizaActuacionSupervisada;