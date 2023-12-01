/*
  APLICACION TIENDA REACT
    - Uso react, react router y styled components
    

*/

// React y react router
import React from 'react';
import {NavLink,Route, Routes} from 'react-router-dom';

// Elementos
import Contenedor from './elementos/Contenedor';
import Menu from './elementos/Menu';

// Componentes
import PaginaInicio from './componentes/paginas/Inicio';
import PaginaBlog from './componentes/paginas/Blog';
import PaginaTienda from './componentes/paginas/Tienda';
import PaginaError404 from './componentes/paginas/Error404';

const App = () => {
  return (
    <Contenedor>
        <h1>Tienda: Práctica para </h1>

      {/* Menú de navegacion */}
      <Menu>
        <NavLink to = '/'>Inicio</NavLink>
        <NavLink to ='/blog'>Blog</NavLink>
        <NavLink to = '/tienda'>Tienda</NavLink>
      </Menu>

      {/* La parte principal ocupará dos columnas */}
      <main>

        {/* Rutas hacia las paginas principales */}
        <Routes>
          <Route path='*' element={<PaginaError404 />} />      
          <Route path='/' element={<PaginaInicio/>} />
          <Route path='/blog' element={<PaginaBlog />} />
          <Route path='/tienda' element={<PaginaTienda />} />          
        </Routes>

      </main>

      {/* La tercera columna la ocupara el aside */}
      <aside>
        <h3>Sidebar</h3>
      </aside>

    </Contenedor>


  );
}
export default App;