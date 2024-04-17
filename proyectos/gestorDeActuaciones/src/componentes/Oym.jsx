/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// El Componente
const Oym = () => {  

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>O&m</title>
        </Helmet>            

      </HelmetProvider>

      <p>O&m</p>
    </>
  );
}
 
export default Oym;