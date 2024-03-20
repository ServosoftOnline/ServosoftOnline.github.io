// React
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

// Elementos
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from '../elementos/ElementosDeHeader';
import BotonCerrarSesion from "../elementos/BotonCerrarSesion";
import Boton from "../elementos/Boton";


// Mi componente
const Coordinador = () => {
  
  return (
    
      <HelmetProvider>

        <Helmet>
          <title>Coordinador</title>
        </Helmet>
        
        <Header>
          <ContenedorHeader>

            <Titulo>Coordinador</Titulo>
            <ContenedorBotones>                            
                <Boton to = '/direccion'>Direccion</Boton>
                <Boton to = '/planeado'>Planeado</Boton>
                <BotonCerrarSesion/>
            </ContenedorBotones>

          </ContenedorHeader>
        </Header>
        <h1>Tareas pendientes de coordinar</h1>
            
      </HelmetProvider>       
  );
}
 
export default Coordinador;
