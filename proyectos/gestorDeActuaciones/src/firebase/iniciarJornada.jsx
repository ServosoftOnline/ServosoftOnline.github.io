/*
    FUNCION QUE INICIA LA JORNADA DE UN TECNICO
        - Actualiza inicio de jornada a si        

*/

// Firebase
import { db } from './firebaseConfig';
import { deleteField, doc, updateDoc} from "firebase/firestore";

// La función
const iniciarJornada = (idRoles) => {
        
    return updateDoc(doc(db, 'roles', idRoles), {  
        estado: 'Citado',
        idActuacion: deleteField(),
        inicioJornada: true        
    });
           
}

export default iniciarJornada;