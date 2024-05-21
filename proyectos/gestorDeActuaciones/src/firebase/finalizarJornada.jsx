/*
    FUNCION QUE INICIA LA JORNADA DE UN TECNICO
        - Actualiza inicio de jornada a si        

*/

// Firebase
import { db } from './firebaseConfig';
import { deleteField, doc, updateDoc} from "firebase/firestore";

// La función
const finalizarJornada = (idRoles) => {
        
    return updateDoc(doc(db, 'roles', idRoles), {  
        estado: 'descanso',
        idActuacion: deleteField(),
        inicioJornada: false       
            
    });
           
}

export default finalizarJornada;