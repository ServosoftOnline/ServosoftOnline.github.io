// firebase
import {db} from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

// Función que añade los datos en firestore 
const agregarGasto = async (categoria, fecha, descripcion, importe) => {

    console.log('Añadiré esta informacion:');
    console.log(categoria);
    console.log(fecha);
    console.log(descripcion);
    console.log(importe);

    
    

}

export default agregarGasto;




/*


// React
import React from "react";
import { useState, useContext } from "react";

// Elementos
import Input from "../elementos/Input";
import Boton from "../elementos/Boton";
import Mensaje from "../elementos/Mensaje";

// Contexto
import { ContextoMensaje } from "../contextos/contextoMensaje";

// FireStore
import db from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


const Formulario = () => {
    
    // Estados
    const [nombre, cambiarNombre] = useState('');
    const [correo, cambiarCorreo] = useState('');

    // Obtengo desde el contexto
    const {mensaje, mensajeOk, mensajeKo, reiniciarMensaje} = useContext(ContextoMensaje);   
        
    // Añado los datos a firestore cuando se pulse el botón de enviar.
    const onSubmit = async (e) => {
        
        // Evito que se refresque el formulario
        e.preventDefault();

        // Gestiono la promesa
        try{
            
            await addDoc(collection(db, 'usuarios'), {
                nombre: nombre,
                correo: correo
            });
            mensajeOk();
        }

        catch(error) {
            mensajeKo();
            console.log(error);            
        }

        // Reinicio los estados nombre y correo para que se muestren los valores de los placeholder
        cambiarNombre('');
        cambiarCorreo('');
        setTimeout(() => {reiniciarMensaje()}, 5000);       
    };
   

    return (
        <form action="" onSubmit={onSubmit}>

            <Input 
                type ="text" 
                value={nombre}
                onChange={(e)=> cambiarNombre(e.target.value)}
                placeholder="Nombre"                
            />

            <Input 
                type ="email" 
                value={correo}
                onChange={(e)=> cambiarCorreo(e.target.value)}
                placeholder="Correo"                
            />

            <Boton type ="submit">Añadir</Boton>
            <Mensaje color = {mensaje.color}> {mensaje.contenido} </Mensaje>
            
        </form>   
    );
}

export default Formulario;

*/