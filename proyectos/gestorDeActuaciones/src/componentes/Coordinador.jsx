/*
  COMPONENTE COORDINADOR:

    - Contiene las rutas para los coordinadores importadas de forma dinámica
    - Obtiene el nombre del usuario para mostrarlo en la cabecera
    - Obtiene el rol del usuario mediante un conexto para mostrar el enlace a administrador solo si es administrador
    - Muestra los botones que actuan como link para desplazarse por las diferentes rutas    
*/

// React y react router
import React, {useContext, Suspense, lazy} from "react";
import { Route, Routes } from "react-router-dom";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader, TodosLosBotones, ContenedorBotones} from '../elementos/ElementosDeHeader';
import Boton from "../elementos/Boton";
import BtnSalir from "../elementos/BtnSalir";

// Elementos para las rutas importados de forma dinámica
const SinAsignar = lazy(() => import('./SinAsignar'));
const FormularioEditarActuacionCoordinador = lazy(() => import('./FormularioEditarActuacionCoordinador'));
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
import BarraEstadosTecnicos from "./BarraEstadosTecnicos";

// Contexto
import { RolContext } from "../contextos/RolContext";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// El Componente
const Coordinador = () => {

  // LLamadas a los hooks
  const [nombre] = useObtenerNombreDeUnUsuario();

  // Estados
  const {rol} = useContext(RolContext);     
  
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
          
          <Titulo>{nombre} </Titulo>
          
          <TodosLosBotones>

            <ContenedorBotones>
              <Boton $paraCoordinador to = "direccion">Dirección</Boton>
              <Boton $paraCoordinador to = "sin-asignar">Sin coordinar</Boton>            
              <Boton $paraCoordinador to = "ilocalizable">Ilocalizable</Boton>
              <Boton $paraCoordinador to = "mantenimiento">Mantenimiento</Boton>
              <Boton $paraCoordinador to = "falta-citas">Falta citas</Boton>
            </ContenedorBotones>

            <ContenedorBotones>
              <Boton $paraCoordinador to = "incidencias">Incidencias</Boton>
              <Boton $paraCoordinador to = "oym">O&m</Boton>
              <Boton $paraCoordinador to = "agenda">Agenda</Boton>
              <Boton $paraCoordinador to = "supervision">Supervisión</Boton>
              <Boton $paraCoordinador to = "instalados-finalizados">Finalizados</Boton>
              {rol == "administrador" ? <Boton $paraAdministrador to="/administrador">Administración</Boton> : null}              
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
        </Routes>
      </Suspense>

      {/* Barra de estados de técnicos */}
      <BarraEstadosTecnicos />

    </>
  );
}
 
export default Coordinador;