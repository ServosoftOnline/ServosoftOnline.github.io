/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";


// El Componente
const Mantenimiento = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Mantenimiento</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <ContenedorHeader>
            <Titulo>Mantenimiento</Titulo>
            <div>              
              <BtnRegresar ruta='/planeado' />
            </div>
          </ContenedorHeader>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default Mantenimiento;