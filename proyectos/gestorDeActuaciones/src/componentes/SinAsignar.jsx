import React from "react";

// Elementos
import  {Lista, ContenedorSubtitulo, Subtitulo, Fecha, ElementoListaCabecera, ElementoLista, Incidencia, Cliente, Direccion, Poblacion,
        TipoDeServicio,Gestion,ContenedorBotonesLista,BotonAccion,} from '../elementos/ElementosDeLista';

// Hooks
import useObtenerIncidenciasPtesDeAsignar from "../hooks/useObtenerIncidenciasPtesDeAsignar";

// Funciones importadas
import formatearFecha from "../funciones/formatearFecha";

// SVG
import IconoEditar from './../assets/editar.svg?react';
import IconoBorrar from './../assets/borrar.svg?react';

const SinAsignar = () => {

    // LLamadas a los hooks  
    const [actuacionesSinAsignar] = useObtenerIncidenciasPtesDeAsignar();
    const arrayActuacionesSinAsignar = Object.values(actuacionesSinAsignar);

    // Funcion del componente que comprueba si la fecha del index anterior es igual a la fecha del index actual
    const fechaEsIgual = (arrayActuacionesSinAsignar, index, incidencia) => {
        
        // La posición 0 no tiene fecha anterior
        if(index!==0) {
        const fechaActual = formatearFecha(incidencia.fechaIncidencia);
        const fechaGastoAnterior = formatearFecha(arrayActuacionesSinAsignar[index -1].fechaIncidencia);
        if (fechaActual===fechaGastoAnterior) return true;
        else return false;
        }
    }

    return (
        <Lista>
          {
            // Si no obtuve actuaciones muestro mensaje
            arrayActuacionesSinAsignar.length === 0 ?
              <ContenedorSubtitulo>
                <Subtitulo>No hay actuaciones pendientes de planificar</Subtitulo>                
              </ContenedorSubtitulo>
            :

            // En caso contrario recorro las actuaciones sin mostrar fecha repetidas y mostrando la informacion relevente
            arrayActuacionesSinAsignar.map((actuacion, index) => {
              return (

                // Solo tengo un key que debo añadir a los elementos Fecha y ElementosLista
                // Englobo a los elementos en un div al que le pongo el key
                <div key={actuacion.codigoIncidencia}>

                  {/* Solo mostraré la fecha y la cabecera si la fecha si es diferente a la anterior */}
                  {!fechaEsIgual(arrayActuacionesSinAsignar, index, actuacion) &&
                    <>

                      <Fecha>
                        {formatearFecha(actuacion.fechaIncidencia)}
                      </Fecha>

                      <ElementoListaCabecera>
                        <Incidencia>Incidencia</Incidencia>
                        <Cliente>Cliente</Cliente>
                        <Direccion>Dirección</Direccion>
                        <Poblacion>Población</Poblacion>
                        <TipoDeServicio>Servicio</TipoDeServicio>
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
                      {actuacion.direccionInstalacion}
                    </Direccion>

                    <Poblacion>
                      {actuacion.poblacionInstalacion}
                    </Poblacion>

                    <TipoDeServicio>
                      {actuacion.tipoServicio}
                    </TipoDeServicio>                    

                    {/* Boton para editar la actuacion */}
                    <ContenedorBotonesLista>

                        {/* <BotonAccion as={Link} to={`/editar/${actuacion.id}`}>  */}
                        <BotonAccion>
                          <IconoEditar /> 
                        </BotonAccion>

                        {/* <BotonAccion as={Link} to={`/borrar/${actuacion.id}`}>  */}
                        <BotonAccion>
                          <IconoBorrar />
                        </BotonAccion>

                      </ContenedorBotonesLista>                  
                  </ElementoLista>
                </div>                
              )
            })
          }

        </Lista>
    );
} 

export default SinAsignar;