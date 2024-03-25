// React
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

// Elementos
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from '../elementos/ElementosDeHeader';
import Boton from './../elementos/Boton';
import BtnSalir from './../elementos/BtnSalir';


// Mi componente
const Administrador = () => {
  
  return (
    
      <HelmetProvider>

        <Helmet>
          <title>Administrador</title>
        </Helmet>
        
        <Header>
          <ContenedorHeader>

            <Titulo>Administrador</Titulo>
            <ContenedorBotones>

                <Boton to = '/crear-usuario'>Crear usuario</Boton>                     
                <Boton to = '/produccion'>Producción</Boton>     
                <Boton to = '/calendario-ausencias'>Ausencias</Boton>     
                <Boton to = '/reporte-general'>Reporte general</Boton>             
                <Boton to = '/coordinador'>Coordinador</Boton>
                <BtnSalir />


            </ContenedorBotones>

          </ContenedorHeader>
        </Header>
        <h1>Informes</h1>
            
      </HelmetProvider>       
  );
}
 
export default Administrador;
