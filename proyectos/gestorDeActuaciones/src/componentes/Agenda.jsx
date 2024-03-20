/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";


// El Componente
const Agenda = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Agenda</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <ContenedorHeader>
            <Titulo>Agenda</Titulo>
            <div>              
              <BtnRegresar ruta='/planeado' />
            </div>
          </ContenedorHeader>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default Agenda;