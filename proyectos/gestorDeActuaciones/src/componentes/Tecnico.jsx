/*
  COMPONENTE PRINCIPAL PARA TECNICOS

    - Contiene:
      - Sus rutas importadas de forma dinámica
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

// Elementos para las rutas importados de forma dinámica
const AgendaTecnico = lazy(() => import('./AgendaTecnico'));
const ProductividadTecnico = lazy(() => import('./ProductividadTecnico'));
const FormularioEditarActuacionTecnico = lazy(() => import('./FormularioEditarActuacionTecnico'));

// Componentes
import BarraProductividad from "./../componentes/BarraProductividad";

// Firebase
import iniciarJornada from "../firebase/iniciarJornada";
import finalizarJornada from "../firebase/finalizarJornada";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";
import useObtenerIdRolesDeUnUsuario from "../hooks/useObtenerIdRolesDeUnUsuario";
import useObtenerInicioDeJornada from "../hooks/useObtenerInicioDeJornada";


// Mi componente
const Tecnico = () => {
  const [nombre] = useObtenerNombreDeUnUsuario();
  const [idRoles] = useObtenerIdRolesDeUnUsuario();
  const [inicioJornada] = useObtenerInicioDeJornada(idRoles);
  console.log('Inicio jornada: ' + inicioJornada);

  

  // Funciones
  const LlamaAIniciarJornada = async (idRoles) => {
    console.log('Iniciando jornada');
    try {
      await iniciarJornada(idRoles);

    }catch (error) {
      console.log(error);
    }

  }

  const LlamaAFinalizarJornada = async (idRoles) => {
    console.log('Finalizando jornada');
    try {
      await finalizarJornada(idRoles);

    }catch (error) {
      console.log(error);
    }

  }


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

            {/* Botones que actuan por defecto como links */}
            <Boton $paraTecnico to = "agenda-tecnico">Mi agenda</Boton>
            <Boton $paraTecnico to = "productividad-tecnico">Productividad</Boton> 

            {/* Mostrará los botones para iniciar o finalizar jornada si no inicio la jornada o si la inicio respectivamente */}
            <Boton onClick={() => LlamaAIniciarJornada(idRoles)}>Iniciar jornada </Boton>
            <Boton onClick={() => LlamaAFinalizarJornada(idRoles)}>Finalizar jornada </Boton>
            

            {/* Boton para salir de la app */}
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
          <Route path="editar-actuacion/:idActuacion" element={<FormularioEditarActuacionTecnico />}/>
        </Routes>
      </Suspense>
      
      {/* Barra de productividad */}
      <BarraProductividad />
      
    </>     
            
  );
}
 
export default Tecnico;
