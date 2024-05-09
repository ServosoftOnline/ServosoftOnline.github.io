/*
    FUNCION QUE ACTUALIZA EL ESTADO DE UNA ACTUACION A "ENCAMINO"

*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc } from "firebase/firestore";

// La función
const actualizaEstadoAEnCamino = async ({estado, estadoDescripcion, horaEnCamino, idActuacion}) => {
        
    return await updateDoc(doc(db, 'actuaciones', idActuacion), {        
        estado: estado,
        estadoDescripcion: estadoDescripcion,
        horaEnCamino: horaEnCamino
    });
           
}

export default actualizaEstadoAEnCamino;