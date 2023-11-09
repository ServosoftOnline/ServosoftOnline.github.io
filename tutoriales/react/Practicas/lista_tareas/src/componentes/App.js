/*
  COMPONENTE PRINCIPAL
    - Creo el estado tareas con valor inicial un arreglo con un objeto por cada tarea
      - Los paso como argumento en el componente FormularioTareas


*/


import { useState } from 'react';
import './App.css';
import Header from './Header';
import FormularioTareas from './FormularioTareas';

const App = () => {
  const [tareas,cambiarTareas] = useState(
    [
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
    ]
  );

 console.log(tareas);
 
  return (
    <div className="contenedor">
      <Header/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
    </div>
  );
}

export default App;
