/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorBotones} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";


// El Componente
const FaltaCitas = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Falta citas</title>
        </Helmet>

        {/* Cabecera */}
        <Header>          
          <Titulo>Falta citas</Titulo>
          <ContenedorBotones>
            <BtnRegresar ruta='/planeado' />
          </ContenedorBotones>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default FaltaCitas;