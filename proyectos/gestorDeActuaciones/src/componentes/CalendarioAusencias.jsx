/*
  COMPONENTE QUE MUESTRE EL CALENDARIO DE AUSENCIAS
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// El Componente
const CalendarioAusencias = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Calendario de ausencias</title>
        </Helmet>  

      </HelmetProvider>
      <p>Calendario de ausencias</p>
    </>
  );
}
 
export default CalendarioAusencias;