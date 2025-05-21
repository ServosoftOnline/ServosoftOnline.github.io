/*
  PROYECTO PARA EXPLICAR EL USO DEL HOOK USELAYOUTEFFECT
  
    - useLayoutEffect se ejecuta de manera sincrona.
      - Primero se ejecuta la funcion que tenga dentro del callback y despues renderiza el componente

    - useEffect se ejecuta de manera asincrona
      - Primero se renderiza el componente y despues se ejecuta la funcion callback de su interior


*/


import reactLogo from './assets/react.svg'
import { Componente } from './components/Componente'
import viteLogo from '/vite.svg'

const App = () => {
  return (
    <>
      <div>        
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />        
      </div>

      <h1>Stack mern: useLayoutEffect</h1>
      <Componente/>
      
    </>
  )
}

export default App
