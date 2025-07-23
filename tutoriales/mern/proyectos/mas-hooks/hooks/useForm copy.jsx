/*
    HOOK PERSONALIZADO:
    RECIBE UN FORMULARIO ENTERO Y DEVUELVE UN OBJETO CON EL CONTENIDO DE TODOS SUS CAMPOS:

    
*/
import React from 'react'

export const useForm = (formulario) => {

    // Obtengo el formData del formulario
    const datosDelFormulario = new FormData(formulario);

    // Creo un objeto vacio
    const objetoConLosDatosDelFormulario = {};

    // Voy recorriendo los datos del formulario y generando un objeto con su name y value
    for(let [name,value] of datosDelFormulario){
        objetoConLosDatosDelFormulario[name] = value;
    }

    // Devuelvo ya el objeto con los datos
    return objetoConLosDatosDelFormulario;
}