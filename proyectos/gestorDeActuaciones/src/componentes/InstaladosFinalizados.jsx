/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// El Componente
const InstaladosFinalizados = () => {
  
  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Instalados / Finalizados</title>
        </Helmet>

      </HelmetProvider>

      <p>Instalados/Finalizados</p>
    </>
  );
}
 
export default InstaladosFinalizados;