/*
  PROYECTO PARA MOSTRAR EL USO DEL METODO MEMO DE REACT, EL HOOK USEMEMO Y PAGINACIÓN:

    - ESTE PROYECTO TAMBIEN MOSTRABA EL USO DE USEMEMO. PARA ESO SERVIA EL COMPONENTE TAREAS
      - EL EJEMPLO QUE PUSO EL INSTRUCTOR FUE TAN MALO QUE CONSIDERÉ NO USARLO
      - ENTENDÍ QUE SE USA USEMEMO PARA EVITAR QUE SE EJECUTEN PROCEDIMIENTOS PESADOS DE FORMA INNECESARIA
    
    - La idea principal de este proyecto es entender que a veces es necesario evitar renderizaciones
      - Relentiza la aplicación y no aportan nada al proyecto
      - El metodo memo de react, que aplico el componente empledos, evita que se renderize de forma innecesaria 
      - El componente Empleados que se encuentra dentro del componente Gestion.

    - El componente gestión va renderizando el nombre del gestor mientras introduzco caracteres
    - Gestor llama al componente Empleados que muestra una lista de los empleados obtenidos de api regres
    - Si no aplicara la funcion memo al componente Empleados este se renderizaría de forma innecesaria
    - La paginación la realiza el componente gestion
          
*/
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Gestion } from './components/Gestion'
import { Tareas } from './components/Tareas'

const App = () => {

  return (
    <>

      <div>        
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />        
      </div>

      <h1>Stack mern: useMemo, metodo React.memo y paginación</h1>
      <Gestion/>
      <Tareas/>
      
    </>
  )
}

export default App
