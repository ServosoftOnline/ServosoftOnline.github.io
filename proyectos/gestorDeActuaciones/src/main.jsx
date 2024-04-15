/*
  GESTOR DE ACTUACIONES PARA EMPRESAS DE TELECOMUNICACIONES
  - Uso react, styled components, react router dom, REACT-HELMET-ASYNC, PLUGIN VITE-PLUGIN-SVGR, REACT DAYPICKER Y DATE-FNS


*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Helmet
import {Helmet, HelmetProvider} from 'react-helmet-async';
import favicon from './assets/logo.png';

// Elementos
import Contenedor from "./elementos/Contenedor.jsx";

// Contextos
import { ProveedorMensaje } from './contextos/contextoMensaje.jsx';
import { AuthProvider } from './contextos/AuthContext.jsx';
import { RolProvider } from './contextos/RolContext.jsx';

// Componentes para las rutas comúnes
const InicioSesion = React.lazy(() => import( './componentes/InicioSesion.jsx'));
const Error404 = React.lazy(() => import('./componentes/Error404.jsx'));

// Componentes para las rutas de administrador
const Administrador = React.lazy(() => import('./componentes/Administrador.jsx'));
const CrearUsuario = React.lazy(() => import('./componentes/CrearUsuario.jsx'));
const Produccion = React.lazy(() => import('./componentes/Produccion.jsx'));
const CalendarioAusencias = React.lazy(() => import ('./componentes/CalendarioAusencias.jsx'));
const ReporteGeneral = React.lazy(() => import('./componentes/ReporteGeneral.jsx'));

// Componentes para las rutas de coordinador
const Coordinador = React.lazy(()=> import ('./componentes/Coordinador.jsx'));
const Direccion = React.lazy(() => import('./componentes/Direccion.jsx'));
const Ilocalizable = React.lazy(() => import('./componentes/Ilocalizable.jsx'));
const Mantenimiento = React.lazy(() => import ('./componentes/Mantenimiento.jsx'));
const FaltaCitas = React.lazy(() => import('./componentes/FaltaCitas.jsx'));
const Incidencias = React.lazy(() => import('./componentes/Incidencias.jsx'));
const Oym = React.lazy(() => import('./componentes/Oym.jsx'));
const Agenda = React.lazy(() => import('./componentes/Agenda.jsx'));
const Supervision = React.lazy(() => import('./componentes/Supervision.jsx'));
const InstaladosFinalizados = React.lazy(() => import('./componentes/InstaladosFinalizados.jsx'));

// Componentes para las rutas de técnico
const Tecnico = React.lazy(() => import('./componentes/Tecnico.jsx'));
// import Tecnico from './componentes/Tecnico.jsx';

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
            <React.Suspense>
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
            </React.Suspense>           
          </Contenedor>
        </BrowserRouter>

      </ProveedorMensaje>
      </RolProvider>
      </AuthProvider>
      
    </HelmetProvider>
  </React.StrictMode>,
);
