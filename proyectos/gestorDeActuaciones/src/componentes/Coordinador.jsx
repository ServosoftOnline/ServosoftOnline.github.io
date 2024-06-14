/*
  COMPONENTE COORDINADOR:

    - Contiene las rutas para los coordinadores importadas de forma dinámica
    - Obtiene el nombre del usuario para mostrarlo en la cabecera
    - Obtiene el rol del usuario mediante un conexto para mostrar el enlace a administrador solo si es administrador
    - Muestra los botones que actuan como link para desplazarse por las diferentes rutas  

    - El boton salir y el boton con forma de hamburguesa:

      - Es de vital importancia los limites de las pantallas de movil en vertical y horizontal establecidos en la funcion anchoDePantalla

      - Si la resolucion de la pantalla es mayor a la resolucion de una pantalla de movil en horizontal
        - se mostrará el nombre del usuario y debajo todos los botones y despues el boton de salir

      - Si la resolución de la pantalla se encuentra entre la resolucion horizontal y la vertical de un movil
        - Se mostrarán el nombre del usuario el boton salir y debajo los botones. 

      - Si la resolucion de la pantalla se encuentra por debajo de la resolucion vertical maxima:
        - Se mostrara el boton hamburguesa, el nombre del usuario y el boton salir.
        - Los botones desaparecerán y el boton hamburguesa lo sustituirá mostrando links en lugar de botones.

*/

// React y react router
import React, {useState, useContext, Suspense, lazy} from "react";
import { Route, Routes } from "react-router-dom";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import  {Header, ContenedorHeader, ContenedorTitulos, Titulo, TodosLosBotones,
        ContenedorBotones, Links} from '../elementos/ElementosDeHeader';

import Boton from "../elementos/Boton";
import BtnSalir from "../elementos/BtnSalir";

// SVG
import IconoCerrar from './../assets/cerrar.svg?react';
import IconoMenu from './../assets/menuIcon.svg?react';

// Elementos para las rutas importados de forma dinámica
const SinAsignar = lazy(() => import('./SinAsignar'));
const FormularioEditarActuacionCoordinador = lazy(() => import('./FormularioEditarActuacionCoordinador'));
const FormularioEditarActuacionSupervision = lazy(() => import('./FormularioEditarActuacionSupervision'));
const Direccion = lazy(() => import ('./Direccion'));
const Ilocalizable = lazy(() => import ('./Ilocalizable'));
const Mantenimiento = lazy(() => import('./Mantenimiento'));
const FaltaCitas = lazy(() => import('./FaltaCitas'));
const Incidencias = lazy(() => import ('./Incidencias'));
const Oym = lazy(() => import('./Oym') );
const Agenda = lazy(() => import('./Agenda'));
const Supervision = lazy(() => import('./Supervision'));
const InstaladosFinalizados = lazy(() => import('./InstaladosFinalizados'));

// Componentes
import MuestraResolucion from './MuestraResolucion';

// Contexto
import { RolContext } from "../contextos/RolContext";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// Funciones
import anchoDePantalla from './../funciones/anchoDePantalla';

// El Componente
const Coordinador = () => {

  // Obtengo el ancho de pantalla actual y el ancho máximo para considerarlo una pantalla de un smartphone
  const {anchoActual, anchoMaximoMovilVertical, anchoMaximoMovilHorizontal} = anchoDePantalla();  

  // LLamadas a los hooks
  const [nombre] = useObtenerNombreDeUnUsuario();

  // Obtengo desde los contextos
  const {rol} = useContext(RolContext);   
  
  // Estados
  const [mostrarLinks, setMostrarLinks] = useState(false);
  
  return (
    <>     

      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Planeado</title>
        </Helmet>

      </HelmetProvider>

      {/* Cabecera */}
      <Header>

        <ContenedorHeader>         

          {/* Mostraré el contenedor de los titulos o los links en vertical en los smartphones */}
          {!mostrarLinks ?

            // El iconoMenu que es la hamburguesa se muestra si el ancho de la pantalla es menor o igual que el anchoMaximoVerticalParaMoviles
            // El titulo con el nombre del usuario se mostrará siempre

            <ContenedorTitulos>

              {anchoActual <= anchoMaximoMovilVertical && <IconoMenu onClick={() => setMostrarLinks(!mostrarLinks)}/>}
              <Titulo> {nombre} </Titulo> 
              {rol == "administrador"  && anchoActual > anchoMaximoMovilVertical ?

                  <Boton $paraAdministrador $mediano to="/administrador/crear-usuario">
                    {anchoActual > anchoMaximoMovilHorizontal ? 'Administracion' : 'Admon'}
                  </Boton>

                  : null}

              {anchoActual <= anchoMaximoMovilHorizontal && <BtnSalir /> }           

            </ContenedorTitulos>

            :
            
            <Links>
            
              <IconoCerrar onClick={() => setMostrarLinks(!mostrarLinks)}/>
              <a href="/coordinador/direccion">Dirección</a>
              <a href="/coordinador/sin-asignar">Sin coordinar</a>
              <a href="/coordinador/ilocalizable">Ilocalizable</a>
              <a href="/coordinador/mantenimiento">Mantenimiento</a>
              <a href="/coordinador/falta-citas">Falta citas</a>
              <a href="/coordinador/incidencias">Incidencias</a>
              <a href="/coordinador/oym">O&m</a>
              <a href="/coordinador/agenda">Agenda</a>
              <a href="/coordinador/supervision">Supervisión</a>
              <a href="/coordinador/instalados-finalizados">Finalizados</a>              
              {rol == 'administrador' ? <a href="/administrador/crear-usuario">Administración</a> : null}

            </Links>

          }
          
          {/* Los botones se ocultarán en smartphones. Esto lo gestione mediante media queries en css */}
          <TodosLosBotones>

            <ContenedorBotones>

              <Boton $paraCoordinador $mediano to = "direccion">Dirección</Boton>
              <Boton $paraCoordinador $mediano to = "sin-asignar">Sin coordinar</Boton>            
              <Boton $paraCoordinador $mediano to = "ilocalizable">Ilocalizable</Boton>
              <Boton $paraCoordinador $mediano to = "mantenimiento">Mto</Boton>
              <Boton $paraCoordinador $mediano to = "falta-citas">Falta citas</Boton>
              <Boton $paraCoordinador $mediano to = "incidencias">Incidencias</Boton>
              <Boton $paraCoordinador $mediano to = "oym">O&m</Boton>
              <Boton $paraCoordinador $mediano to = "agenda">Agenda</Boton>
              <Boton $paraCoordinador $mediano to = "supervision">Supervisión</Boton>            
              <Boton $paraCoordinador $mediano to = "instalados-finalizados">Finalizados</Boton>                             
              {anchoActual > anchoMaximoMovilHorizontal && <BtnSalir /> }     

            </ContenedorBotones>
            
          </TodosLosBotones>
           
        </ContenedorHeader>
      </Header>
      
      {/* Rutas declaradas de forma dinámica*/}
      <Suspense>
        <Routes>

          {/* Rutas estáticas */}
          <Route path="sin-asignar" element={<SinAsignar />}/>
          <Route path="direccion" element={<Direccion />}/>
          <Route path="ilocalizable" element={<Ilocalizable />}/>
          <Route path="mantenimiento" element={<Mantenimiento />}/>
          <Route path="falta-citas" element={<FaltaCitas />}/>
          <Route path="incidencias" element={<Incidencias />}/>
          <Route path="oym" element={<Oym />}/>
          <Route path="agenda" element={<Agenda />}/>
          <Route path="supervision" element={<Supervision />}/>
          <Route path="instalados-finalizados" element={<InstaladosFinalizados />}/>          

          {/* Rutas dinamicas */}          
          <Route path="detalles/:idActuacion" element={<FormularioEditarActuacionCoordinador />}/>
          <Route path="supervision/:idActuacion" element={<FormularioEditarActuacionSupervision />}/>

        </Routes>
      </Suspense>

      {/* <MuestraResolucion /> */}
      {/* {console.log('ancho actual:' + anchoActual)}
      {console.log('ancho maximo:' + anchoMaximoMovilVertical)}
      {console.log('ancho maximoMovilHorizontal:' + anchoMaximoMovilHorizontal)} */}

    </>
  );
}
 
export default Coordinador;