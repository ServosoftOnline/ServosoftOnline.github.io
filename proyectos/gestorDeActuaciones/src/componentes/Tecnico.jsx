/*
  COMPONENTE PRINCIPAL PARA TECNICOS

    - Contiene:
      - Sus rutas importadas de forma dinámica
      - El proveedor del contexto para controlar cuando inice los desplazamientos los técnicos
      - La barra de productividad 

*/

// React
import React, {Suspense, lazy} from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

// Elementos
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from '../elementos/ElementosDeHeader';
import Boton from "../elementos/Boton";
import BtnSalir from '../elementos/BtnSalir';

// Proveedores de contextos
import {DesplazamientoProvider} from './../contextos/DesplazamientoContext.jsx'

// Elementos para las rutas importados de forma dinámica
const AgendaTecnico = lazy(() => import('./AgendaTecnico'));
const ProductividadTecnico = lazy(() => import('./ProductividadTecnico'));
const FormularioEditarActuacionTecnico = lazy(() => import('./FormularioEditarActuacionTecnico'));

// Componentes
import BarraProductividad from "./../componentes/BarraProductividad";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// Mi componente
const Tecnico = () => {
  const [nombre] = useObtenerNombreDeUnUsuario();
  
  return (
    <>

      {/* Proporciono contexto a Helmet */}
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

      {/* Proporciono contexto de desplazamientos para tecnicos */}
      <DesplazamientoProvider>

        {/* Rutas declaradas de forma dinámica*/}
        <Suspense>
          <Routes>

            {/* Rutas estáticas */}
            <Route path="agenda-tecnico" element={<AgendaTecnico nombre={nombre} />}/>
            <Route path="productividad-tecnico" element={<ProductividadTecnico />}/>
            
            {/* Rutas dinamicas */}          
            <Route path="editar-actuacion/:idActuacion" element={<FormularioEditarActuacionTecnico />}/>
          </Routes>
        </Suspense>

      </DesplazamientoProvider>

      {/* Barra de productividad */}
      <BarraProductividad />
      
    </>     
            
  );
}
 
export default Tecnico;
