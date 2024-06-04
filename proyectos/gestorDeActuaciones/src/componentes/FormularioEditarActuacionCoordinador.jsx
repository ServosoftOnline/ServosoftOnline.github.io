/*
    COMPONENTE PARA EDITAR TODAS LAS ACTUACIONES
        - COMPONENTE MUY IMPORTANTE.
        - SERÁ LLAMADO DESDE PRACTICAMENTE TODOS LOS MODULOS DE COORDINADOR CUANDO SE LE PULSE EL BOTON DE EDITAR
*/

// React
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// date-fns
import { fromUnixTime, getUnixTime } from "date-fns";

// Elementos formulario editar actuacion
import  {ContenedorEditarActuacion, ContenedorSoloLectura, Cliente, Descripcion, Contenedor1, Contenedor2,
        ContenedorCoordenadas, ContenedorTelefonos, ContenedorSelectZona, Contenedor3, ContenedorSelectDificultad,
        ContenedorComentarios, ComentariosCoordinacion, ComentariosSupervision, ContenedorSelectTipoDeActuacion, Contenedor4,
        ContenedorSelectTipoDeTrabajo, ContenedorSelectStb, ContenedorSelectEstado, TecnicosAsignados, Citacion,
        ContenedorSelectTecnicos, ContenedorDatePicker, Fecha, Hora,
        ContenedorBoton} from '../elementos/ElementosDeFormularioCoordinacion';

// Componentes select
import SelectZonasDeInstalacion from "./SelectZonasDeInstalacion";
import SelectTiposDeTrabajo from "./SelectTiposDeTrabajo";
import SelectDificultades from "./SelectTDificultades";
import SelectStb from "./SelectStb";
import SelectEstadosModuloPlaneado from "./SelectEstadosModuloPlaneado";
import SelectTiposDeActuacion from "./SelectTiposDeActuacion";
import SelectHoras from "./SelectHoras";
import SelectTecnicos from "./SelectTecnicos";

// Componentes
import BarraEstadosTecnicos from "./BarraEstadosTecnicos";

// Resto de los componentes
import Boton from "../elementos/Boton";
import DatePicker from "./DatePicker";

// Funcion firebase
import editarActuacion from "../firebase/editarActuacion";
import actualizaTecnicoACitado from './../firebase/actualizaTecnicoACitado';

// Componentes
import Mensaje from "./Mensaje";

// Contexto
import { ContextoMensaje } from "../contextos/contextoMensaje";

// Hooks
import useObtenerActuacionAPartirDeSuId from "../hooks/useObtenerActuacionAPartirDeSuId";
import useObtenerNombreSiEstaEnCaminoOEncliente from "../hooks/useObtenerNombreSiEstaEnCaminoOEncliente";
import useObtenerIdRolesSiEstaEnCaminoOEncliente from "../hooks/useObtenerIdRolesSiEstaEnCaminoOEncliente";
import useObtenerTecnicosAPartirDelIdActuacion from "../hooks/useObtenerTecnicosAPartirDelIdActuacion";


// Componente
const FormularioEditarActuacionCoordinador = () => {

    // Obtengo idActuacion a partir de la barra de direccion
    const {idActuacion} = useParams();        

    // Obtengo la información de los hooks
    const [actuacion] = useObtenerActuacionAPartirDeSuId(idActuacion);  
    const [tecnicosEnCaminoOEnCliente] = useObtenerNombreSiEstaEnCaminoOEncliente(idActuacion);    
    const [idRolesTecnicosEnCaminoOCliente] = useObtenerIdRolesSiEstaEnCaminoOEncliente(idActuacion);
    const [todosLosTecnicos] = useObtenerTecnicosAPartirDelIdActuacion(idActuacion);

    // Obtengo el contexto para mostrar mensajes
    const {mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje, eliminarMensaje} = useContext(ContextoMensaje);

    // Estados primera fila
    const [linkDorus, asignarLinkDorus] = useState('');    
    const [direccion, asignarDireccion] = useState('');
    const [poblacion, asignarPoblacion] = useState('');

    // Estados segunda fila
    const [coordenadas, asignarCoordenadas] = useState('');
    const [telefonos, asignarTelefonos] = useState('');
    const [tiposDeActuacion, asignarTiposDeActuacion] = useState('');

    // Estados tercera fila
    const [dificultad, asignarDificultad] = useState('');
    const [puntos, asignarPuntos] = useState(0);
    const [zonasDeInstalacion, asignarZonasDeInstalacion] = useState('');
    
    // Estados cuarta fila
    const [tiposDeTrabajo, asignarTiposDeTrabajo] = useState('');
    const [idTipoDeTrabajo, asignarIdTipoDeTrabajo] = useState('');
    const [stb, asignarStb] = useState('');
    const [estado, asignarEstado] = useState('');
    const [estadoDescripcion, asignarEstadoDescripcion] = useState('');

    // Estados quinta fila    
    const [fechaCitacion, asignarFechaCitacion] = useState(new Date());
    const [idHoraCitacion, setIdHoraCitacion] = useState('');
    const [descripcionHoraCitacion, setDescripcionHoraCitacion] = useState('');
    const [tecnico1, asignarTecnico1] = useState('');
    const [tecnico2, asignarTecnico2] = useState('');
    const [tecnico3, asignarTecnico3] = useState('');
    const [tecnico4, asignarTecnico4] = useState('');
    const [tecnico5, asignarTecnico5] = useState('');

    // Estados sexta fila
    const [comentariosCoordinacion, asignarComentariosCoordinacion] = useState('');    
    

    // Establezco los estados con la informacion de la actuacion obtenida. Sólo si no tienen un valor undefined
    //  Por ahora solo es necesario tener una depedencia
    useEffect(() => {        

        actuacion.linkDorus         != undefined && asignarLinkDorus(actuacion.linkDorus);
        actuacion.direccion         != undefined && asignarDireccion(actuacion.direccion);
        actuacion.poblacion         != undefined && asignarPoblacion(actuacion.poblacion);

        actuacion.coordenadas       != undefined && asignarCoordenadas(actuacion.coordenadas);
        actuacion.telefonos         != undefined && asignarTelefonos(actuacion.telefonos);
        actuacion.tipoActuacion     != undefined && asignarTiposDeActuacion(actuacion.tipoActuacion);

        actuacion.dificultad        != undefined && asignarDificultad(actuacion.dificultad);
        actuacion.puntos            != undefined && asignarPuntos(actuacion.puntos); 
        actuacion.zonaInstalacion   != undefined && asignarZonasDeInstalacion(actuacion.zonaInstalacion);       

        actuacion.tipoTrabajo       != undefined && asignarTiposDeTrabajo(actuacion.tipoTrabajo);
        actuacion.idTipoTrabajo     != undefined && asignarIdTipoDeTrabajo(actuacion.idTipoTrabajo);
        actuacion.stb               != undefined && asignarStb(actuacion.stb);
        actuacion.estado            != undefined && asignarEstado(actuacion.estado);
        actuacion.estadoDescripcion != undefined && asignarEstadoDescripcion(actuacion.estadoDescripcion);
        
        actuacion.fechaCitacion     != undefined && asignarFechaCitacion(fromUnixTime(actuacion.fechaCitacion));
        actuacion.tecnico1          != undefined && asignarTecnico1(actuacion.tecnico1);
        actuacion.tecnico2          != undefined && asignarTecnico2(actuacion.tecnico2);
        actuacion.tecnico3          != undefined && asignarTecnico3(actuacion.tecnico3);
        actuacion.tecnico4          != undefined && asignarTecnico4(actuacion.tecnico4);
        actuacion.tecnico5          != undefined && asignarTecnico5(actuacion.tecnico5);

        actuacion.comentariosCoordinacion != undefined && asignarComentariosCoordinacion(actuacion.comentariosCoordinacion); 

    },[actuacion.linkDorus]);  

    // Efecto para que cada vez que se actualize el estado idTipoDeTrabajo reinicio los estados de los tecnicos dependiendo del valor de este
    useEffect(() => {

        switch (idTipoDeTrabajo){

            case '1':                
                asignarTecnico2('');
                asignarTecnico3('');
                asignarTecnico4('');
                asignarTecnico5('');
                break;

            case '2':                
                asignarTecnico3('');
                asignarTecnico4('');
                asignarTecnico5('');                                    
                break;

            case '3':                
                asignarTecnico4('');
                asignarTecnico5(''); 
                break;

            case '4':                
                asignarTecnico5('');                 
                break;

            default:
                null;
        }


    },[idTipoDeTrabajo]);

    // EFECTOS

    // Efecto que se ejecuta al principio para comprobar si el tecnico o tecnicos van en camino o estan en cliente
    useEffect(() => {        
        compruebaSiUnTecnicoVaEnCaminoOEstaEncliente();       
    },[tecnicosEnCaminoOEnCliente]);

    /* Debo reiniciar la cita si se cambia a un estado que no sea citada. Si no lo hago y el coordinador cambiara de opinión
    seleccionando citada, asignandole una hora y despues cambia el estado a cualquier otro estado guardaría la hora de la cita */
    useEffect(() => {
        estadoDescripcion != 'Citada' ? setIdHoraCitacion('') : null;

    },[estadoDescripcion]);
     
    
    // FUNCIONES DEL COMPONENTE
    // Funcion que detecta los nombres de los tecnicos que van en camino o estan en un cliente. Los muestra separado por comas y un espacio
    const compruebaSiUnTecnicoVaEnCaminoOEstaEncliente = () =>{        

        if(tecnicosEnCaminoOEnCliente.length > 0){
            cambiarMensaje(tecnicosEnCaminoOEnCliente.join(', ') + ' en camino o en cliente a esta actuación. Avisa si cambias el estado', 'advertencia');
        } else {
            eliminarMensaje();
        }

    }

    // Funcion que modifica el estado de los tecnicos. Solo si el estado de la actuacion fuera EnCamino o EnCliente.
    const actualizaEstadoDeLosTecnicos = () => {
        
        if(estado === 'EstadoEnCamino' || estado === 'EstadoEnCliente'){
            console.log('No cambiaré el estado a los tecnicos');

        } else {
            
            if(idRolesTecnicosEnCaminoOCliente !== undefined){

                idRolesTecnicosEnCaminoOCliente.forEach((idRol) => {
                    console.log('Cambio el estado a citado al tecnico: ' + idRol);
                    actualizaTecnicoACitado(idRol)

                    .then(() => {
                        console.log('cambiado ' + idRol + ' correctamente');                                    
            
                    }).catch((error) => {
                        cambiarMensaje('Error al cambiar el idRol: ' + idRol);                        
                        console.log(error);
                    })
                });
            }
                        
        }           
            
    }

    // Funcion que llama a la funcion que insertará los datos en la base de datos. Lo hago para separar front y backend
    const llamaAEditarActuacion = () => {
        
        editarActuacion({
            linkDorus: linkDorus,
            direccion: direccion,
            poblacion: poblacion,
            zonaInstalacion: zonasDeInstalacion,
            coordenadas: coordenadas,
            telefonos: telefonos,
            tipoActuacion: tiposDeActuacion,
            dificultad: dificultad,
            puntos: puntos,
            tipoTrabajo: tiposDeTrabajo,
            idTipoTrabajo: idTipoDeTrabajo,
            stb: stb,
            estado: estado,
            estadoDescripcion: estadoDescripcion,
            fechaCitacion: getUnixTime(fechaCitacion),
            idHoraCitacion: idHoraCitacion,
            descripcionHoraCitacion: descripcionHoraCitacion,
            tecnico1: tecnico1,
            tecnico2: tecnico2,
            tecnico3: tecnico3,
            tecnico4: tecnico4,
            tecnico5: tecnico5,
            comentariosCoordinacion: comentariosCoordinacion,            
            idActuacion: idActuacion
        })
        .then(() => {
            cambiarMensaje('Actualización con éxito', 'correcta');            
            reiniciarMensaje();                

        }).catch((error) => {
            cambiarMensaje('Error de la base de datos al actualizar la actuacion', 'incorrecta');
            reiniciarMensaje();
            console.log(error);
        })
    }
    
    // Funcion que valida el contenido del formulario antes de insertar
    const validacionCorrecta = () => {

        // Validación1: Que los campos obligatorios no estén vacios. estado deberá contener otro estado que no se el de EstadoPteCoordinar
        if (linkDorus === '' || direccion === '' || poblacion === '' || zonasDeInstalacion === '' || coordenadas ==='' ||telefonos === ''
            || tiposDeActuacion === '' || dificultad === '' || tiposDeTrabajo === '' || stb === '') {

            cambiarMensaje('Rellene todos los datos obligatorios. Son todos menos los comentarios', 'incorrecta');            
            return false;
        }

        // Validación2: Que en EstadoAgenda no se dejen tecnicos por seleccionar y que los tecnicos sean diferentes
        if(estado === 'EstadoAgenda') {

            switch (idTipoDeTrabajo){

                case '1':
                    
                    if(tecnico1 ===''){
                        cambiarMensaje('Debe seleccionar todos los técnicos','incorrecta');
                        return false;
                    }
                    break;

                case '2':                    

                    if(tecnico1 ==='' || tecnico2 ===''){
                        cambiarMensaje('Debe seleccionar todos los técnicos','incorrecta');
                        return false;
                        
                    } else if (tecnico1===tecnico2){
                        cambiarMensaje('Deben ser tecnicos diferentes', 'incorrecta');
                        return false;
                    }
                    break;

                case '3':
                    
                    if(tecnico1 ==='' || tecnico2 ==='' || tecnico3 ===''){
                        cambiarMensaje('Debe seleccionar todos los técnicos','incorrecta');
                        return false;

                    } else if(
                            tecnico1===tecnico2 || tecnico1===tecnico3 ||
                            tecnico2===tecnico3
                        ){                            
                        cambiarMensaje('Deben ser tecnicos diferentes', 'incorrecta');
                        return false;
                    }

                    break;

                case '4':
                    
                    if(tecnico1 ==='' || tecnico2 ==='' || tecnico3 ==='' || tecnico4 === ''){
                        cambiarMensaje('Debe seleccionar todos los técnicos','incorrecta');
                        return false;

                    } else if(
                            tecnico1===tecnico2 || tecnico1===tecnico3 || tecnico1===tecnico4 ||
                            tecnico2===tecnico3 || tecnico2===tecnico4 ||
                            tecnico3===tecnico4                            
                        ){
                        cambiarMensaje('Deben ser tecnicos diferentes', 'incorrecta');
                        return false;
                    }
                    break;

                default:
                    
                    if(tecnico1 ==='' || tecnico2 ==='' || tecnico3 ==='' || tecnico4 === '' || tecnico5 === ''){
                        cambiarMensaje('Debe seleccionar todos los técnicos','incorrecta');
                        return false;

                    } else if(
                        tecnico1===tecnico2 || tecnico1===tecnico3 || tecnico1===tecnico4 || tecnico1===tecnico5 ||
                        tecnico2===tecnico3 || tecnico2===tecnico4 || tecnico2===tecnico5 ||
                        tecnico3===tecnico4 || tecnico3===tecnico5 ||
                        tecnico4===tecnico5                            
                    ){
                        cambiarMensaje('Deben ser tecnicos diferentes', 'incorrecta');
                        return false;
                    }
            }
        }

        // Validacion 3: En estado de cita se debe seleccionar una hora de cita
        if (estadoDescripcion == 'Citada' && idHoraCitacion =='') {
            cambiarMensaje('Debe seleccionar una hora para la cita', 'incorrecta');
            return false;
        }
        
        // Fin de las validaciones. Si llegué hasta aqui sin devolver ningun false la validación fue correcta
        return true;        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        reiniciarMensaje();

        if(validacionCorrecta()) {  
            
            llamaAEditarActuacion();
            actualizaEstadoDeLosTecnicos();
        } 
    }

    const handleChange = (e) => {

        // Actualizo los estados asociados a los inputs
        switch (e.target.name){
            case 'linkDorus':                
                asignarLinkDorus(e.target.value);
                break;

            case 'direccion':
                asignarDireccion(e.target.value);
                break;

            case 'poblacion':
                asignarPoblacion(e.target.value);
                break;
            
            case 'coordenadas':
                asignarCoordenadas(e.target.value);
                break;
            
            case 'telefonos':
                asignarTelefonos(e.target.value);
                break;            

            case 'comentariosCoordinacion':
                asignarComentariosCoordinacion(e.target.value);
                break;

            default:
                console.log('No entro en ninguno');
        }
    }
    
    return( 
        
        <ContenedorEditarActuacion>

            <form onSubmit={handleSubmit}>

                <ContenedorSoloLectura>

                    <div> <label htmlFor="codigoIncidencia">Código de incidencia: </label> {actuacion.codigoIncidencia} </div>
                    <Cliente> <label htmlFor="codigoIncidencia">Cliente: </label> {actuacion.nombre} </Cliente>
                    <Descripcion> <label htmlFor="codigoIncidencia">Descripción: </label> {actuacion.descripcion} </Descripcion>

                </ContenedorSoloLectura>

                <Contenedor1>
                    <div>
                        <label htmlFor="linkDorus">Link Dorus:</label>
                        <input
                            type="text"
                            name="linkDorus"                
                            placeholder="Introduzca link"
                            value={linkDorus}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="direccion">Dirección:</label>
                        <input
                            type="text"
                            name="direccion"                                            
                            placeholder="Introduzca dirección"
                            value={direccion}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="poblacion">Población:</label>
                        <input
                            type="text"
                            name="poblacion"   
                            placeholder="Introduzca población"                                         
                            value={poblacion}
                            onChange={handleChange}
                        />
                    </div>

                </Contenedor1>                

                <Contenedor2>
                    
                    <ContenedorCoordenadas>
                        <label htmlFor="coordenadas">Coordenadas:</label>
                        <input
                            type="text"
                            name="coordenadas"                
                            placeholder="Introduzca coordenadas"
                            value={coordenadas}
                            onChange={handleChange}
                        />
                    </ContenedorCoordenadas> 

                    <ContenedorTelefonos>
                        <label htmlFor="telefonos">Telefono/s:</label>
                        <input
                            type="text"
                            name="telefonos"                
                            placeholder="Introduzca teléfono/s"
                            value={telefonos}
                            onChange={handleChange}
                        />
                    </ContenedorTelefonos>

                    <ContenedorSelectZona>

                        <SelectZonasDeInstalacion
                            zonasDeInstalacion= {zonasDeInstalacion}
                            asignarZonasDeInstalacion={asignarZonasDeInstalacion} 
                        />

                    </ContenedorSelectZona>
                    
                </Contenedor2>

                <Contenedor3>

                    <ContenedorSelectDificultad>

                        <SelectDificultades
                            dificultad = {dificultad}
                            asignarDificultad={asignarDificultad}
                            asignarPuntos={asignarPuntos} 
                        />
                        
                    </ContenedorSelectDificultad>

                    <div>
                        <label htmlFor="puntos">Puntos:</label>
                        <input
                            type="text"
                            name="puntos"                
                            placeholder="Automáticos"
                            value={puntos}
                            onChange={handleChange}
                            readOnly
                        />
                    </div>

                    <ContenedorSelectTipoDeActuacion>

                        <SelectTiposDeActuacion
                            tiposDeActuacion = {tiposDeActuacion}
                            asignarTiposDeActuacion={asignarTiposDeActuacion}
                        />

                    </ContenedorSelectTipoDeActuacion>
                                       
                </Contenedor3>

                <Contenedor4>                    

                    <ContenedorSelectTipoDeTrabajo>

                        <SelectTiposDeTrabajo
                            tiposDeTrabajo = {tiposDeTrabajo}
                            asignarTiposDeTrabajo={asignarTiposDeTrabajo}                         
                            asignarIdTipoDeTrabajo={asignarIdTipoDeTrabajo}
                        />

                    </ContenedorSelectTipoDeTrabajo>

                    <ContenedorSelectStb>

                        <SelectStb
                            stb={stb}
                            asignarStb={asignarStb}
                        />

                    </ContenedorSelectStb>

                    <ContenedorSelectEstado>
                    
                        <SelectEstadosModuloPlaneado                      
                            asignarEstado={asignarEstado}
                            estadoDescripcion = {estadoDescripcion}
                            asignarEstadoDescripcion = {asignarEstadoDescripcion}
                        />

                    </ContenedorSelectEstado>                    

                </Contenedor4>
                

                {/* Este subcontenedor solo se muestra si la actuacion esta en estado agenda. */}
                {estado === 'EstadoAgenda' &&

                    <>
                        <Citacion>       
                                                                                                
                            <ContenedorDatePicker>
                                
                                <Fecha>
                                    <h4>Fecha: </h4>
                                    <DatePicker fechaCitacion={fechaCitacion} asignarFechaCitacion={asignarFechaCitacion} />
                                </Fecha>
                                
    
                                {/* Codigo proporcionado por ChatGPT:
                                    idTipoDeTrabajo contiene un número que coincide con el número de tecnicos
                                    Array.from() para crear un array con la longitud especificada por idTipoDeTrabajo
                                    y proporciona tantos select como indique el número.
                                    style me permite pasarle un z-Index de forma dinámica para que los select no se pongan encima */}
                                
                                <ContenedorSelectTecnicos>                            
                                    
                                    {Array.from({ length: idTipoDeTrabajo }, (_, index) => (
                                        
                                        <SelectTecnicos
                                            numeroTecnicos={index}
                                            tecnico={eval(`tecnico${index + 1}`)}
                                            asignarTecnico={eval(`asignarTecnico${index + 1}`)}
                                            style={{ zIndex: idTipoDeTrabajo - index, position: 'relative'}}
                        
                                        />
                                    ))}
                                    
                                </ContenedorSelectTecnicos>
                            
                            </ContenedorDatePicker>                                                        
                            {console.log('idHoraCitacion: ' + idHoraCitacion)}
                            {console.log('descripcionHoraCitacion: ' + descripcionHoraCitacion)}
                            <Hora>
                                <h4>Hora: {descripcionHoraCitacion} </h4>
                                <SelectHoras
                                    setIdHoraCitacion = {setIdHoraCitacion}
                                    setDescripcionHoraCitacion = {setDescripcionHoraCitacion}
                                />
                            </Hora>
    
                        </Citacion>                
                    
                    </>
                    
                }                


                {/* Si hay tecnicos asignados a esta actuacion los muestro */}
                {todosLosTecnicos.length>0 &&
                    <TecnicosAsignados>
                        <label htmlFor="tecnicosAsignados">Técnicos asignados a esta actuación:</label>
                        {/* const nombresTecnicosCitadosSeparados = tecnicosCitados.join(', '); */}
                        <p>{todosLosTecnicos.join(', ')}</p>
                    </TecnicosAsignados>                    
                }

                {/* Barra de estados de técnicos */}
                <BarraEstadosTecnicos />
                

                {/* Contenedor con los comentarios                 */}
                <ContenedorComentarios>

                    {/* Comentarios de coordinacion. De escritura */}
                    <ComentariosCoordinacion>
                        <label htmlFor="comentariosCoordinacion">Comentarios de coordinación:</label>
                        <textarea                            
                            name="comentariosCoordinacion"                
                            placeholder="Introduzca comentarios opcionales"
                            value={comentariosCoordinacion}
                            onChange={handleChange}                            
                        />
                    </ComentariosCoordinacion>

                    {/* Comentarios de supervision. Los muestra si existieran. De sólo lectura */}                    
                    {actuacion.comentariosSupervision &&
                        <ComentariosSupervision>
                            <label htmlFor="comentariosSupervision">Comentarios de supervisión:</label>
                            <p>{actuacion.comentariosSupervision}</p>
                        </ComentariosSupervision>
                    }

                </ContenedorComentarios>

                <ContenedorBoton>
                    <Boton
                        $primario                        
                        as="button"
                        type="submit"
                        >Actualizar                            
                    </Boton>

                </ContenedorBoton>

                {/* Mensaje con el resultado de la validacion. Se mostrará en verde u rojo */}
                <Mensaje $validacion={rdoValidacion} mensaje={mensajeAMostrar}/>
                
            </form>
            

        </ContenedorEditarActuacion>
        
    );
}
 
export default FormularioEditarActuacionCoordinador;