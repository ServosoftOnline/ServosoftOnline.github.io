/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";

// hook
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";


// El Componente
const Produccion = () => {
  const [nombre] = useObtenerNombreDeUnUsuario();

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Producción</title>
        </Helmet>

        {/* Cabecera */}
        <Header>          
          <Titulo>{nombre} (Producción)</Titulo>          
          <BtnRegresar ruta='/administrador' />            
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default Produccion;