/*
  COMPONENTE QUE PERMITE EDITAR UN GASTO

    - Importo:
      - Lo que precise de react, elementos, componentes que precise
      - Espacial atención a importar el hook useParams.
        - Permite obtener el id del gasto de la barra de direcciones

    - Creo el componente
      - Obtengo el id de la bara de direcciones y lo guardo en id
      
*/
// React
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

// Elementos
import {Header, Titulo} from './../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";

// Componentes
import FormularioGasto from './FormularioGasto';
import BarraTotalGastado from "./BarraTotalGastado";

// Hooks
import { useParams } from "react-router-dom";
import useObtenerUnGasto from "./../hooks/useObtenerUnGasto";

// Componente
const EditarGastos = () => {
  
  // Extraigo el id que pasé como ruta dinamica asociada al componente EditarGastos en main.jsx
  const {id} = useParams();
  const [gasto] = useObtenerUnGasto(id);
  // console.log('Muestro el gasto obtenido');
  // console.log(gasto.categoria);
  
 
  

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Editar gasto</title>
        </Helmet>
        
        <Header>
          <Titulo>Editar Gasto</Titulo>
          <BtnRegresar ruta='/lista' />                     
        </Header>
        
        <FormularioGasto gasto={gasto} />

        <BarraTotalGastado />
      </HelmetProvider>       
    </>
  );
}
 
export default EditarGastos;
