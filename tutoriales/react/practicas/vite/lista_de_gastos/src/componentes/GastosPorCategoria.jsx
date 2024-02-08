/*
  PAGINA QUE MUESTRA LOS GASTOS POR CATEGORIA
    - Importo:
      - La libreria de react
      - El componente helmet de react router
      - Los elementos que valla a usar en el heder
      - El boton regresar que permitirá regresar a la pagina raiz o a la pagina que le indicara como argumento
        - ej: Si quisiera regresar a la pagina de gastos por categoría tendria que escribir: <BtnRegresar ruta = '/categorias'/> 

    - Creo el componente:
      - Devuelvo un fragmento que contiene:
        - El titulo de la pestaña indicado entre las etiquetas Helmet
        - La cabecera que contendrá el boton para regresar a la pagina raiz
        - El titulo de la pagina


*/

// React
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo} from "../elementos/ElementosDeHeader";
import BtnRegresar from "../elementos/BtnRegresar";

// Componentes
import BarraTotalGastado from './BarraTotalGastado';


const GastosPorCategoria = () => {

    return (
      <>
        <HelmetProvider>
          <Helmet>
            <title>Gastos por categoria</title>
          </Helmet>

          <Header>
            <Titulo>Gastos por categoría</Titulo>
            <BtnRegresar/>                    
          </Header>

          <BarraTotalGastado />
        </HelmetProvider>       
      </>
        
      );
}
 
export default GastosPorCategoria;
