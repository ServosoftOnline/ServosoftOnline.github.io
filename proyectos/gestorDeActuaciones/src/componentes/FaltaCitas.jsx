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
const FaltaCitas = () => {
  const [nombre] = useObtenerNombreDeUnUsuario();

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Falta citas</title>
        </Helmet>

        {/* Cabecera */}
        <Header>          
          <Titulo>{nombre} (Falta citas)</Titulo>
          <ContenedorBotones>
            <BtnRegresar ruta='/coordinador' />
          </ContenedorBotones>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default FaltaCitas;