import Usuario from './Usuario';
import {useState} from 'react';
import FormularioInicioSesion from './FormularioInicioSesion';
import ContadorClass from './ContadorClass';
import ContadorApp from './ContadorApp';

// CSS
import './App.css';

const App = () => {
  // useState crea un estado llamado sesion, cambiarEstadoSesion es la funcion que hara en cambio de estado 
  // y el valor por defecto es true 
  const [sesion, cambiarEstadoSesion] = useState(false);
 
    return (
      <div  className="contenedor">
      {sesion === true ?
      <div>
        <Usuario />
        <button onClick = {() => cambiarEstadoSesion(false)}>Cerrar sesión</button>        
        <ContadorClass aumenta = {5}  disminuye = {3} />
        <ContadorApp aumenta = {4} disminuye = {2} />

      </div>      
      :
      <div>
        {/*
          El formulario cambiará el estado de la sesión. Se lo paso añadido como propiedad
          La propiedad cambiarEstadoSesion tendrá como valor la funcion cambiarEstadoSesion
        */}
        <FormularioInicioSesion cambiarEstadoSesion = {cambiarEstadoSesion} />        
        {/* <button onClick = {() => cambiarEstadoSesion(true)}>Iniciar sesión</button> */}
      </div>
      }
    </div>  
    );
  }

  
export default App;