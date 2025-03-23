// Componentes
import MiPrimerComponente from './componentes/MiPrimerComponente';
import SegundoComponente from './componentes/SegundoComponente';
import { TercerComponente } from './componentes/TercerComponente';
import { Eventos } from './componentes/Eventos';

// Estilos
import './App.css'

// Imágenes
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

// Componente ppal
const App = () => {

  const fichaMedica = {
    peso: '80 kg',
    altura: '1,72 cm',
    alergias: 'AINES'
  }

  return (    
    <>
      <div>        
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />        
      </div>
          
      <h1>Stack Mern: Primeros pasos</h1>
      <MiPrimerComponente/>
      <SegundoComponente />

      <TercerComponente
        nombre='Oscar'
        apellido='Fernández'        
        ficha = {fichaMedica}
      />

      <Eventos />
    </>    
  )
}

export default App;
