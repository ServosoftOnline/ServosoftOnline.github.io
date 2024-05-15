/*
    FUNCION QUE ACTUALIZA EL ESTADO DE UNA TECNICO A "ENCAMINO"

*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc} from "firebase/firestore";

// La función
const actualizaTecnicoEnCamino = async (idRoles, idActuacion) => {
        
    return await updateDoc(doc(db, 'roles', idRoles), {        
        estado: 'EnCamino',
        idActuacion: idActuacion
    });
           
}

export default actualizaTecnicoEnCamino;