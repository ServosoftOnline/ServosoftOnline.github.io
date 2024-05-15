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
import React from 'react';
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
import formatearFechaEnHoraYSegundos from '../funciones/formatearFechaEnHoraYSegundos';

// Funcion que actualiza en firebase
import actualizaActuacionEnCamino from '../firebase/actualizaActuacionEnCamino';
import actualizaActuacionEnCliente from '../firebase/actualizaActuacionEnCliente';
import actualizaTecnicoEnCamino from '../firebase/actualizaTecnicoEnCamino';
import actualizaTecnicoEnCliente from '../firebase/actualizaTecnicoEnCliente';

// Hook
import useObtenerIdRolesDeUnUsuario from '../hooks/useObtenerIdRolesDeUnUsuario';
import useObtenerEstadoDeUnUsuario from '../hooks/useObtenerEstadoDeUnUsuario';
import useObtenerIdActuacionDeUnUsuario from '../hooks/useObtenerIdActuacionDeUnUsuario';

// Componente
const ListaActuacionesDeUnTecnico = ({array, laPideUnTecnico, laPideUnCoordinador}) => {  
    
    // Obtengo el id del rol del tecnico y su estado
    const [idRoles] = useObtenerIdRolesDeUnUsuario();  
    const [estadoDelTecnico] = useObtenerEstadoDeUnUsuario();    

    // Obtengo idActuacionDeUnUsuario como un objeto. Lo paso a array el cual contiene a un string. Me sirve para comparar mismos tipos de datos
    const [idActuacionDeUnUsuario] = useObtenerIdActuacionDeUnUsuario();
    const [stringIdActuacionDeUnUsuario] = Object.values(idActuacionDeUnUsuario);
    
    // Funciones para actualizar los estados de la actuacion y del tecnico a EnCamino

    const tecnicoEnCamino = (idRoles, idActuacion) => {    
        actualizaTecnicoEnCamino(idRoles, idActuacion)

        .then (() => {
            console.log('Actualizado el estado del usuario a en camino');

        }).catch((error) => {
            console.log('Error al actualizar el estado del usuario a en camino');
            console.log(error);
        })

    }

    const actuacionEnCamino = (idActuacion) => { 
        
        actualizaActuacionEnCamino(idActuacion)

        .then(() => {                                    
            console.log('Actualizado la actuacion a estado en camino');
            console.log('Llamo a la funcion que actualiza al tecnico a estado en camino');
            tecnicoEnCamino(idRoles, idActuacion);            


        }).catch((error) => {            
            console.log('Error al actualizar la actuacion al estado en camino');            
            console.log(error);
        })       
        
    }

    // Funciones para actualizar los estados de la actuacion y del tecnico a EnCliente

    const tecnicosEnCliente = (idRoles) => {

        actualizaTecnicoEnCliente(idRoles)

        .then (() => {
            console.log('Actualizado el estado del tecnico a en cliente');

        }).catch((error) => {
            console.log('Error al actualizar el estado del tecnico a en cliente');
            console.log(error);
        })

    }

    const actuacionEnCliente = (idActuacion) => {

        actualizaActuacionEnCliente(idActuacion)

        .then(() => {                                  
            console.log('Actualizado actuación a estado en cliente');
            console.log('LLamo a la funcion que actualiza al tecnico a estado en cliente');
            tecnicosEnCliente(idRoles);             

        }).catch((error) => {
            console.log('Error al actualizar al menos un tecnico en cliente');            
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

                                {/* Botones para gestionar la actuacion */}
                                <ContenedorBotonesLista>
                                    
                                    {/* Muestro botones de editar y borrar si se pide desde el modulo coordinador */}
                                    {laPideUnCoordinador === true ? 
                                        <>
                                            <BotonAccion as={Link} to={`/coordinador/detalles/${actuacion.id}`}>
                                                <IconoEditar /> 
                                            </BotonAccion>

                                            <BotonAccion>
                                                <IconoBorrar />
                                            </BotonAccion>
                                        </>
                                        : null}       
                                    

                                    {/* Muestro los botones de en camino, en cliente y editar si se pide desde el modulo tecnico.
                                        El boton del coche se mostrará si el tecnico estuviera en estado citado
                                        El boton del cliente se mostrará solo si estoy en camino hacia la actuacion obtenida del hook
                                        que seañ igual a la actuacion que estoy recorriendo al pintar los elementos de la lista.
                                        El botón de la lista se muestra siempre  */}                                
                                        
                                    {laPideUnTecnico === true ?                                    

                                        <>  
                                            
                                            {/* si no pongo el indice 0, no va. NO QUITARLO */}
                                            {estadoDelTecnico[0] === 'Citado' &&
                                                <BotonAccion onClick={() => actuacionEnCamino(actuacion.id)}> 
                                                    <IconoCoche />
                                                </BotonAccion>
                                            }  

                                            {/* MUY IMPORANTE COMPARAR DATOS DEL MISMO TIPO */}
                                            {estadoDelTecnico[0] === 'EnCamino' && stringIdActuacionDeUnUsuario === actuacion.id &&
                                                <BotonAccion onClick={() => actuacionEnCliente(actuacion.id)}> 
                                                    <IconoCliente />
                                                </BotonAccion>
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