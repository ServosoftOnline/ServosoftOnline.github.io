/*
  
*/

// React y react router
import React, { useContext } from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";
import Boton from "../elementos/Boton";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// El Componente
const Planeado = () => {
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
            
            <Titulo>Usuario: {nombre} (Planeado)</Titulo>
            <ContenedorBotones>
              <Boton $paraCoordinador to = '/ilocalizable'>Ilocalizable</Boton>
              <Boton $paraCoordinador to = '/mantenimiento'>Mantenimiento</Boton>
              <Boton $paraCoordinador to = '/falta-citas'>Falta citas</Boton>
              <Boton $paraCoordinador to = '/incidencias'>Incidencias</Boton>
              <Boton $paraCoordinador to = '/oym'>O&m</Boton>
              <Boton $paraCoordinador to = '/agenda'>Agenda</Boton>
              <Boton $paraCoordinador to = '/supervision'>Supervisión</Boton>
              <Boton $paraCoordinador to = '/instalados-finalizados'>Finalizados</Boton>
              <BtnRegresar ruta='/coordinador' />            
            </ContenedorBotones>

          </ContenedorHeader>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default Planeado;