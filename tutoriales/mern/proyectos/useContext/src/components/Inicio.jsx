import React, { useContext } from 'react';

// Contextos
import { UsuarioContext } from '../context/usuarioContext';

// Componente
export const Inicio = () => {

  // Obtengo del contexto el usuario 
  const {usuario} = useContext(UsuarioContext);   
  
  // Renderizo
  return (
    <div className='pagina-web'>
      <h2>Inicio</h2>
      
      {/* Mostará si accede un usuario registrado o sin registrar */}
      {usuario ?
        <p>Accede al inicio el usuario registrado: {usuario}</p>
      :
        <p>Accede al inicio un usuario no registrado</p>       
      }
      
    </div>
  )
}
