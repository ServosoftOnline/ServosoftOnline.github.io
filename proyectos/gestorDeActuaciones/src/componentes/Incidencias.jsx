/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorBotones} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";

// El Componente
const Incidencias = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Incidencias</title>
        </Helmet>

        {/* Cabecera */}
        <Header>          
          <Titulo>Incidencias</Titulo>
          <ContenedorBotones>
            <BtnRegresar ruta='/planeado' />
          </ContenedorBotones>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default Incidencias;