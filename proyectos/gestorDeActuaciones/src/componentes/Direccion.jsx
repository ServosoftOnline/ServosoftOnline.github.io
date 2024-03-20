/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";


// El Componente
const Direccion = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Dirección</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <ContenedorHeader>
            <Titulo>Direccion</Titulo>
            <div>
              <BtnRegresar ruta='/coordinador' />
            </div>
          </ContenedorHeader>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default Direccion;