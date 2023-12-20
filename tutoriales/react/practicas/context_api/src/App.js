/*
  PRACTICA: USO DE CONTEXT API

    - Modificará el tamaño de la fuentes y centrará o alineará la pagina a izq o derecha
    - Modifico la practica del blog
    - Uso react router, styled componentes y CONTEXT API para establecer estados globales

    - CONTEXT API:
      - Es nuevo
      - Viene ya instalado con react. No es necesario instalar ninguna libreria

    
*/

// React router
import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';


// Styled components
import ContenedorPrincipal from './elementos/ContenedorPrincipal';
import Titulo from './elementos/Titulo';
import ContenedorHeader from './elementos/ContenedorHeader';
import Menu from './elementos/Menu';
import Main from './elementos/Main';

// Páginas
import PaginaInicio from './componentes/PaginaInicio';
import PaginaBlog from './componentes/PaginaBlog';
import PaginaAcercaDe from './componentes/PaginaAcercaDe';
import Post from './componentes/Post';
import PaginaError404 from './componentes/PaginaError404';


const App = () => {
  return (

    <BrowserRouter>
      <ContenedorPrincipal>

        <Titulo>Blog: Práctica para usar CONTEXT API</Titulo>
        <ContenedorHeader>

          {/* Barra de navegacion */}
          <Menu>
            <NavLink to ='/'>Inicio</NavLink>
            <NavLink to ='/blog'>Blog</NavLink>
            <NavLink to ='/acerca-de'>Acerca de ...</NavLink>
          </Menu>

        </ContenedorHeader>

        <Main>
          
          <Routes>
            
            {/* Rutas hacia las paginas principales */}
            <Route path='/' component={<PaginaInicio/>} />
            <Route path='/blog' component={<PaginaBlog />} />
            <Route path='/acerca-de' component={<PaginaAcercaDe />} />

            {/* Rutas hacia los post. ruta dinámica a partir de :id */}
            <Route path='/post/:id' component={<Post />} />

            {/* Ruta hacia la pagina error 404 */}
            <Route path='*' component={<PaginaError404 />} />

          </Routes>
          
        </Main>

        </ContenedorPrincipal>
    </BrowserRouter>  

  );
}
export default App;