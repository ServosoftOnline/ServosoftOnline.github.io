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

// Contextos
import { ProveedorMensaje } from './contextos/contextoMensaje.jsx';

// Componentes
import InicioSesion from './componentes/InicioSesion.jsx';
import Administrador from './componentes/Administrador.jsx';
import CrearUsuario from './componentes/CrearUsuario.jsx';
import Produccion from './componentes/Produccion.jsx';
import CalendarioAusencias from './componentes/CalendarioAusencias.jsx';
import ReporteGeneral from './componentes/ReporteGeneral.jsx';
import Coordinador from './componentes/Coordinador.jsx';
import Direccion from './componentes/Direccion.jsx';
import Planeado from './componentes/Planeado.jsx';
import Ilocalizable from './componentes/Ilocalizable.jsx';
import Mantenimiento from './componentes/Mantenimiento.jsx';
import FaltaCitas from './componentes/FaltaCitas.jsx';
import Incidencias from './componentes/Incidencias.jsx';
import Oym from './componentes/Oym.jsx';
import Agenda from './componentes/Agenda.jsx';
import Supervision from './componentes/Supervision.jsx';
import InstaladosFinalizados from './componentes/InstaladosFinalizados.jsx';


import Error404 from './componentes/Error404.jsx';

// Elementos
import Contenedor from "./elementos/Contenedor";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>

      {/* Helmet */}
      <Helmet>
        <title>Gestor de Actuaciones</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
      </Helmet>

      {/* Contextos */}
      <ProveedorMensaje>

        {/* React router */}
        <BrowserRouter>
          <Contenedor>
            <Routes>

              {/* Rutas públicas administrador */}
              <Route path='/administrador' element={<Administrador />} />
              <Route path='/crear-usuario' element={<CrearUsuario />} />
              <Route path='/produccion' element={<Produccion />} />
              <Route path='/calendario-ausencias' element={<CalendarioAusencias />} />
              <Route path='/reporte-general' element={<ReporteGeneral />} />
              <Route path='/coordinador' element={<Coordinador />} />
              
              {/* Rutas públicas coordinador */}
              <Route path='/direccion' element={<Direccion />} />
              <Route path='/planeado' element={<Planeado />} />
              <Route path='/ilocalizable' element={<Ilocalizable />} />
              <Route path='/mantenimiento' element={<Mantenimiento />} />
              <Route path='/falta-citas' element={<FaltaCitas />} />
              <Route path='/incidencias' element={<Incidencias />} />
              <Route path='/oym' element={<Oym />} />
              <Route path='/agenda' element={<Agenda />} />
              <Route path='/supervision' element={<Supervision />} />
              <Route path='/instalados-finalizados' element={<InstaladosFinalizados />} />

              {/* Rutas públicas comunes */}
              <Route path='/' element={<InicioSesion />} />  
              <Route path='*' element={<Error404 />} />

            </Routes>            
          </Contenedor>
        </BrowserRouter>

      </ProveedorMensaje>
    </HelmetProvider>
  </React.StrictMode>,
);
