/*
    MUESTRA LAS ACTUACIONES DE UN ESTADO CON DIFERENTES BOTONES
    
        - Este componente puede ser llamado desde los componentes coordinador o tecnico
            - Si lo llama un coordinador mostrará los botones de editar y borrar
            - Si lo llama un tecnico mostrará los botones de en camino, en cliente y editar
            - Si lo llama un coordinador el botón de editar apuntará al formulario para que editen los coordinadores
            - Si lo llama un tecnico el botón de editar apuntará al formulario para que editen el tecnico asociado

        - Los colores de los botones y su estado asociado serán naranjas, verdes o azules
        - Las descripciones de los estados serán naranjas o verdes correspondiendo a los colores de sus botones
        
*/

// React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Elementos
import  {Lista, ContenedorSubtitulo, Subtitulo, Fecha, ElementoListaCabecera, ElementoLista, Incidencia, Cliente, Direccion, Poblacion,
        Estado, SpanHoraEnCamino, SpanHoraDeLlegada, Gestion,ContenedorBotonesLista,BotonAccion,} from '../elementos/ElementosDeLista';

// SVG
import IconoEditar from './../assets/editar.svg?react';
import IconoBorrar from './../assets/borrar.svg?react';
import IconoCoche from './../assets/coche.svg?react';
import IconoCliente from './../assets/cliente.svg?react';

// Funciones
import fechaCitacionEsIgual from '../funciones/fechaCitacionEsIgual';
import formatearFecha from '../funciones/formatearFecha';
import formatearFechaEnHoraYSegundos from './../funciones/formatearFechaEnHoraYSegundos';

// Funcion que actualiza en firebase
import actualizaEstadoAEnCamino from '../firebase/actualizaEstadoAEnCamino';
import actualizaEstadoAEnCliente from '../firebase/actualizaEstadoAEnCliente';


// Componente
const ListaActuacionesDeUnTecnico = ({array, laPideUnTecnico, laPideUnCoordinador}) => {  
    
    // Estados
    const [tecnicoEncamino, asignarTecnicoEnCamino] = useState(false);
    
    // Funciones
    const llamaAActualizaEstadoAEnCamino = (idActuacion) => { 
        
        actualizaEstadoAEnCamino(idActuacion)

        .then(() => {                        
            console.log('Vas en camino'); 
            asignarTecnicoEnCamino(true);

        }).catch((error) => {
            console.log('Error al actualizar vas en camino');            
            console.log(error);
        })       
        
    }

    const llamaAActualizarEStadoAEnCliente = (idActuacion) => {

        actualizaEstadoAEnCliente(idActuacion)

        .then(() => {                      
            console.log('Estas en cliente');                      

        }).catch((error) => {
            console.log('Error al actualizar estas en cliente');            
            console.log(error);
        })
    }
    
    return (
        <>
            <Lista>
            {
                // Si no obtuve actuaciones muestro mensaje
                array.length === 0 ?
                
                    <ContenedorSubtitulo>
                        <Subtitulo>No hay actuaciones agendadas</Subtitulo>                
                    </ContenedorSubtitulo>
                :

                    // En caso contrario recorro las actuaciones sin mostrar fecha repetidas y mostrando la informacion relevente
                    array.map((actuacion, index) => {                
                        
                        return (

                        // Solo tengo un key que debo añadir a los elementos Fecha y ElementosLista
                        // Englobo a los elementos en un div al que le pongo el key
                        <div key={actuacion.codigoIncidencia}>

                            {/* Solo mostraré la fecha y la cabecera si la fecha si es diferente a la anterior */}
                            {!fechaCitacionEsIgual(array, index, actuacion) &&
                            <>

                                <Fecha>
                                    {formatearFecha(actuacion.fechaCitacion)}
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
                                {actuacion.direccion}
                            </Direccion>

                            <Poblacion>
                                {actuacion.poblacion}
                            </Poblacion>

                            {/* Muestro el estado siempre. Lo mostraré en colores solo cuando esté en camino o en cliente*/}
                            {/* Mostraré la hora si estoy en camino o en cliente solo de colores */}
                            <Estado>

                                { actuacion.estadoDescripcion === "En camino" ?
                                        <>
                                            <SpanHoraEnCamino>{actuacion.estadoDescripcion}</SpanHoraEnCamino>
                                            <SpanHoraEnCamino>{formatearFechaEnHoraYSegundos(actuacion.horaEnCamino)}</SpanHoraEnCamino>
                                        </>
                                    :
                                        actuacion.estadoDescripcion === "En cliente" ?
                                        <>
                                            <SpanHoraDeLlegada>{actuacion.estadoDescripcion}</SpanHoraDeLlegada>
                                            <SpanHoraDeLlegada>{formatearFechaEnHoraYSegundos(actuacion.horaDeLlegada)}</SpanHoraDeLlegada>
                                        </>

                                        :
                                            <span>{actuacion.estadoDescripcion}</span>
                                }
                                
                            </Estado>                    

                            {/* Botones para editar la actuacion */}
                            <ContenedorBotonesLista>
                                
                                {/* Muestro botones de editar y borrar */}
                                {laPideUnCoordinador ? 
                                    <>
                                        <BotonAccion as={Link} to={`/coordinador/detalles/${actuacion.id}`}>
                                            <IconoEditar /> 
                                        </BotonAccion>

                                        <BotonAccion>
                                            <IconoBorrar />
                                        </BotonAccion>
                                    </>
                                    : null}       
                                

                                {/* Muestro los botones de en camino y estar en cliente dependiendo del contexto desplazamientos */}                                
                                {laPideUnTecnico ?                                    
                                    
                                    <>
                                        {actuacion.estado === 'EstadoAgenda' && tecnicoEncamino===false ?
                                            <BotonAccion onClick={() => llamaAActualizaEstadoAEnCamino(actuacion.id)}> 
                                                <IconoCoche />
                                            </BotonAccion>
                                            : null
                                        }
                                        
                                        {actuacion.estado ==='EstadoEnCamino' ?
                                            <BotonAccion onClick={() => llamaAActualizarEStadoAEnCliente(actuacion.id)}> 
                                                <IconoCliente />
                                            </BotonAccion> 
                                            : null
                                        }
                                
                                        <BotonAccion as={Link} to={`/tecnico/editar-actuacion/${actuacion.id}`} >
                                            <IconoEditar /> 
                                        </BotonAccion>
                                    </>
                                    
                                    : null
                                }  
                                </ContenedorBotonesLista>                  
                            </ElementoLista>
                        </div>                
                        )
                    })
                }
            </Lista>
        </>
        
    );
}
 
export default ListaActuacionesDeUnTecnico;