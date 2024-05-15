/*
    FUNCION QUE ACTUALIZA EL ESTADO DE UNA ACTUACION A "ENCAMINO"

        - Modifico el estado y estadoDescripcion con EstadoEnCamino y En camino respectivamente
        - HoraEnCamino con el momento actual
        - horaDeLlegada borro su contenido por si ya fui en otro momento y tuviera un momento guardado

*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc, deleteField} from "firebase/firestore";

// date-fns
import { getUnixTime } from "date-fns";

// La función
const actualizaActuacionEnCamino = async (idActuacion) => {
        
    return await updateDoc(doc(db, 'actuaciones', idActuacion), {        
        estado: 'EstadoEnCamino',
        estadoDescripcion: 'En camino',
        horaEnCamino: getUnixTime(new Date()),
        horaDeLlegada: deleteField()
    });
           
}

export default actualizaActuacionEnCamino;