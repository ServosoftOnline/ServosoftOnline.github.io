/*
    FUNCION QUE ELIMINA UN GASTO DE LA BASE DE DATOS

        - Importo:
            - la base de datos
            - las funciones para acceder al documento y borrarlo

        - Creo la funcion asincrona
            - llamo a la funcion deleteDoc(doc(base de datos, "coleccion", id a borrar))
            - Gestiono la promesa y obtengo el error si se produjese y lo muestro en consola
            
*/

// Firebase
import { db } from './firebaseConfig';
import { doc, deleteDoc } from "firebase/firestore";

// La función
const eliminarGasto = async (id) => {    
    try {
        await deleteDoc(doc(db, "gastos", id));

    } catch (error) {
        console.log(error);
    }         
}

export default eliminarGasto;