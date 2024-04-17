/*
  COMPONENTE ADMINISTRADOR:
    - Contiene las rutas para los administradores
    - Obtiene el nombre del usuario para mostrarlo en la cabecera
    - Muestra los botones que actuan como link para desplazarse por las diferentes rutas
*/

// React
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

// Elementos
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from '../elementos/ElementosDeHeader';
import Boton from '../elementos/Boton';
import BtnSalir from '../elementos/BtnSalir';

// Elementos para las rutas
import CrearUsuario from './CrearUsuario';
import Produccion from './Produccion';
import CalendarioAusencias from './CalendarioAusencias';
import ReporteGeneral from './ReporteGeneral';

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// Mi componente
const Administrador = () => {

  // Llamada a hooks
  const [nombre] = useObtenerNombreDeUnUsuario();
  
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
            <Titulo>{nombre} (Administrador)</Titulo>
            <ContenedorBotones>              
              <Boton $paraAdministrador to = "crear-usuario">Crear usuario</Boton>                     
              <Boton $paraAdministrador to = "produccion">Producción</Boton>     
              <Boton $paraAdministrador to = "calendario-ausencias">Ausencias</Boton>     
              <Boton $paraAdministrador to = "reporte-general">Reporte general</Boton>             
              <Boton $paraCoordinador to = '/coordinador/sin-asignar'>Coordinación</Boton>
              <BtnSalir />
            </ContenedorBotones>
        </ContenedorHeader>
      </Header>

      {/* Rutas */}
      <Routes>
          <Route path="crear-usuario" element={<CrearUsuario />}/>
          <Route path="produccion" element={<Produccion />}/>
          <Route path="calendario-ausencias" element={<CalendarioAusencias />}/>
          <Route path="reporte-general" element={<ReporteGeneral/>}/>
        </Routes> 
    </>
           
  );
}
 
export default Administrador ;
