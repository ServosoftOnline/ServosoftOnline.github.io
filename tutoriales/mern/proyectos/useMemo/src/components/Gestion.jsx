/*
  - Paginacion de los usuarios obtenidos desde la api regres in
    - Precisa de la API KEY reqres-free-v1
    - Documentacion en: https://reqres.in/
    - El componente Gestion tiene un estado para controlar el numero de paginas
      - que lo pasará como propiedad al componente empleados
*/

import React, { useState, useEffect, useCallback } from 'react';
import { Empleados } from './Empleados';

export const Gestion = () => {

  // Estados y referencias
  const [gestor, setGestor] = useState('');
  const [pagina, setPagina] = useState(1);

  // Funcion para probar useCallback
  const muestraMensajeRenderizacion = useCallback((pagina) => {
    console.log('Renderizo el componente Empleados con los usuarios de la pagina: ' + pagina);
  },[pagina]);  

  // Efecto que muestra las veces que se muestra el componente
  useEffect(() => {
    console.log('Renderizo el componente Gestion');
  },[gestor]);

  // Renderizo
  return (
    <div>

      <div className='contenedorGestor'>
        <label htmlFor="gestor">Introduzca nombre del gestor: </label>
        <input
          type='text'
          name='gestor'
          onChange={(e) => setGestor(e.target.value)}
        />
        <h2>Gestor introducido: {gestor}</h2> 
      </div>   

      <div className='cabecera'>
        <h3>Listado de empleados:</h3>
        <button onClick={() => setPagina(1)}>Pagina 1</button>
        <button onClick={() => setPagina(2)}>Pagina 2</button>

        <Empleados 
          pagina={pagina}
          muestraMensajeRenderizacion={muestraMensajeRenderizacion}
        />

      </div>

    </div>
  )
}
