/*
  PAGINA QUE MUESTRA LA LISTA DE GASTOS DEL USUARIO ACTIVO

    - Importo:
      - Lo que valla a usar de react
      - Los elementos que valla a usar
      - Componentes, hooks, funciones, ...    
      
    - Creo el componente:
      - Obtengo todos los gastos del usuario actual mediante el hook
      - Creo una función que usaré únicamente en este componente
        - Me permitirá comprobar si un gasto y su siguiente tienen la misma fecha para ocultarla en la lista

      - Devuelvo un fragmento que contiene:
        - El titulo de la pestaña indicado entre las etiquetas Helmet
        - La cabecera que contendrá el título y el boton para regresar a la pagina raiz
        - Creo la lista:
          - Recorro todos los gastos y voy mostrando elementos de esa lista
          - Contendrá:
            - Las fechas no repetidas
            - El icono de la categoria y la categoria correspondiente
            - Descripción e importe del gasto
            - Un contenedor con los botones editar y borrar gasto
            - Un botón de cargar mas, esos se limitarán a 10 articulos por pagina
            - Un mensaje que no hay gastos si no los hubiera

        - La barra que muestre los gastos del mes actual  


*/

// React
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import { Link } from "react-router-dom";

// Elementos
import {Header, Titulo} from "../elementos/ElementosDeHeader";
import BtnRegresar from "../elementos/BtnRegresar";
import IconosCategorias from "../elementos/IconosCategorias";
import Boton from "../elementos/Boton";

// Elementos para la lista
import { Lista, ElementoLista, Categoria, Descripcion,
Valor, Fecha, ContenedorBotones, BotonAccion,BotonCargarMas, ContenedorBotonCentral,
ContenedorSubtitulo, Subtitulo} from './../elementos/ElementosDeLista';

// Componentes
import BarraTotalGastado from './BarraTotalGastado';

// Hooks
import useObtenerGastos from "../hooks/useObtenerGastos";

// Funciones
import convertirAMoneda from "../funciones/convertirAMoneda";
import formatearFecha from "../funciones/formatearFecha";

// SVG como elemento
import IconoEditar from './../assets/editar.svg?react';
import IconoBorrar from './../assets/borrar.svg?react';

// Componente
const ListaDeGastos = () => {

  // Obtengo los gastos realizados por el usuario actual con este hook
  const [gastos, obtenerMasGastos, hayMasPorCargar] = useObtenerGastos();

  // Funcion que comprueba si la fecha del index anterior es igual a la fecha del index actual
  const fechaEsIgual = (gastos, index, gasto) => {
    // La posición 0 no tiene fecha anterior
    if(index!==0) {
      const fechaActual = formatearFecha(gasto.fecha);
      const fechaGastoAnterior = formatearFecha(gastos[index -1].fecha);
      if (fechaActual===fechaGastoAnterior) return true;
      else return false;
    }    
  }
 
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

        {/* Lista  */}
        <Lista>
          {
            // Devuelvo un elemento de la lista en cada pasada
            gastos.map((gasto, index) => {

              return (

                // Solo tengo un key que debo añadir a los elementos Fecha y ElementosLista
                // Englobo a los elementos en un div al que le pongo el key
                <div key={gasto.id}>

                  {/* Solo mostraré la fecha si es diferente a la anterior */}
                  {!fechaEsIgual(gastos, index, gasto) &&
                      <Fecha>
                        {formatearFecha(gasto.fecha)}
                      </Fecha>
                  }

                  <ElementoLista>
                
                    <Categoria>
                        <IconosCategorias id={gasto.categoria}/>  
                        {gasto.categoria}
                    </Categoria>

                    <Descripcion>
                      {gasto.descripcion}
                    </Descripcion>

                    <Valor>
                      {convertirAMoneda(gasto.importe)}
                    </Valor>

                    <ContenedorBotones>

                        <BotonAccion as={Link} to={`/editar/${gasto.id}`}> 
                          <IconoEditar /> 
                        </BotonAccion>

                        <BotonAccion>
                          <IconoBorrar />
                        </BotonAccion>

                      </ContenedorBotones>                  
                  </ElementoLista>
                </div>                
              )
            })
          }

          {/* Botón de cargar mas. Depende del estado hayMasPorCargar obtenido desde el hook */}
          {hayMasPorCargar &&
            <ContenedorBotonCentral>
              <BotonCargarMas onClick={() => obtenerMasGastos()}>Cargar más gastos</BotonCargarMas>
            </ContenedorBotonCentral>         
          }
          
          {/* Si no hay gastos mostrar mensaje */}
          {gastos.length===0 &&
            <ContenedorSubtitulo>
              <Subtitulo>No hay gastos que mostrar</Subtitulo>
              <Boton as={Link} to='/' $primario>Ir a añadir gastos</Boton>
            </ContenedorSubtitulo>
          }

        </Lista>

        {/* Barra de gastos totales del mes */}
        <BarraTotalGastado />
        
      </HelmetProvider>       
    </>      
  );
}
 
export default ListaDeGastos ;

