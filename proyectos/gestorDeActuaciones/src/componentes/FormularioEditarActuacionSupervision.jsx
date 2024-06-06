/*
    COMPONENTE QUE MUESTRA EL FORMULARIO PARA QUE QUIEN ESTÉ SUPERVISANDO PUEDA ENVIAR LA ACTUACION A FINALIZADOS.

        - IMPORTANTE: NO CONFUNDIR CON EL FormularioEditarActuacionTecnico ES MUY PARECIDO.
*/

// React
import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

// Firestore
import { deleteField } from "firebase/firestore";

// Elementos
import  {ContenedorSupervisarActuacion, ContenedorActuacion, TecnicosAcompañantes, SubContenedorSoloLectura,
        ComentariosDesdeCoordinacion, ContenedorTrabajoDelTecnico, Momentos, ContenedorFotografias, Fotografias,
        ComentariosTecnicos, ContenedorComentariosTecnicos, DecisionDelSupervisor, Dificultad, ContenedorDificultad,
        DificultadYPuntos, ConsideracionNivel4, CheckBox, ComentariosSupervision, ContenedorComentariosSupervision,
        ContenedorEstadoYBoton, Estado, ContenedorBoton} from '../elementos/ElementosDeFormularioSupervision';

// Componentes select
import SelectEstadosSupervision from "./SelectEstadosSupervision";

// Resto de los componentes
import Boton from "../elementos/Boton";

// Funciones
import formatearFechaEnHoraYSegundos from "../funciones/formatearFechaEnHoraYSegundos";

// Funcion firebase
import actualizaActuacionSupervisada from "../firebase/actualizaActuacionSupervisada";
import actualizaActuacionAPteDeCoordinar from "../firebase/actualizaActuacionAPteDeCoordinar";

// Componentes
import Mensaje from "./Mensaje";

// Contextos
import { ContextoMensaje } from "../contextos/contextoMensaje";

// Hooks
import useObtenerActuacionAPartirDeSuId from "../hooks/useObtenerActuacionAPartirDeSuId";
import useObtenerTecnicosAPartirDelIdActuacion from "../hooks/useObtenerTecnicosAPartirDelIdActuacion";
import useObtenerIdRolesDeUnUsuario from "../hooks/useObtenerIdRolesDeUnUsuario";

// Mi componente
const  FormularioEditarActuacionSupervision = () => {

    // Obtendo el idActuacion pasado por la barra de direccion
    const {idActuacion} = useParams();

    // Contexto para mensajes en pantalla
    const {mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje} = useContext(ContextoMensaje);
    
    // Estados        
    const [estado, asignarEstado] = useState();    
    const [estadoDescripcion, asignarEstadoDescripcion] = useState();    
    const [consideraNivel4, asignarConsideraNivel4] = useState("No");
    const [dificultadTemporal, asignarDificultadTemporal] = useState("Nivel 4");
    const [puntosTemporales, asignarPuntosTemporales] = useState(0);
    const [comentariosSupervision, asignarComentariosSupervision] = useState("");    

    // Informacion obtenida desde los hooks
    const [actuacion] = useObtenerActuacionAPartirDeSuId(idActuacion);   
    const [todosLosTecnicos] = useObtenerTecnicosAPartirDelIdActuacion(idActuacion);       

    // Efecto para obtener los datos que iré mostrando en el formulario
    useEffect(() => {        
        asignarEstadoDescripcion(actuacion.estadoDescripcion);
        asignarComentariosSupervision(actuacion.comentariosSupervision);
    },[actuacion.estadoDescripcion]);    
    

    // Funciones    
    const abrirGoogleMaps = (coordenadas) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${coordenadas}`;
        window.open(url, '_blank'); 
    }

    const llamaAActualizacionSupervisada = () => {

        actualizaActuacionSupervisada(idActuacion, comentariosSupervision)

        .then (() => {            
            cambiarMensaje('Cambiado estado de la actuacion a supervisada', 'advertencia');            

        }).catch((error) => {
            
            cambiarMensaje('Error al tratar de cambiar la actuacion a supervisada', 'incorrecta');
            console.log(error);
        })

    }

    const llamaAActuacionPendienteDeCoordinar = () => {
        
        actualizaActuacionAPteDeCoordinar(idActuacion, comentariosSupervision)

        .then (() => {            
            cambiarMensaje('Cambiado estado de la actuacion a pte de coordinar', 'advertencia');            

        }).catch((error) => {
            console.log('Error al cambiar el estado de la actuación a pte de coordinar');
            console.log(error);
        })

    }

    // Validaciones
    const validacionCorrecta = () => {
        
        // Valicacion1: No puede quedarse el estado en Instalado. Debe cambiarlo a finalizada o pte de coordinar  
        if (estado === undefined) {
            cambiarMensaje('Debes cambiar el estado a Actuacion finalizada o pendiente de coordinar','incorrecta');
            return false;
        } 
              
        return true;        
    }    

    const handleChange = (e) => {

        switch (e.target.name){

            case 'nivel4':                
                asignarConsideraNivel4(e.target.value);
                break;

            case 'comentariosSupervision':                
                asignarComentariosSupervision(e.target.value);
                break;

            default:
                console.log('No entro en ninguno case');
        }
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();        

        // Si la validacion es correcta llamo a la funcion que actualizará la coleccion actuaciones
        if (validacionCorrecta()) {
            estado === 'EstadoSupervisado' ? llamaAActualizacionSupervisada() : llamaAActuacionPendienteDeCoordinar();            
        }
    }
    
    return (        

        <ContenedorSupervisarActuacion>
            
            {/* ACTUACION */}
            <h3>Actuación:</h3>

            <ContenedorActuacion>
                
                <SubContenedorSoloLectura>

                    {/* Codigo de incidencia, cliente y descripcion */}
                    <div> <label htmlFor="codigoIncidencia">Código de incidencia: </label> {actuacion.codigoIncidencia} </div>
                    <div> <label htmlFor="cliente">Cliente: </label> {actuacion.nombre} </div>
                    <div> <label htmlFor="descripcion">Descripción: </label> {actuacion.descripcion} </div>
                    <div> <label htmlFor="tipoActuacion">Tipo de actuación: </label> {actuacion.tipoActuacion} </div>  

                    {/* Dirección y población */}
                    <div> <label htmlFor="direccion">Dirección: </label> {actuacion.direccion} </div>
                    <div> <label htmlFor="poblacion">Población: </label> {actuacion.poblacion} </div>
                    <div> <label htmlFor="zona">Zona: </label> {actuacion.zonaInstalacion} </div>

                    {/* Telefonos, tipo de actuacion, zona, momentos de en camino e inicio de actuacion y comentarios coordinacion */}                    
                    <div> <label htmlFor="telefonos">Telefonos: </label> {actuacion.telefonos} </div>
                    <div> <label htmlFor="tipoTrabajo">Tipo de trabajo: </label> {actuacion.tipoTrabajo} </div>

                    {/* Tecnicos asignados separados por comas */}
                    <TecnicosAcompañantes>
                        <label htmlFor="tecnicosAcompañantes">Técnicos asignados: </label>
                        {todosLosTecnicos.join(', ')}
                    </TecnicosAcompañantes>

                    {/* Coordenadas de google maps */}
                    <div> 
                        <label htmlFor="coordenadas">Coordenadas: </label> 
                        <a href="#" onClick={() => abrirGoogleMaps(actuacion.coordenadas)}>{actuacion.coordenadas}</a>
                    </div>
                
                
                    {/* link para dorus */}
                    <div>
                        <label htmlFor="linkDorus">Link Dorus: </label>
                        <a href={actuacion.linkDorus} target="_blank">{actuacion.linkDorus}</a>                         
                    </div>

                </SubContenedorSoloLectura>

                {/* Comentarios desde coordinacion */}
                <ComentariosDesdeCoordinacion> 

                    <label htmlFor="comentariosCoordinacion"> Comentarios desde coordinación: </label>
                    <p>{actuacion.comentariosCoordinacion !== "" ? actuacion.comentariosCoordinacion : "No hay comentarios" } </p>

                </ComentariosDesdeCoordinacion> 

            </ContenedorActuacion>    

            {/* TRABAJO DEL TECNICO */}
            <h3>Trabajo del técnico:</h3>

            <ContenedorTrabajoDelTecnico>

                <Momentos>

                    <div>
                        <label htmlFor="momentoInicioCamino">Inicio camino: </label>
                        {actuacion.horaEnCamino !== undefined ? formatearFechaEnHoraYSegundos(actuacion.horaEnCamino):null} 
                    </div>

                    <div>
                        <label htmlFor="momentoInicioActuacion">Inicio actuacion: </label>
                        {actuacion.horaDeLlegada !== undefined ? formatearFechaEnHoraYSegundos(actuacion.horaDeLlegada):null}                         
                    </div>

                    <div>
                        <label htmlFor="momentoFinActuacion">Fin actuacion: </label>                       
                        {actuacion.horaFinalizacion !== undefined ? formatearFechaEnHoraYSegundos(actuacion.horaFinalizacion):null}                        
                    </div>

                </Momentos>                
                
                <Fotografias>

                    <label htmlFor="Fotografias">Fotografías: </label>
                    <ContenedorFotografias>
                    </ContenedorFotografias>    

                </Fotografias>
                
                <ComentariosTecnicos>

                    <label htmlFor="comentariosCoordinacion"> Comentarios técnicos: </label>
                    <p>{actuacion.comentariosTecnicos !== "" ? actuacion.comentariosTecnicos : "No hay comentarios" } </p>

                </ComentariosTecnicos> 
            </ContenedorTrabajoDelTecnico>


            {/* DECISION DEL SUPERVISOR    */}
            <h3>Tu decisión:</h3>
            <DecisionDelSupervisor>
            
                <form onSubmit={handleSubmit}>
                
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
                                    <h4>¿El técnico ha considerado la actuacion de nivel4?</h4>
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
                            
                            {consideraNivel4 === "Si" &&
                                
                                <CheckBox>
                                    checkbox
                                </CheckBox>
                            }

                        </ContenedorDificultad>

                    </Dificultad>                

                    {/* Comentarios Supervisión */}
                    <ComentariosSupervision>

                        <label htmlFor="comentariosSupervision">Comentarios supervisión:</label>
                        <ContenedorComentariosSupervision>
                            
                            <textarea                            
                                name="comentariosSupervision"                
                                placeholder="Introduzca comentarios opcionales"
                                value={comentariosSupervision}
                                onChange={handleChange}                            
                            />
                        </ContenedorComentariosSupervision>

                    </ComentariosSupervision>               
            
                    {/* Estado y boton del formulario. Solo se muestra si su estado no es EstadoSupervisado */}
                    {actuacion.estado !== 'EstadoSupervisado' &&

                        <ContenedorEstadoYBoton>

                            <Estado>                    

                                <SelectEstadosSupervision
                                    asignarEstado={asignarEstado}
                                    estadoDescripcion = {estadoDescripcion}
                                    asignarEstadoDescripcion = {asignarEstadoDescripcion}
                                />

                            </Estado>

                            <ContenedorBoton>

                                <Boton
                                    $primario
                                    $grande                                    
                                    as="button"
                                    type="submit"
                                    >Actualizar                            
                                </Boton>
                                
                            </ContenedorBoton>                    

                        </ContenedorEstadoYBoton>
                    }
                    

                </form>

                {/* Mensaje con el resultado de la validacion. Se mostrará en verde u rojo */}
                <Mensaje $validacion={rdoValidacion} mensaje={mensajeAMostrar}/>

            </DecisionDelSupervisor>

            

        </ContenedorSupervisarActuacion>
    );
}
 
export default FormularioEditarActuacionSupervision;