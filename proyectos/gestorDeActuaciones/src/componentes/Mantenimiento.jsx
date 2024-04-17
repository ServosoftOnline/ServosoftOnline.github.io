/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// El Componente
const Mantenimiento = () => {  

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Mantenimiento</title>
        </Helmet>  

      </HelmetProvider>
      <p>Mostrar indicencias en estado de manteniento</p>
    </>
  );
}
 
export default Mantenimiento;