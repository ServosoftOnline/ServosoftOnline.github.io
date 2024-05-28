/*
  COMPONENTE PRINCIPAL PARA TECNICOS

    - Contiene:
      - Sus rutas importadas de forma dinámica
      - Su barra de productividad 
      - Los botones de agenda, productividad e iniciar u finalizar jornada. Estos últimos alterarán.
      - El inicio de la jornada laboral está almacenado en un contexto

*/

// React
import React, {Suspense, lazy, useContext} from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

// Elementos
import  {Header, ContenedorTitulos, ParrafoVerde, ParrafoRojo, Titulo, ContenedorBotones,
        ContenedorHeader} from '../elementos/ElementosDeHeader';
        
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

// Contexto
import {InicioJornadaContext} from './../contextos/InicioJornadaContext';


// Mi componente
const Tecnico = () => {

  // Obtencion de informacion desde los hooks  
  const [idRoles] = useObtenerIdRolesDeUnUsuario();    
  const [nombre] = useObtenerNombreDeUnUsuario();   

  // Obtengo desde el contexto el inicio de la jornada
  const {inicioJornada, establecerInicioDeJornada} = useContext(InicioJornadaContext); 

  // Funciones
  const LlamaAIniciarJornada = async (idRoles) => {
    
    try {
      await iniciarJornada(idRoles);    
      establecerInicioDeJornada(true);      

    }catch (error) {
      console.log(error);
    }

  }

  const LlamaAFinalizarJornada = async (idRoles) => {
    
    try {
      await finalizarJornada(idRoles);
      establecerInicioDeJornada(false);    

    }catch (error) {
      console.log(error);
    }

  }

  return (
    <>

      {/* Proporciono contexto a Helmet */}
      <HelmetProvider>
        <Helmet>
          <title>Técnico: {nombre}</title>
        </Helmet>
      </HelmetProvider> 
      
      {/* Cabecera */}
      <Header>
        <ContenedorHeader>

          <ContenedorTitulos>
            <Titulo> {nombre} </Titulo>
            {inicioJornada ? <ParrafoVerde>( Jornada inicializada )</ParrafoVerde> : <ParrafoRojo>( Jornada finalizada )</ParrafoRojo>}
          </ContenedorTitulos>

          <ContenedorBotones>

            {/* Botones que actuan por defecto como links */}
            <Boton $paraTecnico to = "agenda-tecnico">Mi agenda</Boton>
            <Boton $paraTecnico to = "productividad-tecnico">Productividad</Boton> 

            {/* Mostrará los botones para iniciar o finalizar jornada dependiendo si inició o no inició la jornada */}                        
            {inicioJornada ?
                <Boton onClick={() => LlamaAFinalizarJornada(idRoles)}>Finalizar jornada </Boton>
              : 
                <Boton onClick={() => LlamaAIniciarJornada(idRoles)}>Iniciar jornada </Boton> }

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
