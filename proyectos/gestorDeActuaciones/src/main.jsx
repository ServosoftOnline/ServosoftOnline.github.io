/*
  GESTOR DE ACTUACIONES PARA EMPRESAS DE TELECOMUNICACIONES
  - Uso react, styled components, react router dom, REACT-HELMET-ASYNC, PLUGIN VITE-PLUGIN-SVGR, REACT DAYPICKER Y DATE-FNS
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Helmet
import {Helmet, HelmetProvider} from 'react-helmet-async';
import favicon from './assets/logo.png';

// Elementos
import Contenedor from "./elementos/Contenedor";

// Contextos
import { ProveedorMensaje } from './contextos/contextoMensaje.jsx';
import {AuthProvider} from './contextos/AuthContext.jsx';
import { RolProvider } from './contextos/RolContext.jsx';

// Componentes para las rutas comúnes
import InicioSesion from './componentes/InicioSesion.jsx';
import Error404 from './componentes/Error404.jsx';

// Componentes para las rutas de administrador
import Administrador from './componentes/Administrador.jsx';
import CrearUsuario from './componentes/CrearUsuario.jsx';
import Produccion from './componentes/Produccion.jsx';
import CalendarioAusencias from './componentes/CalendarioAusencias.jsx';
import ReporteGeneral from './componentes/ReporteGeneral.jsx';

// Componentes para las rutas de coordinador
import Coordinador from './componentes/Coordinador.jsx';
import Direccion from './componentes/Direccion.jsx';
// import Planeado from './componentes/Planeado.jsx';
import Ilocalizable from './componentes/Ilocalizable.jsx';
import Mantenimiento from './componentes/Mantenimiento.jsx';
import FaltaCitas from './componentes/FaltaCitas.jsx';
import Incidencias from './componentes/Incidencias.jsx';
import Oym from './componentes/Oym.jsx';
import Agenda from './componentes/Agenda.jsx';
import Supervision from './componentes/Supervision.jsx';
import InstaladosFinalizados from './componentes/InstaladosFinalizados.jsx';

// Componentes para las rutas de técnico
import Tecnico from './componentes/Tecnico.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>

      {/* Helmet */}
      <Helmet>
        <title>Gestor de Actuaciones</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
      </Helmet>

      {/* Contextos */}
      <AuthProvider>
      <RolProvider>
      <ProveedorMensaje>

        {/* React router */}
        <BrowserRouter>
          <Contenedor>
            <Routes>

              {/* Rutas públicas para administradores */}
              <Route path='/administrador' element={<Administrador />} />
              <Route path='/crear-usuario' element={<CrearUsuario />} />
              <Route path='/produccion' element={<Produccion />} />
              <Route path='/calendario-ausencias' element={<CalendarioAusencias />} />
              <Route path='/reporte-general' element={<ReporteGeneral />} />
              
              {/* Rutas públicas para coordinadores */}
              <Route path='/coordinador' element={<Coordinador />} />
              <Route path='/direccion' element={<Direccion />} />
              {/* <Route path='/planeado' element={<Planeado />} /> */}
              <Route path='/ilocalizable' element={<Ilocalizable />} />
              <Route path='/mantenimiento' element={<Mantenimiento />} />
              <Route path='/falta-citas' element={<FaltaCitas />} />
              <Route path='/incidencias' element={<Incidencias />} />
              <Route path='/oym' element={<Oym />} />
              <Route path='/agenda' element={<Agenda />} />
              <Route path='/supervision' element={<Supervision />} />
              <Route path='/instalados-finalizados' element={<InstaladosFinalizados />} />

              {/* Rutas publicas para tecnicos */}
              <Route path='/tecnico' element={<Tecnico />} />

              {/* Rutas públicas comunes */}
              <Route path='/' element={<InicioSesion />} />  
              <Route path='*' element={<Error404 />} />

            </Routes>            
          </Contenedor>
        </BrowserRouter>

      </ProveedorMensaje>
      </RolProvider>
      </AuthProvider>
      
    </HelmetProvider>
  </React.StrictMode>,
);
