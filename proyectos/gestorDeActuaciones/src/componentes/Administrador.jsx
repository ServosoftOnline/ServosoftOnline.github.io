// React
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

// Elementos
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from '../elementos/ElementosDeHeader';
import Boton from './../elementos/Boton';
import BtnSalir from './../elementos/BtnSalir';

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";


// Mi componente
const Administrador = () => {
  const [nombre] = useObtenerNombreDeUnUsuario();
  
  return (
    
      <HelmetProvider>

        <Helmet>
          <title>Administrador</title>
        </Helmet>
        
        <Header>
          <ContenedorHeader>

            <Titulo>{nombre} (Administrador)</Titulo>
            <ContenedorBotones>
                <Boton $paraAdministrador to = '/crear-usuario'>Crear usuario</Boton>                     
                <Boton $paraAdministrador to = '/produccion'>Producción</Boton>     
                <Boton $paraAdministrador to = '/calendario-ausencias'>Ausencias</Boton>     
                <Boton $paraAdministrador to = '/reporte-general'>Reporte general</Boton>             
                <Boton $paraCoordinador to = '/coordinador'>Coordinación</Boton>
                <BtnSalir />
            </ContenedorBotones>

          </ContenedorHeader>
        </Header>
        <h1>Informes</h1>
            
      </HelmetProvider>       
  );
}
 
export default Administrador;
