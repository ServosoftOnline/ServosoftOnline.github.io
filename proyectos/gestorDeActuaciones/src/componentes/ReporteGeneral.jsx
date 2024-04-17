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
const ReporteGeneral = () => {
  const [nombre] = useObtenerNombreDeUnUsuario();

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Reporte General</title>
        </Helmet>   

      </HelmetProvider>
      <p>Reporte general</p>
    </>
  );
}
 
export default ReporteGeneral;