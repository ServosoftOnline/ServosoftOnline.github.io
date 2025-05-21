/*
  COMPONENTE PPAL:
  
    - Contiene dos componentes con ejemplos de uso del hook useRef
    - El primero obtiene la información del formulario
    - El segundo muestra los saludos realizados y los pendiente de realizar en tiempo real
  
*/
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Formulario } from './components/Formulario';
import { Saludo } from './components/Saludo';

const App = ()=> {
  
  return (
    <>
      <div>        
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />        
      </div>

      <h1>Stack mern: useRef</h1>
      <Formulario/> 
      <Saludo />
      
    </>
  )
}

export default App
