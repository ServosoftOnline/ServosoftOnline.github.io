/*
    HOOK QUE PERMITE OBTENER LOS DATOS QUE MOSTRARÉ EN EL COMPONENTE LISTA DE GASTOS
        - Importo
        - Creo la funcion hook
            - Contiene el estado gastos con una array con todos lo gastos
            - Conectarse a la base de datos y añadirlos en el estado gastos
                - Me conecto una sola vez mediante un efecto
            - Devuelvo el array con todos los gastos
*/

import {useState, useEffect} from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot} from "firebase/firestore";

const useObtenerGastos = () => {

    // Estado que contiene un array con todos los gastos
    const [gastos, cambiarGastos] = useState([1,2,3]);

    // Me conecto a la coleccion gastos de la base de datos una sola vez.
    useEffect(() => {
        onSnapshot(
            collection(db, 'gastos'),

            // - La funcion tiene un parametro que suele llamarse snap o snapshot que contiene la vista de la base de datos
            // - Genero un arreglo que contiene a los usuarios de la colección
            //     - La propiedad docs contiene un array con todos los documentos guardados cada uno en un objeto
            //     - La funcion data devuelve el objeto con el documento
            //     - Recorro todos los documentos, voy devolviendo un objeto con todo los documentos que tenia mas el id que genero firestore
            //     - Añado el arreglo al estado de los contactos


            // Funcion que se ejecuta cada vez que halla un cambio en la base de datos
            (snapshot) => {
                console.log(snapshot.docs[0].data());
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    // Los devuelvo para trabajar con ellos en ListaDeGastos.jsx
    return [gastos];

}

export default useObtenerGastos;