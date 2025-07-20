// Componente ppal de la app

import './App.css'
import { AppRouter } from './routing/AppRouter'

// Importo el proveedor del contexto de la información compartida y del estado con el usuario
import { InformacionCompartidaProvider } from './context/InformacionCompartida';
import { UsuarioProvider } from './context/usuarioContext';

const App = () => {

  // Encapsulo a mi routing con los proveedores de contexto
  return (
    <>
      <UsuarioProvider>
      <InformacionCompartidaProvider>          
        <AppRouter/>
      </InformacionCompartidaProvider>
      </UsuarioProvider>
      
    </>
  )
}

export default App
