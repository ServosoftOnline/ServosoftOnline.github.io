/*
  COMPONENTE PRINCIPAL: APP.JS:

    - Contiene el estado mostrarCompletadas que almacena el deseo del usuario de mostrar u ocultar las tareas.
      - Lo declaro aquí porque lo paso como propiedades a los componentes Header y ListaTareas

    - Renderizo cada uno de los componentes que componen la aplicacion:

      - Header contiene el titulo de la aplicación y un boton que permite mostrar u ocultar las tareas
        - Tendrá el control sobre el estado mostrarCompletadas y la capacidad de cambiar la decisión del usuario

      - FormularioTareas permite añadir tareas.        
        - Es un componente independiente que no precisa de ninguna propiedad que le pase desde aquí

      - ListaTareas muestra las tareas que existen actualemente en la base de datos mysql
        - Le paso el estado mostrarCompletadas para que las muestre u

      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={setMostrarCompletadas}
      />

      <FormularioTareas/>

      <ListaTareas
        mostrarCompletadas = {mostrarCompletadas}
      />

 

*/

// React
import { useState, useEffect } from 'react';

// Css
import './App.css';

// Componentes importados
import Header from './Header';
import FormularioTareas from './FormularioTareas';
import ListaTareas from './ListaTareas';

// Componente ppal
const App = () => {

  // Estado que contiene el deseo de mostrar u ocultar las tareas completadas
  const [mostrarTodas, setMostrarTodas]= useState(true);
  
  // Renderizo los tres componentes de la aplicación almacenadas en el contenedor ppal de la aplicación
  return (

    <div className="contenedor">
      
      <Header
        mostrarTodas={mostrarTodas}
        setMostrarTodas={setMostrarTodas}
      />

      <FormularioTareas/>

      <ListaTareas
        mostrarTodas = {mostrarTodas}        
      />

    </div>
  );

}

export default App;