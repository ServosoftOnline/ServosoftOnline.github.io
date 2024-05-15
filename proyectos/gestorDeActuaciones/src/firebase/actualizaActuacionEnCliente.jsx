/*
    FUNCION QUE ACTUALIZA EL ESTADO DE UNA ACTUACION A "EN CLIENTE"
    
        - Asigno el estado y estadoDescripcion con EstadoEnCliente y En cliente respectivamente
        - Almaceno horaDeLlegada el momento actual

*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc } from "firebase/firestore";

// date-fns
import { getUnixTime } from "date-fns";

// La función
const actualizaActuacionEnCliente = async (idActuacion) => {
            
    return await updateDoc(doc(db, 'actuaciones', idActuacion), {        
        estado: 'EstadoEnCliente',
        estadoDescripcion: 'En cliente',
        horaDeLlegada: getUnixTime(new Date())
    });
           
}

export default actualizaActuacionEnCliente;