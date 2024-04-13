/*
  
*/

// React y react router
import React, { useContext } from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from '../elementos/ElementosDeHeader';
import Boton from "../elementos/Boton";
import BtnSalir from "../elementos/BtnSalir";

// Contexto
import { RolContext } from "../contextos/RolContext";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// El Componente
const Coordinador = () => {
  const {rol} = useContext(RolContext); 
  const [nombre] = useObtenerNombreDeUnUsuario();

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Planeado</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <ContenedorHeader>         
            
            <Titulo>{nombre} (Planeado)</Titulo>
            <ContenedorBotones>
              <Boton $paraCoordinador to = '/direccion'>Direccion</Boton>
              <Boton $paraCoordinador to = '/ilocalizable'>Ilocalizable</Boton>
              <Boton $paraCoordinador to = '/mantenimiento'>Mantenimiento</Boton>
              <Boton $paraCoordinador to = '/falta-citas'>Falta citas</Boton>
              <Boton $paraCoordinador to = '/incidencias'>Incidencias</Boton>
              <Boton $paraCoordinador to = '/oym'>O&m</Boton>
              <Boton $paraCoordinador to = '/agenda'>Agenda</Boton>
              <Boton $paraCoordinador to = '/supervision'>Supervisión</Boton>
              <Boton $paraCoordinador to = '/instalados-finalizados'>Finalizados</Boton>
              {rol == "administrador" ? <Boton $paraAdministrador to="/administrador">Administración</Boton> : null}              
              <BtnSalir />         
            </ContenedorBotones>

          </ContenedorHeader>
        </Header>

        {/* Incidencias en estadp pte_de_coordinar */}
        <ul>
          
        </ul>

      </HelmetProvider>
    </>
  );
}
 
export default Coordinador;