/*
    
*/

// React
import React, { useContext, useEffect, useState} from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

// Elementos
import  {ContenedorSupervisarActuacion, ContenedorActuacion, ContenedorSoloLectura,
        ContenedorCodigoIncidencia, ContenedorCliente, ContenedorDescripcion, ContenedorTipoDeActuacion,
        ContenedorDireccion, ContenedorPoblacion, ContenedorZona, ContenedorTelefonos, ContenedorTipoDeTrabajo,
        ContenedorTecnicos, LinkCoordenadas, LinkDorus, ComentariosDesdeCoordinacion, ContenedorTrabajoDelTecnico,
        Momentos, EnCamino, EnCliente, FinActuacion, ContenedorFotografias, Fotografias, ComentariosTecnicos,
        DecisionDelSupervisor, Dificultad, ContenedorDificultad, DificultadYPuntos,
        ConsideracionNivel4, ComentariosSupervision, ContenedorComentariosSupervision,
        ContenedorBotonVolver} from '../elementos/ElementosDeFormularioSupervision';


// Resto de los componentes
import Boton from "../elementos/Boton";

// Funciones
import formatearFechaEnHoraYSegundos from "../funciones/formatearFechaEnHoraYSegundos";
import anchoDePantalla from '../funciones/anchoDePantalla';

// Contextos
import { ContextoMensaje } from "../contextos/contextoMensaje";

// Hooks
import useObtenerActuacionSupervisadaAPartirDeSuId from "../hooks/useObtenerActuacionSupervisadaAPartirDeSuId";
import useObtenerTecnicosAPartirDelIdActuacionSupervisada from "../hooks/useObtenerTecnicosAPartirDelIdActuacionSupervisada";


// Mi componente
const  FormularioEditarActuacionSupervisadas = () => {


    // Obtendo el idActuacion pasado por la barra de direccion
    const {idActuacion} = useParams();

    // Obtengo la ruta de vuelta mediante location
    const location = useLocation();
    const {rutadevuelta} = location.state || {};

    // Creo la cte para la vuelta
    const navigate = useNavigate();

    // Obtengo la resolucion de la pantalla
    const {anchoActual, anchoMaximoMovilVertical} = anchoDePantalla();

    // Contexto para mensajes en pantalla
    const {eliminarMensaje} = useContext(ContextoMensaje);
    
    // Estados
    const [consideraNivel4, asignarConsideraNivel4] = useState("No");    
    const [comentariosSupervision, asignarComentariosSupervision] = useState("");   
    

    // Informacion obtenida desde los hooks
    const [actuacion] = useObtenerActuacionSupervisadaAPartirDeSuId(idActuacion);   
    const [todosLosTecnicos] = useObtenerTecnicosAPartirDelIdActuacionSupervisada(idActuacion);       

    // Efecto para obtener los datos que iré mostrando en el formulario
    useEffect(() => {
        actuacion.comentariosSupervision !== undefined &&
        asignarComentariosSupervision(actuacion.comentariosSupervision);
    },[actuacion.comentariosSupervision]);   
    
    // Efecto para borrar si hubiera algun mensaje almacenado en el contexto al iniciar
    useEffect(() => {
        eliminarMensaje();
    },[]);    

    // Funciones    
    const abrirGoogleMaps = (coordenadas) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${coordenadas}`;
        window.open(url, '_blank'); 
    }    

    const handleSubmit = (e) => {

        e.preventDefault();                 
        navigate(rutadevuelta);     

    }
    
    return (        

        <ContenedorSupervisarActuacion>
            
            {/* ACTUACION */}
            <h3>Actuación:</h3>

            <ContenedorActuacion>
                
                <ContenedorSoloLectura>

                    {/* Codigo de incidencia, cliente, descripcion y tipo de actuacion */}
                    <ContenedorCodigoIncidencia>
                        <label htmlFor="codigoIncidencia">Código de incidencia: </label> {actuacion.codigoIncidencia}
                    </ContenedorCodigoIncidencia>

                    <ContenedorCliente>
                        <label htmlFor="cliente">Cliente: </label> {actuacion.nombre} 
                    </ContenedorCliente>

                    <ContenedorDescripcion>
                        <label htmlFor="descripcion">Descripción: </label> {actuacion.descripcion}
                    </ContenedorDescripcion>

                    <ContenedorTipoDeActuacion>
                        <label htmlFor="tipoActuacion">Tipo de actuación: </label> {actuacion.tipoActuacion}
                    </ContenedorTipoDeActuacion>  

                    {/* Dirección, población y zona */}
                    <ContenedorDireccion>
                        <label htmlFor="direccion">Dirección: </label> {actuacion.direccion}
                    </ContenedorDireccion>

                    <ContenedorPoblacion>
                        <label htmlFor="poblacion">Población: </label> {actuacion.poblacion}
                    </ContenedorPoblacion>

                    <ContenedorZona>
                         <label htmlFor="zona">Zona: </label> {actuacion.zonaInstalacion}
                    </ContenedorZona>

                    {/* Telefonos, tipo de trabajo */}                    
                    <ContenedorTelefonos>
                        <label htmlFor="telefonos">Telefonos: </label> {actuacion.telefonos}
                    </ContenedorTelefonos>

                    <ContenedorTipoDeTrabajo>
                        <label htmlFor="tipoTrabajo">Tipo de trabajo: </label> {actuacion.tipoTrabajo}
                    </ContenedorTipoDeTrabajo>

                    {/* Tecnicos asignados separados por comas */}
                    <ContenedorTecnicos>
                        <label htmlFor="tecnicosAcompañantes">Técnicos: </label>
                        {todosLosTecnicos.join(', ')}
                    </ContenedorTecnicos>

                    {/* Coordenadas de google maps */}
                    <LinkCoordenadas> 
                        <label htmlFor="coordenadas">Coordenadas: </label> 
                        <a href="#" onClick={() => abrirGoogleMaps(actuacion.coordenadas)}>{actuacion.coordenadas}</a>
                    </LinkCoordenadas>
                
                
                    {/* link para dorus */}
                    <LinkDorus>
                        <label htmlFor="linkDorus">Link Dorus: </label>
                        <a href={actuacion.linkDorus} target="_blank">{actuacion.linkDorus}</a>                         
                    </LinkDorus>

                </ContenedorSoloLectura>

                {/* Comentarios desde coordinacion */}
                <ComentariosDesdeCoordinacion> 

                    <label htmlFor="comentariosCoordinacion"> Comentarios desde coordinación: </label>
                    <p>
                        {actuacion.comentariosCoordinacion !== "" ? 
                                actuacion.comentariosCoordinacion
                            :
                                "El coordinador no dejó comentarios" } 
                    </p>

                </ComentariosDesdeCoordinacion> 

            </ContenedorActuacion>    

            {/* TRABAJO DEL TECNICO */}
            <h3>Trabajo del técnico:</h3>

            <ContenedorTrabajoDelTecnico>

                <Momentos>

                    <EnCamino>

                        <label htmlFor="momentoInicioCamino">
                            {anchoActual<anchoMaximoMovilVertical ? 'Inició:' : 'Inició camino:' } 
                        </label>

                        <p>
                            {actuacion.horaEnCamino !== undefined &&
                            formatearFechaEnHoraYSegundos(actuacion.horaEnCamino)}
                        </p>
                        
                    </EnCamino>

                    <EnCliente>

                        <label htmlFor="momentoInicioActuacion">
                            {anchoActual<anchoMaximoMovilVertical ? 'LLegó:' : 'Inició actuación:' }
                        </label>

                        <p>
                            {actuacion.horaDeLlegada !== undefined &&
                            formatearFechaEnHoraYSegundos(actuacion.horaDeLlegada)} 
                        </p>

                    </EnCliente>

                    <FinActuacion>

                        <label htmlFor="momentoFinActuacion">
                            {anchoActual<anchoMaximoMovilVertical ? 'Acabó:' : 'Fin actuacion:' } 
                        </label>                       

                        <p>
                            {actuacion.horaFinalizacion !== undefined &&
                            formatearFechaEnHoraYSegundos(actuacion.horaFinalizacion)}
                        </p>

                    </FinActuacion>

                </Momentos>                
                
                <Fotografias>

                    <label htmlFor="Fotografias">Fotografías: </label>
                    <ContenedorFotografias>
                    </ContenedorFotografias>    

                </Fotografias>
                
                <ComentariosTecnicos>

                    <label htmlFor="comentariosCoordinacion"> Comentarios técnicos: </label>
                    <p>
                        {actuacion.comentariosTecnicos !== "" ?
                            actuacion.comentariosTecnicos
                            :
                            "El técnico no dejó comentarios" 
                        }                        
                    </p>

                </ComentariosTecnicos> 
            </ContenedorTrabajoDelTecnico>


            {/* DECISION DEL SUPERVISOR    */}
            <h3>Decisión del supervisor:</h3>
            <DecisionDelSupervisor>
            
                <form onSubmit={handleSubmit}>
                
                    <Dificultad>

                        <label htmlFor="DificultadYPuntos">Dificultad de la actuacion: </label>
                        <ContenedorDificultad>
                        
                            <DificultadYPuntos>

                                <div>
                                    <label htmlFor="dificultad">Dificultad: </label> {actuacion.dificultad}                                    
                                </div>

                                <div>
                                    <label htmlFor="puntos">Puntos: </label> {actuacion.puntos}                                    
                                </div>

                            </DificultadYPuntos>

                            <ConsideracionNivel4>

                                <div>
                                    <h4>¿Fué considerada la actuacion de nivel4?</h4>
                                </div>

                                {/* Los inputs están deshabilitados */}
                                <div>
                                    <input 
                                        type="radio"
                                        name="nivel4"
                                        id="si"
                                        value = "Si"                                        
                                        checked={consideraNivel4==="Si"}
                                        disabled={true}
                                    />
                                    <label htmlFor="si">Sí</label>

                                    <input 
                                        type="radio"
                                        name="nivel4"
                                        id="no"
                                        value = "No"                                       
                                        checked={consideraNivel4==="No"}
                                        disabled={true}
                                    />
                                    <label htmlFor="no">No</label>
                                </div>

                            </ConsideracionNivel4>                

                        </ContenedorDificultad>

                    </Dificultad>                

                    {/* Comentarios Supervisión */}
                    <ComentariosSupervision>

                        <label htmlFor="comentariosSupervision">Comentarios supervisión:</label>
                        <ContenedorComentariosSupervision>
                            
                            <textarea                            
                                name="comentariosSupervision"                
                                placeholder={actuacion.comentariosSupervision === "" && 'El supervisor no dejó comentarios'}
                                value={comentariosSupervision}                                
                                disabled={true}                           
                            />
                        </ContenedorComentariosSupervision>

                    </ComentariosSupervision>               

                    <ContenedorBotonVolver>
                        <Boton
                            onClick={() => navigate(rutadevuelta)}
                            $paraAdministrador
                            $grande                                    
                            as="button"                                    
                            >Volver                            
                        </Boton>
                    </ContenedorBotonVolver> 

                </form>

            </DecisionDelSupervisor>

        </ContenedorSupervisarActuacion>
    );
}
 
export default FormularioEditarActuacionSupervisadas;