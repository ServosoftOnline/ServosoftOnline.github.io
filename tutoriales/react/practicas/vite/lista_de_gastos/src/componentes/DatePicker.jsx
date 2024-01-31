/*
    COMPONENTE CALENDARIO
        - Mi componente se llama DatePicker
        - LLamará a un componente externo llamado daypicker
            - Permite crear un elemento que contiene un calendario

*/

// React
import React from "react";

// Day picker
import {DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { es } from "date-fns/locale";

// Componente
const DatePicker = ({fecha, cambiarFecha}) => {    
    return (
        <div>
            {/* Input solo de lectura que mostrará la fecha seleccionada */}
            {/* Mediante format le doy el formato de dia de mes de año */}
            <input 
                type ="text" readOnly value={format(fecha, `dd 'de' MMMM 'de' yyyy`, {locale: es})} 
            />
            <DayPicker
                mode="single"
                selected={fecha}
                onSelect={cambiarFecha}
            />
        </div>
    );
}
 
export default DatePicker;



