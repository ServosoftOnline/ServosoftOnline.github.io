/*
    COMPONENTE CALENDARIO

        - Permite crear un calendario del cual obtendre la fecha seleccionada

        - Importo:
            - El calendario llamado Daypicker
            - Sus estilos
            - La libreria date-fns me permitirá cambiar el momento obtenido en días, fechas, meses, año, ...
            - El paquete en español

        - Creo mi componente
            - Tiene como parámetros el estado fecha, que por defecto es la fecha actual, y su función correspondiente
            - Creo un estado que indicará si el Daypicker estará visible o no.

            - Devuelvo:

                - Un contenedor que cuando haga click en el cambiará el valor de visible a su contrario y contiene:
                    - Un input de lectura que mostrará la fecha ya formateada
                    - El Daypicker que será mostrado solo cuando cuando el estado sea true

                    - Propiedades del DayPicker:
                        - mode="single". Solo puedo hacer click en una fecha
                        - selected={fecha}. Contiene el estado fecha que obtuve como parámetro
                        - onSelect={cambiarFecha}. Contiene la función asociada al estado fecha
                        - locale={es}. El idioma español        


*/

// React y Elementos
import React, {useState } from "react";
import {ContenedorInput} from './../elementos/ElementosDeDatePicker';

// Day picker
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';

// date-fns
import { format } from 'date-fns';
import { es } from "date-fns/locale";


// Componente
const DatePicker = ({fecha, cambiarFecha}) => {

    // Estado que almacena si el calendario está visible o no
    const [visible, cambiarVisible] = useState(false);
    
    return (

        // Cuando haga click sobre él input o el daypicker cambiará el estado de visible del calendario 
        <ContenedorInput onClick={() => cambiarVisible(!visible)}>

            {/* Input solo de lectura que mostrará la fecha seleccionada*/}            
            <input 
                type ="text"
                readOnly
                value={format(fecha, `dd 'de' MMMM 'de' yyyy`, {locale: es})}                
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