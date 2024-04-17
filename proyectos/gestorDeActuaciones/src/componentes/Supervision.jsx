/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// El Componente
const Supervision = () => {  

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Supervision</title>
        </Helmet> 

      </HelmetProvider>
      
      <p>Supervision</p>
    </>
   
  );
}
 
export default Supervision;