/*
  GESTOR DE ACTUACIONES PARA EMPRESAS DE TELECOMUNICACIONES
  
  - Inicié la programación de la aplicacion el 18 de marzo de 2024
  - Es el componente principal de la aplicación

  - Contiene:
    - Las rutas anidadas de administradores, coordinadores y técnicos importadas de forma dinámica
    - El contenedor ppal de la aplicación
    - Los proveedores de los contextos de los mensajes de validación, el usuario que inicia la sesion y su rol 
    - El favicon en la pestaña del navegador

*/

import React, {Suspense, lazy} from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Helmet
import {Helmet, HelmetProvider} from 'react-helmet-async';
import favicon from './assets/logo.png';

// Elementos
import Contenedor from "./elementos/Contenedor.jsx";

// Proveedores de contextos
import { ProveedorMensaje } from './contextos/contextoMensaje.jsx';
import { AuthProvider } from './contextos/AuthContext.jsx';
import { RolProvider } from './contextos/RolContext.jsx';

// Rutas importadas de forma dinámica
const Administrador = lazy(() => import('./componentes/Administrador.jsx'));
const Coordinador = lazy(() => import('./componentes/Coordinador.jsx'));
const Tecnico = lazy(() => import('./componentes/Tecnico.jsx'));
const InicioSesion = lazy(() => import('./componentes/InicioSesion.jsx'));
const Error404 = lazy(() => import('./componentes/Error404.jsx'));

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
            <Suspense>
              <Routes>
                
                {/* Ruta raiz */}
                <Route path='/' element={<InicioSesion />} /> 

                {/* Rutas anidadas */}
                <Route path="/administrador/*" element={<Administrador />} />                
                <Route path='/coordinador/*' element={<Coordinador />} />
                <Route path='/tecnico/*' element={<Tecnico />} />

                {/* Ruta pública "No encuentra la página" */}                 
                <Route path='*' element={<Error404 />} />

              </Routes>             
            </Suspense>
          </Contenedor>
        </BrowserRouter>

      </ProveedorMensaje>      
      </RolProvider>
      </AuthProvider>
      
    </HelmetProvider>
  </React.StrictMode>,
);