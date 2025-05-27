/*

*/

// React
import React from 'react';
import viteLogo from '/vite.svg'

// Componentes importados
import { Routes, Route, NavLink, Link, BrowserRouter } from 'react-router-dom';
import { Inicio } from './../components/Inicio';
import { Articulos } from './../components/Articulos';
import { Contacto } from './../components/Contacto';
import { AcercaDe } from './../components/AcercaDe';
import { Login } from './../components/Login';
import { Error404 } from './../components/Error404';

// Componente
export const AppRouter = () => {
  return (
    <div className='cabecera'>
        
        <BrowserRouter>

            {/* Navegación */}            
            <nav className='navegacion'>
                <div className="nav-container">

                    {/* logo */}
                    <div className="logo-container">
                        <img src={viteLogo} className='logo' alt="Vite logo" />
                        <h2>Stack mern: Rutas usando contexto</h2>
                    </div>

                    {/* Lista con los elementos de navegacion */}
                    <ul className="nav-links">

                        <li>
                            <NavLink to='/inicio' className={({ isActive }) => isActive ? 'activado' : ''}>Inicio</NavLink>
                        </li>

                        <li>
                            <NavLink to='/articulos' className={({ isActive }) => isActive ? 'activado' : ''}>Artículos</NavLink>
                        </li>

                        <li>
                            <NavLink to='/contacto' className={({ isActive }) => isActive ? 'activado' : ''}>Contacto</NavLink>
                        </li>

                        <li>
                            <NavLink to='/acerca-de' className={({ isActive }) => isActive ? 'activado' : ''}>Acerca de</NavLink>
                        </li>

                        <li>
                            <NavLink to='/login' className={({ isActive }) => isActive ? 'activado' : ''}>Login</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
            
            {/* Rutas */}
            <Routes>

                <Route path='/' element={<Inicio/>}/>
                <Route path='/inicio' element={<Inicio/>}/>                
                <Route path='/articulos' element={<Articulos/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/acerca-de' element={<AcercaDe/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<Error404 />}/>

            </Routes>

        </BrowserRouter>
       
    </div>
  )
}
