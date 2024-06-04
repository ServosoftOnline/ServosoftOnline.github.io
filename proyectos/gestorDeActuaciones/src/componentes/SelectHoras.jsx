/*
    SELECT CON LAS DIFERENTES HORAS

        - Se basa en SelectRoles
        - Se mostrará en una linea. No con la tipica flecha que abra el select.

*/

import React from "react";

// Elementos
import {ContenedorSelect, Opcion} from '../elementos/ElementosDeSelectHoras';

// Objetos
import horas from './../objetos/horas';

const SelectHoras = ({setIdHoraCitacion, setDescripcionHoraCitacion}) => {  

    // Funciones
    const handleClick = (e) => {        

        setIdHoraCitacion(e.target.dataset.valor1);   
        setDescripcionHoraCitacion(e.target.dataset.valor2);   
    }

    return (
            
        <ContenedorSelect>
            {/* Recorro el objeto horas y las muestro */}
            {horas.map((hora) => {
                
                return (
                    <Opcion
                        key= {hora.id}                        
                        data-valor1= {hora.id}
                        data-valor2= {hora.descripcion}                      
                        onClick={handleClick}
                        >{hora.descripcion}
                    </Opcion>
                );
            })}
        </ContenedorSelect>
    
    );
}
 
export default SelectHoras;
