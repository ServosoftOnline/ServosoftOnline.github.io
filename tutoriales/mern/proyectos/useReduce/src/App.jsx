
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MisJuegos from './components/MisJuegos'

const App = () => {
  return (
    <>
      <div>      
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Stack mern: useReduce</h1>    
      <MisJuegos />
      
    </>
  )
}

export default App
