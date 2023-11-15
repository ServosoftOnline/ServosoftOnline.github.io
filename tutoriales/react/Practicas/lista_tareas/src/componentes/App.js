/*
  COMPONENTE PRINCIPAL: APP.JS

    - Creo el estado tareas con valor inicial un arreglo vacio
    
    - Devolverá:
    
      - El componente Header
        - Contiene la cabecera formada por Lista de tareas y el icono de no mostrar tareas completadas

      - El componente FormularioTareas
        - Contiene un formulario que permite añadir tareas
        - Le paso como argumento las tareas y su función asociada para ir añadiendolas
        
      - El componente ListaTareas
        - Contiene las tareas añadidas

        - Le paso como argumento las tareas y su funcion asociada.
          - Las tareas para que las muestre
          - Su funcion asociada para cambiarlas cuando queden completadas




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
        completada: true
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
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
    </div>
  );
}

export default App;