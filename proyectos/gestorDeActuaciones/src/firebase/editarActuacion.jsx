/*
    FUNCION EDITA UNA ACTUACION EN FIRESTORE

*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc } from "firebase/firestore";

// Date-fns
import { getUnixTime } from "date-fns";

// La función
const editarActuacion = async ({linkDorus, direccion, poblacion, zonaInstalacion, coordenadas, telefonos,
    tipoActuacion, dificultad, puntos, tipoTrabajo, idTipoTrabajo, stb, estado, estadoDescripcion, fechaCitacion, tecnico1, tecnico2,
    tecnico3, tecnico4, tecnico5,comentariosTecnicos, idActuacion}) => {
        
    return await updateDoc(doc(db, 'actuaciones', idActuacion), {
        linkDorus: linkDorus,
        direccion: direccion,
        poblacion: poblacion,
        zonaInstalacion: zonaInstalacion,
        coordenadas: coordenadas,
        telefonos: telefonos,
        tipoActuacion: tipoActuacion,
        dificultad: dificultad,
        puntos: puntos,
        tipoTrabajo: tipoTrabajo,
        idTipoTrabajo: idTipoTrabajo,
        stb: stb,
        estado: estado,
        estadoDescripcion: estadoDescripcion,
        fechaCitacion: fechaCitacion,
        tecnico1: tecnico1,
        tecnico2: tecnico2,
        tecnico3: tecnico3,
        tecnico4: tecnico4,
        tecnico5: tecnico5,
        comentariosTecnicos: comentariosTecnicos,
        fechaUltimaActualizacion: getUnixTime(new Date())
    });
           
}

export default editarActuacion;