/*
    SELECT CON LAS DIFERENTES ROLES
    
        - Importo lo necesario
        - Creo el componente
            - Obtengo como parámetro el estado con la categoría por defecto y la funcion para cambiarla
            - El estado mostrarSelect almacenará si muestro o no el select. Muestra dinámica
            - La funcion handleClick me permitirá cambiar el estado con la categoria seleccionada

            - Devuelvo:
                - El contenedor del select. Cuando hagla click en el se mostrará o ocultará
                    - La opción seleccionada será la que contenga el estado categoria
                    - Las diferentes opciones se mostrarán solo si mostrarSelect contiene true

*/

// React, Elementos, Archivo svg como componente, objeto categorias, iconos,
import React from "react";
import {ContenedorSelect, ContenedorFiltros, Opcion} from '../elementos/ElementosDeSelectRoles';
import roles from "../objetos/roles";

const SelectRoles = ({idRol, establecerIdRol}) => {    

    // Funciones
    const handleClick = (e) => {        
        establecerIdRol(e.target.dataset.valor);        
    }

    return (

        <ContenedorFiltros>
            <h2>Rol seleccionado: {idRol} </h2>               
            <ContenedorSelect>
                {/* Recorro el objeto roles y los muestro */}
                {roles.map((rol) => {
                    return (
                        <Opcion
                            key= {rol.id}
                            // Atributo personalizado con el id de la categoria seleccionada
                            data-valor= {rol.id}
                            onClick={handleClick}
                            >{rol.descripcion}
                        </Opcion>
                    );
                })}
            </ContenedorSelect>
        </ContenedorFiltros>
    );
}
 
export default SelectRoles;
