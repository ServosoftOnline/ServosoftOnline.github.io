/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";


// El Componente
const CalendarioAusencias = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Calendario de ausencias</title>
        </Helmet>

        {/* Cabecera */}
        <Header>          
          <Titulo>Calendario de ausencias</Titulo>          
          <BtnRegresar ruta='/administrador' />            
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default CalendarioAusencias;