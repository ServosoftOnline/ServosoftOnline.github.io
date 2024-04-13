/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorBotones} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";

// Hook
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// El Componente
const Oym = () => {
  const [nombre] = useObtenerNombreDeUnUsuario();

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>O&m</title>
        </Helmet>

        {/* Cabecera */}
        <Header>          
          <Titulo>{nombre} (O&m)</Titulo>
          <ContenedorBotones>
            <BtnRegresar ruta='/planeado' />
          </ContenedorBotones>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default Oym;