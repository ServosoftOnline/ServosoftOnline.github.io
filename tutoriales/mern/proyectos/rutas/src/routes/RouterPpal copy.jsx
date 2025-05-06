/*
  Componente que contiene:
    
    - Cabecera.

    - El menú de navegacion
      - Mediante isActive puedo saber ruta seleccionada. Le aplico la clase activado y la resalto

    - Las rutas que inclucye a la ruta panel con sus subrutas

*/

// React
import React from 'react';
import {Routes, Route, Navigate, BrowserRouter, NavLink} from 'react-router-dom';

// Componentes
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Panel } from '../components/Panel';
import { Error404 } from '../components/Error404';

// Componentes subrutas del panel de control
import {InicioPanel} from '../components/panel/InicioPanel';
import {CrearArticulos} from '../components/panel/CrearArticulos';
import {GestionUsuarios} from '../components/panel/GestionUsuarios';
import {AcercaDe} from '../components/panel/AcercaDe';

// Componente ppal
export const RouterPpal = () => {
  return (
    <>
      <h1>Stack mern: Rutas</h1>
      <p>Aquí pondré el usuario registrado cuando repase los contextos</p>
      <p>Y solo se podrá ver la ruta del panel de control si estuviera registrado</p>
      
      <BrowserRouter>

        {/* Menú de navegación */}
        <nav className='navegacion'>
          <ul>

            <li> 
              <NavLink
                to = '/inicio'              
                className={({isActive}) => isActive ? 'activado': ''}
                >Inicio
              </NavLink>
            </li>

            <li>
              <NavLink
                to = '/contacto'
                className={({isActive}) => isActive ? 'activado': ''}
                >Contacto
              </NavLink>
            </li>

            <li>
              <NavLink
                to = '/articulos'
                className={({isActive}) => isActive ? 'activado': ''}
                >Artículos
              </NavLink>
            </li>    

            <li>
              <NavLink
                to = '/panel'
                className={({isActive}) => isActive ? 'activado': ''}
                >Panel de control
              </NavLink>
            </li>       

          </ul>
        </nav>

        {/* Rutas */}
        <Routes>

          {/* Los parámetros nombre y apellido son opcionales */}
          <Route index element={<Inicio />} />
          <Route path='/' element={<Inicio />} />
          <Route path='/inicio/:nombre/:apellido' element={<Inicio />} />
          <Route path='/inicio/:nombre' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />

          {/* ruta para el panel de control y sus subrutas */}
          <Route path='panel/*' element={<Panel />}>
            <Route index element={<InicioPanel/>} />
            <Route path='inicio' element={<InicioPanel/>} />
            <Route path='gestion-usuarios' element={<GestionUsuarios/>} />
            <Route path='crear-articulos' element={<CrearArticulos/>} />
            <Route path='acerca-de' element={<AcercaDe/>} /> 
          </Route>

          {/* resto de rutas */}
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/articulos' element={<Articulos />} />

          {/* Ruta que redirige a personas añadiendo nombre y apellido */}
          <Route path='/redirigir' element={<Navigate to='/inicio/Oscar/Fernandez' />} /> 

          {/* Las rutas no comprendidas en las anteriores ejecutarán el componente Error404 */}
          <Route path='*' element={<Error404 />}/>

        </Routes>
      </BrowserRouter>
    </>
    
  )
}
