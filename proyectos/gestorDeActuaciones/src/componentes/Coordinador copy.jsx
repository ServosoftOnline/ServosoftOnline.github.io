/*
  COMPONENTE COORDINADOR:
    - Contiene las rutas para los coordinadores
    - Obtiene el nombre del usuario para mostrarlo en la cabecera
    - Obtiene el rol del usuario mediante un conexto para mostrar el enlace a administrador solo si es administrador
    - Muestra los botones que actuan como link para desplazarse por las diferentes rutas
    - 
*/

// React y react router
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from '../elementos/ElementosDeHeader';
import Boton from "../elementos/Boton";
import BtnSalir from "../elementos/BtnSalir";

// Elementos para las rutas
import SinAsignar from "./SinAsignar";
import Direccion from "./Direccion";
import Ilocalizable from "./Ilocalizable";
import Mantenimiento from "./Mantenimiento";
import FaltaCitas from "./FaltaCitas";
import Incidencias from "./Incidencias";
import Oym from "./Oym";
import Agenda from "./Agenda";
import Supervision from "./Supervision";
import InstaladosFinalizados from "./InstaladosFinalizados";


// Contexto
import { RolContext } from "../contextos/RolContext";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// El Componente
const Coordinador = () => {

  // LLamadas a los hooks
  const [nombre] = useObtenerNombreDeUnUsuario();

  // Estados
  const {rol} = useContext(RolContext);     
  
  return (
    <>

      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Planeado</title>
        </Helmet>

      </HelmetProvider>

      {/* Cabecera */}
      <Header>
        <ContenedorHeader>         
          
          <Titulo>{nombre} (Planeado)</Titulo>
          <ContenedorBotones>
            <Boton $paraCoordinador to = "sin-asignar">Sin asignar</Boton>
            <Boton $paraCoordinador to = "direccion">Dirección</Boton>
            <Boton $paraCoordinador to = "ilocalizable">Ilocalizable</Boton>
            <Boton $paraCoordinador to = "mantenimiento">Mantenimiento</Boton>
            <Boton $paraCoordinador to = "falta-citas">Falta citas</Boton>
            <Boton $paraCoordinador to = "incidencias">Incidencias</Boton>
            <Boton $paraCoordinador to = "oym">O&m</Boton>
            <Boton $paraCoordinador to = "agenda">Agenda</Boton>
            <Boton $paraCoordinador to = "supervision">Supervisión</Boton>
            <Boton $paraCoordinador to = "instalados-finalizados">Finalizados</Boton>
            {rol == "administrador" ? <Boton $paraAdministrador to="/administrador">Administración</Boton> : null}              
            <BtnSalir />         
          </ContenedorBotones>

        </ContenedorHeader>
      </Header>

      {/* Rutas */}
      <Routes>
          <Route path="sin-asignar" element={<SinAsignar />}/>
          <Route path="direccion" element={<Direccion />}/>
          <Route path="ilocalizable" element={<Ilocalizable />}/>
          <Route path="mantenimiento" element={<Mantenimiento />}/>
          <Route path="falta-citas" element={<FaltaCitas />}/>
          <Route path="incidencias" element={<Incidencias />}/>
          <Route path="oym" element={<Oym />}/>
          <Route path="agenda" element={<Agenda />}/>
          <Route path="supervision" element={<Supervision />}/>
          <Route path="instalados-finalizados" element={<InstaladosFinalizados />}/>
        </Routes>

    </>
  );
}
 
export default Coordinador;