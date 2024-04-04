// React
import React, { useContext } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

// Elementos
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from '../elementos/ElementosDeHeader';
import Boton from "../elementos/Boton";
import BtnSalir from "../elementos/BtnSalir";

// Contexto
import { RolContext } from "../contextos/RolContext";

// Hooks
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";


// Mi componente
const Coordinador = () => {
  const {rol} = useContext(RolContext); 
  const [nombre] = useObtenerNombreDeUnUsuario();
  
  return (
    
      <HelmetProvider>

        <Helmet>
          <title>Coordinador</title>
        </Helmet>
        
        <Header>
          <ContenedorHeader>

            <Titulo>Usuario: {nombre} (Coordinador)</Titulo>
            <ContenedorBotones>                            
                <Boton $paraCoordinador to = '/direccion'>Direccion</Boton>
                <Boton $paraCoordinador to = '/planeado'>Planeado</Boton>
                {rol == "administrador" ? <Boton $paraAdministrador to="/administrador">Administración</Boton> : null}
                <BtnSalir />
                
            </ContenedorBotones>

          </ContenedorHeader>
        </Header>
        <h1>Tareas pendientes de coordinar</h1>
            
      </HelmetProvider>       
  );
}
 
export default Coordinador;
