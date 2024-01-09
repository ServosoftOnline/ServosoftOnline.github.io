import React from "react";
import { Route, Routes } from "react-router-dom";

// Elementos
import Contenedor from "./elementos/Contenedor";

// Componentes
// import App from './../App.jsx';
import EditarGastos from "./componentes/EditarGastos";
import GastosPorCategoria from "./componentes/GastosPorCategoria";
import InicioSesion from "./componentes/InicioSesion";
import ListaDeGastos from "./componentes/ListaDeGastos";
import RegistroUsuarios from "./componentes/RegistroUsuarios";

const App = () => {
  return (
    <Contenedor>
      <Routes>

        {/* Rutas hacia las paginas principales */}
        <Route path='/iniciar-sesion' element={<InicioSesion />} />
        <Route path='/editar-gastos/id:' element={<EditarGastos />} />
        <Route path='/gastos-por-categoria' element={<GastosPorCategoria />} />
        <Route path='/lista-de-gastos' element={<ListaDeGastos />} />
        <Route path='/gastos-por-categoria' element={<GastosPorCategoria />} />
        <Route path='/registro-usuarios' element={<RegistroUsuarios />} />
        <Route path='/' element={<App />} />


      </Routes>
      <h1>Hola mundo!!</h1>
      
    </Contenedor>    
   );
}
 
export default App;