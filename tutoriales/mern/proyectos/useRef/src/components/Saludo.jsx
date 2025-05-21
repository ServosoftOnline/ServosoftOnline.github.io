/*
    EJEMPLO DE USEREF:

        - Saludar y tener control sobre los saludos que se encuentren en cola
        - Se mostrarán en pantalla los saludos enviados. Cada vez que haga click en saludar

        - Se mostrarán en consola los saludos que se encuentran en cola
            - Los saludos en cola los obtendré mediante useRef
            - Estos saludos en cola serán valores mutables
            - Tendrán la información a tiempo real. 
            
        - Se observa mejor al hacer muchos clicks seguidos en el boton saludar

        - Al final van a coinidir los saludos enviados con los mostrados en consola
            - Pero los mostrados en consola se mostrarán con retardo
        
*/

import React,{useEffect, useRef, useState} from 'react'

export const Saludo = () => {

    // Estados y referencias
    const [numeroDeSaludos, setNumeroDeSaludos] = useState(0);
    const saludosEnCola = useRef(numeroDeSaludos);

    // Efecto: Con cada saludo realizado se mostrará los que queden en cola
    useEffect(() => {
        saludosEnCola.current = numeroDeSaludos;
        setTimeout(() => {
            console.log('Saludos en cola: ' + saludosEnCola.current);
        }, 3000);
    },[numeroDeSaludos]);

    // Funciones
    const enviarSaludo = (e) => {
        console.log('Saludo enviado');
        setNumeroDeSaludos(numeroDeSaludos + 1);
    }

    // Renderizo componente
    return (
        <div>
            <hr/>
            <h2>Ejemplo 2 de uso de useRef: Obtener información a tiempo real</h2>
            <p>Muestra en pantalla los saludos efectuados y en consola los que quedan por realizarse</p>
            <h3>Saludos enviados hasta ahora: {numeroDeSaludos}</h3>
            <button onClick={enviarSaludo}>Saluda!!!!</button>
        </div>
    )
}
