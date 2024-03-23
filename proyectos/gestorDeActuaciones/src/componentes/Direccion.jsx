/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorBotones} from '../elementos/ElementosDeHeader';
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
            <Titulo>Direccion</Titulo>
            <ContenedorBotones>
              <BtnRegresar ruta='/coordinador' />
            </ContenedorBotones>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default Direccion;