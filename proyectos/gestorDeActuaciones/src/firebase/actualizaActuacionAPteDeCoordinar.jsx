/*
    FUNCION QUE ACTUALIZA EL ESTADO DE UNA ACTUACION A PTE DE COORDINAR

        - La llama el módulo supervision cuando el supervisor decide que la supervisión no ha sido correcta
        - Elimino la hora de llegada, hora de encamino, hora de finalización que estuvieran guardadas
        - Igual con los tecnicos
        - Añado los comentarios que el supervisor ha dejado de forma opcional
*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc, deleteField } from "firebase/firestore";


// La función
const actualizaActuacionAPteDeCoordinar = async (idActuacion, comentariosSupervision) => {
            
    return await updateDoc(doc(db, 'actuaciones', idActuacion), {        
        estado: 'EstadoPteCoordinar',
        estadoDescripcion: 'Pendiente de coordinar',
        // fechaCitacion: deleteField(),
        horaDeLlegada: deleteField(),
        horaEncamino: deleteField(),
        horaFinalizacion:deleteField(),
        tecnico1: deleteField(),
        tecnico2: deleteField(),
        tecnico3: deleteField(),
        tecnico4: deleteField(),
        tecnico5: deleteField(),
        comentariosSupervision: comentariosSupervision
    });
           
}

export default actualizaActuacionAPteDeCoordinar;