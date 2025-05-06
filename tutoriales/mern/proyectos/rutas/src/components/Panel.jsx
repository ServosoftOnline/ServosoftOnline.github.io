/*
  Componente que contiene la barra de navegación del panel de control.
    - Si estuviera activo le aplico la clase activado resaltando la opción elegida
    - Cargará las subturas mediante el componente Outlet
*/
import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const Panel = () => {
  return (
    <div>

        {/* Barra de navegacion del panel */}
        <nav className='navegacion panel'>
            <ul>

              <li>                  
                <NavLink
                  to = '/panel/inicio'              
                  className={({isActive}) => isActive ? 'activado': ''}
                  >Inicio panel
                </NavLink>
              </li>

              <li>                  
                <NavLink
                  to = '/panel/gestion-usuarios'              
                  className={({isActive}) => isActive ? 'activado': ''}
                  >Gestión de usuarios
                </NavLink>
              </li>

              <li>                  
                <NavLink
                  to = '/panel/crear-articulos'              
                  className={({isActive}) => isActive ? 'activado': ''}
                  >Crear artículos
                </NavLink>                  
              </li>

              <li>                  
                <NavLink
                  to = '/panel/acerca-de'              
                  className={({isActive}) => isActive ? 'activado': ''}
                  >Acerca de
                </NavLink>                                    
              </li>
              
            </ul>
        </nav>

        {/* Aquí se cargaran los componentes de las subrutas vinculadas al panel*/}
        <div>
          <Outlet/>
        </div>
        
    </div>
  )
}
