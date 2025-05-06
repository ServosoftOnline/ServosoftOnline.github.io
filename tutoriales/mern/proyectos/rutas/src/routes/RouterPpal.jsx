/*
  Componente que contiene:
  
    - Cabecera
    - Usuario registrado que solo se mostrará si existiera

    - Las rutas
    - La barra de navegacion ppal. 
      - En los menus de navegacion uso isActive para saber la ruta seleccionada.
      - Le aplico la clase activado y la resalto
      - Solo se mostrará el panel de control para usuarios registrados
      
*/

// React
import React, {useState} from 'react';
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

  // Estados que contendrán el nombre y apellido del usuario
  const [nombre, setNombre] = useState('Usuario');
  const [apellido, setApellido] = useState('sin registrar');

  return (
    <>
      {/* Cabecera */}
      <h1>Stack mern: Rutas</h1>

      {/* Usuario registrado que solo se mostrará si existiera */}
      {(nombre!='Usuario' && apellido!='sin registrar') && 
        <div className='usuario'>
          <p>Usuario registrado: {nombre} {apellido}</p>
          <button className='botton' onClick={() => {setNombre('usuario'); setApellido('sin registrar')}}>
            Salir
          </button>
        </div>
      }

      {/* Rutas */}
      <BrowserRouter>

        {/* Menú de navegación usuarios sin registrar */}
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

            {/* Solo mostrara el link para el panel si el usuario estuviera registrado    */}
            {nombre !='Usuario' && apellido!='sin registrar' &&
            <li>
              <NavLink
                to = '/panel'
                className={({isActive}) => isActive ? 'activado': ''}
                >Panel de control
              </NavLink>
            </li>}

          </ul>
        </nav>

        {/* Rutas */}
        <Routes>

          {/* Rutas para todos los usuarios. Los parámetros nombre y apellido son opcionales */}
          <Route 
            index
            element={<Inicio setNombre={setNombre} setApellido={setApellido} />}
          />

          <Route
            path='/'
            element={<Inicio setNombre={setNombre} setApellido={setApellido} />} 
          />

          <Route
            path='/inicio/:nombre/:apellido'
            element={<Inicio setNombre={setNombre} setApellido={setApellido} />}
          />

          <Route
            path='/inicio/:nombre'
            element={<Inicio setNombre={setNombre} setApellido={setApellido} />} 
          />

          <Route
            path='/inicio'
            element={<Inicio setNombre={setNombre} setApellido={setApellido} />} 
          />

          <Route
            path='/contacto'
            element={<Contacto />} 
          />

          <Route
            path='/articulos'
            element={<Articulos />} 
          />

          {/* Ruta que redirige a personas añadiendo nombre y apellido */}
          <Route path='/redirigir' element={<Navigate to='/inicio/Oscar/Fernandez' />} /> 

          {/* ruta para el panel de control y sus subrutas. Solo para usuarios registrados */}
          <Route path='panel/*' element={<Panel />}>
            <Route index element={<InicioPanel/>} />
            <Route path='inicio' element={<InicioPanel/>} />
            <Route path='gestion-usuarios' element={<GestionUsuarios/>} />
            <Route path='crear-articulos' element={<CrearArticulos/>} />
            <Route path='acerca-de' element={<AcercaDe/>} /> 
          </Route>


          {/* Las rutas no comprendidas en las anteriores ejecutarán el componente Error404 */}
          <Route path='*' element={<Error404 />}/>

        </Routes>
      </BrowserRouter>
    </>
    
  )
}
