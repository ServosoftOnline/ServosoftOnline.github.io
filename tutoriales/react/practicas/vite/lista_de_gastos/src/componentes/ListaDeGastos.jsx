/*
  PAGINA QUE MUESTRA LA LISTA DE GASTOS DEL USUARIO ACTIVO

    - Importo:
      - La libreria de react
      - El componente helmet de react router
      - Los elementos que valla a usar
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
import { Link } from "react-router-dom";
import { fromUnixTime } from "date-fns";

// Elementos
import {Header, Titulo} from "../elementos/ElementosDeHeader";
import BtnRegresar from "../elementos/BtnRegresar";
import IconosCategorias from "../elementos/IconosCategorias";
import Boton from "../elementos/Boton";

// Elementos para la lista
import { Lista, ElementoLista, ListaDeCategorias, ElementoListaCategorias,Categoria, Descripcion,
Valor, Fecha, ContenedorBotones, BotonAccion,BotonCargarMas, ContenedorBotonCentral,
ContenedorSubtitulo, Subtitulo} from './../elementos/ElementosDeLista';


// Componentes
import BarraTotalGastado from './BarraTotalGastado';

// Hooks
import useObtenerGastos from "../hooks/useObtenerGastos";

// Funciones
import convertirAMoneda from "../funciones/convertirAMoneda";

// SVG como elemento
import BtnEditar from './../assets/editar.svg?react';
import BtnBorrar from './../assets/borrar.svg?react';

// Componente
const ListaDeGastos = () => {

  // Obtengo los gastos realizados por el usuario actual con este hook
  const [gastos] = useObtenerGastos();
  console.log(gastos);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Lista de gastos</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <Titulo>Lista de gastos</Titulo> 
          <BtnRegresar/>      
        </Header>

        {/* Lista */}
        <Lista>

          {/* A cada iteracción la llamaré gasto y devolveré un elemento de la lista en cada pasada */}
            {gastos.map((gasto) => {

              return (
                // Ese elemento mostrará la categoria, descripción, importe convertido a moneda
                // Un contenedor de los botones editar y eliminar
                // Editar mediante una ruta dinámica enviará al componente editarGasto.jsx
                <>              
                  <Fecha>{gasto.fecha}</Fecha>
                  <ElementoLista key={gasto.id}>

                    <Categoria>
                      <IconosCategorias id={gasto.categoria}/>  
                      {gasto.categoria}
                    </Categoria>

                    <Descripcion>{gasto.descripcion}</Descripcion>
                    <Valor>{convertirAMoneda(gasto.importe)}</Valor>

                    <ContenedorBotones>

                      <BotonAccion as={Link} to={`/editar/${gasto.id}`}> 
                        <BtnEditar /> 
                      </BotonAccion>

                      <BotonAccion>
                        <BtnBorrar />
                      </BotonAccion>

                    </ContenedorBotones>

                  </ElementoLista>
                </>
              ); 
            })
          } 

          <ContenedorBotonCentral>
            <BotonCargarMas>Cargar más</BotonCargarMas>
          </ContenedorBotonCentral>

          {gastos.length===0 &&
            <ContenedorSubtitulo>
              <Subtitulo>No hay gastos que mostrar</Subtitulo>
              <Boton as={Link} to='/' $primario>Ir a añadir gastos</Boton>
            </ContenedorSubtitulo>
          }
        </Lista>
        

        <BarraTotalGastado />
      </HelmetProvider>       
    </>      
  );
}
 
export default ListaDeGastos ;

