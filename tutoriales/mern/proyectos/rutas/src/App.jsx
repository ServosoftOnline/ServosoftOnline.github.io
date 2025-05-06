/*
  COMPONENTE PPAL DEL PROYECTO RUTAS:
    - Contiene los logos y el componente RouterPpal 
*/
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RouterPpal } from './routes/RouterPpal';

const App = () => {

  return (
    <>
      <div className='logos'>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      
      <RouterPpal/>

    </>
  )
}

export default App
