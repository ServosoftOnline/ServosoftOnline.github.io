import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Formulario } from './components/Formulario'

const App = () => {

  return (
    <>
      <div>        
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <Formulario/>
      
    </>
  )
}

export default App
