/*
  APLICACION TIENDA REACT
    - Uso react, react router y styled components. Esto último añadido en cada uno de loselementos
    - Importo los elementos y componentes que valla a usar

    - Creo el componente ppal App.js
      - Simulando una base de datos, creo el array productos que contiene un objeto por cada producto
        - Este array o llamada a base de datos se crea en el componente ppal
          - Y despues se lo pasaría en las rutas como si fuera una propiedad al componente que lo necesitara
          - En nuestro caso se lo paso al componente PaginaTienda      
    

*/

// React y react router
import React from 'react';
import {NavLink,Route, Routes} from 'react-router-dom';

// Elementos
import Contenedor from './elementos/Contenedor';
import Menu from './elementos/Menu';

// Componentes
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Tienda from './componentes/Tienda';
import Error404 from './componentes/Error404';


const App = () => {

  const productos = [
    {id: 1, nombre: 'Producto1'},
    {id: 2, nombre: 'Producto2'},
    {id: 3, nombre: 'Producto3'},
    {id: 4, nombre: 'Producto4'}
  ];

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
          <Route path='*' element={<Error404 />} />      
          <Route path='/' element={<Inicio/>} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/tienda' element={<Tienda productos={productos} />} />          
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