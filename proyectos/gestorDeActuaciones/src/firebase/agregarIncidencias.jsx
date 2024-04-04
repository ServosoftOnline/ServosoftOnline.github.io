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

// date-fns
import { getUnixTime } from "date-fns";

// La función

const agregarIncidencias = async (data) => {
    console.log('Extraigo la data y la añado a la colección'); 
    data.forEach(async (registro) => {
        try {
            console.log(registro);
            await addDoc(collection(db, 'incidencias'), {
                "codigoCliente": registro["Código Cliente"],
                "dniCliente": registro["DNI Cliente"],
                "nombre": registro["Nombre"],
                "telefono": registro["Teléfono Contacto"],
                "contrato": registro["Contrato"],
                "producto": registro["Producto"],
                "tipoServicio": registro["Tipo Servicio"],
                "tienda": registro["Tienda"],
                "codigoIncicencia": registro["Código Incidencia"],
                "tipo": registro["Tipo"],
                "nivel": registro["Nivel"],
                "fechaIncidencia": registro["Fecha Incidencia"],
                "hora": registro["Hora"],
                "descripcion": registro["Descripción"],
                "accion": registro["Acción"],
                "estado": registro["Estado"],
                "poblacionInstalacion": registro["Población Instalación"],
                "empresaInstaladora": registro["Empresa Instaladora"],
                "fechaCitacion": registro["Fecha Citacion"],
                "incidenciaAtendida": registro["Incidencia Atendida"],
                "fechaAtendida": registro["Fecha Atendida"],
                "horaAtendida": registro["Hora Atendida"],
                "fechaCerrada": registro["Fecha Cerrada"],
                "horaCerrada": registro["Hora Cerrada"],
                "usuarioCerrada": registro["Usuario Cerrada"],
                "desplazamiento": registro["Desplazamiento"],
                "motivoDeError": registro["Motivo de error"]
            });

        } catch (error) {
            console.error("Error al agregar documento:", error);
        }
    });
}

export default agregarIncidencias;