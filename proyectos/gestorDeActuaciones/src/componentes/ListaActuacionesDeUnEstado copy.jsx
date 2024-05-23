/*
    MUESTRA LAS ACTUACIONES DE UN ESTADO CON EL BOTON DE EDITARLAS O BORRARLAS
*/

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Elementos
import  {Lista, ContenedorSubtitulo, Subtitulo, Fecha, ElementoListaCabecera, ElementoLista, Incidencia, Cliente, Direccion, Poblacion,
        Estado,Gestion,ContenedorBotonesLista,BotonAccion,} from '../elementos/ElementosDeLista';

// SVG
import IconoEditar from './../assets/editar.svg?react';
import IconoBorrar from './../assets/borrar.svg?react';

// Funciones
import fechaIncidenciaEsIgual from '../funciones/fechaIncidenciaEsIgual';
import formatearFecha from '../funciones/formatearFecha';

// Componente
const ListaActuacionesDeUnEstado = ({array, estaSupervisando}) => {
    
    return (
        <Lista>
            {
            // Si no obtuve actuaciones muestro mensaje
            array.length === 0 ?
            
                <ContenedorSubtitulo>
                    <Subtitulo>No hay actuaciones en este estado</Subtitulo>                
                </ContenedorSubtitulo>
            :

                // En caso contrario recorro las actuaciones sin mostrar fecha repetidas y mostrando la informacion relevente
                array.map((actuacion, index) => {                
                    
                    return (

                    // Solo tengo un key que debo añadir a los elementos Fecha y ElementosLista
                    // Englobo a los elementos en un div al que le pongo el key
                    <div key={actuacion.codigoIncidencia}>

                        {/* Solo mostraré la fecha y la cabecera si la fecha si es diferente a la anterior */}
                        {!fechaIncidenciaEsIgual(array, index, actuacion) &&
                        <>

                            <Fecha>
                                {formatearFecha(actuacion.fechaIncidencia)}
                            </Fecha>

                            <ElementoListaCabecera>
                                <Incidencia>Incidencia</Incidencia>
                                <Cliente>Cliente</Cliente>
                                <Direccion>Dirección</Direccion>
                                <Poblacion>Población</Poblacion>
                                <Estado>Estado</Estado>
                                <Gestion>Gestión</Gestion>
                            </ElementoListaCabecera>
                            
                        </>
                        }

                        <ElementoLista>
                    
                        <Incidencia>                        
                            {actuacion.codigoIncidencia}
                        </Incidencia>

                        <Cliente>
                            {actuacion.nombre}
                        </Cliente>

                        <Direccion>
                            {actuacion.direccion ? actuacion.direccion : 'Pendiente de rellenar'}
                        </Direccion>

                        <Poblacion>
                            {actuacion.poblacion ? actuacion.poblacion : 'Pendiente de rellenar'}
                        </Poblacion>

                        <Estado>
                            {actuacion.estadoDescripcion}
                        </Estado>                    

                        {/* Boton para editar la actuacion */}
                        <ContenedorBotonesLista>
                            
                            {console.log('Esta supervisando?: ' + estaSupervisando)}
                            <BotonAccion as={Link} to={`/coordinador/detalles/${actuacion.id}`}>                                                 
                                <IconoEditar /> 
                            </BotonAccion>

                            {/* <BotonAccion as={Link} to={`/borrar/${actuacion.id}`}>  */}
                            <BotonAccion>
                                <IconoBorrar />
                            </BotonAccion>

                            </ContenedorBotonesLista>                  
                        </ElementoLista>
                    </div>                
                    )
                })
            }
        </Lista>
    );
}
 
export default ListaActuacionesDeUnEstado;