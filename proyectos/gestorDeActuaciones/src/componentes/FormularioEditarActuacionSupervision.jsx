/*
    COMPONENTE QUE MUESTRA EL FORMULARIO PARA QUE QUIEN ESTÉ SUPERVISANDO PUEDA ENVIAR LA ACTUACION A FINALIZADOS.

        - IMPORTANTE: NO CONFUNDIR CON EL FormularioEditarActuacionTecnico ES MUY PARECIDO.
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
        DecisionDelSupervisor, Dificultad, ContenedorDificultad, DificultadYPuntos, ConsideracionNivel4, CheckBox,
        ComentariosSupervision, ContenedorComentariosSupervision, ContenedorEstadoYBoton, Estado,
        ContenedorBoton, ContenedorBotonVolver} from '../elementos/ElementosDeFormularioSupervision';

// Componentes select
import SelectEstadosSupervision from "./SelectEstadosSupervision";

// Resto de los componentes
import Boton from "../elementos/Boton";

// Funciones
import formatearFechaEnHoraYSegundos from "../funciones/formatearFechaEnHoraYSegundos";
import anchoDePantalla from './../funciones/anchoDePantalla';

// Funcion firebase
import pasaActuacionASupervisada from './../firebase/pasaActuacionASupervisada';
import actualizaActuacionAPteDeCoordinar from "../firebase/actualizaActuacionAPteDeCoordinar";
import eliminarActuacionYaSupervisada from "../firebase/eliminarActuacionYaSupervisada";

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

    // Obtengo la ruta de vuelta mediante location
    const location = useLocation();
    const {rutadevuelta} = location.state || {};

    // Creo la cte para la vuelta
    const navigate = useNavigate();

    // Obtengo la resolucion de la pantalla
    const {anchoActual, anchoMaximoMovilVertical} = anchoDePantalla();

    // Contexto para mensajes en pantalla
    const {mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje, eliminarMensaje} = useContext(ContextoMensaje);
    
    // Estados        
    const [estado, asignarEstado] = useState();    
    const [estadoDescripcion, asignarEstadoDescripcion] = useState();    
    const [consideraNivel4, asignarConsideraNivel4] = useState("No");
    const [dificultadTemporal, asignarDificultadTemporal] = useState("Nivel 4");
    const [puntosTemporales, asignarPuntosTemporales] = useState(0);
    const [comentariosSupervision, asignarComentariosSupervision] = useState("");   
    const [actualizoAlgo, asignarActualizoAlgo] = useState(false); 

    // Informacion obtenida desde los hooks
    const [actuacion] = useObtenerActuacionAPartirDeSuId(idActuacion);   
    const [todosLosTecnicos] = useObtenerTecnicosAPartirDelIdActuacion(idActuacion);       

    // Efecto para obtener los datos que iré mostrando en el formulario
    useEffect(() => {        

        actuacion.estadoDescripcion         !== undefined && asignarEstadoDescripcion(actuacion.estadoDescripcion);
        actuacion.comentariosSupervision    !== undefined && asignarComentariosSupervision(actuacion.comentariosSupervision);       

    },[actuacion.estadoDescripcion, actuacion.comentariosSupervision]);   
    
    // Efecto para borrar si hubiera algun mensaje almacenado en el contexto al iniciar
    useEffect(() => {
        eliminarMensaje();
    },[]);    

    // Funciones    
    const abrirGoogleMaps = (coordenadas) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${coordenadas}`;
        window.open(url, '_blank'); 
    }

    // Llamo a la funcion de firebase por medio de una promesa para evitar que vuelva a la ruta de vuelta antes de ejecutarse
    const llamaAPasaAColeccionSupervisada = () => {

        return new Promise((resolve, reject) => {

            try {

                pasaActuacionASupervisada(actuacion, comentariosSupervision);
                cambiarMensaje('Cambiado estado de la actuacion a supervisada', 'advertencia');
                resolve('correcto');

            } catch(error) {

                cambiarMensaje('Error al tratar de cambiar la actuacion a supervisada', 'incorrecta');
                console.log(error);
                reject('incorrecto');
            }

        });

    }

    // Borro la actuacion de la coleccion actuaciones una vez supervisada
    const llamaABorraDeColeccionActuaciones = () => {
        
        return new Promise((resolve, reject) =>{

            try {

                eliminarActuacionYaSupervisada(idActuacion);
                console.log('Eliminado actuacion ya supervisada');
                resolve('correcto');

            } catch (error) {

                console.log('Error al borrar la actuacion ya supervisada');
                reject('incorrecto');
            }

        });

    }

    // Uso una promesa por la misma razón que llamaaActualizacionSupervisada
    const llamaAActuacionPendienteDeCoordinar = () => {

        return new Promise((resolve, reject) => {

            try {
                actualizaActuacionAPteDeCoordinar(idActuacion, comentariosSupervision);
                cambiarMensaje('Cambiado estado de la actuacion a pte de coordinar', 'advertencia');
                
                resolve('correcto');

            }catch (error) {

                console.log('Error al cambiar el estado de la actuación a pte de coordinar');
                console.log(error);
                reject('incorrecto');
            }
        });

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

        // Actualizo los estados actualizoAlgo, ConsideraNivel4 y ComentariosSupervision
        asignarActualizoAlgo(true);
        
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

    const handleSubmit = async (e) => {
        e.preventDefault();         

        // Si la validacion es correcta llamo a la funcion que actualizará la coleccion actuaciones
        if (validacionCorrecta()) {
            
            if(estado === 'EstadoSupervisado') {
                await llamaAPasaAColeccionSupervisada();
                await llamaABorraDeColeccionActuaciones();

            } else {
                await llamaAActuacionPendienteDeCoordinar();
            }

            reiniciarMensaje();
            navigate(rutadevuelta);
        }
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
                                "No hay comentarios" } 
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
                                    <label htmlFor="dificultad">Dificultad: </label>
                                    {consideraNivel4 === "Si" ? dificultadTemporal : actuacion.dificultad} 
                                </div>

                                <div>
                                    <label htmlFor="puntos">Puntos: </label>
                                    {consideraNivel4==="Si" ? puntosTemporales : actuacion.puntos} 
                                </div>

                            </DificultadYPuntos>

                            <ConsideracionNivel4>

                                <div>
                                    <h4>¿Fué considerada la actuacion de nivel4?</h4>
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

                    {/* El contenedor mostrará el estado y el boton de actualizar si la actuacion esta en estadoSupervisado
                        o motrará el boton de volver si no lo está */}
                    {actuacion.estado !== 'EstadoSupervisado' &&
                        <>
                            <ContenedorEstadoYBoton>

                                <Estado onClick={() => asignarActualizoAlgo(true)} >                    
                                    <SelectEstadosSupervision
                                        asignarEstado={asignarEstado}
                                        estadoDescripcion = {estadoDescripcion}
                                        asignarEstadoDescripcion = {asignarEstadoDescripcion}
                                    />
                                </Estado>

                                <ContenedorBoton>

                                    {actualizoAlgo &&
                                        <>
                                            <Boton
                                                $primario
                                                $grande                                    
                                                as="button"
                                                type="submit"
                                                >Actualizar                            
                                            </Boton>

                                            <Boton
                                                onClick={() => navigate(rutadevuelta)}
                                                $paraAdministrador
                                                $grande                                    
                                                as="button"                                    
                                                >Volver                            
                                            </Boton>
                                        </>
                                    }
                                    
                                </ContenedorBoton> 

                            </ContenedorEstadoYBoton>
                        </>
                    }

                    {!actualizoAlgo &&
                        <ContenedorBotonVolver>
                            <Boton
                                onClick={() => navigate(rutadevuelta)}
                                $paraAdministrador
                                $grande                                    
                                as="button"                                    
                                >Volver                            
                            </Boton>
                        </ContenedorBotonVolver> 
                    }
                    

                </form>

                {/* Mensaje con el resultado de la validacion. Se mostrará en verde u rojo */}
                <Mensaje $validacion={rdoValidacion} mensaje={mensajeAMostrar}/>

            </DecisionDelSupervisor>

        </ContenedorSupervisarActuacion>
    );
}
 
export default FormularioEditarActuacionSupervision;