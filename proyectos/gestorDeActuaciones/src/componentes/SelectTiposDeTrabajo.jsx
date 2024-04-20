/*
    SELECT CON LOS DIFERENTES TIPOS DE TRABAJO
*/

import React, {useState} from "react";
import {ContenedorSelect, OpcionSeleccionada, Opciones, Opcion} from '../elementos/ElementosDeSelect';
import IconoDown from './../assets/down.svg?react';
import tiposDeTrabajo from "../objetos/tiposDeTrabajo";


const SelectTiposDeTrabajo = ({tipoDeTrabajo, asignarTipoDeTrabajo}) => {

    // Estados
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);

    // Funciones
    const handleClick = (e) => {

        // Cambio la zona con el atributo personalizado obtenido
        asignarTipoDeTrabajo(e.target.dataset.valor);        
    }

    return (
        
        // Cuando haga click en ContenedorSelect mostraré u ocultare el select
        <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>
            <OpcionSeleccionada>{tipoDeTrabajo == undefined ? 'Seleccione tipo de trabajo:' : tipoDeTrabajo}<IconoDown/></OpcionSeleccionada>

            {/* Solo mostraré las opciones si mostrarSelect es true */}
            {mostrarSelect && 
                <Opciones>
                    {/* Recorro el objeto categorias y muestro una categoria en cada iteraccion */}
                    {tiposDeTrabajo.map((tipo) => {
                        return <Opcion
                            key= {tipo.id}
                            // Atributo personalizado con el id de la categoria seleccionada
                            data-valor= {tipo.id}
                            onClick={handleClick}
                        >                           
                            {tipo.descripcion}
                        </Opcion>;
                    })}
                </Opciones>
            }
            
        </ContenedorSelect>
    );
}
 
export default SelectTiposDeTrabajo;
