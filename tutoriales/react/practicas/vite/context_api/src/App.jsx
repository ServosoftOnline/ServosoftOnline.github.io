/*

  PRACTICA: USO DE CONTEXT API

    - Permite crear un estado global en nuestra aplicacion.
    - No necesitaríamos la libreria REDUX
    - Ya viene integrada en react. No es necesario instalar ninguna libreria
    - Guardare los estados globales en una carpeta llamada contextos


    - Esta aplicacion:
      - Modificaré la practica del blog
      - Usa vite, react router, styled componentes y CONTEXT API para establecer estados globales
      - Modificará el tamaño de la fuentes y centrará o alineará la pagina a izq o derecha
        - Se aplica a todas las páginas usando un estado global
        
 

*/

// importo react y los componentes que necesito de react router
import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';

// elementos creados con Styled components
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

        <Titulo>Blog: Modifico el blog para aplicar context api</Titulo>
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
            <Route path='/' element={<PaginaInicio/>} />
            <Route path='/blog' element={<PaginaBlog />} />
            <Route path='/acerca-de' element={<PaginaAcercaDe />} />

            {/* Rutas hacia los post. ruta dinámica a partir de :id */}
            <Route path='/post/:id' element={<Post />} />

            {/* Ruta hacia la pagina error 404 */}
            <Route path='*' element={<PaginaError404 />} />

          </Routes>
          
        </Main>

        </ContenedorPrincipal>
    </BrowserRouter>  

  );
}
export default App;