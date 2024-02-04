/*
    COMPONENTE CALENDARIO
        - Mi componente se llama DatePicker
        - LLamará a un componente externo llamado daypicker
            - Permite crear un elemento que contiene un calendario

        - BUG
            - Si pinchaba dos veces en la misma fecha devolvía undefined y se rompía el programa
            - Lo solucióné con un contexto global que almacenara la fecha seleccionada
            - Si obtenía undefined le almacenaba la fecha del contexto


*/

// React
import React, { useContext, useState } from "react";

// Day picker
import {DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

// date-fns
import { format } from 'date-fns';
import { es } from "date-fns/locale";

// Contexto
import { FechaContext } from "../contextos/FechaContext";

// Elementos
import {ContenedorInput} from './../elementos/ElementosDeDatePicker';

// Componente
const DatePicker = ({fecha, cambiarFecha}) => {

    // Estado que almacena si el calendario está visible o no
    const [visible, cambiarVisible] = useState(false);

    // Obtengo desde el contexto
    const {fechaDelContexto, cambiarFechaDelContexto} = useContext(FechaContext);

    // Creo la función que asigna formato a la fecha
    const formatoFecha = (fecha) => {
        // cambiarVisible(!visible);
        // Si fecha no contiene undefined es que pinché solo una vez en la fecha del calendario        
        if (fecha != undefined) {
            // Inserto la fecha en el contexto
            cambiarFechaDelContexto(fecha);
            // cambiarVisible(!visible);
            // Devuelvo la fecha con su formato y en español
            return format(fecha, `dd 'de' MMMM 'de' yyyy`, {locale: es});
        }
        else {
            // En lugar de devolver undefined y romper la App, devuelvo la fecha del contexto
            return format(fechaDelContexto, `dd 'de' MMMM 'de' yyyy`, {locale: es});                   
        }
    }   
    
    return (

        // Cuando haga click sobre él input o el daypicker cambiará el estado de visible del calendario 
        <ContenedorInput onClick={() => cambiarVisible(!visible)}>

            {/* Input solo de lectura que mostrará la fecha seleccionada*/}            
            <input 
                type ="text"
                readOnly
                value={formatoFecha(fecha)}                
            />

            {/* Calendario visible solo si el estado visible contiene true */}
            { visible &&
                <DayPicker 
                    mode="single"
                    selected={fecha}
                    onSelect={cambiarFecha}
                    locale={es}
                />
            }

        </ContenedorInput>
    );
}
 
export default DatePicker;



