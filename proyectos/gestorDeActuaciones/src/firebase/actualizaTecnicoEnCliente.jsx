/*
    FUNCION QUE ACTUALIZA EL ESTADO DE UNA TECNICO A "ENCAMINO"

*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc} from "firebase/firestore";

// La función
const actualizaTecnicoEnCliente = async (idRoles) => {
        
    return await updateDoc(doc(db, 'roles', idRoles), {        
        estado: 'EnCliente'
    });
           
}

export default actualizaTecnicoEnCliente;