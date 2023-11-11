/*
  COMPONENTE PRINCIPAL: APP.JS

    - Creo el estado tareas con valor inicial un arreglo vacio
      - FormularioTareas.js añadirá las tareas. Le debo pasar como argumento el estado y la funcion asociada

    - Devolverá:
    
      - El componente Header
        - Contiene la cabecera formada por Lista de tareas y el icono de no mostrar tareas completadas

      - El componente FormularioTareas
        - Contiene un formulario que nos permitirá añadir las tareas
        
      - El componente ListaTareas
        - Contiene las tareas añadidas




*/

import './App.css';
import { useState } from 'react';
import Header from './Header';
import FormularioTareas from './FormularioTareas';
import ListaTareas from './ListaTareas';

const App = () => {
  const [tareas,cambiarTareas] = useState(
    [
      /*
      {
        id:1,
        texto: 'Lavar la ropa',
        completada: false
      },
      
      {
        id:2,
        texto: 'Grabar tutorial',
        completada: false
      }
      */
    ]
  );

 
  return (
    <div className="contenedor">
      <Header/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas}/>
    </div>
  );
}

export default App;