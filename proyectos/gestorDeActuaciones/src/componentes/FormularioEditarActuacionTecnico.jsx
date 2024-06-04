/*
    COMPONENTE QUE MUESTRA EL FORMULARIO PARA QUE LOS TECNICOS PUEDAN EDITAR SUS ACTUACIONES
*/

// React
import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

// Firestore
import { deleteField } from "firebase/firestore";

// date-fns
import {getUnixTime } from "date-fns";

// Elementos
import  {ContenedorEditarActuacion, ContenedorSoloLectura, ContenedorCliente, ContenedorDescripcion, LinkDorus,
        ContenedorDireccion, LinkCoordenadas, ContenedorAcompañantes, ComentariosDesdeCoordinacion, Momentos,
        Dificultad, ContenedorDificultad, DificultadYPuntos, ConsideracionNivel4, CheckBox, Fotografias, ContenedorFotografias,
        ComentariosTecnicos, ContenedorComentariosTecnicos, ContenedorEstadoYBoton, Estado, ContenedorBoton,
        ComentariosDesdeSupervision} from './../elementos/ElementosDeFormularioEditarActuacionTecnico';

// Componentes select
import SelectEstadosModuloTecnico from "./SelectEstadosModuloTecnico";

// Resto de los componentes
import Boton from "../elementos/Boton";

// Funciones
import formatearFechaEnHoraYSegundos from "../funciones/formatearFechaEnHoraYSegundos";

// Funcion firebase
import actualizaColeccionActuaciones from "../firebase/actualizaColeccionActuaciones";
import actualizaTecnicoACitado from "../firebase/actualizaTecnicoACitado";

// Componentes
import Mensaje from "./Mensaje";

// Contextos
import { ContextoMensaje } from "./../contextos/contextoMensaje";

// Hooks
import useObtenerActuacionAPartirDeSuId from "../hooks/useObtenerActuacionAPartirDeSuId";
import useObtenerTecnicosAPartirDelIdActuacion from "../hooks/useObtenerTecnicosAPartirDelIdActuacion";
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";
import useObtenerIdRolesDeUnUsuario from "../hooks/useObtenerIdRolesDeUnUsuario";

// Mi componente
const  FormularioEditarActuacionTecnico = () => {

    // Obtendo el idActuacion pasado por la barra de direccion
    const {idActuacion} = useParams();

    // Obtengo del contexto los mensajes que mostraré en pantalla
    const {mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje, eliminarMensaje} = useContext(ContextoMensaje);
    
    // Estados        
    const [estado, asignarEstado] = useState('');    
    const [estadoDescripcion, asignarEstadoDescripcion] = useState('');
    const [momentoInicioCamino, asignarMomentoInicioCamino] = useState('');
    const [momentoLlegadaACliente, asignarMomentoLlegadaACliente] = useState('');
    const [momentoFinActuacion, asignarMomentoFinActuacion] = useState('');
    const [consideraNivel4, asignarConsideraNivel4] = useState("No");
    const [dificultadTemporal, asignarDificultadTemporal] = useState("Nivel 4");
    const [puntosTemporales, asignarPuntosTemporales] = useState(0);
    const [comentariosTecnicos, asignarComentariosTecnicos] = useState("");
    

    // Informacion obtenida desde los hooks
    const [actuacion] = useObtenerActuacionAPartirDeSuId(idActuacion);   
    const [todosLosTecnicos] = useObtenerTecnicosAPartirDelIdActuacion(idActuacion);
    const [nombre] = useObtenerNombreDeUnUsuario(); 
    const [idRoles] = useObtenerIdRolesDeUnUsuario();


    // Obtengo los acompañantes filtrando a todos los tecnicos obtenidos por el hook eliminandole quien inico la sesion guardado en nombre
    let acompañantes = []; 
    if (Array.isArray(todosLosTecnicos)) {        
        acompañantes = todosLosTecnicos.filter((tecnico) => {
            if(tecnico != nombre){
                return tecnico;
            }
        });
    };   
    

    // Efecto para obtener los datos que iré mostrando en el formulario
    useEffect(() => {       
        console.log(actuacion.estadoDescripcion);
        console.log(actuacion.horaEnCamino);
        console.log(actuacion.horaDeLlegada);
        console.log(actuacion.comentariosTecnicos);

        eliminarMensaje();
        asignarEstadoDescripcion(actuacion.estadoDescripcion);
        asignarMomentoInicioCamino(actuacion.horaEnCamino);
        asignarMomentoLlegadaACliente(actuacion.horaDeLlegada);
        asignarComentariosTecnicos(actuacion.comentariosTecnicos);

    },[actuacion.estadoDescripcion, actuacion.horaEnCamino, actuacion.horaDeLlegada, actuacion.comentariosTecnicos]);  
   
    // Efecto que asigna la hora de finalizacion de la actuación en todos los casos posibles una vez acabada la actuacion
    // Debo reiniciar los momentos de en camino y llegada para guardarlos vacios en la bbdd solo si no es EstadoSupervision
    useEffect(() => {        
        
        switch (estado){            
            
            case 'EstadoSupervision':                
                asignarMomentoFinActuacion(getUnixTime(new Date()));
                break;

            case 'EstadoIlocalizable':                
                asignarMomentoFinActuacion(getUnixTime(new Date()));
                break;

            case 'EstadoIncidencias':                
                asignarMomentoFinActuacion(getUnixTime(new Date()));
                break;

            case 'EstadoFaltaCitas':                
                asignarMomentoFinActuacion(getUnixTime(new Date()));
                break;

            case 'EstadoMantenimiento':                
                asignarMomentoFinActuacion(getUnixTime(new Date()));
                break;
                
            default:
                console.log('No entro en ninguno case');
        }

    },[estado]);

    // Funciones    
    const abrirGoogleMaps = (coordenadas) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${coordenadas}`;
        window.open(url, '_blank'); 
    }

    const llamaAActualizaTecnicoACitado = (idRoles) => {
        console.log('idRoles obtenido: ' + idRoles);
        actualizaTecnicoACitado(idRoles)

        .then (() => {
            console.log('Cambiado el estado del tecnico a citado');

        }).catch((error) => {
            console.log('Error al cambiar el estado del tecnico a citado');
            console.log(error);
        })

    }

    const validacionCorrecta = () => {
        
        // Validacion 1: El estado no puede quedarse en camino o en cliente
        if (estado === undefined) {
            cambiarMensaje('El estado no puede quedarse en camino o en cliente. Debes cambiarlo','incorrecta');
            return false;
        } 
        
        // Validacion 2: No se puede cambiar de estado sin que halla un momento de inicio de camino y estada en cliente
        console.log('horaEncamino: ' + actuacion.horaEnCamino);
        console.group('horaDeLlegada: ' + actuacion.horaDeLlegada);
        if(actuacion.horaEnCamino === undefined || actuacion.horaDeLlegada === undefined ) {
            cambiarMensaje('Antes de cambiar el estado de la actuación debes marcar "En camino" y "En cliente"', 'incorrecta');
            return false;
        }
        
        return true;        
    }

    const LlamaAActualizarColeccionActuaciones = (idActuacion) => {   
        
        // Puede haber casos en que el tecnico no desplace o no llegue a cliente. En ese caso actualizo eliminando el contenido
        actualizaColeccionActuaciones({  
            horaEnCamino: momentoInicioCamino !== undefined ? momentoInicioCamino : deleteField() ,
            horaDeLlegada: momentoLlegadaACliente !== undefined ? momentoLlegadaACliente: deleteField(),
            horaFinalizacion: momentoFinActuacion,     
            comentariosTecnicos: comentariosTecnicos,
            estado: estado,
            estadoDescripcion: estadoDescripcion,
            idActuacion: idActuacion
        })

        .then(() => {                        
            console.log('Actualizo coleccion de actuaciones');                      

        }).catch((error) => {
            console.log('Error al actualizar la coleccion de actuaciones');            
            console.log(error);
        }) 
    }

    const handleChange = (e) => {

        switch (e.target.name){

            case 'nivel4':                
                asignarConsideraNivel4(e.target.value);
                break;

            case 'comentariosTecnicos':                
                asignarComentariosTecnicos(e.target.value);
                break;

            default:
                console.log('No entro en ninguno case');
        }
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();        

        // Si la validacion es correcta llamo a la funcion que actualizará la coleccion actuaciones
        if (validacionCorrecta()) {
            LlamaAActualizarColeccionActuaciones(idActuacion);           
            llamaAActualizaTecnicoACitado(idRoles);
            cambiarMensaje('Actualizacion correcta', 'correcta');
            reiniciarMensaje();
        }       

    }
    
    return (        

        <ContenedorEditarActuacion>
            <form onSubmit={handleSubmit}>

                {/* Subcontenedor solo con elementos de lectura */}
                <ContenedorSoloLectura>

                    {/* Codigo de incidencia, cliente y descripcion */}
                    <div>
                        <label htmlFor="codigoIncidencia">Código de incidencia: </label>
                        {actuacion.codigoIncidencia}
                    </div>

                    <ContenedorCliente>
                        <label htmlFor="cliente">Cliente: </label>
                        {actuacion.nombre}
                    </ContenedorCliente>

                    <ContenedorDescripcion>
                        <label htmlFor="descripcion">Descripción: </label>
                        {actuacion.descripcion}
                    </ContenedorDescripcion>

                    {/* link para dorus */}
                    <LinkDorus>
                        <label htmlFor="linkDorus">Link Dorus: </label>
                        <a href={actuacion.linkDorus} target="_blank">{actuacion.linkDorus}</a>                         
                    </LinkDorus>

                    {/* Dirección y población */}
                    <ContenedorDireccion>
                        <label htmlFor="direccion">Dirección: </label>
                        {actuacion.direccion}
                    </ContenedorDireccion>

                    <div>
                        <label htmlFor="poblacion">Población: </label>
                        {actuacion.poblacion}
                    </div>

                    {/* Coordenadas de google maps */}
                    <LinkCoordenadas> 
                        <label htmlFor="coordenadas">Coordenadas: </label> 
                        <a href="#" onClick={() => abrirGoogleMaps(actuacion.coordenadas)}>{actuacion.coordenadas}</a>
                    </LinkCoordenadas>

                    {/* Telefonos, tipo de actuacion, zona, momentos de en camino e inicio de actuacion y comentarios coordinacion */}                    
                    <div>
                        <label htmlFor="telefonos">Telefonos: </label>
                        {actuacion.telefonos}
                    </div>

                    <div>
                        <label htmlFor="tipoActuacion">Tipo de actuación: </label>
                        {actuacion.tipoActuacion}
                    </div>

                    <div>
                        <label htmlFor="zona">Zona: </label>
                        {actuacion.zonaInstalacion}
                    </div>

                    <div>
                        <label htmlFor="tipoTrabajo">Tipo de trabajo: </label>
                        {actuacion.tipoTrabajo}
                    </div>

                    {/* Tecnicos acompañantes, los devuelvo separados por comas mediante map */}
                    <ContenedorAcompañantes>

                        <label htmlFor="tecnicosAcompañantes">Acompañantes: </label>
                        {
                            acompañantes.length === 0 ? 'Vas solo'
                            :                        
                            acompañantes.map((acompañante, index) => (
                                <React.Fragment key={index}>
                                    {acompañante}
                                    {index !== acompañantes.length - 1 && ", "}
                                </React.Fragment>
                            ))
                        }
                    </ContenedorAcompañantes>

                </ContenedorSoloLectura>

                {/* Comentarios desde coordinacion */}
                <ComentariosDesdeCoordinacion> 

                    <label htmlFor="comentariosCoordinacion"> Comentarios desde coordinación: </label>
                    <p>{actuacion.comentariosCoordinacion !== "" ? actuacion.comentariosCoordinacion : "No hay comentarios" } </p>

                </ComentariosDesdeCoordinacion>
                
                {/* Momentos */}
                <Momentos>

                    <div>
                        <label htmlFor="momentoInicioCamino">Inicio camino: </label>
                        {momentoInicioCamino !== undefined ? formatearFechaEnHoraYSegundos(momentoInicioCamino):null} 
                    </div>

                    <div>
                        <label htmlFor="momentoInicioActuacion">Inicio actuacion: </label>
                        {momentoLlegadaACliente !== undefined ? formatearFechaEnHoraYSegundos(momentoLlegadaACliente):null}                         
                    </div>

                    <div>
                        <label htmlFor="momentoFinActuacion">Fin actuacion: </label>
                        {momentoFinActuacion !== undefined ? formatearFechaEnHoraYSegundos(momentoFinActuacion):null}                        
                    </div>
                    
                </Momentos>

                {/* Dificultad de la actuacion */}                
                <Dificultad>

                    <label htmlFor="DificultadYPuntos">Dificultad de la actuacion: </label>
                    <ContenedorDificultad>
                        
                        <DificultadYPuntos>

                            <div>
                                <label htmlFor="dificultad">Dificultad actual: </label>
                                {consideraNivel4 === "Si" ? dificultadTemporal : actuacion.dificultad} 
                            </div>

                            <div>
                                <label htmlFor="puntos">Puntos: </label>
                                {consideraNivel4==="Si" ? puntosTemporales : actuacion.puntos} 
                            </div>

                        </DificultadYPuntos>

                        <ConsideracionNivel4>
                            <div>
                                <h4>¿Consideras actuación nivel4?</h4>
                            </div>

                            <div>
                                <input 
                                    type="radio"
                                    name="nivel4"
                                    id="si"
                                    value = "Si"
                                    onChange={handleChange}
                                    checked={consideraNivel4==="Si"}
                                />
                                <label htmlFor="si">Sí</label>

                                <input 
                                    type="radio"
                                    name="nivel4"
                                    id="no"
                                    value = "No"
                                    onChange={handleChange}
                                    checked={consideraNivel4==="No"}
                                />
                                <label htmlFor="no">No</label>
                            </div>
                        </ConsideracionNivel4>
                
                        {/* Se mostrará el checkbox solo si el tecnico lo considera una actuacion de nivel4 */}
                        {consideraNivel4 === "Si" &&
                            
                            <CheckBox>
                                checkbox
                            </CheckBox>
                        }
                    </ContenedorDificultad>

                </Dificultad>
                
                {/* Fotografias */}
                <Fotografias>
                    <label htmlFor="Fotografias">Fotografías: </label>
                    <ContenedorFotografias>

                    </ContenedorFotografias>                    
                </Fotografias>

                {/* Comentarios Tecnicos */}
                <ComentariosTecnicos>
                    <label htmlFor="comentariosTecnicos">Comentarios técnicos:</label>
                    <ContenedorComentariosTecnicos>
                        
                        <textarea                            
                            name="comentariosTecnicos"                
                            placeholder={actuacion.comentariosTecnicos ? actuacion.comentariosTecnicos : "Introduzca comentarios opcionales"}
                            value={comentariosTecnicos}
                            onChange={handleChange}                            
                        />
                    </ContenedorComentariosTecnicos>
                </ComentariosTecnicos>
                
                {/* Si hay comentarios de supervisor los muestro */}
                {actuacion.comentariosSupervision &&
                    <>
                        <label htmlFor="comentariosSupervision"> Comentarios del supervisor: </label>

                        <ComentariosDesdeSupervision>                    
                            <p>{actuacion.comentariosSupervision !== "" ? actuacion.comentariosSupervision : "No hay comentarios" } </p>
                        </ComentariosDesdeSupervision>
                    </>
                }
                
        
                {/* No se mostrarán el estado y el botón si el estado de la actuacion es supervisado */}
                {actuacion.estado !== 'EstadoSupervisado' && 
                    <ContenedorEstadoYBoton>
                        
                        <Estado>
                            <SelectEstadosModuloTecnico
                                asignarEstado={asignarEstado}
                                estadoDescripcion={estadoDescripcion}
                                asignarEstadoDescripcion={asignarEstadoDescripcion}
                            />
                        </Estado>

                        <ContenedorBoton>
                            <Boton
                                $primario                        
                                as="button"
                                type="submit"
                            >
                                Actualizar
                            </Boton>
                        </ContenedorBoton>

                    </ContenedorEstadoYBoton>
                }                

            </form>

            {/* Mensaje con el resultado de la validacion. Se mostrará en verde u rojo */}
            <Mensaje $validacion={rdoValidacion} mensaje={mensajeAMostrar}/>

        </ContenedorEditarActuacion>
    );
}
 
export default FormularioEditarActuacionTecnico;