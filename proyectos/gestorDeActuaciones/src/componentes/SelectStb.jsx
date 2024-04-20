/*
    SELECT STB. SOLO CONTIENE SI O NO
*/

import React, {useState} from "react";
import {ContenedorSelect, OpcionSeleccionada, Opciones, Opcion} from '../elementos/ElementosDeSelect';
import IconoDown from './../assets/down.svg?react';


const SelectStb = ({stb, asignarStb}) => {

    // Estados
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);

    // Funciones
    const handleClick = (e) => {

        // Cambio la zona con el atributo personalizado obtenido
        asignarStb(e.target.dataset.valor);        
    }

    return (
        
        // Cuando haga click en ContenedorSelect mostraré u ocultare el select
        <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>
            <OpcionSeleccionada>{stb == undefined ? 'STB:' : 'STB:'+ stb}<IconoDown/></OpcionSeleccionada>

            {/* Solo mostraré las opciones si mostrarSelect es true */}
            {mostrarSelect && 
                <>
                    <Opciones>
                        <Opcion 
                            key='SI'
                            data-valor = 'SI'
                            onClick={handleClick}
                        > STB: SI                            
                        </Opcion>

                        <Opcion 
                            key='NO'
                            data-valor = 'NO'
                            onClick={handleClick}
                        > STB: NO                            
                        </Opcion>

                    </Opciones>                
                </>
            }
            
        </ContenedorSelect>
    );
}
 
export default SelectStb;
