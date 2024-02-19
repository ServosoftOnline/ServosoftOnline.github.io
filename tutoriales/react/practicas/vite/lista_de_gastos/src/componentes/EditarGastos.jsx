/*
  COMPONENTE QUE PERMITE EDITAR UN GASTO
    - Le paso por la barra de dirección el id del gasto
    - Lo extraigo
    - Llamo al hook para obtener toda la informacion de ese id del gasto
    - Cargo todos los componetes de la pagina editar el gasto
    - Al formulario le paso por parámetro ese gasto y lo llamo gastoAmodificar
      
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
        
        <FormularioGasto gastoAModificar={gasto} />

        <BarraTotalGastado />
      </HelmetProvider>       
    </>
  );
}
 
export default EditarGastos;
