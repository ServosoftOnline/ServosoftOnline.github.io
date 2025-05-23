/*
  PROYECTO: USEREDUCER

    - Mediante este hook gestionaré una lista de videojuegos alojado en localstorage
    - Contiene el reducer llamado JuegoReducer donde gestionarán las operaciones que podrámos realizar
      - Crear
      - Borrar
      - etc

*/
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MisJuegos from './components/MisJuegos'

// Conponenente ppal del proyecto
const App = () => {
  return (
    <>
      <div>      
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      
      <h1>Stack mern: CRUD en localstorage mediante useReduce</h1>    
      <MisJuegos />
      
    </>
  )
}

export default App
