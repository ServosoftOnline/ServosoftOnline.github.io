/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// El Componente
const Incidencias = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Incidencias</title>
        </Helmet> 

      </HelmetProvider>
      <p>Incidencias</p>
    </>
  );
}
 
export default Incidencias;