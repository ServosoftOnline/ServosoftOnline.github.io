import Usuario from './Usuario';
import {useState} from 'react';
import FormularioInicioSesion from './FormularioInicioSesion';

const App = () => {
  // useState crea un estado llamado sesion, cambiarEstadoSesion es la funcion que hara en cambio de estado 
  // y el valor por defecto es true 
  const [sesion, cambiarEstadoSesion] = useState(false);

    return (
      sesion === true ?
      <div>
        <Usuario />
        <button onClick = {() => cambiarEstadoSesion(false)}>Cerrar sesión</button>
      </div>      
      :
      <div>
        {/*
          El formulario cambiará el estado de la sesión. Se lo paso añadido como propiedad
          La propiedad cambiarEstadoSesion tendrá como valor la funcion cambiarEstadoSesion
        */}

        <FormularioInicioSesion cambiarEstadoSesion = {cambiarEstadoSesion} />
        <p>No ha iniciado sesión</p>
        {/* <button onClick = {() => cambiarEstadoSesion(true)}>Iniciar sesión</button> */}
      </div>
        
    );
  }

  
export default App;