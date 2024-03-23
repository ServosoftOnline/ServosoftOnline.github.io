/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";


// El Componente
const Produccion = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Producción</title>
        </Helmet>

        {/* Cabecera */}
        <Header>          
          <Titulo>Producción</Titulo>          
          <BtnRegresar ruta='/administrador' />            
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default Produccion;