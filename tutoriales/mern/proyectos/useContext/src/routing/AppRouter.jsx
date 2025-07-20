/*

*/

// React
import React, { useContext } from 'react';
import viteLogo from '/vite.svg'

// Componentes importados
import { Routes, Route, NavLink, Link, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { AcercaDe } from '../components/AcercaDe';
import { Login } from '../components/Login';
import { Error404 } from '../components/Error404';

// Importo el contexto del usuario
import { UsuarioContext } from '../context/usuarioContext';

// Componente
export const AppRouter = () => {    

    // Obtengo el nombre de usuario desde el contexto
    const {usuario, setUsuario} = useContext(UsuarioContext);    

    // Renderizo
    return (
        <div className='cabecera'>
            
            <BrowserRouter>

                {/* Navegación */}            
                <nav className='navegacion'>
                    <div className="nav-container">

                        {/* logo */}
                        <div className="logo-container">
                            <img src={viteLogo} className='logo' alt="Vite logo" />
                            <div className='proyecto'>
                                <h2>Stack mern: Rutas usando dos contextos: </h2>
                                <h2>El nombre del usuario e información general </h2>
                                <h2>El usuario queda almacenado en localStorage</h2>
                            </div>
                            
                        </div>

                        {/* Lista con los elementos de navegacion */}
                        <ul className="nav-links">

                            <li>
                                <NavLink
                                    to='/inicio'
                                    className={({ isActive }) => isActive ? 'activado' : ''}>
                                    Inicio
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to='/articulos'
                                    className={({ isActive }) => isActive ? 'activado' : ''}>
                                    Artículos
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to='/contacto'
                                    className={({ isActive }) => isActive ? 'activado' : ''}>
                                    Contacto
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to='/acerca-de' 
                                    className={({ isActive }) => isActive ? 'activado' : ''}>
                                    Acerca de
                                </NavLink>
                            </li>
                            
                            {/* 
                            Si no hay usuario aparece el link al login.
                            si hay usuario lo muestra y muestra un enlace a ningun sitio que permite
                            cerrar la sesion */}

                            <li>
                                {usuario == null ?
                                    <NavLink
                                        to='/login'
                                        className={({ isActive }) => isActive ? 'activado' : ''}>
                                        Idéntificate
                                    </NavLink>
                                    :
                                    <div className='usuario-registrado'>
                                        <p>Usuario: {usuario}</p>
                                        <a href='#'onClick={() => setUsuario(null)}>Cerrar sesion</a>
                                    </div>                                
                                }
                                
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
