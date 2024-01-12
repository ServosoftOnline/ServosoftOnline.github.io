/*
  APLICACION DE GASTOS;

    - Aplicación mas completa del curso.
    - Empiezo su desarrollo el dia 8 de enero de 2024
    - Ha sido creada en vite
    - Uso las siguientes librerias:
      - react router
      - styled components
      - webfontloader, que permite instalar fuentes de google fonts
      - react helmet, que permite entre otras cosas definir el favicon

    - Pasos a seguir para crear una app:

      1.- Crear las rutas
        1.- Crear el elemento contenedor que contendrá a la app
        2.- Creo los componentes que contendrán a cada pagina
        3.- Importar la fuente de google fonts que valla a usar
        4.- Importar BrowserRouter, Route, Routes para usar react router
        5.- Encierro todo en BrowserRouter

        6.- Creo cada una de las rutas englobadas en Routes
          - Las rutas tendrán el path que será la web que debe escribirse en el navegador y cargará el componente asociado
          - Creo si hubiera alguna ruta dinámica
          - Creo la ruta para el error 404 si pusieran una web inexistente en el navegador
          - Creo la ruta para el directorio raiz. En este caso el componente ppal

        7.- Pruebo cada una de las rutas escribiendolas en el navegador y viendo si se carga el componente adecuado

      2.- Creo el favicon y el titulo
      3.- Añado el fondo

      4.- Creo las cabeceras
        4.1.- Creo todos los estilos en un solo elemento llamado header
        4.2.- Creo el elemento Boton.jsx.
          - Le aplicaré el componente Link de react router.
            - Los botones a los que le asigne este elemento podrán desplazarse por las paginas indicadas en los path de las rutas
        4.3.- Al crear todas las cabeceras de las paginas iré añadiendo los estilos de header y de los botones


      
        

*/

// React y react router
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Helmet
import {Helmet} from "react-helmet"
import favicon from './assets/logo.png'

// Elementos
import Contenedor from "./elementos/Contenedor";
import Fondo from './elementos/Fondo.jsx';

// Componentes
import EditarGastos from './componentes/EditarGastos.jsx'
import GastosPorCategoria from './componentes/GastosPorCategoria.jsx'
import InicioSesion from './componentes/InicioSesion.jsx'
import ListaDeGastos from './componentes/ListaDeGastos.jsx'
import RegistroUsuarios from './componentes/RegistroUsuarios.jsx'
import Error404 from './componentes/Error404.jsx'

// WebFontLoader. Descarga fuente de google fonts
import WebFont from 'webfontloader';
WebFont.load({
  google: {
  families: ['Work Sans:400,500,700', 'sans-serif']
}
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* Helmet */}
    <Helmet>
      <title>Gastos</title>
      <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
    </Helmet>

    {/* Fondo */}
    <Fondo/>
    
    {/* react router */}
    <BrowserRouter>
      <Contenedor>

        <Routes>

          {/* Rutas hacia las paginas principales */}
          <Route path='/iniciar-sesion' element={<InicioSesion />} />
          <Route path='/crear-cuenta' element={<RegistroUsuarios />} />
          <Route path='/categorias' element={<GastosPorCategoria />} />
          <Route path='/lista' element={<ListaDeGastos />} />

          {/* En el path de editar le pasaré un id */}
          <Route path='/editar/id:' element={<EditarGastos />} />

          {/* Error 404 */}
          <Route path='*' element={<Error404/>} />

          {/* La ruta cuyo path sea la raiz cargaré el componente ppal */}
          <Route path='/' element={<App />} />

        </Routes>
        
      </Contenedor>      
    </BrowserRouter>
  </React.StrictMode>,
);

