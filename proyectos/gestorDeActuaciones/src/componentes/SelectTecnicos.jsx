/*
    SELECT CON LOS DIFERENTES TECNICOS
*/

// React
import React, {useState} from "react";

// Elementos
import {Select, ContenedorSelect, OpcionSeleccionada, Opciones, Opcion} from './../elementos/ElementosDeSelect';

// Hook
import useObtenerTodosLosTecnicos from "../hooks/useObtenerTodosLosTecnicos";

// SVG  como componente
import IconoDown from './../assets/down.svg?react';

// El componente
const SelectTecnicos = ({numeroTecnico, tecnico, asignarTecnico}) => {  

    // Array con los tecnicos obtenidos del hook
    const [todosLosTecnicos] = useObtenerTodosLosTecnicos();
    const arrayTodosLosTecnicos = Object.values(todosLosTecnicos);

    // Estados
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);    

    // Funciones
    const handleClick = (e) => {        
        asignarTecnico(e.target.dataset.valor);        
    }    

    return (
        <Select>
        
            <h4>{numeroTecnico+1}º:</h4>
            <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>            
                
                <OpcionSeleccionada>                                        
                    {tecnico}
                    <IconoDown/>
                </OpcionSeleccionada>          

                {/* Solo mostraré las opciones si mostrarSelect es true */}
                {mostrarSelect &&                     
                    <>
                        <Opciones>
                            {/* Recorro el objeto estados modulo planeado y muestro un estado en cada iteraccion */}
                            {arrayTodosLosTecnicos.map((tecnico) => {
                            
                                return <Opcion
                                    key= {tecnico.idUsuario}                                
                                    data-valor= {tecnico.nombre}                                  
                                    onClick={handleClick}
                                >                           
                                    {tecnico.nombre}
                                </Opcion>;                                               
                            })}
                        </Opciones>
                    </>
                }
                
            </ContenedorSelect>
        </Select>
    );
    
}
 
export default SelectTecnicos;