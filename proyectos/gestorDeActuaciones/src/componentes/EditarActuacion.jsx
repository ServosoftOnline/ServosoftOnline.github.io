/*
    COMPONENTE PARA EDITAR TODAS LAS ACTUACIONES
        - COMPONENTE MUY IMPORTANTE.
        - SERÁ LLAMADO DESDE PRACTICAMENTE TODOS LOS MODULOS DE COORDINADOR CUANDO SE LE PULSE EL BOTON DE EDITAR
*/

// React
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Elementos formulario editar actuacion
import {ContenedorEditarActuacion, SubContenedorSoloLectura, SubContenedor1, SubContenedor2,
        SubContenedor3, SubContenedor4, SubContenedor5, SubContenedor6, ContenedorSelectTecnicos,
        ContenedorDatePicker, ContenedorBoton } from './../elementos/ElementosDeFormularioEditarActuacion';

// Componentes select
import SelectZonasDeInstalacion from "./SelectZonasDeInstalacion";
import SelectTiposDeTrabajo from "./SelectTiposDeTrabajo";
import SelectDificultades from "./SelectTDificultades";
import SelectStb from "./SelectStb";
import SelectEstadosModuloPlaneado from "./SelectEstadosModuloPlaneado";
import SelectTiposDeActuacion from "./SelectTiposDeActuacion";
import SelectTecnicos from "./SelectTecnicos";

// Resto de los componentes
import Boton from "./../elementos/Boton";
import DatePicker from "./DatePicker";

// Funcion firebase
import editarActuacion from "../firebase/editarActuacion";

// Componentes
import Mensaje from "./../componentes/Mensaje";

// Contexto
import { ContextoMensaje } from "./../contextos/contextoMensaje";

// Hooks
import useObtenerActuacionAPartirDeSuId from "../hooks/useObtenerActuacionAPartirDeSuId";
import { fromUnixTime, getUnixTime } from "date-fns";

// Componente
const EditarActuacion = () => {

    const {idActuacion} = useParams();    
    const [actuacion] = useObtenerActuacionAPartirDeSuId(idActuacion);   
    const {mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje} = useContext(ContextoMensaje);

    // Estados primera fila
    const [linkDorus, asignarLinkDorus] = useState();    
    const [direccion, asignarDireccion] = useState();
    const [poblacion, asignarPoblacion] = useState();
    const [zonasDeInstalacion, asignarZonasDeInstalacion] = useState();

    // Estados segunda fila
    const [coordenadas, asignarCoordenadas] = useState();
    const [telefonos, asignarTelefonos] = useState();
    const [tiposDeActuacion, asignarTiposDeActuacion] = useState();

    // Estados tercera fila
    const [dificultad, asignarDificultad] = useState();
    const [puntos, asignarPuntos] = useState();
    
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

    // Establezco los estados con los datos de la actuacion obtenida del hook. Para mostrar los valores
    //  Por ahora solo es necesario tener una depedencia
    useEffect(() => {        

        asignarLinkDorus(actuacion.linkDorus);
        asignarDireccion(actuacion.direccion);
        asignarPoblacion(actuacion.poblacion);
        asignarZonasDeInstalacion(actuacion.zonaInstalacion);

        asignarCoordenadas(actuacion.coordenadas);
        asignarTelefonos(actuacion.telefonos);
        asignarTiposDeActuacion(actuacion.tipoActuacion);

        asignarDificultad(actuacion.dificultad);
        asignarPuntos(actuacion.puntos);        

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
     
    
    // Funciones

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


    const validacionCorrecta = () => {
        
        /* 
        console.log('link Dorus: ' + linkDorus);
        console.log('Direccion: ' + direccion);
        console.log('Poblacion: ' + poblacion);
        console.log('zona de instalacion: ' + zonaInstalacion);
        
        console.log('Coordenadas: ' + coordenadas);
        console.log('telefonos: ' + telefonos);    
        console.log('Tipo de actuacion: ' + tiposDeActuacion);
         
        console.log('Dificultad: ' + dificultad);
        console.log('Puntos: ' + puntos);

        console.log('tipo de trabajo: ' + tipoDeTrabajo);
        console.log('STB:' + stb);    
        console.log('Estado: ' + estado);
        console.log('Comentarios tecnicos: ' + comentariosTecnicos);
        */        

        // que los campos obligatorios no estén vacios. estado deberá contener otro estado que no se el de EstadoPteCoordinar
        if (linkDorus === '' || direccion === '' || poblacion === '' || zonasDeInstalacion === '' || telefonos === ''
            || tiposDeActuacion === '' || dificultad === '' || tiposDeTrabajo === '' || stb === '') {

            cambiarMensaje('Debe rellenar todos los datos obligatorios. Son todos menos las coordenadas y los comentarios técnicos', 'incorrecta');            
            return false;
        }

        return true;        
    }

    const handleSubmit = (e) => {
        e.preventDefault();               
        if(validacionCorrecta()) llamaAEditarActuacion();
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

            <SubContenedorSoloLectura>
                <div> <label for="codigoIncidencia">Código de incidencia: </label> {actuacion.codigoIncidencia} </div>
                <div> <label for="codigoIncidencia">Cliente: </label> {actuacion.nombre} </div>
                <div> <label for="codigoIncidencia">Tipo de servicio: </label> {actuacion.tipoServicio} </div>
            </SubContenedorSoloLectura>

            <form onSubmit={handleSubmit}>

                <SubContenedor1>
                    <div>
                        <label for="linkDorus">Link Dorus:</label>
                        <input
                            type="text"
                            name="linkDorus"                
                            placeholder="Introduzca link obligatorio"
                            value={linkDorus}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label for="direccion">Dirección:</label>
                        <input
                            type="text"
                            name="direccion"                
                            placeholder= {actuacion.direccion}
                            value={direccion}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label for="poblacion">Población:</label>
                        <input
                            type="text"
                            name="poblacion"                
                            placeholder={actuacion.poblacion}
                            value={poblacion}
                            onChange={handleChange}
                        />
                    </div>

                </SubContenedor1>                

                <SubContenedor2>
                    <div>
                        <label for="coordenadas">Coordenadas:</label>
                        <input
                            type="text"
                            name="coordenadas"                
                            placeholder="Coordenadas opcionales"
                            value={coordenadas}
                            onChange={handleChange}
                        />
                    </div> 

                    <div>
                        <label for="telefonos">Telefono/s:</label>
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
                        <label for="puntos">Puntos:</label>
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
                        <label for="comentariosTecnicos">Comentarios técnicos:</label>
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
 
export default EditarActuacion;