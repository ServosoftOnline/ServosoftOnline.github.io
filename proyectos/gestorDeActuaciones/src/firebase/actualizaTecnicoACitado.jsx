/*
    FUNCION QUE ELIMINA EL ESTADO DE UN TECNICO QUE PODRÍA ESTAR EN CAMINO O EN CLIENTE
        - Lo pasa de nuevo a citado
        - Elimina el idActuacion donde estaba

*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc, deleteField} from "firebase/firestore";

// La función
const actualizaTecnicoACitado = async (idRoles) => {
        
    return await updateDoc(doc(db, 'roles', idRoles), {        
        estado: 'Citado',
        idActuacion: deleteField()
    });
           
}

export default actualizaTecnicoACitado;