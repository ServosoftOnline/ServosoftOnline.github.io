/*
    SELECT CON LOS DIFERENTES TIPOS DE TRABAJO
*/

import React, {useState} from "react";
import {Select, ContenedorSelect, OpcionSeleccionada, Opciones, Opcion} from '../elementos/ElementosDeSelect';
import IconoDown from './../assets/down.svg?react';
import objetoTiposDeTrabajo from "../objetos/objetoTiposDeTrabajo";

const SelectTiposDeTrabajo = ({tiposDeTrabajo, asignarTiposDeTrabajo, asignarIdTipoDeTrabajo}) => {

    // Estados
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);    

    // Funciones
    const handleClick = (e) => {        
        asignarTiposDeTrabajo(e.target.dataset.valor);  
        asignarIdTipoDeTrabajo(e.target.dataset.valor2);
    }

    return (
        
        <Select>
        <h4>Tipo de trabajo:</h4>
        <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>

            {/* Si tiposDeTrabajo contiene el valor inicial de estado que era un espacio vacio muestra Seleccione.
                En caso contrario muestra el contenido del estado tiposDeTrabajo */}

                <OpcionSeleccionada>                                        
                    {tiposDeTrabajo == '' ? 'Seleccione' : tiposDeTrabajo}
                    <IconoDown/>
                </OpcionSeleccionada>
            
            {/* Solo mostraré las opciones si mostrarSelect es true */}
            {mostrarSelect && 
                <Opciones>
                    {/* Recorro el objeto tiposDeTrabajo y muestro un tipo en cada iteraccion */}
                    {objetoTiposDeTrabajo.map((tipo) => {
                        return <Opcion
                            key= {tipo.id}
                            data-valor= {tipo.descripcion}    
                            data-valor2= {tipo.id}                        
                            onClick={handleClick}
                        >                           
                            {tipo.descripcion}
                        </Opcion>;
                    })}
                </Opciones>
            }
            
        </ContenedorSelect>
        </Select>
    );
}
 
export default SelectTiposDeTrabajo;
