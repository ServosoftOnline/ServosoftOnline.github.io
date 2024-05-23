/*
    FUNCION QUE ACTUALIZA LA COLECCION ACTUACIONES

*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc } from "firebase/firestore";

// La función
const actualizaColeccionActuaciones = async (
        {horaEnCamino, horaDeLlegada, horaFinalizacion, comentariosTecnicos, estado, estadoDescripcion, idActuacion}
    ) => {

    console.log(horaEnCamino, horaDeLlegada, horaFinalizacion, comentariosTecnicos, estado, estadoDescripcion, idActuacion);

    return await updateDoc(doc(db, 'actuaciones', idActuacion), { 
        horaEnCamino: horaEnCamino,
        horaDeLlegada: horaDeLlegada,
        horaFinalizacion: horaFinalizacion,        
        comentariosTecnicos: comentariosTecnicos,            
        estado: estado,
        estadoDescripcion: estadoDescripcion        
    });
           
}

export default actualizaColeccionActuaciones;