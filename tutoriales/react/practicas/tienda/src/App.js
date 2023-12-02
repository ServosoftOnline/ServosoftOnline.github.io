/*
  APLICACION TIENDA REACT
    - Uso react, react router y styled components. Esto último añadido en cada uno de loselementos
    - Importo los elementos y componentes que valla a usar

    - Creo el componente ppal App.js
      - Simulando una base de datos, creo el array productos que contiene un objeto por cada producto
      - Este array o llamada a base de datos se crea en el componente ppal
      - Y despues se lo pasaría en las rutas como si fuera una propiedad al componente que lo necesitara
      - En nuestro caso se lo paso al componente Tienda. Tienda lo obtiene y se lo pasa al componente Productos
      - Esto se llama prop driling y es engorroso
        - Para evitar esto podríamos usar la libreria Redux
        - O usar context API

      - La tercera columna mostrará el carrito
        - Muestra las diferentes cantidades compradas de los diferentes productos



    

*/

// React y react router
import {React, useState} from 'react';
import {NavLink,Route, Routes} from 'react-router-dom';

// Elementos
import Contenedor from './elementos/Contenedor';
import Menu from './elementos/Menu';

// Componentes
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Tienda from './componentes/Tienda';
import Carrito from './componentes/Carrito';
import Error404 from './componentes/Error404';


const App = () => {

  const productos = [
    {id: 1, nombre: 'Producto1'},
    {id: 2, nombre: 'Producto2'},
    {id: 3, nombre: 'Producto3'},
    {id: 4, nombre: 'Producto4'}
  ];

  const [carrito, cambiarCarrito] = useState([
    {id:1, cantidad:2, nombre:'Producto1'},
    {id:2, cantidad:4, nombre:'Producto2'},
    {id:3, cantidad:1, nombre:'Producto3'},
    {id:4, cantidad:3, nombre:'Producto4'}
]);

  return (
    <Contenedor>
        <h1>Tienda: Práctica para </h1>

      {/* Menú de navegacion */}
      <Menu>
        <NavLink to = '/'>Inicio</NavLink>
        <NavLink to ='/blog'>Blog</NavLink>
        <NavLink to = '/tienda'>Tienda</NavLink>
      </Menu>

      {/* La parte principal ocupará las dos primeras columnas */}
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
        
        <Carrito carrito={carrito}/>
      </aside>

    </Contenedor>


  );
}
export default App;