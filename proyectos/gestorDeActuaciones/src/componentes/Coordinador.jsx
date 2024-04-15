/*
  COMPONENTE PRINCIPAL PARA LOS COORDINADORES.
    - Mostrará las incidencias pendientes de coordinar
    - Las editará y podrá cambiarlas de estado  
*/

// React y react router
import React, { useContext } from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from '../elementos/ElementosDeHeader';
import {
  Lista,
  ContenedorSubtitulo,
  Subtitulo,
  Fecha,
  ElementoListaCabecera,
  ElementoLista,
  ListaDeCategorias,
  ElementoListaCategorias,
  Incidencia,
  Cliente,
  Direccion,
  Poblacion,
  TipoDeServicio,
  Gestion,
  ContenedorBotonesLista,
  BotonAccion,
  BotonCargarMas,
  ContenedorBotonCentral,
  
} from './../elementos/ElementosDeLista';
import Boton from "../elementos/Boton";
import BtnSalir from "../elementos/BtnSalir";

// SVG
import IconoEditar from './../assets/editar.svg?react';
import IconoBorrar from './../assets/borrar.svg?react';

// Contexto
import { RolContext } from "../contextos/RolContext";

// Funciones importadas
import formatearFecha from "../funciones/formatearFecha";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";
import useObtenerIncidenciasPtesDeAsignar from "../hooks/useObtenerIncidenciasPtesDeAsignar";

// El Componente
const Coordinador = () => {
  const {rol} = useContext(RolContext); 
  const [nombre] = useObtenerNombreDeUnUsuario();
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
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Planeado</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <ContenedorHeader>         
            
            <Titulo>{nombre} (Planeado)</Titulo>
            <ContenedorBotones>
              <Boton $paraCoordinador to = '/direccion'>Direccion</Boton>
              <Boton $paraCoordinador to = '/ilocalizable'>Ilocalizable</Boton>
              <Boton $paraCoordinador to = '/mantenimiento'>Mantenimiento</Boton>
              <Boton $paraCoordinador to = '/falta-citas'>Falta citas</Boton>
              <Boton $paraCoordinador to = '/incidencias'>Incidencias</Boton>
              <Boton $paraCoordinador to = '/oym'>O&m</Boton>
              <Boton $paraCoordinador to = '/agenda'>Agenda</Boton>
              <Boton $paraCoordinador to = '/supervision'>Supervisión</Boton>
              <Boton $paraCoordinador to = '/instalados-finalizados'>Finalizados</Boton>
              {rol == "administrador" ? <Boton $paraAdministrador to="/administrador">Administración</Boton> : null}              
              <BtnSalir />         
            </ContenedorBotones>

          </ContenedorHeader>
        </Header>

        {/* Lista con las actuaciones pte_de_coordinar */}
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

      </HelmetProvider>
    </>
  );
}
 
export default Coordinador;