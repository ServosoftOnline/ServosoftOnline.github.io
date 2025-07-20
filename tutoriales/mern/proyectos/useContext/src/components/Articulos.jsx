import React, { useContext } from 'react';
import { InformacionCompartida } from '../context/InformacionCompartida';
import { UsuarioContext } from '../context/usuarioContext';

// Componente
export const Articulos = () => {

  // Obtengo la informacion desde los contextos
  const informacionCompartida = useContext(InformacionCompartida); 
  const {usuario} = useContext(UsuarioContext);

  // Renderizo
  return (
    <div className='pagina-web'>
      <h2>Artículos</h2>
      
      {/* Mostará si accede un usuario registrado o sin registrar */}
      {usuario ?
        <p>Accede al inicio el usuario registrado: {usuario}</p>
      :
        <p>Accede al inicio un usuario no registrado</p>       
      }  

      {/* Muestro los articulos separados por comas */}
      <strong>
        Articulos obtenidos desde el contexto: {informacionCompartida.articulos.join(', ')}
      </strong>
      
    </div>
  )
}
