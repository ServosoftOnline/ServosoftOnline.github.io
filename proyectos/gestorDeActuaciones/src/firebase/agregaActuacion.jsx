/*
    FUNCION QUE AGREGA INDICENCIAS EN LA BASE DE DATOS
        - El objeto data contiene los datos obtenidos del archivo excel importado en el modulo de direccion
        - Lo recorro y los voy añadiendo a la coleccion incidencias de firestore de forma asincrona
        - IMPORTANTE: Algunos elementos de la cabecera del archivo excel contienen espacios y tildes
            - Por eso debo usar corchetes y comillas en los valores del objeto a añadir
        - IMPORTANTE: Si el archivo a importar cambiara un solo caracter en su cabecera no creo que se inserte bien
*/

// Firebase
import { db } from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

// Date-fns
import { getUnixTime } from "date-fns";

// La función
const agregaActuacion = async (data) => {
    console.log('Extraigo la data y la añado a la colección'); 
    data.forEach(async (registro) => {

        try {

            // Creo la coleccion actuaciones
            console.log(registro);
            await addDoc(collection(db, 'actuaciones'), {

                // Obtenidos desde el excel
                "codigoIncidencia": registro["Cod Incidencia"],
                "nombre": registro["Nombre"],
                "descripcion": registro["Descripción"],

                // Añado los que necesito
                "linkDorus": "",
                "poblacion": "",
                "direccion": "",
                "coordenadas": "",
                "telefonos": "",
                "zonaInstalacion": "",
                "tipoActuacion": "",
                "dificultad": "",
                "puntos":0,
                "tipoTrabajo": "",
                "idTipoTrabajo": "",                
                "stb":"",
                "estado": "EstadoPteCoordinar", // Primer estado de la actuación
                "comentariosTecnicos": "",
                "fechaIncidencia": getUnixTime(new Date()),
                "fechaCitacion": getUnixTime(new Date()),              
                "estadoDescripcion": "Pendiente de coordinar",                
                "tecnico1": "",
                "tecnico2": "",
                "tecnico3": "",
                "tecnico4": "",
                "tecnico5": ""
            });

        } catch (error) {
            console.error("Error al agregar el documento:", error);
        }
    });
}

export default agregaActuacion;