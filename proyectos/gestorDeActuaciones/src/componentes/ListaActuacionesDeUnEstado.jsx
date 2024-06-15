/*
    MUESTRA LAS ACTUACIONES DE UN ESTADO CON EL BOTON DE EDITARLAS O BORRARLAS

        - Obtengo como parametros el array con los elementos a mostrar
        - Si el coordinador llamo al componente desde el componente supervision
        - El modulo del que lo llamé para generar un subtitulo personalizado
        - la ruta de vuelta que a su vez la pasaré cuando llame al formulario correspondiente
*/

// React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Elementos
import  {Lista, ContenedorSubtitulo, Subtitulo, Fecha, ElementoListaCabecera, ElementoLista, Incidencia, Cliente,
        Direccion, Poblacion, Estado, Gestion, ContenedorBotonesLista, BotonAccion,} from '../elementos/ElementosDeLista';

// SVG
import IconoEditar from './../assets/editar.svg?react';
import IconoBorrar from './../assets/borrar.svg?react';

// Funciones
import fechaIncidenciaEsIgual from '../funciones/fechaIncidenciaEsIgual';
import formatearFecha from '../funciones/formatearFecha';
import anchoDePantalla from '../funciones/anchoDePantalla';

// Componente
const ListaActuacionesDeUnEstado = ({array, estaSupervisando, modulo, rutadevuelta, actuacionSupervisada}) => {

    // Obtengo el ancho de la pantalla del dispositivo actual y el ancho maximo al que se le aplica responsive para moviles
    const {anchoActual, anchoMaximoMovilVertical} = anchoDePantalla();

    // Personalizo el mensaje a mostrar en el subtitulo dependiendo del modulo desde donde fue llamado    
    const [mensajeAMostrar, setMensajeAMostrar]  = useState('');
    useEffect(() => {               
        
        switch (modulo){

            case 'sinCoordinar':                
                setMensajeAMostrar('No hay actuaciones pendientes de coordinar');
                break;

            case 'ilocalizables':
                setMensajeAMostrar('No hay actuaciones pendientes de localizar');
                break;

            case 'mantenimiento':
                setMensajeAMostrar('No hay actuaciones en mantenimiento');                
                break;

            case 'faltaCitas':
                setMensajeAMostrar('No hay actuaciones donde se faltó a citas');                
                break;

            case 'incidencias':
                setMensajeAMostrar('No hay actuaciones con incidencias');
                break;

            case 'o&m':
                setMensajeAMostrar('No hay actuaciones en estado O&M');                
                break;

            case 'supervison':
                setMensajeAMostrar('No hay actuaciones pendientes de supervisar');                
                break;

            case 'finalizados':
                setMensajeAMostrar('No hay actuaciones supervisadas');                
                break;

            default:
                console.log('No entre fue llamada desde ningun módulo');
        }

    },[modulo]);
    
    
    return (
        
        <Lista>
            {
            // Si no obtuve actuaciones muestro mensaje
            array.length === 0 ?
            
                <ContenedorSubtitulo>                    
                    <Subtitulo>{mensajeAMostrar}</Subtitulo>                
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
                                <Incidencia>{ anchoActual < anchoMaximoMovilVertical ? 'Cod.I' : 'Incidencia'}</Incidencia>
                                <Cliente>Cliente</Cliente>
                                {anchoActual > anchoMaximoMovilVertical && <Direccion>Dirección</Direccion> }
                                <Poblacion>Población</Poblacion>
                                <Estado>Estado</Estado>
                                <Gestion>{ anchoActual < anchoMaximoMovilVertical ? 'Gest.' : 'Gestión'}</Gestion>
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

                            {/* Solo muestro la direccion si el ancho de la pantalla actual fuera superior al ancho maximo para moviles */}
                            {anchoActual > anchoMaximoMovilVertical &&
                                <Direccion>
                                    {actuacion.direccion ? actuacion.direccion : 'Pendiente de rellenar'}
                                </Direccion>
                            }

                            <Poblacion>
                                {actuacion.poblacion ? actuacion.poblacion : 'Pendiente de rellenar'}
                            </Poblacion>

                            <Estado>
                                {actuacion.estadoDescripcion}
                            </Estado>                    

                            {/* Boton para editar la actuacion */}
                            <ContenedorBotonesLista>
                                
                                {/* Si el componente fue llamado desde el modulo supervisor el link apuntara al formularioEditarActuacionSupervision */}
                                {/* Les paso la ruta de vuelta mediante state */}
                                {/* {estaSupervisando ?                                
                                    <BotonAccion
                                        as={Link}
                                        state={{ rutadevuelta }}
                                        to={`/coordinador/supervision/${actuacion.id}`}>           
                                                                              
                                        <IconoEditar /> 
                                    </BotonAccion>
                                    :                                
                                    <BotonAccion as={Link} state={{ rutadevuelta }} to={`/coordinador/detalles/${actuacion.id}`}>                                                 
                                        <IconoEditar /> 
                                    </BotonAccion>
                                } */}

                                {estaSupervisando ?                                
                                    
                                    <BotonAccion
                                        as={Link}
                                        state={{ rutadevuelta }}
                                        to={`/coordinador/supervision/${actuacion.id}`}>           
                                                                              
                                        <IconoEditar /> 
                                    </BotonAccion>
                                    :
                                        actuacionSupervisada ?
                                        <BotonAccion
                                            as={Link}
                                            state={{ rutadevuelta }}
                                            to={`/coordinador/instalados-finalizados/${actuacion.id}`}>           
                                                                                
                                            <IconoEditar /> 
                                        </BotonAccion>
                                        : 

                                        <BotonAccion
                                            as={Link}
                                            state={{ rutadevuelta }}
                                            to={`/coordinador/detalles/${actuacion.id}`}>                                                 

                                            <IconoEditar /> 
                                        </BotonAccion>
                                }
                            
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