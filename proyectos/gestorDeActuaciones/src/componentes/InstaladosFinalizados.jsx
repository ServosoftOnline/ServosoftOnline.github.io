/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";


// El Componente
const InstaladosFinalizados = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Instalados / Finalizados</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <ContenedorHeader>
            <Titulo>Instalados / Finalizados</Titulo>
            <div>              
              <BtnRegresar ruta='/planeado' />
            </div>
          </ContenedorHeader>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default InstaladosFinalizados;