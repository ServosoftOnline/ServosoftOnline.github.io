/*
  PAGINA QUE MUESTRA LOS GASTOS POR CATEGORIA


*/

// React
import React from "react";
import {Helmet} from 'react-helmet';

// Elementos
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from "./../elementos/Header";
import Boton from "./../elementos/Boton";

const GastosPorCategoria = () => {

    return (
      <>
        <Helmet>
          <title>Gastos por categoria</title>
        </Helmet>

        <Header>
          <ContenedorHeader>
            <Titulo>Gastos por categoría</Titulo>            
          </ContenedorHeader>
        </Header>
       
      </>
        
      );
}
 
export default GastosPorCategoria;
