/*
    SELECT CON LAS DIFERENTES ZONAS DE INSTALACION
*/

// React
import React, {useState} from "react";

// Elementos
import {Select, ContenedorSelect, OpcionSeleccionada, Opciones, Opcion} from './../elementos/ElementosDeSelect';

// Icono como SVG
import IconoDown from './../assets/down.svg?react';

// Objeto
import zonas from "../objetos/zonas";

// Componente
const SelectZonasDeInstalacion = ({zonasDeInstalacion, asignarZonasDeInstalacion}) => {
    
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);

    const handleClick = (e) => {
        asignarZonasDeInstalacion(e.target.dataset.valor);          
    }

    return (
        
        <Select>
            
            <h4>Zona:</h4>
            <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>

                {/* Si zonaInstalacion contiene el valor inicial de estado que era un espacio vacio muestra Seleccione.
                    En caso contrario muestra el contenido del estado ZonaInstalacion */}
                <OpcionSeleccionada>                                        
                    {zonasDeInstalacion == '' ? 'Seleccione' : zonasDeInstalacion}
                    <IconoDown/>
                </OpcionSeleccionada>

                {/* Solo mostraré las opciones si mostrarSelect es true */}
                {mostrarSelect && 
                
                    <Opciones>
                        {/* Recorro el objeto zonas y muestro una zona en cada iteraccion */}
                        {zonas.map((zona) => {
                            return <Opcion
                                key= {zona.id}  
                                data-valor= {zona.descripcion}                                
                                onClick={handleClick}
                            >                           
                                {zona.descripcion}
                            </Opcion>;
                        })}
                    </Opciones>
                }
            
            </ContenedorSelect>
        </Select>
    );
}
 
export default SelectZonasDeInstalacion;
