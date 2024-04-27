/*
    SELECT CON LOS DIFERENTES ESTADOS DEL MODULO PLANEADO
*/

import React, {useState} from "react";
import {Select, ContenedorSelect, OpcionSeleccionada, Opciones, Opcion} from '../elementos/ElementosDeSelect';
import IconoDown from './../assets/down.svg?react';
import objetoTiposDeActuacion from "../objetos/objetoTiposDeActuacion";

const SelectTiposDeActuacion = ({tiposDeActuacion, asignarTiposDeActuacion}) => {

    // Estados
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);    

    // Funciones
    const handleClick = (e) => {        
        asignarTiposDeActuacion(e.target.dataset.valor);        
    }

    return (
        <Select>
        
            <h4>Tipo de actuación:</h4>
            <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>            
                
                <OpcionSeleccionada>                                        
                    {tiposDeActuacion == '' ? 'Seleccione' : tiposDeActuacion}
                    <IconoDown/>
                </OpcionSeleccionada>          

                {/* Solo mostraré las opciones si mostrarSelect es true */}
                {mostrarSelect &&                     
                    <Opciones>
                        {/* Recorro el objeto estados modulo planeado y muestro un estado en cada iteraccion */}
                        {objetoTiposDeActuacion.map((tipo) => {
                            
                            return <Opcion
                                key= {tipo.id}                                
                                data-valor= {tipo.descripcion}                                  
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
 
export default SelectTiposDeActuacion;
