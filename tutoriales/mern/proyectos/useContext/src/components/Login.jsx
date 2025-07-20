// COMPONENTE PARA INTRODUCIR LOGIN DE USUARIO
import React, { useContext } from 'react';
import {UsuarioContext} from '../context/usuarioContext';

// Componente
export const Login = () => {  

  // Obtengo del contexto el estado usuario
  const {usuario, setUsuario} = useContext(UsuarioContext);  
  
  // Obtengo el nombre de usuario, modifico el estado usuario y lo almaceno en localStorage
  const handleSubmit = (e) => {        
    e.preventDefault();
    setUsuario(e.target.usuario.value);
    // localStorage.setItem("usuario", JSON.stringify(e.target.usuario.value));
  }

  // Renderizo
  return (
    <div className='pagina-web'>

      <h2>Página de acceso privado</h2>      

      {/* Formulario */}
      <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="usuario">Introduzca su nombre de usuario: </label>
              <input
                  type='text'
                  id='usuario'
                  name='usuario'                                    
              />
              <input type='submit' value='Aceptar'/>
          </div>
      </form>

    </div>
  )
}
