/*
    SELECT CON LOS DIFERENTES ESTADOS DEL MODULO PLANEADO
*/

import React, {useState} from "react";
import {Select, ContenedorSelect, OpcionSeleccionada, Opciones, Opcion} from '../elementos/ElementosDeSelect';
import IconoDown from './../assets/down.svg?react';
import estadosModuloPlaneado from "../objetos/estadosModuloPlaneado";

const SelectEstadosModuloPlaneado = ({asignarEstado, estadoDescripcion, asignarEstadoDescripcion}) => {

    // Estados
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);    

    // Funciones
    const handleClick = (e) => {
        asignarEstado(e.target.dataset.valor);  
        asignarEstadoDescripcion(e.target.dataset.valor2);
    }

    return (
        <Select>
        
            <h4>Estado:</h4>
            <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>            
                
                {/* Si estado contiene el valor inicial de estado que era un espacio vacio muestra Seleccione.
                    En caso contrario muestra el contenido del estado estado */}
                
                <OpcionSeleccionada>                                                       
                    {estadoDescripcion == '' ? 'Seleccione' : estadoDescripcion}
                    <IconoDown/>
                </OpcionSeleccionada>        

                {/* Solo mostraré las opciones si mostrarSelect es true */}
                {mostrarSelect &&                     
                    <Opciones>
                        {/* Recorro el objeto estados modulo planeado y muestro un estado en cada iteraccion */}
                        {estadosModuloPlaneado.map((estado) => {
                            // console.log('key: ' + estado.id);
                            return <Opcion
                                key= {estado.id}                                
                                data-valor= {estado.estado}  
                                data-valor2 = {estado.descripcion}                                
                                onClick={handleClick}
                            >                           
                                {estado.descripcion}
                            </Opcion>;                                               
                        })}
                    </Opciones>
                }
                
            </ContenedorSelect>
        </Select>
    );
}
 
export default SelectEstadosModuloPlaneado;
