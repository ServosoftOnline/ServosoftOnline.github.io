/*
  COMPONENTE PRINCIPAL: APP.JS
    - Defino los siguiente estados
      - El estado tareas que almacenará un arreglo compuesto por un objeto por cada tarea. Su valor inicial es un arreglo vacio
      - El estado mostrarCompletadas si contiene true mostrará las tareas completadas y lo contrario si contiene false
    
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

  const [mostrarCompletadas, cambiarMostrarCompletadas]= useState(false);

 
  return (
    <div className="contenedor">
      
      <Header/>
      <FormularioTareas
        tareas = {tareas}
        cambiarTareas = {cambiarTareas}
      />

      <ListaTareas
        tareas = {tareas}
        cambiarTareas = {cambiarTareas}
        mostrarCompletadas = {mostrarCompletadas}
      />

    </div>
  );
}

export default App;