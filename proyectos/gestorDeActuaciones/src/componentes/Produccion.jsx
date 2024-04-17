/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// El Componente
const Produccion = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Producción</title>
        </Helmet>                   

      </HelmetProvider>
      <p>Modulo de produccion</p>
    </>
  );
}
 
export default Produccion;