/*
   COMPONENTE PPAL DE LA APLICACION

      - Pagina ppal que servirá para añadir los gastos

      - Importo:
         - Las librerias necesarias para usar react, Helmet
         - Los elementos que usaré en la cabecera
         - El elemento que contiene los estilos del boton


      - Creo el componente ppal
         - Uso helmet para agregar un titulo
         - Defino mi cabecera añadiendo los elementos
            - Creo los botones. Le añado los estilos creados en el elemento Boton
               - Botón fue creado mediante el componente Link de react router.
                  -Implica que puedo usar to="/pagina" para poder acceder a la pagina definidas en los path de las rutas

*/

import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from "./elementos/ElementosDeHeader";
import Boton from "./elementos/Boton";

const App = () => {
  return (        
      <>
         <HelmetProvider>
            <Helmet>
               <title>Agregar gastos</title>
            </Helmet>

            <Header>
               <ContenedorHeader>
                  <Titulo>Agregar gasto</Titulo>
                  <ContenedorBotones>
                     <Boton to = '/categorias'>Categorías</Boton>
                     <Boton to = '/lista'>Lista de gastos</Boton>
                     <Boton>X</Boton>
                  </ContenedorBotones>
               </ContenedorHeader>
            </Header>
         </HelmetProvider>
      </>  
   );
}

export default App;