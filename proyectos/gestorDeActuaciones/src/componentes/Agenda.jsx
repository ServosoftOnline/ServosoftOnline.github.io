/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// El Componente
const Agenda = () => { 

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Agenda</title>
        </Helmet>  

      </HelmetProvider>

      <p>Agenda</p>
    </>
  );
}
 
export default Agenda;