/*
    SELECT CON LAS DIFERENTES DIFICULTADES
*/

import React, {useState} from "react";
import {Select, ContenedorSelect, OpcionSeleccionada, Opciones, Opcion} from '../elementos/ElementosDeSelect';
import IconoDown from './../assets/down.svg?react';
import dificultades from "../objetos/dificultades";

const SelectDificultades = ({dificultad , asignarDificultad, asignarPuntos}) => {

    // Estados
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);    

    // Funciones
    const handleClick = (e) => {

        // Cambio los respestivos estados dependendiendo de los atributos personalizados obtenidos
        asignarDificultad(e.target.dataset.valor);        
        asignarPuntos(e.target.dataset.valor2);
    }

    return (
        
        <Select>
            <h4>Dificultad:</h4>
            <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>

                {/* Si dificultad contiene el valor inicial de estado que era un espacio vacio muestra Seleccione.
                    En caso contrario muestra el contenido del estado dificultad */}
                <OpcionSeleccionada>                                        
                    {dificultad == '' ? 'Seleccione' : dificultad}
                    <IconoDown/>
                </OpcionSeleccionada>

                {/* Solo mostraré las opciones si mostrarSelect es true */}
                {mostrarSelect && 
                    <Opciones>
                        {/* Recorro el objeto dificultades y muestro una dificultad en cada iteraccion */}
                        {dificultades.map((dificultad) => {
                            return <Opcion
                                key= {dificultad.id}                            
                                data-valor = {dificultad.descripcion}
                                data-valor2 = {dificultad.puntos} 
                                onClick={handleClick}
                            >                           
                                {dificultad.descripcion}
                            </Opcion>
                        })}
                    </Opciones>
                }
                
            </ContenedorSelect>
        </Select>
    );
}
 
export default SelectDificultades;
