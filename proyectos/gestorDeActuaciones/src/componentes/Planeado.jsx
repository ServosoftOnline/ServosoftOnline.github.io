/*
  
*/

// React y react router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";
import Boton from "../elementos/Boton";


// El Componente
const Planeado = () => {

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Planeado</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <ContenedorHeader>

            <div>
              <Titulo>Planeado</Titulo>
              
            </div>

            <ContenedorBotones>
              <Boton to = '/ilocalizable'>Ilocalizable</Boton>
              <Boton to = '/mantenimiento'>Mantenimiento</Boton>
              <Boton to = '/falta-citas'>Falta citas</Boton>
              <Boton to = '/incidencias'>Incidencias</Boton>
              <Boton to = '/oym'>O&m</Boton>
              <Boton to = '/agenda'>Agenda</Boton>
              <Boton to = '/supervision'>Supervisión</Boton>
              <Boton to = '/instalados-finalizados'>Finalizados</Boton>
              <BtnRegresar ruta='/coordinador' />
            </ContenedorBotones>            

          </ContenedorHeader>
        </Header>            

      </HelmetProvider>
    </>
  );
}
 
export default Planeado;