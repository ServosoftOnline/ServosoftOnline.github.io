/*
    MUESTRA LAS ACTUACIONES DE UN ESTADO CON DIFERENTES BOTONES
    array, laPideUnTecnico, quiereVerSuProductividad, laPideUnCoordinador, estadoDelTecnico, rutadevuelta
        - Este componente puede ser llamado desde los componentes coordinador o tecnico.

            - Estan determinados por los siguientes parámetros que recibe:
                - array contiene las actuaciones que debe mostrar

                - si laPideUnCoordinador: 
                    - mostrará los botones de editar y borrar
                    - el botón de editar apuntará al formulario para que editen los coordinadores

                - si laPideUnTecnico:
                    - mostrará los botones de en camino, en cliente y editar
                    - el botón de editar apuntará al formulario para que editen el tecnico asociado

                - Si quiereVerSuProductividad que esta asociada al tecnico
                    - El boton de editar apuntará al formulario de actuaciones supervisadas que comparte con el modulo corrdinador
                    
                - estadoDelTecnico determinará como se muestran los iconos de encamino y en cliente
                - rutadevuelta. contiene la ruta del componente del que fue lamado para que al volver valla ahí

        - Los colores de los botones y su estado asociado serán naranjas, verdes o azules
        - Las descripciones de los estados serán naranjas o verdes correspondiendo a los colores de sus botones
        - Obtengo mediante la funcion resolutionChecker el ancho en pixeles de la pantalla del dispositivo
        - Tengo en cuenta ese ancho para ajustar el interfaz del tecnico cuando el movil está en posicion vertical
        
*/

// React
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

// Elementos
import  {Lista, ContenedorLista, ContenedorSubtitulo, Subtitulo, ContenedorMostrarBarraEstadoTecnicos, DecisionMostrarBarraEstadoTecnicos, Fecha,
        NombreDelTecnico, ElementoListaCabecera, ElementoLista, Incidencia, Cliente, Direccion, Poblacion,
        Estado, SpanHoraEnCamino, SpanHoraDeLlegada, Gestion, ContenedorBotonesLista,
        BotonAccion} from '../elementos/ElementosDeLista';

// SVG
import IconoEditar from './../assets/editar.svg?react';
import IconoBorrar from './../assets/borrar.svg?react';
import IconoCoche from './../assets/coche.svg?react';
import IconoCliente from './../assets/cliente.svg?react';

// Funciones
import fechaCitacionEsIgual from '../funciones/fechaCitacionEsIgual';
import tecnicoEsIgual from '../funciones/tecnicoEsIgual';
import formatearFecha from '../funciones/formatearFecha';
import formatearFechaEnHoraYSegundos from '../funciones/formatearFechaEnHoraYSegundos';
import anchoDePantalla from './../funciones/anchoDePantalla';

// Funcion que actualiza en firebase
import actualizaActuacionEnCamino from '../firebase/actualizaActuacionEnCamino';
import actualizaActuacionEnCliente from '../firebase/actualizaActuacionEnCliente';
import actualizaTecnicoEnCamino from '../firebase/actualizaTecnicoEnCamino';
import actualizaTecnicoEnCliente from '../firebase/actualizaTecnicoEnCliente';

// Hook
import useObtenerIdRolesDeUnUsuario from '../hooks/useObtenerIdRolesDeUnUsuario';
import useObtenerIdActuacionDeUnUsuario from '../hooks/useObtenerIdActuacionDeUnUsuario';

// Componentes importados
import BarraEstadosTecnicos from "./BarraEstadosTecnicos";


// Contextos
import {muestraEstadosTecnicosContext} from './../contextos/muestraEstadosTecnicosContext';
import {useRol} from './../contextos/RolContext';

// Componente
const ListaActuacionesDeUnTecnico = ({array, laPideUnTecnico, quiereVerSuProductividad, laPideUnCoordinador, estadoDelTecnico, rutadevuelta}) => {  
    
    // Obtengo el id del rol del tecnico y su estado
    const [idRoles] = useObtenerIdRolesDeUnUsuario(); 

    // Obtengo idActuacionDeUnUsuario como un objeto. Lo paso a array el cual contiene a un string. Me sirve para comparar mismos tipos de datos
    const [idActuacionDeUnUsuario] = useObtenerIdActuacionDeUnUsuario();
    const [stringIdActuacionDeUnUsuario] = Object.values(idActuacionDeUnUsuario);

    // Obtengo desde el contexto
    const {mostrarBarraTecnicos, setMostrarBarraTecnicos} = useContext(muestraEstadosTecnicosContext); 

    // Obtengo el rol del usuario
    let {rol} = useRol();     
    
    // Obtengo el ancho de la funcion anchoDePantalla y defino el ancho de los smartphone
    const {anchoActual, anchoMaximoMovilVertical} = anchoDePantalla();       

    // FUNCIONES:
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

    const handleChange = (e) => {    
        setMostrarBarraTecnicos(e.target.value);
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
                    // En caso contrario. Si lo pide un coordinador pregunto si desea mostrar la barra de estado de tecnicos
                    // Muestro la lista siempre, la pida un coordinador o no
                    <ContenedorLista>                       
                        {laPideUnCoordinador &&
                        <> 
                            <form>
                                
                                <ContenedorMostrarBarraEstadoTecnicos>

                                    <h4>¿Deseas mostrar el estado de los técnicos?</h4>

                                    <DecisionMostrarBarraEstadoTecnicos>
                                        <input 
                                            type="radio"
                                            name="barraTecnicos"
                                            id="si"
                                            value = "true"
                                            onChange={handleChange}
                                            checked={mostrarBarraTecnicos === "true"}
                                        />
                                        <label htmlFor="si">Sí</label>

                                    </DecisionMostrarBarraEstadoTecnicos>

                                    <DecisionMostrarBarraEstadoTecnicos>
                                        <input 
                                        type="radio"
                                        name="barraTecnicos"
                                        id="no"
                                        value = "false"
                                        onChange={handleChange}
                                        checked={mostrarBarraTecnicos === "false"}
                                        />
                                        <label htmlFor="no">No</label>
                                    </DecisionMostrarBarraEstadoTecnicos>

                                </ContenedorMostrarBarraEstadoTecnicos>
                                
                            </form>

                            {/* Muestro la barra solo si en el contexto mostrarBarraTecnicos contiene true */}
                            {mostrarBarraTecnicos==='true' && <BarraEstadosTecnicos /> }
                        </>
                        }
                        
                        {// Recorro las actuaciones sin mostrar fecha repetidas y mostrando la informacion relevente
                        array.map((actuacion, index) => {                
                            
                            return (

                            // Solo tengo un key que debo añadir a los elementos Fecha y ElementosLista
                            // Englobo a los elementos en un div al que le pongo el key
                            <div key={actuacion.codigoIncidencia}>

                                {/* No repite fechas */}
                                {!fechaCitacionEsIgual(array, index, actuacion) &&
                                <>

                                    <Fecha>
                                        {formatearFecha(actuacion.fechaCitacion)}
                                    </Fecha>
                                    
                                </>
                                }

                                {/* No repite tecnicos */}
                                {!tecnicoEsIgual(array, index, actuacion) &&
                                    <>
                                        {/* Solo muestro el nombre del tecnico si lo pide un coordinador o administrador 
                                            Evita que el propio tecnico vea su nombre y gane en espacio*/}
                                        {rol!='tecnico' &&
                                            <NombreDelTecnico>
                                                {actuacion.tecnico1}
                                            </NombreDelTecnico>                                
                                        }
                                        

                                        {/* Reduzco el interfaz dependiendo del ancho del dispositivo con el que acceda 
                                        Solo muestro la direccion si el ancho es superior a la cte anchoSmartphone */}

                                        <ElementoListaCabecera>

                                            <Incidencia>
                                                { anchoActual < anchoMaximoMovilVertical ? 'Cod.I' : 'Incidencia'}
                                            </Incidencia>

                                            <Cliente>Cliente</Cliente>
                                            {anchoActual > anchoMaximoMovilVertical && <Direccion>Dirección</Direccion> }
                                            <Poblacion>Población</Poblacion>
                                            <Estado>Estado</Estado>

                                            <Gestion>
                                                { anchoActual < anchoMaximoMovilVertical ? 'Gest.' : 'Gestión'}                                                
                                            </Gestion>

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

                                    {/* Solo muestro la direccion si el ancho es superior a la cte anchoSmartphone */}
                                    {anchoActual > anchoMaximoMovilVertical &&
                                        <Direccion>
                                            {actuacion.direccion}
                                        </Direccion>
                                    }

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
                                                    <>
                                                        <span>{actuacion.estadoDescripcion}</span>
                                                        <span>
                                                            {actuacion.estado === 'EstadoAgenda' && actuacion.descripcionHoraCitacion}
                                                        </span>
                                                    </>
                                        }
                                        
                                    </Estado>                    

                                    {/* Botones para gestionar la actuacion */}
                                    <ContenedorBotonesLista>
                                        
                                        {/* Muestro botones de editar y borrar si se pide desde el modulo coordinador */}
                                        {laPideUnCoordinador === true  &&
                                            <>
                                                <BotonAccion
                                                    as={Link}
                                                    state={{ rutadevuelta }}
                                                    to = {`/coordinador/detalles/${actuacion.id}`}
                                                >
                                                    <IconoEditar /> 
                                                </BotonAccion>

                                                <BotonAccion>
                                                    <IconoBorrar />
                                                </BotonAccion>
                                            </>                                            
                                        }       
                                        

                                        {/* Muestro los botones de en camino, en cliente y editar si se pide desde el modulo tecnico.
                                            El boton del coche se mostrará si el tecnico estuviera en estado citado
                                            El boton del cliente se mostrará solo si estoy en camino hacia la actuacion obtenida del hook
                                            que seañ igual a la actuacion que estoy recorriendo al pintar los elementos de la lista.
                                            El botón de la lista se muestra siempre  */}                                
                                            
                                        {laPideUnTecnico === true ?                                    

                                            <>  
                                                
                                                {/* si no pongo el indice 0, no va. NO QUITARLO */}
                                                {/* El icono del coche solo se muestra si el estado del tecnico es citado,
                                                    la actuacion no ha sido supervisada y el estado de la actuacion es EstadoAgenda */}

                                                {/* {(estadoDelTecnico[0] === 'Citado' && (actuacion.estado !== 'EstadoSupervisado')) && */}
                                                {(estadoDelTecnico[0] === 'Citado' && (actuacion.estado === 'EstadoAgenda')) &&
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
                                                
                                                {quiereVerSuProductividad ?

                                                    <BotonAccion
                                                        as={Link}
                                                        state={{ rutadevuelta }} 
                                                        to={`/tecnico/instalados-finalizados/${actuacion.id}`} >  
                                                    
                                                        <IconoEditar /> 
                                                    </BotonAccion>
                                                    : 
                                                    <BotonAccion
                                                        as={Link}
                                                        state={{ rutadevuelta }} 
                                                        to={`/tecnico/editar-actuacion/${actuacion.id}`} >
                                                            
                                                        <IconoEditar /> 
                                                    </BotonAccion>
                                                
                                                }
                                                

                                                {/* Si se pide desde productividad tecnico: to={`/coordinador/instalados-finalizados/${actuacion.id}`}> 
                                                que quiere ver su productividad */}
                                            </>
                                            
                                            : null
                                        }  
                                    </ContenedorBotonesLista>                  
                                </ElementoLista>
                            </div>                
                            )
                        })}
                    </ContenedorLista>
                    
            }
        </Lista>
    </>
    
    );
}
 
export default ListaActuacionesDeUnTecnico;