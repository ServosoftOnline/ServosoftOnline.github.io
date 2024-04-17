/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// El Componente
const Ilocalizable = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Ilocalizable</title>
        </Helmet>   

      </HelmetProvider>
      <p>Mostrar incidencias en estado ilocalizable</p>
    </>
  );
}
 
export default Ilocalizable;