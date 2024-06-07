/*
  COMPONENTE PRINCIPAL PARA TECNICOS

    - Contiene:
      - Sus rutas importadas de forma dinámica
      - Su barra de productividad 
      - Los botones de agenda, productividad e iniciar u finalizar jornada. Estos últimos alterarán.
      - El inicio de la jornada laboral está almacenado en un contexto

*/

// React
import React, {useState, Suspense, lazy, useContext} from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

// Elementos
import  {Header, ContenedorTitulos, ContenedorTituloJornada, ParrafoVerde, ParrafoRojo, Titulo, ContenedorBotones, Links,
        EnlaceIniciarJornada, EnlaceFinalizarJornada, ContenedorHeader,
        TodosLosBotones} from '../elementos/ElementosDeHeader';
        
import Boton from "../elementos/Boton";
import BtnSalir from '../elementos/BtnSalir';

// Elementos para las rutas importados de forma dinámica
const AgendaTecnico = lazy(() => import('./AgendaTecnico'));
const ProductividadTecnico = lazy(() => import('./ProductividadTecnico'));
const FormularioEditarActuacionTecnico = lazy(() => import('./FormularioEditarActuacionTecnico'));

// SVG
import IconoCerrar from './../assets/cerrar.svg?react';
import IconoMenu from './../assets/menuIcon.svg?react';

// Componentes
import BarraProductividad from "./BarraProductividad";

// Firebase
import iniciarJornada from "../firebase/iniciarJornada";
import finalizarJornada from "../firebase/finalizarJornada";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";
import useObtenerIdRolesDeUnUsuario from "../hooks/useObtenerIdRolesDeUnUsuario";

// Contexto
import {InicioJornadaContext} from '../contextos/InicioJornadaContext';

// Funciones importadas
import anchoDePantalla from '../funciones/anchoDePantalla';

// Mi componente
const Tecnico = () => {

  // Obtencion de informacion desde los hooks  
  const [idRoles] = useObtenerIdRolesDeUnUsuario();    
  const [nombre] = useObtenerNombreDeUnUsuario();   

  // Obtengo desde el contexto el inicio de la jornada
  const {inicioJornada, establecerInicioDeJornada} = useContext(InicioJornadaContext); 

  // Obtengo el ancho de pantalla actual y el ancho máximo para considerarlo una pantalla de un smartphone
  const {anchoActual, anchoMaximo} = anchoDePantalla(); 

  // Estados
  const [mostrarLinks, setMostrarLinks] = useState(false);

  // Funciones de mi componente
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

          {/* Mostraré el contenedor de los titulos o los links en vertical en los smartphones */}
          {!mostrarLinks ? 

            <ContenedorTitulos>

              {anchoActual <= anchoMaximo && <IconoMenu onClick={() => setMostrarLinks(!mostrarLinks)}/>}

              <ContenedorTituloJornada>
                <Titulo> {nombre} </Titulo>
                {inicioJornada ? 
                    <ParrafoVerde>( Jornada iniciada )</ParrafoVerde>
                  : 
                    <ParrafoRojo>( Jornada finalizada )</ParrafoRojo>
                }
              </ContenedorTituloJornada>
              
              {anchoActual <= anchoMaximo && <BtnSalir /> }                              

            </ContenedorTitulos>

            :

            <Links>
            
              <IconoCerrar onClick={() => setMostrarLinks(!mostrarLinks)}/>

              <a href="/tecnico/agenda-tecnico">Mi agenda</a>
              <a href="/tecnico/productividad-tecnico">Productividad</a>

              {inicioJornada ?

                  <EnlaceFinalizarJornada
                    onClick={() => LlamaAFinalizarJornada(idRoles)}> Finalizar jornada 
                  </EnlaceFinalizarJornada>
                : 
                  <EnlaceIniciarJornada
                    onClick={() => LlamaAIniciarJornada(idRoles)}>Iniciar jornada
                  </EnlaceIniciarJornada>
              }

            </Links>

          }

          {/* Todos los botones se ocultarán en smartphones. Esto lo gestione mediante media queries en css */}
          <TodosLosBotones>

            <ContenedorBotones>

              {/* Botones que actuan por defecto como links */}              
              <Boton $paraTecnico $mediano to = "agenda-tecnico">Mi agenda</Boton>
              <Boton $paraTecnico $mediano to = "productividad-tecnico">Productividad</Boton> 

              {/* Mostrará los botones para iniciar o finalizar jornada dependiendo si inició o no inició la jornada */}                        
              {inicioJornada ?
                  <Boton $mediano onClick={() => LlamaAFinalizarJornada(idRoles)}>Fin de jornada </Boton>
                : 
                  <Boton $mediano onClick={() => LlamaAIniciarJornada(idRoles)}>Iniciar jornada </Boton> 
              }

              {/* Boton para salir de la app */}
              <BtnSalir />

            </ContenedorBotones>

          </TodosLosBotones>

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
