/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// El Componente
const FaltaCitas = () => { 

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Falta citas</title>
        </Helmet>   

      </HelmetProvider>

      <p>Mostar Incidencias que faltaron a las citas</p>
    </>
  );
}
 
export default FaltaCitas;