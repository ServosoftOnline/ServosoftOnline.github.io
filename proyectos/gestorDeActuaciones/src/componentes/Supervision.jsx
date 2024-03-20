/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";


// El Componente
const Supervision = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Supervision</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <ContenedorHeader>
            <Titulo>Supervisión</Titulo>
            <div>              
              <BtnRegresar ruta='/planeado' />
            </div>
          </ContenedorHeader>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default Supervision;