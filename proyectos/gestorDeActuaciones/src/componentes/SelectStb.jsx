/*
    SELECT STB. CONTIENE SI O NO
*/

import React, {useState} from "react";
import {Select, ContenedorSelect, OpcionSeleccionada, Opciones, Opcion} from '../elementos/ElementosDeSelect';
import IconoDown from './../assets/down.svg?react';

const SelectStb = ({stb, asignarStb}) => {

    // Estados
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);    

    // Funciones
    const handleClick = (e) => {       
        asignarStb(e.target.dataset.valor);        
    }

    return (
        
        <Select>
            <h4>Stb:</h4>
            <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>

                {/* Mostrara Seleccione si aun contiene el valor inicial del estado que era un espacio en blanco o mostrará el estado */}
                <OpcionSeleccionada>                                        
                    {stb == '' ? 'Seleccione' : stb}
                    <IconoDown/>
                </OpcionSeleccionada>

                {/* Solo mostraré las opciones si mostrarSelect es true */}
                {mostrarSelect && 
                    <>
                        <Opciones>
                            <Opcion 
                                key='SI'
                                data-valor = 'Si'                                
                                onClick={handleClick}
                            > Sí                            
                            </Opcion>

                            <Opcion 
                                key='NO'
                                data-valor = 'No'                                
                                onClick={handleClick}
                            > No                            
                            </Opcion>

                        </Opciones>                
                    </>
                }
                
            </ContenedorSelect>
        </Select>
    );
}
 
export default SelectStb;
