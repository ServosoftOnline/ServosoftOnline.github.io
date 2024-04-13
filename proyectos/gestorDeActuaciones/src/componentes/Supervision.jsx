/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorBotones} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// El Componente
const Supervision = () => {
  const [nombre] = useObtenerNombreDeUnUsuario();

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Supervision</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <Titulo>{nombre} (Supervisión)</Titulo>
          <ContenedorBotones>
            <BtnRegresar ruta='/coordinador' />          
          </ContenedorBotones>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default Supervision;