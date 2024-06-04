/*
  COMPONENTE ADMINISTRADOR:

    - Contiene las rutas para los administradores importadas de forma dinámica
    - Obtiene el nombre del usuario para mostrarlo en la cabecera
    - Muestra los botones que actuan como link para desplazarse por las diferentes rutas
*/

// React
import React, {useState, Suspense, lazy} from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

// Elementos
import  {Header, ContenedorHeader, ContenedorTitulos, Titulo, TodosLosBotones, ContenedorBotones,
        Links} from '../elementos/ElementosDeHeader';

import Boton from '../elementos/Boton';
import BtnSalir from '../elementos/BtnSalir';

// Elementos para las rutas importados de forma dinámica
const CrearUsuario = lazy(() => import('./CrearUsuario'));
const Produccion = lazy(() => import('./Produccion'));
const CalendarioAusencias = lazy(() => import('.//CalendarioAusencias'));
const ReporteGeneral = lazy(() => import('./ReporteGeneral'));

// SVG
import IconoCerrar from './../assets/cerrar.svg?react';
import IconoMenu from './../assets/menuIcon.svg?react';

// Funciones
import anchoDePantalla from './../funciones/anchoDePantalla';

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// Mi componente
const Administrador = () => {

  // Estados
  const [mostrarLinks, setMostrarLinks] = useState(false);

  // Llamada a hooks
  const [nombre] = useObtenerNombreDeUnUsuario();

  // Obtengo el ancho de pantalla actual y el ancho máximo para considerarlo una pantalla de un smartphone
  const {anchoActual, anchoMaximo} = anchoDePantalla();  
  
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Administrador</title>
        </Helmet>
      </HelmetProvider> 

      {/* Cabecera */}
      <Header>

          <ContenedorHeader>

            {/* Mostraré el contenedor de los titulos o los links en vertical en los smartphones */}
            {!mostrarLinks ?

              <ContenedorTitulos>

                {anchoActual <= anchoMaximo && <IconoMenu onClick={() => setMostrarLinks(!mostrarLinks)}/>}
                <Titulo> {nombre} </Titulo> 
                {anchoActual <= anchoMaximo && <BtnSalir /> }           

              </ContenedorTitulos>

              :

              // Los links comentados estarán disponibles en la version premium
              <Links>

                <IconoCerrar onClick={() => setMostrarLinks(!mostrarLinks)}/>
                <a href="/administrador/crear-usuario">Crear usuario</a>
                {/* <a href="/administrador/produccion">Producción</a> */}
                {/* <a href="/administrador/calendario-ausencias">Ausencias</a> */}
                {/* <a href="/administrador/reporte-general">Reporte general</a> */}
                <a href="/coordinador/sin-asignar">Coordinación</a>

              </Links>

            }
            
            <TodosLosBotones>

              {/* Los botones comentados estarán disponibles en la version premium */}
              <ContenedorBotones>              

                <Boton $paraAdministrador to = "crear-usuario">Crear usuario</Boton>                     
                {/* <Boton $paraAdministrador to = "produccion">Producción</Boton>      */}
                {/* <Boton $paraAdministrador to = "calendario-ausencias">Ausencias</Boton>      */}
                {/* <Boton $paraAdministrador to = "reporte-general">Reporte general</Boton>              */}
                <Boton $paraCoordinador to = '/coordinador/sin-asignar'>Coordinación</Boton>
                <BtnSalir />

              </ContenedorBotones>

            </TodosLosBotones>

        </ContenedorHeader>
      </Header>

      {/* Rutas declaradas de forma dinámica */}
      <Suspense>
        <Routes>
            <Route path="crear-usuario" element={<CrearUsuario />}/>
            <Route path="produccion" element={<Produccion />}/>
            <Route path="calendario-ausencias" element={<CalendarioAusencias />}/>
            <Route path="reporte-general" element={<ReporteGeneral/>}/>
          </Routes> 
      </Suspense>
    </>
           
  );
}
 
export default Administrador ;
