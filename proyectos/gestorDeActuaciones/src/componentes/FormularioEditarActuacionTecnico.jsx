/*
    COMPONENTE QUE MUESTRA EL FORMULARIO PARA QUE LOS TECNICOS PUEDAN EDITAR SUS ACTUACIONES
*/

// React
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Elementos
import {ContenedorEditarActuacion, Formulario, SubContenedorSoloLectura, SubContenedor1, SubContenedor2, SubContenedor3, 
        SubContenedor4, SubContenedor5, SubContenedor6, ContenedorSelectTecnicos, ContenedorDatePicker, ContenedorBoton }
        from './../elementos/ElementosDeFormularioEditarActuacionTecnico';

// Componentes select
import SelectDificultades from "./SelectTDificultades";
import SelectEstadosModuloTecnico from "./SelectEstadosModuloTecnico";

// Resto de los componentes
import Boton from "../elementos/Boton";

// Funcion firebase
import editarActuacion from "../firebase/editarActuacion";

// Componentes
import Mensaje from "./Mensaje";

// Contexto
import { ContextoMensaje } from "../contextos/contextoMensaje";

// Hooks
import useObtenerActuacionAPartirDeSuId from "../hooks/useObtenerActuacionAPartirDeSuId";
import useObtenerTecnicosAPartirDelIdActuacion from "../hooks/useObtenerTecnicosAPartirDelIdActuacion";
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// Mi componente
const  FormularioEditarActuacionTecnico= () => {

    const {idActuacion} = useParams();    
    const {mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje} = useContext(ContextoMensaje);   

    // Informacion obtenida desde los hooks
    const [actuacion] = useObtenerActuacionAPartirDeSuId(idActuacion);   
    const [todosLosTecnicos] = useObtenerTecnicosAPartirDelIdActuacion(idActuacion);
    const [nombre] = useObtenerNombreDeUnUsuario();
    const DificultadAntesDeEntrar= actuacion.dificultad;
    const PuntosAntesDeEntrar = actuacion.puntos;
     
    
    // Estados        
    const [estado, asignarEstado] = useState(actuacion.estado);    
    const [estadoDescripcion, asignarEstadoDescripcion] = useState();
    const [momentoInicioCamino, asignarMomentoInicioCamino] = useState();
    const [momentoLlegadaACliente, asignarMomentoLlegadaACliente] = useState();
    const [momentoFinActuacion, asignarMomentoFinActuacion] = useState();
    const [consideraNivel4, asignarConsideraNivel4] = useState("No");
    const [dificultadTemporal, asignarDificultadTemporal] = useState();

    // Obtengo los acompañantes filtrando a todos los tecnicos obtenidos por el hook eliminandole quien inico la sesion guardado en nombre
    let acompañantes = []; 
    if (Array.isArray(todosLosTecnicos)) {        
        acompañantes = todosLosTecnicos.filter((tecnico) => {
            if(tecnico != nombre){
                return tecnico;
            }
        });
    };
    console.log(acompañantes);


    // // Establezco los estados con los datos de la actuacion obtenida del hook. Para mostrar los valores
    // //  Por ahora solo es necesario tener una depedencia
    useEffect(() => {        
    //     /* 
    //     asignarLinkDorus(actuacion.linkDorus);
    //     asignarDireccion(actuacion.direccion);
    //     asignarPoblacion(actuacion.poblacion);

    //     asignarCoordenadas(actuacion.coordenadas);
    //     asignarTelefonos(actuacion.telefonos);
    //     asignarTiposDeActuacion(actuacion.tipoActuacion);
    //     */
       
           
            

    //     /* 
    //     asignarZonasDeInstalacion(actuacion.zonaInstalacion);       
    //     asignarTiposDeTrabajo(actuacion.tipoTrabajo);
    //     asignarIdTipoDeTrabajo(actuacion.idTipoTrabajo);
    //     asignarStb(actuacion.stb);
    //     */

    //     asignarEstado(actuacion.estado);
            asignarEstadoDescripcion(actuacion.estadoDescripcion);

    //     /* 
    //     asignarFechaCitacion(fromUnixTime(actuacion.fechaCitacion));
    //     asignarTecnico1(actuacion.tecnico1);
    //     asignarTecnico2(actuacion.tecnico2);
    //     asignarTecnico3(actuacion.tecnico3);
    //     asignarTecnico4(actuacion.tecnico4);
    //     asignarTecnico5(actuacion.tecnico5);

    //     asignarComentariosTecnicos(actuacion.comentariosTecnicos);
    //     */

    },[actuacion.estadoDescripcion]);  

    // Funciones    
    const abrirGoogleMaps = (coordenadas) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${coordenadas}`;
        window.open(url, '_blank'); 
    }

    const handleChange = (e) => {
        asignarConsideraNivel4(e.target.value);
    };
    
    return (        

        <ContenedorEditarActuacion>
            <Formulario>

                <SubContenedorSoloLectura>

                    {/* Codigo de incidencia, cliente y descripcion */}
                    <div> <label htmlFor="codigoIncidencia">Código de incidencia: </label> {actuacion.codigoIncidencia} </div>
                    <div> <label htmlFor="cliente">Cliente: </label> {actuacion.nombre} </div>
                    <div> <label htmlFor="descripcion">Descripción: </label> {actuacion.descripcion} </div>

                    {/* link para dorus */}
                    <div>
                        <label htmlFor="linkDorus">Link Dorus: </label>
                        <a href={actuacion.linkDorus} target="_blank">{actuacion.linkDorus}</a>                         
                    </div>

                    {/* Dirección y población */}
                    <div> <label htmlFor="direccion">Dirección: </label> {actuacion.direccion} </div>
                    <div> <label htmlFor="poblacion">Población: </label> {actuacion.poblacion} </div>

                    {/* Coordenadas de google maps */}
                    <div> 
                        <label htmlFor="coordenadas">Coordenadas: </label> 
                        <a href="#" onClick={() => abrirGoogleMaps(actuacion.coordenadas)}>{actuacion.coordenadas}</a>
                    </div>

                    {/* Telefonos, tipo de atuacion , zona, momentos de en camino e incio de actuacion y comentarios coordinacion */}                    
                    <div> <label htmlFor="telefonos">Telefonos: </label> {actuacion.telefonos} </div>
                    <div> <label htmlFor="tipoActuacion">Tipo de actuación: </label> {actuacion.tipoActuacion} </div>
                    <div> <label htmlFor="zona">Zona: </label> {actuacion.zonaInstalacion} </div>
                    <div> <label htmlFor="tipoTrabajo">Tipo de trabajo: </label> {actuacion.tipoTrabajo} </div>

                    {/* Tecnicos acompañantes, los devuelvo separados por comas mediante map */}
                    <div>

                        <label htmlFor="tecnicosAcompañantes">Técnicos acompañantes: </label>
                        {acompañantes.map((acompañante, index) => (
                            <React.Fragment key={index}>
                                {acompañante}
                                {index !== acompañantes.length - 1 && ", "}
                            </React.Fragment>
                        ))}
                    </div>
                    
                    {/* Comentarios desde coordinacion */}
                    <div> 
                        <label htmlFor="comentariosCoordinacion"> Comentarios desde coordinación: </label>
                        {actuacion.comentariosTecnicos} 
                    </div>

                </SubContenedorSoloLectura>

                <SubContenedor1>
                    <div> <label htmlFor="momentoInicioCamino">Inicio camino: </label> {momentoInicioCamino} </div>
                    <div> <label htmlFor="momentoInicioActuacion">Inicio actuacion: </label> {momentoLlegadaACliente}</div>
                    <div> <label htmlFor="momentoFinActuacion">Fin actuacion: </label> {momentoFinActuacion}</div>
                </SubContenedor1>

                <SubContenedor2>

                    <SelectEstadosModuloTecnico
                        asignarEstado={asignarEstado}
                        estadoDescripcion = {estadoDescripcion}
                        asignarEstadoDescripcion = {asignarEstadoDescripcion}
                    />                

                </SubContenedor2>

                <SubContenedor3>

                    <div> <label htmlFor="dificultad">Dificultad actual: </label> {actuacion.dificultad} </div>
                    <div> <label htmlFor="puntos">Puntos: </label> {actuacion.puntos} </div>

                </SubContenedor3>

                <SubContenedor4>
                    <div>
                        <h4>¿Consideras la actuacion de nivel4?</h4>
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
                </SubContenedor4>
                
                {consideraNivel4 === "Si" &&
                    
                    <SubContenedor5>
                    checkbox
                    </SubContenedor5>
                }
                

            </Formulario>
        </ContenedorEditarActuacion>
        
    );
}
 
export default FormularioEditarActuacionTecnico;