/*
    SELECT CON LAS DIFERENTES ZONAS DE INSTALACION
*/

// React, Elementos, Archivo svg como componente, objeto categorias, iconos,
import React, {useState} from "react";
import {ContenedorSelect, OpcionSeleccionada, Opciones, Opcion} from './../elementos/ElementosDeSelect';
import IconoDown from './../assets/down.svg?react';
import zonas from "../objetos/zonas";


const SelectZonasDeInstalacion = ({zonaInstalacion, asignarZonaInstalacion}) => {

    // Estados
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);

    // Funciones
    const handleClick = (e) => {

        // Cambio la zona con el atributo personalizado obtenido
        asignarZonaInstalacion(e.target.dataset.valor);        
    }

    return (
        
        // Cuando haga click en ContenedorSelect mostraré u ocultare el select
        <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>
            <OpcionSeleccionada>{zonaInstalacion == undefined ? 'Seleccione zona:' : zonaInstalacion}<IconoDown/></OpcionSeleccionada>

            {/* Solo mostraré las opciones si mostrarSelect es true */}
            {mostrarSelect && 
                <Opciones>
                    {/* Recorro el objeto categorias y muestro una categoria en cada iteraccion */}
                    {zonas.map((zona) => {
                        return <Opcion
                            key= {zona.id}
                            // Atributo personalizado con el id de la categoria seleccionada
                            data-valor= {zona.id}
                            onClick={handleClick}
                        >                           
                            {zona.descripcion}
                        </Opcion>;
                    })}
                </Opciones>
            }
            
        </ContenedorSelect>
    );
}
 
export default SelectZonasDeInstalacion;
