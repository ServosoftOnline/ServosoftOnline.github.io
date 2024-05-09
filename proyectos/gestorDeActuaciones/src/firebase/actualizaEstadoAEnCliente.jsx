/*
    FUNCION QUE ACTUALIZA EL ESTADO DE UNA ACTUACION A "EN CLIENTE"

*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc } from "firebase/firestore";

// La función
const actualizaEstadoAEnCliente = async ({estado, estadoDescripcion, horaDeLlegada, idActuacion}) => {
    console.log('Hora de llegada: ' + horaDeLlegada) ;
    return await updateDoc(doc(db, 'actuaciones', idActuacion), {        
        estado: estado,
        estadoDescripcion: estadoDescripcion,
        horaDeLlegada: horaDeLlegada
    });
           
}

export default actualizaEstadoAEnCliente;