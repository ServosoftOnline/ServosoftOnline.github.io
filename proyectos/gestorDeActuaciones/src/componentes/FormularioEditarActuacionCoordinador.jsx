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
import {ContenedorEditarActuacion, SubContenedorSoloLectura, SubContenedor1, SubContenedor2,
        SubContenedor3, SubContenedor4, SubContenedor5, SubContenedor6, ContenedorSelectTecnicos,
        ContenedorDatePicker, ContenedorBoton } from '../elementos/ElementosDeFormularioEditarActuacion';

// Componentes select
import SelectZonasDeInstalacion from "./SelectZonasDeInstalacion";
import SelectTiposDeTrabajo from "./SelectTiposDeTrabajo";
import SelectDificultades from "./SelectTDificultades";
import SelectStb from "./SelectStb";
import SelectEstadosModuloPlaneado from "./SelectEstadosModuloPlaneado";
import SelectTiposDeActuacion from "./SelectTiposDeActuacion";
import SelectTecnicos from "./SelectTecnicos";

// Resto de los componentes
import Boton from "../elementos/Boton";
import DatePicker from "./DatePicker";

// Funcion firebase
import editarActuacion from "../firebase/editarActuacion";

// Componentes
import Mensaje from "./Mensaje";

// Contexto
import { ContextoMensaje } from "../contextos/contextoMensaje";

// Hooks
import useObtenerActuacionAPartirDeSuId from "../hooks/useObtenerActuacionAPartirDeSuId";
import useObtenerNombreSiEstaEnCaminoOEncliente from "../hooks/useObtenerNombreSiEstaEnCaminoOEncliente";


// Componente
const FormularioEditarActuacionCoordinador = () => {

    const {idActuacion} = useParams();        
    const [actuacion] = useObtenerActuacionAPartirDeSuId(idActuacion);  
    const [tecnicosEnCaminoOEnCliente] = useObtenerNombreSiEstaEnCaminoOEncliente(idActuacion);    
    const {mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje, eliminarMensaje} = useContext(ContextoMensaje);

    // Estados primera fila
    const [linkDorus, asignarLinkDorus] = useState();    
    const [direccion, asignarDireccion] = useState();
    const [poblacion, asignarPoblacion] = useState();

    // Estados segunda fila
    const [coordenadas, asignarCoordenadas] = useState();
    const [telefonos, asignarTelefonos] = useState();
    const [tiposDeActuacion, asignarTiposDeActuacion] = useState();

    // Estados tercera fila
    const [dificultad, asignarDificultad] = useState();
    const [puntos, asignarPuntos] = useState();
    const [zonasDeInstalacion, asignarZonasDeInstalacion] = useState();
    
    // Estados cuarta fila
    const [tiposDeTrabajo, asignarTiposDeTrabajo] = useState();
    const [idTipoDeTrabajo, asignarIdTipoDeTrabajo] = useState();
    const [stb, asignarStb] = useState();
    const [estado, asignarEstado] = useState();
    const [estadoDescripcion, asignarEstadoDescripcion] = useState();

    // Estados quinta fila    
    const [fechaCitacion, asignarFechaCitacion] = useState(new Date());
    const [tecnico1, asignarTecnico1] = useState('');
    const [tecnico2, asignarTecnico2] = useState('');
    const [tecnico3, asignarTecnico3] = useState('');
    const [tecnico4, asignarTecnico4] = useState('');
    const [tecnico5, asignarTecnico5] = useState('');

    // Estados sexta fila
    const [comentariosTecnicos, asignarComentariosTecnicos] = useState();

    // Efecto para establezcer los estados con los datos de la actuacion obtenida del hook.
    //  Por ahora solo es necesario tener una depedencia
    useEffect(() => {        

        asignarLinkDorus(actuacion.linkDorus);
        asignarDireccion(actuacion.direccion);
        asignarPoblacion(actuacion.poblacion);

        asignarCoordenadas(actuacion.coordenadas);
        asignarTelefonos(actuacion.telefonos);
        asignarTiposDeActuacion(actuacion.tipoActuacion);

        asignarDificultad(actuacion.dificultad);
        asignarPuntos(actuacion.puntos); 
        asignarZonasDeInstalacion(actuacion.zonaInstalacion);       

        asignarTiposDeTrabajo(actuacion.tipoTrabajo);
        asignarIdTipoDeTrabajo(actuacion.idTipoTrabajo);
        asignarStb(actuacion.stb);
        asignarEstado(actuacion.estado);
        asignarEstadoDescripcion(actuacion.estadoDescripcion);

        asignarFechaCitacion(fromUnixTime(actuacion.fechaCitacion));
        asignarTecnico1(actuacion.tecnico1);
        asignarTecnico2(actuacion.tecnico2);
        asignarTecnico3(actuacion.tecnico3);
        asignarTecnico4(actuacion.tecnico4);
        asignarTecnico5(actuacion.tecnico5);

        asignarComentariosTecnicos(actuacion.comentariosTecnicos);

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

    // Efecto que se ejecuta al principio para mostrar una alerta si existiera al menos un tecnico en camino o en cliente
    useEffect(() => {        
        compruebaSiUnTecnicoVaEnCaminoOEstaEncliente();       
    },[tecnicosEnCaminoOEnCliente]);
     
    
    // FUNCIONES DEL COMPONENTE
    const compruebaSiUnTecnicoVaEnCaminoOEstaEncliente = () =>{

        console.log('Tecnico o tecnicos que estan en camino o en cliente: ' + tecnicosEnCaminoOEnCliente);
        console.log(tecnicosEnCaminoOEnCliente);

        if(tecnicosEnCaminoOEnCliente.length > 0){
            cambiarMensaje('Técnico o técnicos en camino o en cliente: ' + tecnicosEnCaminoOEnCliente + ' . Avísalos si cambias el estado de la actuacion', 'incorrecta');
        } else {
            eliminarMensaje();
        }

    }

    // Funcion que modifica el estado de los tecnicos
    const actualizaEstadoDeLosTecnicos = () => {

        console.log('Estado: ' + estado);
        if(estado === 'EstadoEnCamino' || estado === 'EstadoEnCliente'){
            console.log('No cambiaré el estado a los tecnicos');
        } else {
            console.log('Tecnico o tecnicos a los que cambiaré su estado: ' + tecnicosEnCaminoOEnCliente);
            tecnicosEnCaminoOEnCliente.forEach((tecnico) => {
                console.log('Cambio el estado a citado al tecnico: ' + tecnico);
            });
            
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
            tecnico1: tecnico1,
            tecnico2: tecnico2,
            tecnico3: tecnico3,
            tecnico4: tecnico4,
            tecnico5: tecnico5,
            comentariosTecnicos: comentariosTecnicos,            
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
        
       /* 
        console.log('link Dorus: ' + linkDorus);
        console.log('Direccion: ' + direccion);
        console.log('Poblacion: ' + poblacion);

        console.log('Coordenadas: ' + coordenadas);
        console.log('telefonos: ' + telefonos);    
        console.log('Tipo de actuacion: ' + tiposDeActuacion);
         
        console.log('Dificultad: ' + dificultad);
        console.log('Puntos: ' + puntos);
        console.log('zona de instalacion: ' + zonasDeInstalacion);

        console.log('tipo de trabajo: ' + tiposDeTrabajo);
        console.log('id tipo de trabajo: ' + idTipoDeTrabajo);
        console.log('STB:' + stb);    
        console.log('Estado: ' + estado);
        console.log('Comentarios tecnicos: ' + comentariosTecnicos);
       */
       

        // Validación1: Que los campos obligatorios no estén vacios. estado deberá contener otro estado que no se el de EstadoPteCoordinar
        if (linkDorus === '' || direccion === '' || poblacion === '' || zonasDeInstalacion === '' || coordenadas ==='' ||telefonos === ''
            || tiposDeActuacion === '' || dificultad === '' || tiposDeTrabajo === '' || stb === '') {

            cambiarMensaje('Rellene todos los datos obligatorios. Son todos menos los comentarios técnicos', 'incorrecta');            
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

            case 'comentariosTecnicos':
                asignarComentariosTecnicos(e.target.value);
                break;

            default:
                console.log('No entro en ninguno');
        }
    }
    
    return( 
        
        <ContenedorEditarActuacion>

            <form onSubmit={handleSubmit}>

                <SubContenedorSoloLectura>
                    <div> <label htmlFor="codigoIncidencia">Código de incidencia: </label> {actuacion.codigoIncidencia} </div>
                    <div> <label htmlFor="codigoIncidencia">Cliente: </label> {actuacion.nombre} </div>
                    <div> <label htmlFor="codigoIncidencia">Descripción: </label> {actuacion.descripcion} </div>
                </SubContenedorSoloLectura>

                <SubContenedor1>
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

                </SubContenedor1>                

                <SubContenedor2>
                    
                    <div>
                        <label htmlFor="coordenadas">Coordenadas:</label>
                        <input
                            type="text"
                            name="coordenadas"                
                            placeholder="Introduzca coordenadas"
                            value={coordenadas}
                            onChange={handleChange}
                        />
                    </div> 

                    <div>
                        <label htmlFor="telefonos">Telefono/s:</label>
                        <input
                            type="text"
                            name="telefonos"                
                            placeholder="Introduzca teléfono/s"
                            value={telefonos}
                            onChange={handleChange}
                        />
                    </div>

                    <SelectTiposDeActuacion
                        tiposDeActuacion = {tiposDeActuacion}
                        asignarTiposDeActuacion={asignarTiposDeActuacion}
                    />
                    
                </SubContenedor2>

                <SubContenedor3>

                    <SelectDificultades
                        dificultad = {dificultad}
                        asignarDificultad={asignarDificultad}
                        asignarPuntos={asignarPuntos} 
                    />

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

                    <SelectZonasDeInstalacion
                        zonasDeInstalacion= {zonasDeInstalacion}
                        asignarZonasDeInstalacion={asignarZonasDeInstalacion} 
                    />
                                       
                </SubContenedor3>

                <SubContenedor5>                    

                    <SelectTiposDeTrabajo
                        tiposDeTrabajo = {tiposDeTrabajo}
                        asignarTiposDeTrabajo={asignarTiposDeTrabajo}                         
                        asignarIdTipoDeTrabajo={asignarIdTipoDeTrabajo}
                    />

                    <SelectStb
                        stb={stb}
                        asignarStb={asignarStb}
                    />
                                         
                    <SelectEstadosModuloPlaneado                      
                        asignarEstado={asignarEstado}
                        estadoDescripcion = {estadoDescripcion}
                        asignarEstadoDescripcion = {asignarEstadoDescripcion}
                    />

                </SubContenedor5>

                {/* Este subcontenedor solo se muestra si la actuacion esta en estado agenda */}
                {estado === 'EstadoAgenda' &&
                    <>                          
                        <h4>Citación:</h4>
                        <SubContenedor6>                                                                              
                            <ContenedorDatePicker>
                                <DatePicker fechaCitacion={fechaCitacion} asignarFechaCitacion={asignarFechaCitacion} />
                            </ContenedorDatePicker>                            

                            {/* Codigo proporcionado por ChatGPT:
                                idTipoDeTrabajo contiene un número que coincide con el número de tecnicos
                                Array.from() para crear un array con la longitud especificada por idTipoDeTrabajo
                                y proporciona tantos select como indique el número */}
                            
                            <ContenedorSelectTecnicos>
                                {Array.from({ length: idTipoDeTrabajo }, (_, index) => (
                                    <SelectTecnicos
                                        numeroTecnicos={index}
                                        tecnico={eval(`tecnico${index + 1}`)}
                                        asignarTecnico={eval(`asignarTecnico${index + 1}`)}
                                    />
                                ))}
                            </ContenedorSelectTecnicos>                        

                        </SubContenedor6>                
                    </>
                }                
                
                <SubContenedor4>

                    <div>
                        <label htmlFor="comentariosTecnicos">Comentarios técnicos:</label>
                        <textarea                            
                            name="comentariosTecnicos"                
                            placeholder="Introduzca comentarios opcionales"
                            value={comentariosTecnicos}
                            onChange={handleChange}                            
                        />
                    </div>

                </SubContenedor4>

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