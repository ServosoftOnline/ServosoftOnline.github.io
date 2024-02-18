/*
    FUNCION EDITA UN GASTO DE LA BASE DE DATOS

*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc } from "firebase/firestore";

// date-fns
import { getUnixTime } from "date-fns";

// La función
const editarGasto = async (id, categoria, fecha, inputDescripcion, inputCantidad) => {

    return await updateDoc(doc(db, 'gastos', id), {
        categoria: categoria,
        fecha: getUnixTime(fecha),
        descripcion: inputDescripcion,
        importe: Number(parseFloat(inputCantidad).toFixed(2)),
        uidUsuario: usuario
    });        
}

export default editarGasto;