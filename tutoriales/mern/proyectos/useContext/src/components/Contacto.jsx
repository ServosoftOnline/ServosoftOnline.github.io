import React from 'react'
import { useContext } from 'react'
import { InformacionCompartida } from '../context/InformacionCompartida';
import { UsuarioContext } from '../context/usuarioContext';

// componente
export const Contacto = () => {

  // Obtengo desde los contextos la información compartida y el usuario
  const informacionCompartida = useContext(InformacionCompartida);
  const {usuario} = useContext(UsuarioContext);
  
  // Renderizo
  return (
    <div className='pagina-web'>
      <h2>Contacto</h2>

      {/* Mostará si accede un usuario registrado o sin registrar */}
      {usuario ?
        <p>Accede al inicio el usuario registrado: {usuario}</p>
      :
        <p>Accede al inicio un usuario no registrado</p>       
      }

      <strong>
        Creador del sitio obtenido desde el contexto: {informacionCompartida.usuario} - {informacionCompartida.telefono}
      </strong>
      
    </div>
  )
}
