/*
    FUNCION QUE AGREGA UN GASTO A LA BASE DE DATOS
        - los datos ya se encuentran validados antes de llamar a esta función
*/

// Firebase
import { db } from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

// date-fns
import { getUnixTime } from "date-fns";
import { fromUnixTime } from "date-fns";

const agregarGasto = async (
    categoria,
    fecha,
    inputDescripcion,
    inputCantidad,
    cambiarMensaje,
    cambiarValidacion) => {

        // La fecha la paso en segundos y la cantidad con decimales con dos dígitos
        try {            
            await addDoc(collection(db, 'gastos'), {
            categoria: categoria,
            fecha: getUnixTime(fecha),
            descripcion: inputDescripcion,
            importe: parseFloat(inputCantidad).toFixed(2)
            });

            cambiarMensaje('Gasto añadido con éxito');
            cambiarValidacion('correcta');

        } catch(error) {
            console.log(error);
            cambiarValidacion('incorrecta');        
        }
}

export default agregarGasto;