/*
  COMPONENTE PRINCIPAL PARA TECNICOS
  <ContenedorFiltros>
          <h2>Calendario fecha inicial de muestra de actividades</h2>
          <h2>Calendario fecha final de muestra de activdades</h2>
        </ContenedorFiltros>
          <p>Mostraré por defecto las actividades del día actual. Si selecciono alguna fecha en los calendarios las cambiaré por las actividades seleccionadas en el intervalo de las fechas</p>
          <p>En las actividades podré cambiar su estado de avance: Pendiente de iniciar, en camino, iniciar trabajo, trabajo finalizado, orden con incidencia o falta de tiempo</p>
          <p>Registraré la hora al iniciar el trabajo, al finalizarlo o al asignarle orden con incidencia</p>
          <p>Las actividades tendrán un boton para editarlas y rellenar el resto de la informacion</p>
          <p>Si eres administrador o coordinador podrás ver todas las actividades del dia de los tecnicos y poder editarlas???????</p>

*/

// React
import React, {useContext, Suspense, lazy} from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

// Elementos
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from '../elementos/ElementosDeHeader';
import Boton from "../elementos/Boton";
import BtnSalir from '../elementos/BtnSalir';

// Elementos para las rutas importados de forma dinámica
const AgendaTecnico = lazy(() => import('./AgendaTecnico'));
const ProductividadTecnico = lazy(() => import('./ProductividadTecnico'));
const EditarActuacionTecnico = lazy(() => import('./EditarActuacionTecnico'));

// Componentes
import BarraProductividad from "./../componentes/BarraProductividad";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// Mi componente
const Tecnico = () => {
  const [nombre] = useObtenerNombreDeUnUsuario();
  
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Técnico</title>
        </Helmet>
      </HelmetProvider> 
        
      {/* Cabecera */}
      <Header>
        <ContenedorHeader>
          <Titulo>{nombre}</Titulo>

          <ContenedorBotones>
            <Boton $paraTecnico to = "agenda-tecnico">Mi agenda</Boton>
            <Boton $paraTecnico to = "productividad-tecnico">Productividad</Boton> 
            <BtnSalir />
          </ContenedorBotones>

        </ContenedorHeader>
      </Header>  

      {/* Rutas declaradas de forma dinámica*/}
      <Suspense>
        <Routes>

          {/* Rutas estáticas */}
          <Route path="agenda-tecnico" element={<AgendaTecnico nombre={nombre} />}/>
          <Route path="productividad-tecnico" element={<ProductividadTecnico />}/>
          
          {/* Rutas dinamicas */}          
          <Route path="editar-actuacion/:idActuacion" element={<EditarActuacionTecnico />}/>
        </Routes>
      </Suspense> 

      {/* Barra de productividad */}
      <BarraProductividad />
      
    </>     
            
  );
}
 
export default Tecnico;
