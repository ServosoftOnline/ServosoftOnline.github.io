// React
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

// Elementos
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from '../elementos/ElementosDeHeader';
import {ContenedorFiltros} from './../elementos/ElementosDeFormulario';
import BtnSalir from '../elementos/BtnSalir';

// Componentes
import BarraProductividad from "./../componentes/BarraProductividad";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";


// Mi componente
const Tecnico = () => {
  const [nombre] = useObtenerNombreDeUnUsuario();
  
  return (
    
      <HelmetProvider>

        <Helmet>
          <title>Técnico</title>
        </Helmet>
        
        <Header>
          <ContenedorHeader>
            <Titulo>Técnico: {nombre}</Titulo>

            <ContenedorBotones>
              <BtnSalir />
            </ContenedorBotones>

          </ContenedorHeader>
        </Header>        

        <ContenedorFiltros>
          <h2>Calendario fecha inicial de muestra de actividades</h2>
          <h2>Calendario fecha final de muestra de activdades</h2>
        </ContenedorFiltros>
          <p>Mostraré por defecto las actividades del día actual. Si selecciono alguna fecha en los calendarios las cambiaré por las actividades seleccionadas en el intervalo de las fechas</p>
          <p>En las actividades podré cambiar su estado de avance: Pendiente de iniciar, en camino, iniciar trabajo, trabajo finalizado, orden con incidencia o falta de tiempo</p>
          <p>Registraré la hora al iniciar el trabajo, al finalizarlo o al asignarle orden con incidencia</p>
          <p>Las actividades tendrán un boton para editarlas y rellenar el resto de la informacion</p>
          <p>Si eres administrador o coordinador podrás ver todas las actividades del dia de los tecnicos y poder editarlas???????</p>

        <BarraProductividad />
            
      </HelmetProvider>       
  );
}
 
export default Tecnico;