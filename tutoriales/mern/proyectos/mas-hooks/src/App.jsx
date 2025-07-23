import viteLogo from '/vite.svg';
import './App.css';

// Componentes
import UseId from '../components/UseId';
import UseCaracteres from '../components/UseCaracteres';
import { FormularioSerializado } from '../components/FormularioSerializado';
import { MiUsuario } from '../components/MiUsuario';

// Componente ppal
const App = () => {  

  return (
    <>
      <div className='proyecto'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>        
        <h1>Mearn: useId y hooks personalizados</h1>  
      </div>
      
      <hr />         
      <UseId />
      <hr />
      <UseCaracteres/>
      <hr />
      <FormularioSerializado/>
      <hr />
      <MiUsuario/>

    </>
  )
}

export default App
