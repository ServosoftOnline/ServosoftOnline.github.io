import Usuario from './Usuario';
import {useState} from 'react';
import FormularioInicioSesion from './FormularioInicioSesion';
import ContadorClass from './ContadorClass';
import ContadorFuncional from './ContadorFuncional';

// CSS
import './App.css';
import Boton from '../elementos/boton';

const App = () => {
  // useState crea un estado llamado sesion, cambiarEstadoSesion es la funcion que hara en cambio de estado 
  // y el valor por defecto es true 
  const [sesion, cambiarEstadoSesion] = useState(false);
 
    return (
      <div  className="contenedor">
      {sesion === true ?
      <div>
        <Usuario />
        <Boton marginTop onClick = {() => cambiarEstadoSesion(false)}>Cerrar Sesion</Boton>
        <ContadorClass aumenta = {5}  disminuye = {3} />
        <ContadorFuncional aumenta = {4} disminuye = {2} />
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