import Usuario from './Usuario';
import {useState} from 'react';
import FormularioInicioSesion from './FormularioInicioSesion';
import ContadorClass from './ContadorClass';
import ContadorFuncional from './ContadorFuncional';

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
        <ContadorFuncional aumenta = {4} disminuye = {2} />

      </div>      
      :
      <div>
        {/*
          El formulario cambiará el estado de la sesión. Se lo paso añadido como propiedad
          La propiedad cambiarEstadoSesion tendrá como valor la funcion cambiarEstadoSesion
        */}
<<<<<<< HEAD:tutoriales/react/aprenciendo_react/src/componentes/App.js
        <FormularioInicioSesion cambiarEstadoSesion = {cambiarEstadoSesion} />        
=======

        <FormularioInicioSesion cambiarEstadoSesion = {cambiarEstadoSesion} />
        <p>No ha iniciado sesión.</p>
        <p> Para entrar: usuario: oscar  y contraseña: 1234</p>
>>>>>>> fc19c71f4958fe7e86712e2b71fc407003a4839e:tutoriales/react/aprendiendo_react/src/componentes/App.js
        {/* <button onClick = {() => cambiarEstadoSesion(true)}>Iniciar sesión</button> */}
      </div>
      }
    </div>  
    );
  }

  
export default App;