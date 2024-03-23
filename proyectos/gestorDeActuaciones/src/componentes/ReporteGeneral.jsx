/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";


// El Componente
const ReporteGeneral = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Reporte General</title>
        </Helmet>

        {/* Cabecera */}
        <Header>          
          <Titulo>Reporte General</Titulo>
          <BtnRegresar ruta='/administrador' />
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default ReporteGeneral;