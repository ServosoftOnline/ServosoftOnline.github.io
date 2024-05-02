/*
    MUESTRA LAS ACTUACIONES DE UN ESTADO CON EL BOTON DE EDITARLAS O BORRARLAS
        - Este componente puede ser llamado desde los componentes coordinador o tecnico
        - Dependiendo que componente lo llame el link al que apunta el icono editar será a un formulario o a otro
        - Solo se mostrará el icono borrar si es un coordinador
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
import fechaCitacionEsIgual from '../funciones/fechaCitacionEsIgual';
import formatearFecha from '../funciones/formatearFecha';

// Componente
const ListaActuacionesDeUnTecnico = ({array, laPideUnTecnico, laPideUnCoordinador}) => {
    
    return (
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

                        <Estado>
                            {actuacion.estadoDescripcion}
                        </Estado>                    

                        {/* Boton para editar la actuacion */}
                        <ContenedorBotonesLista>
                            
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

                            {laPideUnTecnico ?
                                <BotonAccion as={Link} to={`/tecnico/editar-actuacion/${actuacion.id}`} >
                                    <IconoEditar /> 
                                </BotonAccion>
                                : null}                            

                            {/* <BotonAccion as={Link} to={`/borrar/${actuacion.id}`}>  */}
                            

                            </ContenedorBotonesLista>                  
                        </ElementoLista>
                    </div>                
                    )
                })
            }
        </Lista>
    );
}
 
export default ListaActuacionesDeUnTecnico;