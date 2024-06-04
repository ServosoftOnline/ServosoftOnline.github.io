/*
  COMPONENTE COORDINADOR:

    - Contiene las rutas para los coordinadores importadas de forma dinámica
    - Obtiene el nombre del usuario para mostrarlo en la cabecera
    - Obtiene el rol del usuario mediante un conexto para mostrar el enlace a administrador solo si es administrador
    - Muestra los botones que actuan como link para desplazarse por las diferentes rutas    
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

// Contexto
import { RolContext } from "../contextos/RolContext";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// Funciones
import anchoDePantalla from './../funciones/anchoDePantalla';

// El Componente
const Coordinador = () => {

  // Obtengo el ancho de pantalla actual y el ancho máximo para considerarlo una pantalla de un smartphone
  const {anchoActual, anchoMaximo} = anchoDePantalla();  

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
                     
            <ContenedorTitulos>

              {anchoActual <= anchoMaximo && <IconoMenu onClick={() => setMostrarLinks(!mostrarLinks)}/>}
              <Titulo> {nombre} </Titulo> 
              {anchoActual <= anchoMaximo && <BtnSalir /> }           

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

              <Boton $paraCoordinador to = "direccion">Dirección</Boton>
              <Boton $paraCoordinador to = "sin-asignar">Sin coordinar</Boton>            
              <Boton $paraCoordinador to = "ilocalizable">Ilocalizable</Boton>
              <Boton $paraCoordinador to = "mantenimiento">Mantenimiento</Boton>
              <Boton $paraCoordinador to = "falta-citas">Falta citas</Boton>
              <Boton $paraCoordinador to = "incidencias">Incidencias</Boton>
              <Boton $paraCoordinador to = "oym">O&m</Boton>
              <Boton $paraCoordinador to = "agenda">Agenda</Boton>
              <Boton $paraCoordinador to = "supervision">Supervisión</Boton>            
              <Boton $paraCoordinador to = "instalados-finalizados">Finalizados</Boton>
              {rol == "administrador" ? <Boton $paraAdministrador to="/administrador/crear-usuario">Administración</Boton> : null} 
              <BtnSalir />      

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

    </>
  );
}
 
export default Coordinador;