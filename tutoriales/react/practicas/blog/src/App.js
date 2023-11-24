/*
  CONTIENE LA EXTRUCTURA QUE DEBE TENER UNA APP PARA USAR REACT ROUTER

    - Una barra de navegación con los enlaces entre las etiquetas header
    - Las paginas entre las etiquetas main introducidas en etiquetas div

    - Debo importar los siguientes componentes y usarlos:

      - El componente BrowswerRouter
        - Introduzco toda la aplicación dentro del componente
        - Tambien podría importar el componente en index.js e introducir el componente App en su interior

      - El componente NavLink
        - Los uso como etiquetas en los enlaces sustituyendo a la etiqueta <a>
        - Sustituyo los href por to
        - Al usarlo la barra de dirección del navegador cambia y mostraría las rutas escritas despues del to

      - El componente Route
        - Lo uso para crear rutas
        - Se cierra por sí mismo

        - Tendrá los atributos:
          - element que contendrá código JSX o componentes
            - En este caso contendrá componentes que contendrán el código JSX con las etiquetas div que delimitan una pagina
          - path. Le añado la ruta que indiqué en to

      - El componente Routers. Es un contendor de todas las rutas

*/

import React from 'react';
// import styled from 'styled-components';
// import {useState} from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import PaginaInicio from './componentes/PaginaInicio';
import PaginaBlog from './componentes/PaginaBlog';
import PaginaAcercaDe from './componentes/PaginaAcercaDe';


const App = () => {
  return (

    <BrowserRouter>

      <div>

        <h1>Blog: Práctica para usar react router</h1>

        {/* Encabezado */}
        <header>

          {/* Barra de navegacion */}
          <nav>
            <NavLink to ='/'>Inicio</NavLink>
            <NavLink to ='/blog'>Blog</NavLink>
            <NavLink to ='/acerca-de'>Acerca de ...</NavLink>
          </nav>

        </header>

        {/* Parte ppal */}
        <main>

          <Routes>

            {/* Ruta pagina de inicio */}
            <Route path='/' element={<PaginaInicio/>} />
          
            {/* Ruta pagina de Blog */}
            <Route path='/blog' element={<PaginaBlog />} />
          
            {/* Ruta página de Acerca de */}
            <Route path='/acerca-de' element={<PaginaAcercaDe />} />          

          </Routes>
          
        </main>      

      </div>

    </BrowserRouter>  

  );
}
export default App;